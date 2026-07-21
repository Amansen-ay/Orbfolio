import { Request, Response } from 'express';
import { LoginInput } from '../../../application/user/loginInput.js';
import {loginUser} from '../../../compositions/user/userComposition.js'




const loginUserController = async (req: Request<{}, {}, LoginInput>, res: Response): Promise<void> => {

    try {
        const output = await loginUser.execute(req.body);
        res.json(output)
    }
    catch(err:unknown){
        if(err instanceof Error) {
            res.status(400).json({
                message:err.message
            })
        }
        else{
            res.status(400).json({
                message:"Unknown error"
            })
        }
    }
}

export default  loginUserController