import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./configs/dbConnection.js";

dotenv.config();
const app = express();

// middleware
app.use(cors({
    origin: process.env.CORS_ORIGIN || "*",
}));
app.use(express.json());
    
// test route
app.get("/ping",(req, res) => {
    res.send("Backend is running guys!");
});

const startserver = async ()=>{
    try {
        await connectDB();
        const port = process.env.PORT || 5000;
        app.listen(port, ()=>{
            console.log(`Server is running at port ${port}`);
        });
    } catch (error) {
        console.log(`Server failed to start: ${error}`);
    }
}

startserver();
