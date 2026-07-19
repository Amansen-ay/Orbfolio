import {LoginInput} from '../loginInput.js';

export type payloadType =  {
    email:string,
    userId:string

}
export interface TokenProvider{
    generateToken(payload:payloadType):string;
    verifyToken(token:string):payloadType;
}