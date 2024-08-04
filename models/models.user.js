import mongoose, { model } from "mongoose";

const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        min:3,
        max:20,

                },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        lowercase:true,
        match:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            },
            password:{
                type:String,
                required:true,
                trim:true,
                min:8,
                max:20,
                    },                         
},{
    timestamps:true
    
})
export const UserModel=model("user",userSchema);
