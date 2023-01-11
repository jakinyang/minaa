import React, { useState, useEffect } from 'react';
import { DataTable } from 'react-native-paper';
import { faker } from '@faker-js/faker';

const optionsPerPage = [5, 10, 20, 50, 100];

export default function MockTable() {
  const [page, setPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(optionsPerPage[0]);

  useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  const array = new Array(20);
  const dataRows = array.map((_, i) => {
    return (
      <DataTable.Row key={i}>
        <DataTable.Cell>{faker.date.recent()}</DataTable.Cell>
        <DataTable.Cell>{faker.address.longitude()}</DataTable.Cell>
        <DataTable.Cell>{faker.address.latitude()}</DataTable.Cell>
        <DataTable.Cell>{faker.lorem.word()}</DataTable.Cell>
        <DataTable.Cell>{faker.datatype.number()}</DataTable.Cell>
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
      {array.map((_, i) => {
        return (
          <DataTable.Row key={i}>
            <DataTable.Cell>{faker.date.recent()}</DataTable.Cell>
            <DataTable.Cell>{faker.address.longitude()}</DataTable.Cell>
            <DataTable.Cell>{faker.address.latitude()}</DataTable.Cell>
            <DataTable.Cell>{faker.lorem.word()}</DataTable.Cell>
            <DataTable.Cell>{faker.datatype.number()}</DataTable.Cell>
          </DataTable.Row>
        );
      })}

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