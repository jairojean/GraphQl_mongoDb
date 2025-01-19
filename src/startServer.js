import { ApolloServer} from "apollo-server"; 

function startServer({ typeDefs, resolvers }) {
   mongoose.connect('mongodb://localhost:27017/graphql', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
   });

  const server = new ApolloServer({ typeDefs, resolvers });

  server.listen().then(({ url }) => console.log(`Server started ${url}`));
}

export default startServer;
