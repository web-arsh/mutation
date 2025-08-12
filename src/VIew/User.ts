import express from "express";
import { CreateUser } from "../UserCtrl/User.js";

const userRoute = express.Router();

userRoute.post("/login",CreateUser);


export {userRoute}