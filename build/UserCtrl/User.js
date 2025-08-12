// import * as z from "zod";
import AppErr from "../libs/AppErr.js";
const CreateUser = (req, res, next) => {
    try {
    }
    catch (err) {
        let message = "An unknown error is occured!";
        if (err instanceof Error) {
            message = err.message;
        }
        return next(new AppErr(message, 500));
    }
};
//# sourceMappingURL=User.js.map