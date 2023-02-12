import { Box, Typography } from "@mui/material";
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
          height: `calc(111px + ${10 * 42}px)`,
        }}
      >
        <DataGrid
          rows={contactedTargets || []}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          disableSelectionOnClick
          rowHeight={42}
        />
      </Box>
    </Box>
  );
};

export default ContactedTarget;
