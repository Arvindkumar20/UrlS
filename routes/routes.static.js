import express from 'express'
import { routeUserHome } from '../controllers/controllers.home.js';
const  staticRouter =express.Router();
staticRouter.get('/',routeUserHome)

export {
    staticRouter
}