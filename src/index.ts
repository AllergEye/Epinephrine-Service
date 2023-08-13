import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { readFileSync } from 'fs';
import Context from './types/context';
import { getUsernameByIdResolver } from './resolvers/pharmacist/getUsernameByIdResolver';

const typeDefs = readFileSync('./schema.graphql', { encoding: 'utf-8' });

const resolvers = {
    Query: {
        getUsernameById: getUsernameByIdResolver,
    },
};

const server = new ApolloServer<Context>({
    typeDefs,
    resolvers,
});

(async () => {
    const { url } = await startStandaloneServer(server, {
        listen: { port: 4000 },
    });
    console.log(`Server ready at ${url}`);
})();
