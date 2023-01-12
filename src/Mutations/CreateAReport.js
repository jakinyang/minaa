import {
  gql,
  useMutation
} from "@apollo/client";



export default function CreateAReport() {
  const GREATE_A_REPORT = gql`
  mutation CreateReport($data: ReportCreateInput!) {
    createReport(data: $data) {
      latitude
      longitude
      radius
      reportCategory
      statusCategory
      user {
        id
      }
    }
  }
  `
  let input;
  const [createReport, { data, loading, error }] = useMutation(GREATE_A_REPORT);
};

