import express from "express"
import dotenv from "dotenv";
import { connectDB } from "./db.js";
import cors from "cors";
import { userRouter } from "./Router/user.js";
import { notesRouter } from "./Router/notes.js";


dotenv.config()

const PORT = process.env.PORT

const app = express()

app.use(express.json())
app.use(cors())

connectDB()

//initializing the router 
app.use("/app/user", userRouter);
app.use("/app/notes", notesRouter);

app.listen(PORT,()=> console.log(`server is running ${PORT}`))