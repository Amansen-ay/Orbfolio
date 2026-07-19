export interface User{
    id:string,
    firstName:string,
    lastName:string,
    email:string,
    passwordHash:string,
    username?:string,
    displayName?:string,
    bio?:string,
    avatar?:string,
    country?:string,
    state?:string,
    dateOfBirth?:Date,
    createdAt: Date,
    updatedAt:Date
}