import express, {} from "express";
import { globalError } from "./middlware/globalError.js";
const app = express();
const PORT = process.env.PORT || 3000;
app.get("/", (req, res) => {
    res.send("hammad");
});
app.use(globalError);
app.listen(PORT, () => console.log(`Server started at ${PORT}`));
//# sourceMappingURL=server.js.map