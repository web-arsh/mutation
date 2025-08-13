import express from "express";
import { CreateUser, showUser, singleUser } from "../UserCtrl/User.js";
import { CreateComment, getComment } from "../UserCtrl/Comment.js";
const userRoute = express.Router();
//user route
userRoute.post("/login", CreateUser);
userRoute.get("/show", showUser);
userRoute.get("/single/:id", singleUser);
//comment route
userRoute.post("/comment", CreateComment);
userRoute.get("/comment/:id", getComment);
export { userRoute };
//# sourceMappingURL=User.js.map