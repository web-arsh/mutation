import type { Request, Response } from "express";
import type AppErr from "../libs/AppErr.js";

const globalError = (err: AppErr,req: Request, res: Response,next: any) => {
    const statusCode = err.statusCode || 300;
    const message = err.message;
    const stack = err.stack;
    const cause = err.cause;
    return res.status(statusCode).json({
        cause,
        message,
        stack,
    });
}

export {globalError}