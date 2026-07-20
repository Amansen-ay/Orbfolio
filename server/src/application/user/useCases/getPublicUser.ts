import { UserRepository } from '../ports/userRepository.js';
import type { PublicUser} from '../publicUser.js';

export class GetPublicUser {
    private userRepository: UserRepository;

    constructor(
        userRepository: UserRepository
    ) {
        this.userRepository = userRepository
    }
    async execute(username: string): Promise<PublicUser> {
        const user = await this.userRepository.findByUsername(username);
        if(!user){
            throw new Error("User not found")
        }

        return {
            firstName: user.firstName,
            lastName: user.lastName,
            username: user.username,
            displayName: user.displayName,
            bio: user.bio,
            avatar: user.avatar,
            country: user.country,
            state: user.state,
            dateOfBirth: user.dateOfBirth,
        }
    }
} 