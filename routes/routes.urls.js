import express from "express";
const urlRouter=express.Router();
import {
    handleUrlget,
    handleUrlGetShortId,
    handleUrlPost,
    handleUrlGetAnalitics,
    handleUrlDelete,

} from '../controllers/controllers.url.js'
urlRouter.route('/')
.get(handleUrlget)
.post(handleUrlPost)
// .patch(handleUrlDelete)

urlRouter.post('/:id',handleUrlDelete)
urlRouter.get('/:shortId',handleUrlGetShortId)
urlRouter.get('/analytics/:shortId',handleUrlGetAnalitics)

export {
    urlRouter,
}