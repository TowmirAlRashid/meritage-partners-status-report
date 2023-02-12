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
        width: "49%",
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
          p: "1rem",
        }}
      >
        <Pie
          data={data}
          options={{
            title: {
              display: true,
              text: "Contacted Target Status Graph",
              fontSize: 20,
            },
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: true,
                position: "left",
              },
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
    </Box>
  );
};

export default PieChart;
