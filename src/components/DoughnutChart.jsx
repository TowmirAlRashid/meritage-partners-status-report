import { Box } from '@mui/material'
import React from 'react'

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
  return (
    <Box
        sx={{
            width: "45%",
            height: "300px",
            backgroundColor: "#d9d9d9"
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
                pb: "0.5rem"
            }}
        >
            <Pie data={data} />
        </Box>
    </Box>
  )
}

export default DoughnutChart