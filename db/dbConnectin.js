import mongoose from "mongoose";
export const dbConnection=async(uri)=>{
   await mongoose.connect(uri)
        .then(db=>console.log('DB is connected'+db))
        .catch(e=>{
            console.log("connection error => "+e)

        })


}