import { gql } from "@apollo/client";

export const GET_USER_REPORTS = gql`
query Query($userId: ID!) {
  user(id: $userId) {
    reports {
      id
      description
      imageUrl
      latitude
      longitude
      radius
      reportCategory
      statusCategory
      createdAt
    }
  }
}`
  


  