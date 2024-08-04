import { urlModel } from "../models/models.url.js";
 const routeUserHome=async(req,res)=>{
        const urls=await urlModel.find({})
        return res.render('home',{
                urls:urls
        })
                
        }
        export {
            routeUserHome
        }