import mongoose from "mongoose";
const urlSchema=mongoose.Schema({
    redirectUrl:{
        type:String,
        required:true
        },
      shortId:{
            type:String,
            required:true,
            unique:true
            },
    totalClicks:{
                type:Number,
                default:0
                },
        date:{
                    type:Date,
                    default:Date.now
                    },
        visitHistory:[
            {
                timestamp:{
                    type:Number,
                }
            }
        ],
        createdBy:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
            required:true
            
        }
                    },{timestamps:true});
                    
                   export const urlModel=mongoose.model("url",urlSchema);
          