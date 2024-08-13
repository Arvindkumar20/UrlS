import { urlModel } from "../models/models.url.js";
import { UserModel } from "../models/models.user.js";
 const routeUserHome=async(req,res)=>{
    if(!req.user){
        return res.redirect('/login');
    }
        const urls=await urlModel.find({createdBy:req.user._id});
        return res.render('home',{
                urls:urls
        })
                
        }
        const routeUserSignUp=(req,res)=>{
            res.render('signup')
        }
        const routeUserLogin=(req,res)=>{
            res.render('login')
        }
        export {
            routeUserHome,
            routeUserSignUp,
            routeUserLogin,
        }