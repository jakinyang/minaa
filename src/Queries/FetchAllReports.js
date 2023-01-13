import {
  gql,
} from "@apollo/client";

export const FETCH_ALL_REPORTS = gql`
query Query {
  reports {
    id
    latitude
    longitude
    description
    radius
    statusCategory
    reportCategory
    imageUrl
    createdAt
    updatedAt
  }
}
`;