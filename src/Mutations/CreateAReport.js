import {
  gql,
  useMutation
} from "@apollo/client";

  export const CREATE_A_REPORT = gql`
  mutation CreateReport($data: ReportCreateInput!) {
    createReport(data: $data) {
      latitude
      longitude
      description
      radius
      reportCategory
      statusCategory
      userId
    }
  }
  `;
