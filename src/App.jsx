import { Box, CircularProgress, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Billing from "./components/Billing";
import Charts from "./components/Charts";
import ContactedTarget from "./components/ContactedTarget";
import EmailStats from "./components/EmailStats";
import PhasesAndTimeline from "./components/PhasesAndTimeline";

import ReportLabelInfo from "./components/ReportLabelInfo";

const ZOHO = window.ZOHO;

function App() {
  const [initialized, setInitialized] = useState(false); // initialize the app
  const [entity, setEntity] = useState(); // get the record
  const [entityId, setEntityId] = useState(); // get the record id
  const [engagementResponse, setEngagementResponse] = useState(); // get the record details
  const [engagementParentAccount, setEngagementParentAccount] = useState(); // get the parent account info for the current engagement record
  const [notes, setNotes] = useState(); // gets the notes for the current record
  const [contactedTargets, setContactedTargets] = useState(); // gets the contacted targets for the current record

  useEffect(() => {
    ZOHO.embeddedApp.on("PageLoad", function (data) {
      // rendered on the first load
      setEntity(data?.Entity);
      setEntityId(data?.EntityId?.[0]);
    });

    ZOHO.embeddedApp.init().then(() => {
      ZOHO.CRM.UI.Resize({ height: "800", width: "1000" });
      setInitialized(true);
    });
  }, []);

  useEffect(() => {
    if (initialized) {
      const fetchData = async () => {
        const engagementResp = await ZOHO.CRM.API.getRecord({
          Entity: entity,
          RecordID: entityId,
        });
        setEngagementResponse(engagementResp?.data?.[0]);

        const engagementParentAccountInfo = await ZOHO.CRM.API.getRecord({
          Entity: "Accounts",
          RecordID: engagementResponse?.Account_Name?.id,
        });
        setEngagementParentAccount(
          "account",
          engagementParentAccountInfo?.data?.[0]
        );

        const engagementNotes = await ZOHO.CRM.API.getRelatedRecords({
          Entity: entity,
          RecordID: entityId,
          RelatedList: "Notes",
          page: 1,
          per_page: 200,
        });
        setNotes(
          engagementNotes?.data?.sort(
            (note1, note2) =>
              new Date(note2?.Created_Time) - new Date(note1?.Created_Time)
          )
        );

        const engagementContactedTargets = await ZOHO.CRM.API.getRelatedRecords(
          {
            Entity: entity,
            RecordID: entityId,
            RelatedList: "Engagements_Name1",
            page: 1,
            per_page: 200,
          }
        );

        setContactedTargets(
          engagementContactedTargets?.data?.map((contactedTarget) => {
            return {
              ...contactedTarget,
              Company_Name: contactedTarget?.Company_Name?.name,
            };
          })
        );
      };

      fetchData();
    }
  }, [initialized]);

  // console.log(engagementResponse);

  if (engagementResponse && engagementParentAccount && contactedTargets) {
    return (
      <Box
        sx={{
          width: "100%",
          height: "100%",
        }}
      >
        <Box
          sx={{
            width: "98%",
            padding: "0.5rem",
            m: "2rem auto 0",
            border: "2px solid black",
          }}
        >
          <ReportLabelInfo
            engagementResponse={engagementResponse}
            engagementParentAccount={engagementParentAccount}
          />
        </Box>

        <Box
          sx={{
            width: "98%",
            padding: "0.5rem",
            m: "0 auto 0",
            borderRight: "2px solid black",
            borderLeft: "2px solid black",
            borderBottom: "2px solid black",
          }}
        >
          <PhasesAndTimeline
            engagementResponse={engagementResponse}
            notes={notes}
          />
        </Box>

        <Box
          sx={{
            width: "98%",
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
            width: "98%",
            padding: "0.5rem",
            m: "0 auto 0",
            borderRight: "2px solid black",
            borderLeft: "2px solid black",
            borderBottom: "2px solid black",
          }}
        >
          <Charts contactedTargets={contactedTargets} />
        </Box>

        <Box
          sx={{
            width: "98%",
            padding: "0.5rem",
            m: "0 auto 0",
            borderRight: "2px solid black",
            borderLeft: "2px solid black",
            borderBottom: "2px solid black",
          }}
        >
          <ContactedTarget contactedTargets={contactedTargets} />
        </Box>

        <Box
          sx={{
            width: "98%",
            padding: "0.5rem",
            m: "0 auto 2rem",
            borderRight: "2px solid black",
            borderLeft: "2px solid black",
            borderBottom: "2px solid black",
          }}
        >
          <EmailStats />
        </Box>
      </Box>
    );
  } else {
    return (
      <Box
        sx={{
          width: "100%",
          height: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: "1rem",
            margin: "20% 0",
          }}
        >
          <CircularProgress color="inherit" />
          <Typography fontWeight="bold" fontSize="1.5rem">
            Fetching Data. Please Wait...
          </Typography>
        </Box>
      </Box>
    );
  }
}

export default App;
