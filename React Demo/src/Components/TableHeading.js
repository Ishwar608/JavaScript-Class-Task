import { TableHead, TableRow } from '@mui/material'
import React from 'react'

export default function TableHeading({ StyledTableCell }) {
  return (
      <TableHead>
          <TableRow>
              <StyledTableCell>userId</StyledTableCell>
              <StyledTableCell align="right">id</StyledTableCell>
              <StyledTableCell align="right">title</StyledTableCell>
              <StyledTableCell align="right">completed</StyledTableCell>
          </TableRow>
      </TableHead>
  )
}
