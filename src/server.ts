import "./libs/dbConnect.js";

import express, { type Request, type Response } from "express"
import { globalError } from "./middlware/globalError.js";
import { userRoute } from "./VIew/User.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/",userRoute);

app.use(globalError);

app.listen(PORT,() => console.log(`Server started at ${PORT}`));
