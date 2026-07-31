import { tokenProvider } from '../../../compositions/user/userComposition.js';
import { RequestHandler } from "express";
import { AppError } from '../../../application/errors/AppError.js';

export const authMiddleware: RequestHandler = (req, res, next): void => {


    const authHeader = req.headers.authorization;

    if (!authHeader) {
        next(new AppError("Authorization header is missing!", 401))
        return
    }

    const [bearer, token] = authHeader.split(" ");

    if (bearer !== "Bearer" || !token) {
        next(new AppError("Invalid authorization header", 401))
        return
    }

    try {
        const payload = tokenProvider.verifyToken(token);

        req.user = payload;

        next()
    }
    catch {
        next(new AppError("Invalid or expired session!", 401))
    }

}