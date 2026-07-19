import type {payloadType} from '../application/user/ports/tokenProvider.ts';

declare global {
    namespace Express {
        interface Request {
            user: payloadType;
        }
    }
}