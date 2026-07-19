import jwt from 'jsonwebtoken';
import type { TokenProvider } from '../../application/user/ports/tokenProvider.js';
import type { payloadType } from '../../application/user/ports/tokenProvider.js';



export class JwtTokenProvider implements TokenProvider {


    generateToken(payload: payloadType): string {
        const secretKey = process.env.SECRET_KEY;

        if (!secretKey) {
            throw new Error("Secret key is missing!")
        }

        return jwt.sign(payload, secretKey);
    }
    verifyToken(token: string): payloadType {
        const secretKey = process.env.SECRET_KEY;

        if (!secretKey) {
            throw new Error("Secret key is missing!")
        }
        const payload = jwt.verify(token, secretKey);

        if (typeof payload === "string") {
            throw new Error("Invalid token payload");
        }

        return payload as payloadType;
    }
}