import type { UserRepository } from '../../../../application/user/ports/userRepository.js';
import type { User } from "../../../../domain/user/user.js";
import { UserModel } from './userModel.js';

export default class MongooseUserRepository implements UserRepository {
    async findByEmail(email: string): Promise<User | null> {
        const existingUser = await UserModel.findOne({ email })
        if (existingUser) {
            return {
                id: existingUser.id,
                firstName: existingUser.firstName,
                lastName: existingUser.lastName,
                email: existingUser.email,
                passwordHash: existingUser.passwordHash,
                username: existingUser.username,
                displayName: existingUser.displayName,
                bio: existingUser.bio,
                avatar: existingUser.avatar,
                country: existingUser.country,
                state: existingUser.state,
                dateOfBirth: existingUser.dateOfBirth,
                createdAt: existingUser.createdAt,
                updatedAt: existingUser.updatedAt
            }
        }
        return null

    }
    async save(user: User): Promise<User> {
        const savedUser = await UserModel.create(user);
        return {
            id: savedUser.id,
            firstName: savedUser.firstName,
            lastName: savedUser.lastName,
            email: savedUser.email,
            passwordHash: savedUser.passwordHash,
            username: savedUser.username,
            displayName: savedUser.displayName,
            bio: savedUser.bio,
            avatar: savedUser.avatar,
            country: savedUser.country,
            state: savedUser.state,
            dateOfBirth: savedUser.dateOfBirth,
            createdAt: savedUser.createdAt,
            updatedAt: savedUser.updatedAt
        }
    }
    async findById(Id: string): Promise<User | null> {
        const user = await UserModel.findById(Id);

        if (!user) {
            return null;
        }

        return {
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            passwordHash: user.passwordHash,
            username: user.username,
            displayName: user.displayName,
            bio: user.bio,
            avatar: user.avatar,
            country: user.country,
            state: user.state,
            dateOfBirth: user.dateOfBirth,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt,
        };
    }
    async update(user: User): Promise<User> {

        const updatedUser = await UserModel.findByIdAndUpdate(user.id, user, { new: true });
        if (!updatedUser) {
            throw new Error("user not found")
        }
        return {
            id: updatedUser.id,
            firstName: updatedUser.firstName,
            lastName: updatedUser.lastName,
            email: updatedUser.email,
            passwordHash: updatedUser.passwordHash,
            username: updatedUser.username,
            displayName: updatedUser.displayName,
            bio: updatedUser.bio,
            avatar: updatedUser.avatar,
            country: updatedUser.country,
            state: updatedUser.state,
            dateOfBirth: updatedUser.dateOfBirth,
            createdAt: updatedUser.createdAt,
            updatedAt: updatedUser.updatedAt,
        };

    }
    async findByUsername(username: string): Promise<User | null> {
        const user = await UserModel.findOne({ username });

        if (!user) {
            return null
        }

        return {
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            passwordHash: user.passwordHash,
            username: user.username,
            displayName: user.displayName,
            bio: user.bio,
            avatar: user.avatar,
            country: user.country,
            state: user.state,
            dateOfBirth: user.dateOfBirth,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt,
        }
    }
}