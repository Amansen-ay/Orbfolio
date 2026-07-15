import mongoose from 'mongoose';

const dbConnect = async (): Promise<void> => {
    const mongoUri: string | undefined = process.env.MONGODB_URI;

    if (!mongoUri) {
        throw new Error("MongoDb uri is missing")
    }

    await mongoose.connect(mongoUri);
    console.log("database connected!")
}

export default dbConnect;