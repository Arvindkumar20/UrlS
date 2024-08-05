import mongoose, { model } from "mongoose";

const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
      
    

                },
    email:{
        type:String,
        required:true,
       
        unique:true,
  
            },
            password:{
                type:String,
                required:true,
     
           
                    },                         
},{
    timestamps:true
    
})
export const UserModel=model("user",userSchema);
