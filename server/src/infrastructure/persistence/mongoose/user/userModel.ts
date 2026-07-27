import mongoose from "mongoose";

interface UserDocument {
    id:string,
    firstName: string,
    lastName: string,
    email: string,
    passwordHash: string,
    username?:string,
    displayName?:string,
    bio?:string,
    avatar?:string,
    country?:string,
    state?:string,
    dateOfBirth?:Date,
    createdAt: Date,
    updatedAt: Date,
}

export const userSchema = new mongoose.Schema<UserDocument>(
    {
        id:{
            type:String,
            required:true,
            unique:true

        },
        firstName:{
            type:String,
            trim:true,
            required:true
        },
        lastName:{
            type:String,
            trim:true,
            required:true
        },
        email:{
            type:String,
            trim:true,
            required:true,
            unique:true
        },
        passwordHash:{
            type:String,
            required:true
        },
        username:{
            type:String,
            trim:true,
            unique:true,
            sparse:true,
            required:false
        },
        displayName:{
            type:String,
            trim:true
        },
        bio:{
            type:String,
            trim:true
        },
        avatar:{
            type:String,
            trim:true
        },
        country:{
            type:String,
            trim:true
        },
        state:{
            type:String,
            trim:true
        },
        dateOfBirth:{
            type:Date
        }
    },
    {
        timestamps: true,
        id:false
    }
)

export const UserModel = mongoose.model<UserDocument>("User",userSchema);

