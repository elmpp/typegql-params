import express from 'express';
import graphqlHTTP from 'express-graphql';
import compiledSchema from './api-schema'

const app = express();

app.use(
  '/graphql',
  graphqlHTTP({
    schema: compiledSchema,
    graphiql: true,
  }),
);


app.listen(3099, () => console.log('Graphql API ready on http://localhost:3099/graphql'));

