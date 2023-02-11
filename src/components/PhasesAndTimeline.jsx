import { Box, Typography } from "@mui/material";
import React, { useState } from "react";

import stages from "../Stage&Description";

const PhasesAndTimeline = ({ engagementResponse, notes }) => {
  const [stageName, setStageName] = useState("On-Boarding/Intake");

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: "1rem",
        }}
      >
        <Box
          sx={{
            width: "30%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: "0.4rem",
          }}
        >
          <Typography
            variant="p"
            fontSize={12}
            fontWeight="bold"
            textAlign="right"
          >
            Phases:{" "}
          </Typography>

          <Box
            sx={{
              width: "70%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: "0",
            }}
          >
            {stages?.map((stage, index) => {
              return (
                <Box
                  sx={{
                    width: "100%",
                    backgroundColor: `${stage?.color}`,
                    pl: "0.4rem",
                    pt: "0.2rem",
                    pb: "0.2rem",
                    cursor: "pointer",
                  }}
                  key={index}
                  onClick={() => setStageName(stage?.name)}
                >
                  <Typography variant="p" fontSize={12} textAlign="left">
                    {index + 1}. {stage?.name + " "}
                  </Typography>
                </Box>
              );
            })}
          </Box>
        </Box>

        <Box
          sx={{
            width: "70%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: "0.4rem",
          }}
        >
          <Typography
            variant="p"
            fontSize={12}
            fontWeight="bold"
            textAlign="right"
          >
            Timeline & Expectations:
          </Typography>

          <Typography
            variant="p"
            fontSize={12}
            textAlign="left"
            lineHeight={1.5}
          >
            {stages
              ?.filter((stage) => stage.name === stageName)
              ?.map((stage) => stage.description)}
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <Box
          sx={{
            width: "30%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: "0.4rem",
          }}
        >
          <Typography
            variant="p"
            fontSize={12}
            fontWeight="bold"
            textAlign="right"
          >
            Current Phase:
          </Typography>

          <Box
            sx={{
              width: "70%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: "0",
            }}
          >
            {stages
              ?.filter((stage) => stage.name === engagementResponse?.Stage)
              .map((stage) => {
                return (
                  <Box
                    sx={{
                      width: "100%",
                      backgroundColor: `${stage?.color}`,
                      pl: "0.4rem",
                      pt: "0.2rem",
                      pb: "0.2rem",
                    }}
                    key={stage?.name}
                  >
                    <Typography variant="p" fontSize={12} textAlign="left">
                      {stage?.name + " "}
                    </Typography>
                  </Box>
                );
              })}
          </Box>
        </Box>

        <Box
          sx={{
            width: "70%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: "0.4rem",
          }}
        >
          <Typography
            variant="p"
            fontSize={12}
            fontWeight="bold"
            textAlign="right"
          >
            Notes:
          </Typography>

          <Typography variant="p" fontSize={12} textAlign="left">
            {notes?.[0]?.Note_Content}
          </Typography>

          <Typography
            variant="p"
            fontSize={12}
            fontWeight="bold"
            textAlign="right"
          >
            Next Action Item:
          </Typography>

          <Typography variant="p" fontSize={12} textAlign="left">
            {engagementResponse?.Next_Action_Item}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default PhasesAndTimeline;
