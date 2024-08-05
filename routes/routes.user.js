import express from "express";
const userRouter =express.Router()

import { 
    handleUserLogin,
    handleUserSignUp,
    handleUserDelete,
    handleUserget,
    handleUserPatch 
} from '../controllers/controllers.user.js'

userRouter.route('/')
.get(handleUserget)
.post(handleUserSignUp)
userRouter.post('/login',handleUserLogin)
userRouter.patch('/:_id',handleUserPatch)


userRouter.delete('/:_id',handleUserDelete);


export {
    userRouter
}