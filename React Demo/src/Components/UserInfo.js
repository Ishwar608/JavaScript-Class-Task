import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';


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

export default function UserInfo() {
    const [user, setUser] = useState([]);

    const token = JSON.parse(localStorage.getItem('TOKEN'));
    console.log(token);

    useEffect(() => {
        axios.get('https://dev.equityfundingscript.com/api/v1.1/users/me?lng=en', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(y => {
                setUser(y.data.data.data);
            })

    }, [])
    return (
        // <table>
        //     <thead>
        //         <tr>
        //             <th>First Name</th>
        //             <th>Last Name</th>
        //             <th>Email</th>
        //             <th>Mobile</th>
        //         </tr>
        //     </thead>
        //     <tbody>

        //         <tr>
        //             <td>{user.firstName}</td>
        //             <td>{user.lastName}</td>
        //             <td>{user.email}</td>
        //             <td>{user.phoneNumber}</td>
        //         </tr>

        //     </tbody>
        // </table>



        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>First Name</StyledTableCell>
                        <StyledTableCell align="right">Last Name</StyledTableCell>
                        <StyledTableCell align="right">Email</StyledTableCell>
                        <StyledTableCell align="right">Mobile</StyledTableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    <StyledTableRow key={user.firstName}>
                        <StyledTableCell component="th" scope="row">
                            {user.firstName}
                        </StyledTableCell>
                        <StyledTableCell align="right">{user.lastName}</StyledTableCell>
                        <StyledTableCell align="right">{user.email}</StyledTableCell>
                        <StyledTableCell align="right">{user.phoneNumber}</StyledTableCell>
                    </StyledTableRow>

                </TableBody>
            </Table>
        </TableContainer>
    )
}
