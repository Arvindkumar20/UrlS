import express from "express";
const userRouter =express.Router()

import { 
    handleUserget,
    handleUserPost,
    handleUserDelete,
    handleUserPatch 
} from '../controllers/controllers.user.js'

userRouter.route('/')
.get(handleUserget)
.post(handleUserPost)
.patch(handleUserPatch)
.delete(handleUserDelete);


export {
    userRouter
}