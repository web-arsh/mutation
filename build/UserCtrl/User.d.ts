import type { NextFunction, Request, Response } from "express";
declare const CreateUser: (req: Request, res: Response, next: NextFunction) => Promise<void | Response<any, Record<string, any>>>;
declare const showUser: (req: Request, res: Response, next: NextFunction) => Promise<void | Response<any, Record<string, any>>>;
declare const singleUser: (req: Request, res: Response, next: NextFunction) => Promise<void | Response<any, Record<string, any>>>;
export { CreateUser, showUser, singleUser };
//# sourceMappingURL=User.d.ts.map