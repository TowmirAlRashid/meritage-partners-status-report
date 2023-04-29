import {
  Box,
  Button,
  CircularProgress,
  Table,
  TableBody,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import Billing from "./components/Billing";
import Charts from "./components/Charts";
import ContactedTarget from "./components/ContactedTarget";
import EmailStats from "./components/EmailStats";
import PhasesAndTimeline from "./components/PhasesAndTimeline";

import ReportLabelInfo from "./components/ReportLabelInfo";

import { useReactToPrint } from "react-to-print";

import "./app.css";

const ZOHO = window.ZOHO;

function App() {
  const [initialized, setInitialized] = useState(false); // initialize the app
  const [entity, setEntity] = useState(); // get the record
  const [entityId, setEntityId] = useState(); // get the record id
  const [engagementResponse, setEngagementResponse] = useState(); // get the record details
  const [engagementParentAccount, setEngagementParentAccount] = useState(); // get the parent account info for the current engagement record
  const [engagementParentContact, setEngagementParentContact] = useState(); // get the parent contact info for the current engagement record
  const [contactedTargets, setContactedTargets] = useState(); // gets the contacted targets for the current record
  const [campaignDetails, setCampaignDetails] = useState();
  const [engClosingDate, setEngClosingDate] = useState(); // engagement closing date
  const [invoiceResponse, setInvoiceResponse] = useState(); // keeps the invoices response

  const [engagementDate, setEngagementDate] = useState();

  const [downloadingPdfLoading, setDownloadPdfLoading] = useState(false);
  const [showForDownload, setShowForDownload] = useState(false);

  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

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
        setEngClosingDate(engagementResp?.data?.[0]?.Closing_Date);
        setEngagementDate(engagementResp?.data?.[0]?.Created_Time);
        // console.log(engagementResp?.data?.[0]);

        const campaignArray =
          engagementResp?.data?.[0]?.Campaign_Keys?.split(",") || [];

        const engagementParentAccountInfo = await ZOHO.CRM.API.getRecord({
          Entity: "Accounts",
          RecordID: engagementResp?.data?.[0]?.Account_Name?.id,
        });
        // console.log(engagementParentAccountInfo?.data?.[0]);
        setEngagementParentAccount(engagementParentAccountInfo?.data?.[0]);

        const engagementTasks = await ZOHO.CRM.API.getRelatedRecords({
          Entity: entity,
          RecordID: entityId,
          RelatedList: "Tasks",
          page: 1,
          per_page: 200,
        });

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

        const campaignResponseArray = [];

        const conn_name = "zoho_campaign_conn";
        for (const key of campaignArray) {
          let req_data_campaigns = {
            method: "GET",
            url: `https://campaigns.zoho.com/api/v1.1/getcampaigndetails?&campaignkey=${key}&resfmt=JSON`,
          };

          const campaignResp = await ZOHO.CRM.CONNECTION.invoke(
            conn_name,
            req_data_campaigns
          );

          // console.log(campaignResp);

          campaignResponseArray.push(campaignResp?.details?.statusMessage);
        }

        setCampaignDetails(campaignResponseArray);

        const engagementParentContactInfo =
          await ZOHO.CRM.API.getRelatedRecords({
            Entity: "Accounts",
            RecordID: engagementParentAccountInfo?.data?.[0]?.id,
            RelatedList: "Contacts",
            page: 1,
            per_page: 200,
          });

        // console.log(engagementParentContactInfo?.data?.[0]);

        setEngagementParentContact(engagementParentContactInfo?.data?.[0]);

        // const invoice_func_name = "fetch_last_12_months_invoice";
        // const invoicesResp = await ZOHO.CRM.FUNCTIONS.execute(
        //   invoice_func_name,
        //   {
        //     arguments: JSON.stringify({
        //       deal_id: entityId,
        //     }),
        //   }
        // );

        setInvoiceResponse(
          engagementTasks?.data?.filter((invoice) =>
            invoice?.Subject.toLowerCase().includes("billing")
          )
        );
      };

      fetchData();
    }
  }, [initialized]);

  // engagementResponse && engagementParentAccount && contactedTargets

  if (engagementResponse && engagementParentAccount && invoiceResponse) {
    return (
      <>
        <Box
          sx={{
            width: "100%",
            height: "100%",
          }}
          ref={componentRef}
          className="print"
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
              engagementParentContact={engagementParentContact}
              engagementDate={engagementDate}
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
            style={{ pageBreakAfter: "always" }}
          >
            <PhasesAndTimeline engagementResponse={engagementResponse} />
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
            className="page-break"
          >
            <Billing
              engClosingDate={engClosingDate}
              invoiceResponse={invoiceResponse}
            />
          </Box>

          {contactedTargets ? (
            <>
              <Box
                sx={{
                  width: "98%",
                  padding: "0.5rem",
                  m: "0 auto 0",
                  borderRight: "2px solid black",
                  borderLeft: "2px solid black",
                  borderBottom: "2px solid black",
                }}
                style={{ pageBreakAfter: "always" }}
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
                className="page-break"
                style={{ pageBreakAfter: "always" }}
              >
                <ContactedTarget contactedTargets={contactedTargets} />
              </Box>
            </>
          ) : (
            <Typography
              sx={{ fontSize: "1rem", textAlign: "center", m: "1rem auto" }}
            >
              No Contacted Target found for this engagement
            </Typography>
          )}

          {campaignDetails?.length > 0 && (
            <Box
              sx={{
                width: "98%",
                padding: "0.5rem",
                m: "0 auto 2rem",
                borderRight: "2px solid black",
                borderLeft: "2px solid black",
                borderBottom: "2px solid black",
              }}
              className="page-break"
            >
              <EmailStats campaignDetails={campaignDetails} />
            </Box>
          )}
        </Box>

        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            m: "1.5rem auto",
          }}
        >
          <Button
            variant="contained"
            onClick={() => {
              setDownloadPdfLoading(true);
              setShowForDownload(true);
              setTimeout(() => {
                handlePrint();
                setDownloadPdfLoading(false);
              }, 2000);
              setTimeout(() => {
                setShowForDownload(false);
              }, 7000);
            }}
          >
            {downloadingPdfLoading ? (
              <CircularProgress size={20} color="inherit" />
            ) : (
              "Download PDF"
            )}
          </Button>
        </Box>
      </>
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
