import type {UserRepository} from './ports/userRepository.js';
import type {PasswordHasher} from './ports/passwordHasher.js';
import type {TokenProvider} from './ports/tokenProvider.js';
import type {LoginInput} from './loginInput.js';
import type {LoginOutput} from './loginOutput.js';

class LoginUser {
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

    async execute(input:LoginInput):Promise<LoginOutput>{

        const existingUser = await this.userRepository.findByEmail(input.email);

        if(!existingUser){
            throw new Error("Invalid email or password!")
        }

        const isMatched =  await this.passwordHasher.compare(input.password,existingUser.passwordHash);

        if(!isMatched){
            throw new Error("Invalid email or password!");
        }
        const token = this.tokenProvider.generateToken({email:existingUser.email,userId:existingUser.id});

        return {
            token:token,
            user:{
                id:existingUser.id,
                firstName:existingUser.firstName,
                lastName:existingUser.lastName,
                email:existingUser.email
            }
        }

    }

}