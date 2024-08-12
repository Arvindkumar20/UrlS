import express from "express";
import 'dotenv/config';
import path from 'path'
import cookieParser  from 'cookie-parser'
const app=express();
import  { userRouter } from "./routes/routes.user.js";
import  { urlRouter } from "./routes/routes.urls.js";
import  { staticRouter } from "./routes/routes.static.js";
import { dbConnection } from "./db/dbConnectin.js";
import {ristrictLoggedInUserOnly} from './middlewares/middlewares.auth.js'
import { urlModel } from "./models/models.url.js";

//data as json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())
app.set('view engine',"ejs")
app.set("views",path.resolve("./view"))

//create coonection to mongo
dbConnection(process.env.MONGO_URI)


//handle routes
app.use('/user',userRouter);
app.use('/url',ristrictLoggedInUserOnly,urlRouter);
app.use('/',staticRouter);

app.post('/url/:id',async(req,res)=>{
        const id=req.params.id
       const url=await urlModel.findOneAndDelete(id);
       console.log(url)
       if(!url){
        return res.status(404).json({message:"url not found"})

       }

       return res.render("home",{urls:await urlModel.find({})}) 
})

//"AdiSaWlV3eiRLoIa" direct to raj
//server listen on port 3000 
app.listen(process.env.PORT,()=>{
        console.log(`Server is running on port ${process.env.PORT}`);
        })
