import mongoose, { Model } from "mongoose";
interface IComment extends Document {
    message: string;
}
interface IUser extends Document {
    email: string;
    password: string;
    comment?: mongoose.Types.ObjectId[];
}
declare const User: Model<IUser>;
declare const Comment: Model<IComment>;
export { User, Comment };
//# sourceMappingURL=User.d.ts.map