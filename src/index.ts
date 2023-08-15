import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { readFileSync } from 'fs';
import Context from './types/context';
import {
    authenticateUserResolver,
    createUserResolver,
    generateAccessTokenFromRefreshTokenResolver,
    getUsernameByIdResolver,
} from './resolvers/pharmacist/resolvers';
import {
    dishesResolver,
    restaurantsResolver,
} from './resolvers/surveyor/resolvers';

const typeDefs = readFileSync('./schema.graphql', { encoding: 'utf-8' });

const resolvers = {
    Query: {
        getUsernameById: getUsernameByIdResolver,
        restaurants: restaurantsResolver,
    },
    Restaurant: {
        dishes: dishesResolver,
    },
    Mutation: {
        createUser: createUserResolver,
        authenticateUser: authenticateUserResolver,
        generateAccessTokenFromRefreshToken:
            generateAccessTokenFromRefreshTokenResolver,
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
