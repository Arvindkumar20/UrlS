import express from "express";
import 'dotenv/config';
const app=express();
import  { router } from "./routes/routes.user.js";

//data as json
app.use(express.json());

//handle routes
app.use('/user',router);

//server listen on port 3000
app.listen(process.env.PORT,()=>{
        console.log(`Server is running on port ${process.env.PORT}`);
        })
