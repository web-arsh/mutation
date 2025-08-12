import type { Request, Response } from "express";
import type AppErr from "../libs/AppErr.js";
declare const globalError: (err: AppErr, req: Request, res: Response, next: any) => Response<any, Record<string, any>>;
export { globalError };
//# sourceMappingURL=globalError.d.ts.map