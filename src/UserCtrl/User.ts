import type { NextFunction, Request, Response } from "express";
// import * as z from "zod";
import AppErr from "../libs/AppErr.js";


const CreateUser:Function = (req: Request,res: Response,next: NextFunction) => {
    try {
        
    } catch (err) {
        let message:string = "An unknown error is occured!";

        if(err instanceof Error){
            message = err.message;
        }
        return next(new AppErr(message,500));
    }
}