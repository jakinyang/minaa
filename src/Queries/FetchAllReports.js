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
  const {loading, error, data} = useQuery(Fetch_ALL_REPORTS);
  if(loading) {
    console.log("report data lodaing from Apollo");
  }
  if(error) {
   console.log("Apollo error:", error.message);
  }
  // console.log("reports data: ", data.reports);
  if(data) {
    
    const reportsData = data.reports
    return reportsData;

  }
}

    /*data.reports
    {"__typename": "Report", "createdAt": "2023-01-09T21:44:09.306Z", "description": "Enim dolore modi laudantium officiis animi nulla eligendi labore possimus.", "id": "200", "imageUrl": "https://loremflickr.com/640/480", "latitude": 89.210466, "longitude": -61.886658, "radius": 5, "reportCategory": "UNCLEAR", "statusCategory": "REPORTED", "updatedAt": "2023-01-09T21:44:09.306Z"},
    */