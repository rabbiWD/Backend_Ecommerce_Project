import mongoose from "mongoose";
import 'dotenv/config'
import { MONGO_URL, PORT } from "./src/config/config.js";
import app from "./app.js";


mongoose.connect(MONGO_URL).then (()=>{
    console.log("Database Connected");
})
.catch((err)=>{
    console.log("Database Connection Error", err);
})

app.listen(PORT,()=>{
    console.log(`Server started at ${PORT}`);
})