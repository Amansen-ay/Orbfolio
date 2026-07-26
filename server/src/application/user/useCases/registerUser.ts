import type { RegisterUserInput } from '../registerUserInput.js';
import type { PasswordHasher } from '../ports/passwordHasher.js';
import type { UserRepository } from '../ports/userRepository.js';
import type { User } from "../../../domain/user/user.js";
import type { RegisterUserOutput } from "../registerUserOutput.js";
import { TokenProvider } from '../ports/tokenProvider.js';
import { randomUUID } from "node:crypto";

export class RegisterUser {
    private readonly userRepository: UserRepository;
    private readonly passwordHasher: PasswordHasher;
    private readonly tokenProvider: TokenProvider;

    constructor(
        userRepository: UserRepository,
        passwordHasher: PasswordHasher,
        tokenProvider: TokenProvider
    ) {
        this.userRepository = userRepository;
        this.passwordHasher = passwordHasher;
        this.tokenProvider = tokenProvider;
    }
    async execute(input: RegisterUserInput): Promise<RegisterUserOutput> {

        const existingUser = await this.userRepository.findByEmail(input.email);

        if (existingUser) {
            throw new Error("User with this email already exists");
        }

        const passwordHash = await this.passwordHasher.hash(input.password);
        const now = new Date()
        const user: User = {
            id: randomUUID(),
            firstName: input.firstName,
            lastName: input.lastName,
            email: input.email,
            passwordHash: passwordHash,
            createdAt: now,
            updatedAt: now
        };
        await this.userRepository.save(user);
        const token = this.tokenProvider.generateToken({ email: user.email, userId: user.id });
        return {
            token,
            user: {
                id: user.id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                createdAt: user.createdAt
            }

        };
    }
}