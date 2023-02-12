import {
  Box,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";

const ContactedTarget = ({ contactedTargets }) => {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 11,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        gap: "0.4rem",
      }}
    >
      <Typography variant="p" fontSize={12} fontWeight="bold" textAlign="right">
        Contacted Targets Breakdown:
      </Typography>

      <Box
        sx={{
          width: "98%",
          m: "1.5rem auto",
        }}
      >
        <TableContainer>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="dense table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="left">Name</StyledTableCell>
                <StyledTableCell align="left">Group</StyledTableCell>
                <StyledTableCell align="left">Status</StyledTableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {contactedTargets?.map((contactedTarget, index) => {
                return (
                  <StyledTableRow
                    key={index}
                    // sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <StyledTableCell align="left">
                      {contactedTarget?.Name}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {contactedTarget?.Company_Name}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {contactedTarget?.Status}
                    </StyledTableCell>
                  </StyledTableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default ContactedTarget;
