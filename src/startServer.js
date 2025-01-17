import { ApolloServer } from "apollo-server"; 
import mongoose from "mongoose";


function startServer({typeDefs, resolvers}){
   mongoose.connect('ongodb://localhost:27017/graphql',{
    useNewUrlParser: true,
    useUnidfiedTopology: true,
   })

    const server = new ApolloServer({typeDefs, resolvers});
    server.listen().then(({url}) => console.log(`Server started ${url}`));

}

export default startServer;