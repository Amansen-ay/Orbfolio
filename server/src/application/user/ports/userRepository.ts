import type { User } from "../../../domain/user/user.js";

export interface UserRepository {
    findByEmail(email:string) : Promise<User|null>
    save(user:User) : Promise<User>
};
