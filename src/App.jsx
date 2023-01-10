import { Box } from "@mui/material";
import Billing from "./components/Billing";
import Charts from "./components/Charts";
import ContactedTarget from "./components/ContactedTarget";
import EmailStats from "./components/EmailStats";
import PhasesAndTimeline from "./components/PhasesAndTimeline";

import ReportLabelInfo from "./components/ReportLabelInfo";
import TallyOfActivities from "./components/TallyOfActivities";


// const ZOHO = window.ZOHO;


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
          width: "60%",
          padding: "0.5rem",
          m: "2rem auto 0",
          border: "2px solid black"
        }}
      >
        <ReportLabelInfo />
      </Box>

      <Box
        sx={{
          width: "60%",
          padding: "0.5rem",
          m: "0 auto 0",
          borderRight: "2px solid black",
          borderLeft: "2px solid black",
          borderBottom: "2px solid black",
        }}
      >
        <PhasesAndTimeline />
      </Box>

      <Box
        sx={{
          width: "60%",
          padding: "0.5rem",
          m: "0 auto 0",
          borderRight: "2px solid black",
          borderLeft: "2px solid black",
          borderBottom: "2px solid black",
        }}
      >
        <Billing />
      </Box>

      <Box
        sx={{
          width: "60%",
          padding: "0.5rem",
          m: "0 auto 0",
          borderRight: "2px solid black",
          borderLeft: "2px solid black",
          borderBottom: "2px solid black",
        }}
      >
        <Charts />
      </Box>

      <Box
        sx={{
          width: "60%",
          padding: "0.5rem",
          m: "0 auto 0",
          borderRight: "2px solid black",
          borderLeft: "2px solid black",
          borderBottom: "2px solid black",
        }}
      >
        <ContactedTarget />
      </Box>

      <Box
        sx={{
          width: "60%",
          padding: "0.5rem",
          m: "0 auto 0",
          borderRight: "2px solid black",
          borderLeft: "2px solid black",
          borderBottom: "2px solid black",
        }}
      >
        <EmailStats />
      </Box>

      <Box
        sx={{
          width: "60%",
          padding: "0.5rem",
          m: "0 auto 2rem",
          borderRight: "2px solid black",
          borderLeft: "2px solid black",
          borderBottom: "2px solid black",
        }}
      >
        <TallyOfActivities />
      </Box>
    </Box>
  );
}

export default App;
