import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";

const ContactedTarget = ({ contactedTargets }) => {
  const columns = [
    // custom columns for the top 10 deals
    {
      field: "Name",
      headerName: "Name",
      flex: 1.5,
    },
    {
      field: "Company_Name",
      headerName: "Group",
      flex: 1.5,
    },
    {
      field: "Status",
      headerName: "Status",
      align: "left",
      flex: 1,
    },
  ];

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
                <TableCell align="left">Name</TableCell>
                <TableCell align="left">Group</TableCell>
                <TableCell align="left">Status</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {contactedTargets?.map((contactedTarget, index) => {
                return (
                  <TableRow
                    key={index}
                    // sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="left">{contactedTarget?.Name}</TableCell>
                    <TableCell align="left">
                      {contactedTarget?.Company_Name}
                    </TableCell>
                    <TableCell align="left">
                      {contactedTarget?.Status}
                    </TableCell>
                  </TableRow>
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
