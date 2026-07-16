import { Request, Response } from 'express';
import MongooseUserRepository from '../../../infrastructure/persistence/mongoose/mongooseUserRepository.js';
import BcryptPasswordHasher from '../../../infrastructure/security/bcryptPasswordHasher.js';
import { JwtTokenProvider } from '../../../infrastructure/security/jwtTokenProvider.js';
import { LoginInput } from '../../../application/user/loginInput.js';
import { LoginUser } from '../../../application/user/loginUser.js';

const repo = new MongooseUserRepository();
const hasher = new BcryptPasswordHasher();
const tokenProvider = new JwtTokenProvider();
const loginUser = new LoginUser(repo, hasher, tokenProvider);

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