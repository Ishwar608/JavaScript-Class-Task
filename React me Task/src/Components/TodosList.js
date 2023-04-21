import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TableHeading from './TableHeading';
import TableBodyData from './TableBodyData';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));




export default function TodosList() {
    const [data, setData] = useState([]);

    useEffect(() => { 
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(y => setData(y.data))
    },[])
  return (
    <div>
          <TableContainer component={Paper}>
              <Table sx={{ minWidth: 700 }} aria-label="customized table">
                  <TableHeading StyledTableCell={StyledTableCell} />
                  <TableBodyData StyledTableCell={StyledTableCell} StyledTableRow={StyledTableRow} rows={data} />
              </Table>
          </TableContainer>
    </div>
  )
}
