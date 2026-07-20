import type { User } from "../../../domain/user/user.js";

export interface UserRepository {
    findByEmail(email:string) : Promise<User|null>
    save(user:User) : Promise<User>;
    findByUsername(username:string):Promise<User|null>;
    update(user:User) :Promise<User>;
    findById(Id:string):Promise<User|null>;

};
