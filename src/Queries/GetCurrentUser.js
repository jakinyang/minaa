import * as React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
  useQuery,
} from "@apollo/client";

export const CURRENT_USER = gql`
query User($userId: ID!) {
  user(id: $userId) {
    avatarUrl
    createdAt
    dateOfBirth
    email
    firstName
    id
    lastName
    password
    phone
    qualification
    updatedAt
    reports {
      createdAt
      description
      imageUrl
      id
      latitude
      longitude
      radius
      reportCategory
      statusCategory
      updatedAt
    }
  }
}`