const express = require("express")
const { graphqlHTTP } = require("express-graphql")
const graphqlSchema = require("./graphql/schema")
const graphqlResolvers = require("./graphql/resolvers")

const app = express()

app.use(
  "/graphql",
  graphqlHTTP({
    schema: graphqlSchema,
    rootValue: graphqlResolvers,
    graphiql: true,
  })
)

app.listen(3000, 
    () => console.log("Server is running on localhost:3000"))