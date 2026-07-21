import { Request, Response } from 'express';
import { getpublicUser } from '../../../compositions/user/userComposition.js';

interface GetPublicUserParams {
    username: string;
}

const getPublicUserController = async (req: Request<GetPublicUserParams>, res: Response): Promise<void> => {
    try {
        const { username } = req.params;

        if (!username) {
            res.status(400).json({
                message: "Username is required",
            });
            return;
            
        }

        const profile = await getpublicUser.execute(username);
        res.json(profile)
    }
    catch (err: unknown) {
        if (err instanceof Error) {
            res.status(400).json({
                message: err.message
            })
        }
        else {
            res.status(400).json({
                message: "unknown error"
            })
        }
    }


}

export default getPublicUserController