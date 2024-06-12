import mongoose from "mongoose";


export function connectDB(){
    try {
        mongoose.connect(process.env.MONGO_URL)
        console.log("Database is connect")
    } catch (error) {
        console.log("Database connection is failed")
    }
}
