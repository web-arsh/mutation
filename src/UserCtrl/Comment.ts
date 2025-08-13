import type { NextFunction, Request, Response } from "express";
import * as z from "zod";
import AppErr from "../libs/AppErr.js";
import bcrypt from "bcrypt";
import { CommentModel, UserModel } from "../userSchema/User.js";

const CreateComment = async (req: Request,res: Response,next: NextFunction) => {
    
    try {
        
        const Comment = z.object({
            message: z.string(),
            id: z.string()
        });

        const {success,data,error} = await Comment.safeParseAsync(req.body);
        
        //error catch
        if(!success){
            throw new AppErr(JSON.parse(error.message)[0].message,400);
        }
        const {message,id} = data;

        //create comment 
        const comment = await CommentModel.create({message});
        await UserModel.findByIdAndUpdate(id,{
            $push: {comment: comment._id}
        });

        return res.json("Comment Created");
    } catch (err) {
        
        let message:string = "An unknown error is occured!";

        if(err instanceof Error){
            message = err.message;
        }
        return next(new AppErr(message,500));
    }
}

const getComment = async (req: Request, res: Response,next: NextFunction) => {
    try {
        const id = req.params.id;
        const comment = await CommentModel.findById(id);

        return res.json(comment);
    } catch (err) {
        let message = "An unknow error is occured!";
        if(err instanceof Error){
            message = err.message;
        }

        return next(new AppErr(message,500));
    }
}

export {CreateComment,getComment}