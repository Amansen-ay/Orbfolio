import { UserRepository } from './ports/userRepository.js';
import type { UpdateProfileInput } from './updateProfileInput.js';
import type { User } from '../../domain/user/user.js';
import { MAX_DISPLAY_NAME_LENGTH, MAX_BIO_LENGTH, MIN_USERNAME_LENGTH, MAX_USERNAME_LENGTH } from '../../domain/user/userConstants.js';
import {PublicUser} from './publicUser.js';


export class UpdateProfile {
    private userRepository: UserRepository;

    constructor(
        userRepository: UserRepository
    ) {
        this.userRepository = userRepository
    }

    async execute(input: UpdateProfileInput): Promise<PublicUser> {

        if (input.username !== undefined && (input.username.length > MAX_USERNAME_LENGTH || input.username.length < MIN_USERNAME_LENGTH)) {
            throw new Error("username should atleast be 3 to 30 character long.")
        }

        if (input.displayName !== undefined && input.displayName.length > MAX_DISPLAY_NAME_LENGTH) {
            throw new Error("Display name cannot exceed 50 characters.");
        }
        if (input.bio !== undefined && input.bio.length > MAX_BIO_LENGTH) {
            throw new Error("Bio cannot exceed 160 characters.")
        }

        if (input.username !== undefined) {
            const userWithUsername = await this.userRepository.findByUsername(input.username);
            if (userWithUsername?.id !== input.userId) {
                throw new Error("Username already taken!")
            }
        }

        const user = await this.userRepository.findById(input.userId);

        if (!user) {
            throw new Error("User not found")
        }

        if (input.username !== undefined) {
            user.username = input.username;
        }
        if (input.displayName !== undefined) {
            user.displayName = input.displayName
        }
        if (input.bio !== undefined) {
            user.bio = input.bio
        }
        if (input.avatar !== undefined) {
            user.avatar = input.avatar
        }
        if (input.country !== undefined) {
            user.country = input.country
        }
        if (input.state !== undefined) {
            user.state = input.state
        }
        if (input.dateOfBirth !== undefined) {
            user.dateOfBirth = input.dateOfBirth
        }
        const now = new Date()
        user.updatedAt = now;

        const updatedUser = await this.userRepository.update(user);

        return {
            id: updatedUser.id,
            firstName: updatedUser.firstName,
            lastName: updatedUser.lastName,
            email: updatedUser.email,
            username: updatedUser.username,
            displayName: updatedUser.displayName,
            bio: updatedUser.bio,
            avatar: updatedUser.avatar,
            country: updatedUser.country,
            state: updatedUser.state,
            dateOfBirth: updatedUser.dateOfBirth,
            createdAt: updatedUser.createdAt,
            updatedAt: updatedUser.updatedAt
        }

    }
}