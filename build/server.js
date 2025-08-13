import "./libs/dbConnect.js";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@as-integrations/express5";
import axios from "axios";
import cors from "cors";
import express from "express";
import { userRoute } from "./VIew/User.js";
import { globalError } from "./middlware/globalError.js";
const startServer = async () => {
    const app = express();
    const PORT = process.env.PORT || 3000;
    app.use(express.json());
    app.use(cors());
    //Rest Api
    app.use("/", userRoute);
    const server = new ApolloServer({
        typeDefs: `
            type Comment{
                _id: String
                message: String
            }
            type User{
                _id: String
                email: String
                password: String
                comment: [Comment]
            }
            type Query{
                getAllUser: [User]
                getUser(id: ID!): User
            }
            type Message{
                message: String
            }
            type Mutation{
                login(email: String!,password: String!): Message
            }
            `,
        resolvers: {
            User: {
                comment: (user) => (user?.comment.map(async (item) => (await axios.get(`http://localhost:3000/comment/${item}`)).data))
            },
            Query: {
                getAllUser: async (_, __, context) => {
                    try {
                        //authenticate middleware 
                        if (context.token === "Error")
                            throw new Error("Un Authorized");
                        const user = (await axios.get("http://localhost:3000/show")).data;
                        return user;
                    }
                    catch (err) {
                        if (Error.isError(err)) {
                            console.log({ error: err.message });
                        }
                    }
                },
                getUser: async (_, { id }) => (await axios.get(`http://localhost:3000/single/${id}`)).data
            },
            Mutation: {
                login: async (_, args) => {
                    try {
                        const result = await axios.post("http://localhost:3000/login", args);
                        return result.data;
                    }
                    catch (err) {
                        let message = "An unknown error is occured!";
                        //***********Fix ERROR */
                        if (axios.isAxiosError(err)) {
                            message = err.response?.data.message;
                        }
                        return { message };
                    }
                }
            }
        }
    });
    await server.start();
    app.use("/graphql", expressMiddleware(server, {
        // authentication middleware
        context: async ({ req }) => ({ token: "Error" })
    }));
    app.use(globalError);
    app.listen(PORT, () => console.log(`Server started at ${PORT}`));
};
startServer();
//# sourceMappingURL=server.js.map