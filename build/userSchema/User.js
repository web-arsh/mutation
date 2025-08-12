import mongoose, { Model } from "mongoose";
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
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
const commentSchema = new mongoose.Schema({
    message: {
        type: String,
        required: true
    }
});
const UserModel = mongoose.models.User || mongoose.model("NewUser", userSchema);
const CommentModel = mongoose.models.Comment || mongoose.model("NewComment", commentSchema);
export { UserModel, CommentModel };
//# sourceMappingURL=User.js.map