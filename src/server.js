const http = require("http");
const express = require("express");
const { graphqlHTTP } = require ('express-graphql');

const { ApolloServer } = require("apollo-server-express");
const {
  ApolloServerPluginDrainHttpServer,
  ApolloServerPluginLandingPageLocalDefault,
} = require("apollo-server-core");

const typeDefs  = require("./typeDefs");
const resolvers = require("./resolvers");
const mongoConnection = require("./db");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3000;
    this.httpServer = http.Server(this.app);
    this.apolloServer;

    this.conectarDB();
    this.middlewares();
    this.startApolloServer();
    this.routes();
  }

  async conectarDB() {
    if (process.env.PERSISTENCE == "MONGO") {
      await mongoConnection();
    }
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(express.static("public"));
  }

  routes() {
    /*
    this.app.use("/graphql",
      graphqlHTTP({
        schema:    typeDefs,
        rootValue: resolvers,
        graphiql:  true,
      })
    );
    */
  }

  async startApolloServer() {
    // Our httpServer handles incoming requests to our Express app.
    // Below, we tell Apollo Server to "drain" this httpServer,
    // enabling our servers to shut down gracefully.
    this.apolloServer = new ApolloServer({
      typeDefs: typeDefs,
      resolvers: resolvers,
      csrfPrevention: true,
      cache: "bounded",
      plugins: [
        ApolloServerPluginDrainHttpServer({ httpServer: this.httpServer }),
        ApolloServerPluginLandingPageLocalDefault({ embed: true }),
      ],
    });
  }

  async listen() {
    await this.apolloServer.start();
    console.log(`Apollo Server is ready.`);

    // Mount Apollo middleware here.
    this.apolloServer.applyMiddleware({ app: this.app });

    await new Promise((resolve) =>
      this.app.listen({ port: this.port }, resolve)
    );
    console.log(
      `Server ready at http://localhost:${this.port}${this.apolloServer.graphqlPath}`
    );

    // this.app.listen(this.port, () => {
    //   console.log(`Server Up on port: ${this.port}`);
    // });
    // this.app.on("error", (error) =>
    //   console.log(`Error en el servidor: ${error}`)
    // );
  }
}

module.exports = { Server };
