import * as React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
  useQuery,
} from "@apollo/client";


export const GET_USER_REPORTS = gql`
query Query($userId: ID!) {
  user(id: $userId) {
    reports {
      description
      imageUrl
      latitude
      longitude
      radius
      reportCategory
      statusCategory
      updatedAt
    }
  }
}`
  


  