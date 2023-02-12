import { Box } from "@mui/material";
import React from "react";
import BarChart from "./BarChart";
import PieChart from "./PieChart";

const Charts = ({ contactedTargets }) => {
  const contactedTargetStatusArray = [
    "-None-",
    "CIM Sent",
    "NDA Sent",
    "Target Declined",
    "Never Replied",
    "Pursued",
    "NDA Signed",
    "Interested/Requesting Info",
    "Not Interested",
    "On-Deck",
    "Request NDA",
    "Investor Selected",
    "Not Eligible for CIM",
    "Seller NDA Generated",
  ];

  const countStatus = (arrayOfObjects) => {
    let statusCount = {};

    // Initialize the count of each status to 0
    for (let i = 0; i < contactedTargetStatusArray.length; i++) {
      statusCount[contactedTargetStatusArray[i]] = 0;
    }

    // Count the number of times each status appears in the array of objects
    for (let i = 0; i < arrayOfObjects.length; i++) {
      let status = arrayOfObjects[i].Status;
      if (status in statusCount) {
        statusCount[status]++;
      }

      if (status === null) {
        statusCount["-None-"]++;
      }
    }

    let result = [];
    for (let i = 0; i < contactedTargetStatusArray.length; i++) {
      result.push(statusCount[contactedTargetStatusArray[i]]);
    }

    return result;
  };

  // console.log(countStatus(contactedTargets));

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
      <PieChart
        contactedTargetStatusArray={contactedTargetStatusArray}
        graphData={countStatus(contactedTargets)}
      />

      <BarChart
        contactedTargetStatusArray={contactedTargetStatusArray}
        graphData={countStatus(contactedTargets)}
      />
    </Box>
  );
};

export default Charts;
