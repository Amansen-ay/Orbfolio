import { updateProfile } from '../../../compositions/user/userComposition.js';
import { Request, Response } from 'express';
import {uploadAvatar} from '../../../infrastructure/storage/cloudinary.js';


const UpdateProfileController = async (req: Request, res: Response): Promise<void> => {
    try {
        let avatarUrl: string | undefined;

        // If this request contains an avatar file,
        // upload it to Cloudinary first
        if (req.file) {
            avatarUrl = await uploadAvatar(req.file.buffer);
        }

        

        const updateUser = await updateProfile.execute({ ...req.body, userId: req.user.userId,avatar:avatarUrl });
        res.json(updateUser);
    }
    catch (err: unknown) {
        if (err instanceof Error) {
            res.status(400).json({
                message: err.message
            })
        }
    }
}
export default UpdateProfileController