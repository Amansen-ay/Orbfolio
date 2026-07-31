import { Request, Response,NextFunction } from 'express';
import { LoginInput } from '../../../application/user/loginInput.js';
import {loginUser} from '../../../compositions/user/userComposition.js'




const loginUserController = async (req: Request<{}, {}, LoginInput>, res: Response,next:NextFunction): Promise<void> => {

    try {
        const output = await loginUser.execute(req.body);
        res.json(output)
    }
    catch(err:unknown){
        next(err)
    }
}

export default  loginUserController