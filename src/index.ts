import { GraphQLSchema, GraphQLObjectType, GraphQLString } from 'graphql';
import express, { Request, Response } from 'express';
import { createHandler } from 'graphql-http/lib/use/express';
import expressPlayground from 'graphql-playground-middleware-express';

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        fields: {
            hello: {
                type: GraphQLString,
                resolve: () => 'world',
            },
        },
    }),
});

const app = express();
app.all('/graphql', createHandler({ schema }));
app.get('/playground', expressPlayground({ endpoint: '/graphql' }));

app.listen(3000, () => {
    console.log('server listening on port 3000');
});
