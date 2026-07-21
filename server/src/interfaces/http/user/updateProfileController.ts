import {updateProfile} from '../../../compositions/user/userComposition.js';
import {Request,Response} from 'express';


const UpdateProfileController = async (req:Request,res:Response):Promise<void> => {
    try{
        const updateUser = await updateProfile.execute({ ...req.body,userId:req.user.userId});
        res.json(updateUser);
    }
    catch(err:unknown) {
        if(err instanceof Error) {
            res.status(400).json({
                message:err.message
            })
        }
    }
}
export default UpdateProfileController