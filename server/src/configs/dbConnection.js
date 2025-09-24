import mongoose from "mongoose";
import {DB_NAME} from "../constants.js"

export const connectDB = async ()=>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`Successful connection to db ${connectionInstance.connection.host}`);
        
    } catch (error) {
        console.log("DB connection failed: ", error);
        process.exit(1);    // Exit the process if DB doesnt connect
    }
}