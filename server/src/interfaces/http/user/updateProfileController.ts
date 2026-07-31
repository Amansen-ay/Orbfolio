import { updateProfile } from '../../../compositions/user/userComposition.js';
import { Request, Response, NextFunction } from 'express';
import { uploadAvatar } from '../../../infrastructure/storage/cloudinary.js';


const UpdateProfileController = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        let avatarUrl: string | undefined;


        if (req.file) {
            avatarUrl = await uploadAvatar(req.file.buffer);
        }



        const updateUser = await updateProfile.execute({ ...req.body, userId: req.user.userId, avatar: avatarUrl });
        res.json(updateUser);
    }
    catch (err: unknown) {
        next(err)
    }
}
export default UpdateProfileController