import { UserRepository } from '../ports/userRepository.js';
import { updateProfileOutput } from '../updateProfileOutput.js';

type getCurrentUserOutput = Pick<updateProfileOutput, "avatar" | "bio" | "country" | "dateOfBirth" | "displayName" | "email" | "firstName" | "lastName" | "state" | "username">

export class GetCurrentUser {
    private userRepository: UserRepository;
    constructor(
        userRepository: UserRepository
    ) {
        this.userRepository = userRepository;
    }
    async execute(userId: string): Promise<getCurrentUserOutput> {
        const user = await this.userRepository.findById(userId);
        if (!user) {
            throw new Error("User not found")
        }
        return {
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            username: user.username,
            displayName: user.displayName,
            bio: user.bio,
            avatar: user.avatar,
            country: user.country,
            state: user.state,
            dateOfBirth: user.dateOfBirth
        }
    }
}