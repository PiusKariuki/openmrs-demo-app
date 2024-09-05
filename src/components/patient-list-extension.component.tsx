import {DataTable, Table, TableBody, TableCell, TableContainer, TableHead, TableHeader, TableRow} from "@carbon/react";
import {type TableHeadConfig, useClients} from "../hooks/useClients";
import React from "react";


const PatientListExtensionComponent = () => {
  const {tableHeaders, cleanData} = useClients()


  return (
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
               )} />
  )
}

export default PatientListExtensionComponent;
