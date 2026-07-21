import {Request,Response} from 'express';
import {getCurrentUser} from '../../../compositions/user/userComposition.js';;

const  getCurrentUserController = async (req:Request,res:Response):Promise<void> => {

    try{
        const user = await getCurrentUser.execute(req.user.userId)
        res.json(user)
    }
    catch(err:unknown){
        if(err instanceof Error) {
            res.status(500).json({
                message:err.message
            })
        }
        else{
            res.status(500).json({
                message:"Unknown error"
            })
        }
    }
}

export default getCurrentUserController;