import express from 'express'
import {
     routeUserHome,
    routeUserSignUp ,
    routeUserLogin
} from '../controllers/controllers.home.js';

const  staticRouter =express.Router();
staticRouter.get('/',routeUserHome)
staticRouter.get('/signup',routeUserSignUp)
staticRouter.get('/login',routeUserLogin)

export {
    staticRouter,
    routeUserLogin
}