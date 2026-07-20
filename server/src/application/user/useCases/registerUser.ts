import type { RegisterUserInput } from '../registerUserInput.js';
import type { PasswordHasher } from '../ports/passwordHasher.js';
import type { UserRepository } from '../ports/userRepository.js';
import type { User } from "../../../domain/user/user.js";
import type { RegisterUserOutput } from "../registerUserOutput.js";
import { randomUUID } from "node:crypto";

export class RegisterUser {
    private readonly userRepository: UserRepository;
    private readonly passwordHasher: PasswordHasher;

    constructor(
        userRepository: UserRepository,
        passwordHasher: PasswordHasher
    ) {
        this.userRepository = userRepository;
        this.passwordHasher = passwordHasher;
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
        return {
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            createdAt: user.createdAt
        };
    }
}