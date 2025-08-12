import * as z from "zod";
import AppErr from "../libs/AppErr.js";
import { UserModel } from "../userSchema/User.js";
import bcrypt from "bcrypt";
const CreateUser = async (req, res, next) => {
    try {
        const User = z.object({
            email: z.string().email(),
            password: z.string().min(5, "Too Short!").max(12, "Too Long!")
        });
        const { success, data, error } = await User.safeParseAsync(req.body);
        //error catch
        if (!success) {
            throw new AppErr(JSON.parse(error.message)[0].message, 400);
        }
        //hash password
        const { email, password } = data;
        const salt = await bcrypt.genSalt(10);
        const hashPasword = await bcrypt.hash(password, salt);
        //create user 
        const user = await UserModel.create({
            email,
            password: hashPasword
        });
        return res.json(user);
    }
    catch (err) {
        let message = "An unknown error is occured!";
        if (err instanceof Error) {
            message = err.message;
        }
        return next(new AppErr(message, 500));
    }
};
export { CreateUser };
//# sourceMappingURL=User.js.map