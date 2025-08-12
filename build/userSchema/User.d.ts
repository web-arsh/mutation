import mongoose, { Model } from "mongoose";
interface IComment extends Document {
    message: string;
}
interface IUser extends Document {
    email: string;
    password: string;
    comment?: mongoose.Types.ObjectId[];
}
declare const UserModel: Model<IUser>;
declare const CommentModel: Model<IComment>;
export { UserModel, CommentModel };
//# sourceMappingURL=User.d.ts.map