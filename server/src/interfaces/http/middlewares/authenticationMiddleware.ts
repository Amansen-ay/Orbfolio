import {tokenProvider} from '../../../compositions/user/userComposition.js';
import { RequestHandler } from "express";

export const authMiddleware:RequestHandler = (req,res,next): void => {

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