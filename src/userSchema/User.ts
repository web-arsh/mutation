import mongoose, { Model } from "mongoose";

interface IComment extends Document{
    message: string;
}

interface IUser extends Document{
    email: string;
    password: string;
    comment?: mongoose.Types.ObjectId[];
}

const userSchema = new mongoose.Schema<IUser>({
    email: {
        type: String,
        required: true,
        unique: true
        ,
    },  
    password: {
        type: String,
        required: true,
    },
    comment: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "NewComment",
            required: false
        }
    ]
});

const commentSchema = new mongoose.Schema<IComment>({
    message: {
        type: String,
        required: true
    }
});



const UserModel: Model<IUser> = mongoose.models.User || mongoose.model<IUser>("NewUser",userSchema);
const CommentModel: Model<IComment> = mongoose.models.Comment || mongoose.model<IComment>("NewComment",commentSchema);

export {UserModel,CommentModel};