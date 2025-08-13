import type { NextFunction, Request, Response } from "express";
declare const CreateComment: (req: Request, res: Response, next: NextFunction) => Promise<void | Response<any, Record<string, any>>>;
declare const getComment: (req: Request, res: Response, next: NextFunction) => Promise<void | Response<any, Record<string, any>>>;
export { CreateComment, getComment };
//# sourceMappingURL=Comment.d.ts.map