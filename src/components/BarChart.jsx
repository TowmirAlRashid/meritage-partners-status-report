import { Box } from "@mui/material";
import React from "react";

import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const BarChart = ({ contactedTargetStatusArray, graphData }) => {
  const data = {
    labels: contactedTargetStatusArray,
    datasets: [
      {
        label: "Contacted Target Status Graph",
        data: [...graphData],
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
      },
    ],
  };

  return (
    <Box
      sx={{
        width: "49%",
        m: "1rem auto",
        height: "500px",
        backgroundColor: "#d9d9d9",
      }}
    >
      <Bar
        data={data}
        options={{
          title: {
            display: true,
            text: "Contacted Target Status Graph",
            fontSize: 20,
          },
          maintainAspectRatio: false,
          legend: {
            display: true,
            position: "top",
          },
          scales: {
            xAxes: [
              {
                stacked: true,
                barPercentage: 0.2,
              },
            ],
            yAxes: [
              {
                stacked: true,
                barPercentage: 0.2,
              },
            ],
          },
        }}
      />
    </Box>
  );
};

export default BarChart;
