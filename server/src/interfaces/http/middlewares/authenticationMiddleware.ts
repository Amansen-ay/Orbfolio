import { Request, Response,NextFunction } from 'express';
import {tokenProvider} from '../../../compositions/user/userComposition.js';

export const authMiddleware = (req: Request, res: Response,next:NextFunction): void => {

    const authHeader = req.headers.authorization;

    if (!authHeader) {
        throw new Error("Invalid authorization header")
    }

    const [bearer,token] = authHeader.split(" ");

    if(bearer!=="Bearer"){
        throw new Error("Invalid authorization header")
    }
    if(!token){
        throw new Error("Invalid authorization header")
    }

    const payload = tokenProvider.verifyToken(token);

    req.user = payload;
    
    next()

}