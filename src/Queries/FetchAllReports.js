import {
  gql,
  useQuery,
} from "@apollo/client";

export default function FetchAllReports() {
  const Fetch_ALL_REPORTS = gql `
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
  return {loading, error, data} = useQuery(Fetch_ALL_REPORTS);
  // return {loading, error, data};
}