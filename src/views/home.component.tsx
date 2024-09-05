import React from 'react';
import { useClients, PatientObject, TableHeadConfig } from '../hooks/useClients';
import styles from "./home.component.scss"
import {
  DataTable,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableHeader,
  TableRow,
} from '@carbon/react';



const Home: React.FC<{}> = () => {

  const {tableHeaders, cleanData} = useClients()

  return(
    <div className={styles.page}>
      <DataTable rows={cleanData} headers={tableHeaders}
      render={({rows, headers, getTableProps, getHeaderProps, getRowProps})=>(
        <TableContainer title="List of clients">
          <Table {...getTableProps}>
            <TableHead>
              <TableRow>
                {headers.map((header: TableHeadConfig) => (
                  <TableHeader {...getHeaderProps({header})}>{header.header}</TableHeader>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {
                rows.map((row) => (
                  <TableRow {...getRowProps({row})}>
                    {row.cells.map(cell =>(
                      <TableCell key={cell.id} >{cell.value}</TableCell>
                    ))}
                  </TableRow>
                ))
              }
            </TableBody>
          </Table>
        </TableContainer>
      )}

      >
        <TableHead></TableHead>
      </DataTable>
    </div>
  )
}


export default Home;
