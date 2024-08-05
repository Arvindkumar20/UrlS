import { UserModel } from "../models/models.user.js"
import { setUser } from "../service/auth.js";
import { v4 as uuidv4 } from 'uuid';
const handleUserget=async(req,res)=>{
    const users=await UserModel.find({})
    if(!users){
        return res.json({
            message:"No users found",
            status:404

        })

    }
res.json(users)
}

const handleUserSignUp=async(req,res)=>{
    const user=req.body
   
    if(!user){
        return res.status(400).json({
            message:"No user provided",
            status:400
            })

    }
    const us=await  UserModel.create({
        name:user.name,
        email:user.email,
        password:user.password,

    })
   return res.redirect('/');

    }
    const handleUserLogin=async(req,res)=>{
        const {email,password}=req.body
        const user=await UserModel.findOne({email,password})
    if(!user){
        return res.render('login',{
            message:"invalid email or password"
        })
    }
    const sessionId=uuidv4();
setUser(sessionId,user);
res.cookie("uid",sessionId)
return res.redirect('/');
}
    const handleUserPatch=async(req,res)=>{
        const user=req.body
        const {_id}=req.params
        if(!_id || !user){
            return res.status(400).json({
                message:"id and user are equired"})
        }
        await UserModel.findOneAndUpdate({_id},{
            name:user.name,
            email:user.email,
            password:user.password,

        })
       return  res.json({
           
            message:"update successfully"
        })
        }
        const handleUserDelete=async(req,res)=>{
            const {_id}=req.params
            if(!_id){
                return res.status(400).json({
                    message:"id is required"
                    })
                    }

                    await UserModel.findOneAndDelete({_id})



           return res.json({
               
                message:"deleted successfully"
            })
            }
        

export {
    handleUserget,
    handleUserLogin,
    handleUserSignUp,
    handleUserPatch,
    handleUserDelete,

}