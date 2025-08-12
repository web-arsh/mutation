import mongoose from "mongoose";
import AppErr from "./AppErr.js";
const dbConnect = async () => {
    try {
        //this check if url is undefined or not
        if (!process.env.DB_URL) {
            throw new AppErr("url is not defined", 500);
        }
        await mongoose.connect(process.env.DB_URL, {
            dbName: "Mutation"
        });
        console.log("DB conected");
    }
    catch (err) {
        let message = "Db disconnected";
        //this check is err if instance of Error
        if (err instanceof Error) {
            message = err.message;
        }
        console.log("Error: ", message);
        process.exit(1);
    }
};
export default dbConnect();
//# sourceMappingURL=dbConnect.js.map