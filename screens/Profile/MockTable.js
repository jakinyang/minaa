// Imports
import React, { useState, useEffect, useContext } from 'react';
import { DataTable } from 'react-native-paper';
import { useQuery } from '@apollo/client';

// Components and Helpers
import { GET_USER_REPORTS } from '../../src/Queries/UserReportsQueries';
import { UserContext } from '../../shared/userContext';
import { formatDate } from '../../shared/helpers/dateFormatter'

export default function MockTable({data}) {
  const optionsPerPage = [5, 10, 20, 50, 100];

  useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  const [page, setPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(optionsPerPage[0]);
  
  const dataRows = data.user.reports.map((item, i) => {
    let time = formatDate(item.createdAt)
    console.log("Item from cell maker loop! ", item)
    return (
      <DataTable.Row key={i}>
        <DataTable.Cell>{time}</DataTable.Cell>
        <DataTable.Cell>{item.longitude}</DataTable.Cell>
        <DataTable.Cell>{item.latitude}</DataTable.Cell>
        <DataTable.Cell>{item.statusCategory}</DataTable.Cell>
        <DataTable.Cell>{item.reportCategory}</DataTable.Cell>
      </DataTable.Row>
    );
  });

  return (
    <DataTable>
      <DataTable.Header>
        <DataTable.Title>Date</DataTable.Title>
        <DataTable.Title >Longitude</DataTable.Title>
        <DataTable.Title >Latitude</DataTable.Title>
        <DataTable.Title >Status</DataTable.Title>
        <DataTable.Title >Response</DataTable.Title>
      </DataTable.Header>
      {dataRows}
      <DataTable.Pagination
        page={page}
        numberOfPages={6}
        onPageChange={(page) => setPage(page)}
        label={`${page * itemsPerPage + 1}-${Math.min((page + 1) * itemsPerPage, dataRows.length)} of ${dataRows.length}`}
        optionsPerPage={optionsPerPage}
        itemsPerPage={itemsPerPage}
        setItemsPerPage={setItemsPerPage}
        showFastPagination
        optionsLabel={'Rows per page'}
      />
    </DataTable>
  );
}