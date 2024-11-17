import express from 'express'
import dotenv from 'dotenv'
import {connectDB} from './db/connecrDB.js'
import {authRoutes} from "./routes/auth.route.js"

dotenv.config();
const app  = express();

const PORT =process.env.Port||5000
app.use(express.json());
app.get("/", (req, res) => {
    res.send("hello dear");
});
app.use("/api/auth",authRoutes);

app.listen(PORT,()=>{
    connectDB()
    console.log("server is running" , PORT);
    
})