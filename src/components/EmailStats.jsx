import { Box, Typography } from "@mui/material";
import React from "react";

// import data from "../emailStatsData";

const EmailStats = ({ campaignDetails }) => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        gap: "0.4rem",
      }}
    >
      <Typography
        variant="p"
        fontSize={12}
        fontWeight="bold"
        textAlign="right"
        sx={{ mb: "1.5rem" }}
      >
        Email Campaign Stats:
      </Typography>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          gap: "3rem",
        }}
      >
        {campaignDetails
          .filter(
            (campaign) =>
              campaign?.["campaign-reports"]?.[0]?.emails_sent_count > 0
          )
          .map((campaign, index) => {
            return (
              <Box
                key={index}
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: "1rem",
                }}
              >
                <Typography variant="p" fontSize={12}>
                  Blast #{index + 1} -{" "}
                  {campaign?.["campaign-details"]?.[0]?.created_date_string}
                </Typography>

                <Box>
                  <Typography variant="p" fontSize={18}>
                    {campaign?.["campaign-reports"]?.[0]?.emails_sent_count}
                  </Typography>
                  <Typography variant="p" fontSize={14}>
                    {" "}
                    - Sent Mail
                  </Typography>
                </Box>

                <Box
                  sx={{
                    width: "94%",
                    ml: "1%",
                    height: "6px",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 0,
                  }}
                >
                  <Box
                    sx={{
                      width: `${campaign?.["campaign-reports"]?.[0]?.delivered_percent}%`,
                      height: "100%",
                      backgroundColor: "#7dbf72",
                    }}
                  ></Box>
                  <Box
                    sx={{
                      width: `${campaign?.["campaign-reports"]?.[0]?.bounce_percent}%`,
                      height: "100%",
                      backgroundColor: "#efb49c",
                    }}
                  ></Box>
                  <Box
                    sx={{
                      width: `${campaign?.["campaign-reports"]?.[0]?.unsent_percent}%`,
                      height: "100%",
                      backgroundColor: "#db84a0",
                    }}
                  ></Box>
                </Box>

                <Box
                  sx={{
                    width: "100%",
                    ml: "1%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                  }}
                >
                  <Box
                    sx={{
                      width: "31%",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      gap: "0.4rem",
                    }}
                  >
                    <Box
                      sx={{
                        width: "10px",
                        height: "10px",
                        mt: "2px",
                        backgroundColor: "#7dbf72",
                      }}
                    ></Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        gap: "0.4rem",
                      }}
                    >
                      <Typography variant="p" fontSize={12}>
                        Delivered Emails -{" "}
                        <strong>{`${campaign?.["campaign-reports"]?.[0]?.delivered_percent}%`}</strong>
                      </Typography>
                      <Typography variant="p" fontSize={12}>
                        <strong>{`${campaign?.["campaign-reports"]?.[0]?.delivered_count} - Recipient(s)`}</strong>
                      </Typography>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      width: "31%",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      gap: "0.4rem",
                    }}
                  >
                    <Box
                      sx={{
                        width: "10px",
                        height: "10px",
                        mt: "2px",
                        backgroundColor: "#efb49c",
                      }}
                    ></Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        gap: "0.4rem",
                      }}
                    >
                      <Typography variant="p" fontSize={12}>
                        Bounced Emails -{" "}
                        <strong>{`${campaign?.["campaign-reports"]?.[0]?.bounce_percent}%`}</strong>
                      </Typography>
                      <Typography variant="p" fontSize={12}>
                        <strong>{`${campaign?.["campaign-reports"]?.[0]?.bounces_count} - Recipient(s)`}</strong>
                      </Typography>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      width: "31%",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      gap: "0.4rem",
                    }}
                  >
                    <Box
                      sx={{
                        width: "10px",
                        height: "10px",
                        mt: "2px",
                        backgroundColor: "#db84a0",
                      }}
                    ></Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        gap: "0.4rem",
                      }}
                    >
                      <Typography variant="p" fontSize={12}>
                        Unsent Emails -{" "}
                        <strong>{`${campaign?.["campaign-reports"]?.[0]?.unsent_percent}%`}</strong>
                      </Typography>
                      <Typography variant="p" fontSize={12}>
                        <strong>{`${campaign?.["campaign-reports"]?.[0]?.unsent_count} - Recipient(s)`}</strong>
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                <Box
                  sx={{
                    width: "94%",
                    ml: "1%",
                    height: "6px",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 0,
                  }}
                >
                  <Box
                    sx={{
                      width: `${campaign?.["campaign-reports"]?.[0]?.open_percent}%`,
                      height: "100%",
                      backgroundColor: "#5fa2d7",
                    }}
                  ></Box>
                  <Box
                    sx={{
                      width: `${campaign?.["campaign-reports"]?.[0]?.unopened_percent}%`,
                      height: "100%",
                      backgroundColor: "#e9e9e9",
                    }}
                  ></Box>
                </Box>

                <Box
                  sx={{
                    width: "100%",
                    ml: "1%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                  }}
                >
                  <Box
                    sx={{
                      width: "31%",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      gap: "0.4rem",
                    }}
                  >
                    <Box
                      sx={{
                        width: "10px",
                        height: "10px",
                        mt: "2px",
                        backgroundColor: "#5fa2d7",
                      }}
                    ></Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        gap: "0.4rem",
                      }}
                    >
                      <Typography variant="p" fontSize={12}>
                        Opened Emails -{" "}
                        <strong>{`${campaign?.["campaign-reports"]?.[0]?.open_percent}%`}</strong>
                      </Typography>
                      <Typography variant="p" fontSize={12}>
                        <strong>{`${campaign?.["campaign-reports"]?.[0]?.opens_count} - Recipient(s)`}</strong>
                      </Typography>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      width: "31%",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      gap: "0.4rem",
                    }}
                  >
                    <Box
                      sx={{
                        width: "10px",
                        height: "10px",
                        mt: "2px",
                        backgroundColor: "#e9e9e9",
                      }}
                    ></Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        gap: "0.4rem",
                      }}
                    >
                      <Typography variant="p" fontSize={12}>
                        Unopened Emails -{" "}
                        <strong>{`${campaign?.["campaign-reports"]?.[0]?.unopened_percent}%`}</strong>
                      </Typography>
                      <Typography variant="p" fontSize={12}>
                        <strong>{`${campaign?.["campaign-reports"]?.[0]?.unopened} - Recipient(s)`}</strong>
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                <Box
                  sx={{
                    width: "35%",
                    ml: "1%",
                    height: "6px",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    gap: 0,
                    border: "1px solid #ddd",
                  }}
                >
                  <Box
                    sx={{
                      width: `${campaign?.["campaign-reports"]?.[0]?.clicksperopenrate}%`,
                      height: "100%",
                      backgroundColor: "#f6c272",
                    }}
                  ></Box>
                  <Box
                    sx={{
                      width: `${campaign?.["campaign-reports"]?.[0]?.complaints_percent}%`,
                      height: "100%",
                      backgroundColor: "#efb49c",
                    }}
                  ></Box>
                  <Box
                    sx={{
                      width: `${campaign?.["campaign-reports"]?.[0]?.unsubscribe_percent}%`,
                      height: "100%",
                      backgroundColor: "#db849f",
                    }}
                  ></Box>
                </Box>

                <Box
                  sx={{
                    width: "100%",
                    ml: "1%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                  }}
                >
                  <Box
                    sx={{
                      width: "31%",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      gap: "0.4rem",
                    }}
                  >
                    <Box
                      sx={{
                        width: "10px",
                        height: "10px",
                        mt: "2px",
                        backgroundColor: "#f6c272",
                      }}
                    ></Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        gap: "0.4rem",
                      }}
                    >
                      <Typography variant="p" fontSize={12}>
                        Clicks/Open Rate -{" "}
                        <strong>{`${campaign?.["campaign-reports"]?.[0]?.clicksperopenrate}%`}</strong>
                      </Typography>
                      <Typography variant="p" fontSize={12}>
                        <strong>{`${Math.ceil(
                          (campaign?.["campaign-reports"]?.[0]?.opens_count *
                            campaign?.["campaign-reports"]?.[0]
                              ?.clicksperopenrate) /
                            100
                        )} - Recipient(s)`}</strong>
                      </Typography>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      width: "31%",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      gap: "0.4rem",
                    }}
                  >
                    <Box
                      sx={{
                        width: "10px",
                        height: "10px",
                        mt: "2px",
                        backgroundColor: "#efb49c",
                      }}
                    ></Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        gap: "0.4rem",
                      }}
                    >
                      <Typography variant="p" fontSize={12}>
                        Complaints/Open Rate -{" "}
                        <strong>{`${campaign?.["campaign-reports"]?.[0]?.complaints_percent}%`}</strong>
                      </Typography>
                      <Typography variant="p" fontSize={12}>
                        <strong>{`${campaign?.["campaign-reports"]?.[0]?.complaints_count} - Recipient(s)`}</strong>
                      </Typography>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      width: "31%",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      gap: "0.4rem",
                    }}
                  >
                    <Box
                      sx={{
                        width: "10px",
                        height: "10px",
                        mt: "2px",
                        backgroundColor: "#db849f",
                      }}
                    ></Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        gap: "0.4rem",
                      }}
                    >
                      <Typography variant="p" fontSize={12}>
                        Unsubscribers/Open Rate -{" "}
                        <strong>{`${campaign?.["campaign-reports"]?.[0]?.unsubscribe_percent}%`}</strong>
                      </Typography>
                      <Typography variant="p" fontSize={12}>
                        <strong>{`${campaign?.["campaign-reports"]?.[0]?.unsub_count} - Recipient(s)`}</strong>
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            );
          })}
      </Box>
    </Box>
  );
};

export default EmailStats;
