import { TableBody } from '@mui/material'
import React from 'react'

export default function TableBodyData({ StyledTableRow, StyledTableCell ,rows}) {
  return (
      <TableBody>
          {rows.map((row) => (
              <StyledTableRow key={row.userId}>
                  <StyledTableCell component="th" scope="row">
                      {row.userId}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.id}</StyledTableCell>
                  <StyledTableCell align="right">{row.title}</StyledTableCell>
                  <StyledTableCell align="right">{row.completed.toString()}</StyledTableCell>
              </StyledTableRow>
          ))}
      </TableBody>
  )
}
