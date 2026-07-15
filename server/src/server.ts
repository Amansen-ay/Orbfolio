import app from "./app.js";
import dbConnect from './infrastructure/database/mongoose.js'
import dotenv from 'dotenv';
import dns from 'node:dns'

dns.setServers(["1.1.1.1","8.8.8.8"])

dotenv.config();

const startServer = async (): Promise<void> => {

    try {
        const PORT: string | undefined = process.env.PORT;
        if (!PORT) {
            throw new Error("Port missing;")
        }

        await dbConnect();

        app.listen(PORT, () => {
            console.log(`Server is running on Port ${PORT}`)
        })
    }
    catch (err: unknown) {

        if (err instanceof Error) {
            console.error("Failed to start the server", err.message)
        }
        else {
            console.error("failed to start the server due to unknown error")
        }

        process.exit(1)
    }

}

startServer();