import { Box } from "@mui/material";
import React from "react";
import BarChart from "./BarChart";
import PieChart from "./PieChart";

const Charts = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "1rem",
      }}
    >
      <PieChart />

      <BarChart />
    </Box>
  );
};

export default Charts;
