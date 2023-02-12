import { Box } from "@mui/material";
import React from "react";

import Chart from "chart.js/auto";
import { Pie } from "react-chartjs-2";

const PieChart = ({ contactedTargetStatusArray, graphData }) => {
  const data = {
    labels: [...contactedTargetStatusArray],
    datasets: [
      {
        label: "count",
        data: [...graphData],
        backgroundColor: [
          "white",
          "#338DFF",
          "#31D559",
          "#FAC541",
          "#CE84FC",
          "#FC84BC",
          "#F0F587",
          "cyan",
          "lightgreen",
          "pink",
          "lightblue",
          "red",
          "brown",
          "violet",
        ],
        borderColor: [
          "white",
          "#338DFF",
          "#31D559",
          "#FAC541",
          "#CE84FC",
          "#FC84BC",
          "#F0F587",
          "cyan",
          "lightgreen",
          "pink",
          "lightblue",
          "red",
          "brown",
          "violet",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Box
      sx={{
        width: "97%",
        height: "500px",
        backgroundColor: "#d9d9d9",
        m: "1rem auto",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          // flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          pb: "0.5rem",
        }}
      >
        <Pie data={data} />
      </Box>
    </Box>
  );
};

export default PieChart;
