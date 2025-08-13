import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@as-integrations/express5";
import axios from "axios";
import cors from "cors";
import express from "express";
const startServer = async () => {
    const app = express();
    const PORT = process.env.PORT || 3000;
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
        `,
        resolvers: {
            getAllUser: async () => (await axios.get("http://localhost:3000/show")).data,
            getUser: async (_, { id }) => (await axios.get(`http://localhost:3000/show${id}`)).data
        }
    });
    app.use(express.json());
    app.use(cors());
    await server.start();
    app.use("/graphql", expressMiddleware(server));
    app.listen(PORT, () => console.log(`Server started at ${PORT}`));
};
startServer();
//# sourceMappingURL=graphql.js.map