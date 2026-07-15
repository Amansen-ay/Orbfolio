import mongoose from "mongoose";

interface UserDocument {
    firstName: string;
    lastName: string;
    email: string;
    passwordHash: string;
    createdAt: Date;
    updatedAt: Date;
}

export const userSchema = new mongoose.Schema<UserDocument>(
    {
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
        }

    },
    {
        timestamps: true
    }
)

export const UserModel = mongoose.model<UserDocument>("User",userSchema);

