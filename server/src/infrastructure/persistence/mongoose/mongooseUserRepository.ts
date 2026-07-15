import type {UserRepository} from '../../../application/user/ports/userRepository.js';
import type { User } from "../../../domain/user/user.js";
import {UserModel} from './userModel.js';

export default class MongooseUserRepository implements UserRepository {
    async findByEmail(email:string):Promise<User|null>{
        const existingUser = await UserModel.findOne({email})
        if(existingUser) {
             return {
            id:existingUser.id,
            firstName:existingUser.firstName,
            lastName:existingUser.lastName,
            email:existingUser.email,
            passwordHash:existingUser.passwordHash,
            createdAt:existingUser.createdAt,
            updatedAt:existingUser.updatedAt
        }
        }
        return null
       
    }
    async save(user:User):Promise<User>{
        const savedUser =  await UserModel.create(user);
        return {
            id:savedUser.id,
            firstName:savedUser.firstName,
            lastName:savedUser.lastName,
            email:savedUser.email,
            passwordHash:savedUser.passwordHash,
            createdAt:savedUser.createdAt,
            updatedAt:savedUser.updatedAt
        }
    }
}