import { Request, Response } from 'express';
import type { RegisterUserInput } from '../../../application/user/registerUserInput.js';
import {registerUser} from '../../../compositions/user/userComposition.js';


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