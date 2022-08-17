const express = require('express');
const { ApolloServer } = require('apollo-server-express');

const typeDefs  = require('./typeDefs');
const resolvers = require('./resolvers');
const dbConnection = require('./db');
const app = express();

dbConnection();

async function start () {
    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers
    });

    await apolloServer.start();
    apolloServer.applyMiddleware({ app });

    app.listen(8080, ()=> { console.log('Server started on port 8080') });
}

start();
