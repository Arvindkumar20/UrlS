import express from "express";
const router =express.Router()

import { 
    handleUserget,
    handleUserPost,
    handleUserDelete,
    handleUserPatch 
} from '../controllers/controllers.user.js'

router.route('/')
.get(handleUserget)
.post(handleUserPost)
.patch(handleUserPatch)
.delete(handleUserDelete);


export {
    router
}