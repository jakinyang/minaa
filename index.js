import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:5555/',
  cache: new InMemoryCache(),
});

client
  .query({
    query: gql`
      query Query {
        test
      }
    `,
  })
  .then((result) => console.log(result));