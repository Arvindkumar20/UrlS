import { getUser } from "../service/auth.js";
export const ristrictLoggedInUserOnly=async(req,res,next)=>{
    const userUid=req.cookies?.uid;
    if(!userUid){
        return res.redirect('/login');

    }


    const user=await getUser(userUid);
    if(!user){
        return res.redirect('/login');
    }
    req.user=user;
    next();

}
export const checkAuth=async(req,res,next)=>{
    const userUid=req.cookies?.uid;
    const user=await getUser(userUid);
    req.user=user;
    next();

}