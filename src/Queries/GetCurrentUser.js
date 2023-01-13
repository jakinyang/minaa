import * as React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
  useQuery,
} from "@apollo/client";

export const CURRENT_USER = gql`
query Query($search: UsersSearchInput) {
  usersSearch(search: $search) {
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
      id
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

/**
 {
  "search": {
    "email": "Lura79@hotmail.com"
  }
}
 */