export interface LoginOutput {
    token:string,
    user:{
        id:string,
        firstName:string,
        lastName:string,
        email:string
    }
}