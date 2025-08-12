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
const User = mongoose.models.User || mongoose.model("NewUser", userSchema);
const Comment = mongoose.models.Comment || mongoose.model("NewComment", commentSchema);
export { User, Comment };
//# sourceMappingURL=User.js.map