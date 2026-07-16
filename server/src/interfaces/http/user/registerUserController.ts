import { Request, Response } from 'express';
import { RegisterUser } from '../../../application/user/registerUser.js';
import type { RegisterUserInput } from '../../../application/user/registerUserInput.js';
import MongooseUserRepository from '../../../infrastructure/persistence/mongoose/mongooseUserRepository.js';
import BcryptPasswordHasher from '../../../infrastructure/security/bcryptPasswordHasher.js';

const repo = new MongooseUserRepository();
const hasher = new BcryptPasswordHasher();
const registerUser = new RegisterUser(repo, hasher);

const createUser = async (req: Request<{}, {}, RegisterUserInput>, res: Response): Promise<void> => {
    try {
        const output = await registerUser.execute(req.body)
        res.status(201).json(output)
    }
    catch (err: unknown) {
        if (err instanceof Error) {
            res.status(400).json({
                message: err.message
            })
        }
        else {
            res.status(400).json({
                message: "Unknown error"
            })
        }
    }

}

export default createUser;