import { Box } from "@mui/material";
import PhasesAndTimeline from "./components/PhasesAndTimeline";

import ReportLabelInfo from "./components/ReportLabelInfo";


const ZOHO = window.ZOHO;


function App() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%"
      }}
    >
      <Box
        sx={{
          width: "55%",
          padding: "0.5rem",
          m: "2rem auto 0",
          border: "2px solid black"
        }}
      >
        <ReportLabelInfo />
      </Box>

      <Box
        sx={{
          width: "55%",
          padding: "0.5rem",
          m: "0 auto 0",
          borderRight: "2px solid black",
          borderLeft: "2px solid black",
          borderBottom: "2px solid black",
        }}
      >
        <PhasesAndTimeline />
      </Box>
    </Box>
  );
}

export default App;
