const fetch = require ('cross-fetch');

// const { ApolloClient, InMemoryCache, ApolloProvider, gql } = require('@apollo/client');
const {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
  HttpLink
} = require ("@apollo/client");

const client = new ApolloClient({
  link: new HttpLink({ uri: ' http://localhost:4000/', fetch }),
  cache: new InMemoryCache(),
});

client
  .query({
    query: gql`
      query Query {
      users {
        id
        firstName
        lastName
        email
      }
    }
    `,
  })
  .then((result) => console.log(result.data))
  .catch(e => console.error(e.message));