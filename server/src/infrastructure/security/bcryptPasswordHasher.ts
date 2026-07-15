import bcrypt from "bcrypt";
import type { PasswordHasher } from "../../application/user/ports/passwordHasher.js";

export default class BcryptPasswordHasher implements PasswordHasher {

    async hash(password: string): Promise<string> {

        const hashedPassword = await bcrypt.hash(password, 10)
        return hashedPassword

    }
}