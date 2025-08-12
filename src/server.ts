import express, { type Request, type Response } from "express"
import { globalError } from "./middlware/globalError.js";

const app = express();
const PORT = process.env.PORT || 3000;


app.get("/",(req: Request,res: Response) => {
    res.send("hammad");
});


app.use(globalError);

app.listen(PORT,() => console.log(`Server started at ${PORT}`));
