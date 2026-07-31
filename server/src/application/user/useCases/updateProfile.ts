import { UserRepository } from '../ports/userRepository.js';
import type { UpdateProfileInput } from '../updateProfileInput.js';
import type { User } from '../../../domain/user/user.js';
import { MAX_DISPLAY_NAME_LENGTH, MAX_BIO_LENGTH, MIN_USERNAME_LENGTH, MAX_USERNAME_LENGTH } from '../../../domain/user/userConstants.js';
import { updateProfileOutput } from '../updateProfileOutput.js';
import {AppError} from '../../errors/AppError.js';


export class UpdateProfile {
    private userRepository: UserRepository;

    constructor(
        userRepository: UserRepository
    ) {
        this.userRepository = userRepository
    }

    async execute(input: UpdateProfileInput): Promise<updateProfileOutput> {

        if (input.username !== undefined && (input.username.length > MAX_USERNAME_LENGTH || input.username.length < MIN_USERNAME_LENGTH)) {
            throw new AppError("username should atleast be 3 to 30 character long.",400)
        }

        if (input.displayName !== undefined && input.displayName.length > MAX_DISPLAY_NAME_LENGTH) {
            throw new AppError("Display name cannot exceed 50 characters.",400);
        }
        if (input.bio !== undefined && input.bio.length > MAX_BIO_LENGTH) {
            throw new AppError("Bio cannot exceed 160 characters.",400)
        }

        if (input.username !== undefined) {
            const userWithUsername = await this.userRepository.findByUsername(input.username);
            if (userWithUsername && userWithUsername.id !== input.userId) {
                throw new AppError("Username already taken!",409);
            }
        }
        if (input.username && !/^[a-zA-Z0-9_]+$/.test(input.username)) {
            throw new AppError(
                "Username can only contain letters, numbers, and underscores",400
            );
        }

        const user = await this.userRepository.findById(input.userId);

        if (!user) {
            throw new AppError("User not found",404)
        }

        if (input.username !== undefined) {
            user.username = input.username.trim().toLowerCase();
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