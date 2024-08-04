import express from "express";
import 'dotenv/config';
const app=express();
import  { userRouter } from "./routes/routes.user.js";
import  { urlRouter } from "./routes/routes.urls.js";
import { dbConnection } from "./db/dbConnectin.js";
import { urlModel } from "./models/models.url.js";

//data as json
app.use(express.json());

//create coonection to mongo
dbConnection(process.env.MONGO_URI)


//handle routes
app.use('/user',userRouter);
app.use('/url',urlRouter);
app.get('/urls',async(req,res)=>{
const urls=await urlModel.find({})
return res.end(`
        <html>
        <body>  
        <ol>     
        ${urls.map(e=>`<li key=${e._id}>${e.shortId}  ${e.redirectUrl}</li>`).join(" ")}
        </ol>
        </body>  
          </html>
        `)
        
})

//"AdiSaWlV3eiRLoIa" direct to raj
//server listen on port 3000 
app.listen(process.env.PORT,()=>{
        console.log(`Server is running on port ${process.env.PORT}`);
        })
