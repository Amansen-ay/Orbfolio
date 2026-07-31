import type {UserRepository} from '../ports/userRepository.js';
import type {PasswordHasher} from '../ports/passwordHasher.js';
import type {TokenProvider} from '../ports/tokenProvider.js';
import type {LoginInput} from '../loginInput.js';
import type {LoginOutput} from '../loginOutput.js';
import {AppError} from '../../errors/AppError.js';

export class LoginUser {
    private  userRepository:UserRepository;
    private  passwordHasher: PasswordHasher;
    private  tokenProvider : TokenProvider;

    constructor(
        userRepository:UserRepository,
        passwordHasher:PasswordHasher,
        tokenProvider:TokenProvider
    ){
        this.userRepository = userRepository;
        this.passwordHasher = passwordHasher;
        this.tokenProvider = tokenProvider;
    }

    async execute(input: LoginInput): Promise<LoginOutput> {

    const email = input.email?.trim().toLowerCase();
    const password = input.password;

    if (!email || !password) {
        throw new AppError("Email and password are required.", 400);
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        throw new AppError("Please enter a valid email address.", 400);
    }

    const existingUser = await this.userRepository.findByEmail(email);

    if (!existingUser) {
        throw new AppError("Invalid email or password!", 401);
    }

    const isMatched = await this.passwordHasher.compare(
        password,
        existingUser.passwordHash
    );

    if (!isMatched) {
        throw new AppError("Invalid email or password!", 401);
    }

    const token = this.tokenProvider.generateToken({
        email: existingUser.email,
        userId: existingUser.id
    });

    return {
        token,
        user: {
            id: existingUser.id,
            firstName: existingUser.firstName,
            lastName: existingUser.lastName,
            email: existingUser.email
        }
    };
}

}