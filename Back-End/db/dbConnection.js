import mongoose from "mongoose";

export async function connectDB(uri) {
    try {
        await mongoose.connect(uri)
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.log(`MongoDb connection Error, message: ${error}`);
        process.exit(1)
    }
}