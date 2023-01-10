import { Box, Typography } from '@mui/material'
import React from 'react'

import data from "../emailStatsData"

const EmailStats = () => {
  return (
    <Box
        sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: "0.4rem"
        }}
    >
        <Typography variant='p' fontSize={12} fontWeight="bold" textAlign="right" sx={{ mb: "1.5rem" }}>Email Campaign Stats:</Typography>

        <Box
            sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                gap: "3rem"
            }}
        >
            {
                data.map(singleData => {
                    return (
                        <Box
                            key={singleData.id}
                            sx={{
                                width: "100%",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "flex-start",
                                alignItems: "flex-start",
                                gap: "1rem"
                            }}
                        >
                            <Typography variant='p' fontSize={12}>Blast #{singleData.id} - {singleData.date}</Typography>

                            <Box>
                                <Typography variant='p' fontSize={18}>{singleData.total_mails}</Typography>
                                <Typography variant='p' fontSize={14}> - Sent Mail</Typography>
                            </Box>

                            <Box
                                sx={{
                                    width: "94%",
                                    ml: "1%",
                                    height: "6px",
                                    display: 'flex',
                                    flexDirection: "row",
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: 0
                                }}
                            >
                                <Box
                                    sx={{
                                        width: `${singleData.delivered_mails}%`,
                                        height: "100%",
                                        backgroundColor: "#7dbf72"
                                    }}
                                ></Box>
                                <Box
                                    sx={{
                                        width: `${singleData.bounced_mails}%`,
                                        height: "100%",
                                        backgroundColor: "#efb49c"
                                    }}
                                ></Box>
                                <Box
                                    sx={{
                                        width: `${singleData.unsent_mails}%`,
                                        height: "100%",
                                        backgroundColor: "#db84a0"
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
                                        display: 'flex',
                                        flexDirection: "row",
                                        justifyContent: "flex-start",
                                        alignItems: "flex-start",
                                        gap: "0.4rem"
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: "10px",
                                            height: "10px",
                                            mt: "2px",
                                            backgroundColor: "#7dbf72"
                                        }}
                                    ></Box>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: "flex-start",
                                            alignItems: "flex-start",
                                            gap: "0.4rem"
                                        }}
                                    >
                                        <Typography variant='p' fontSize={12}>Delivered Emails - <strong>{`${singleData.delivered_mails}%`}</strong></Typography>
                                        <Typography variant='p' fontSize={12}><strong>{`${singleData.delivered_mails_recipients} - Recipient(s)`}</strong></Typography>
                                    </Box>
                                </Box>

                                <Box
                                    sx={{
                                        width: "31%",
                                        display: 'flex',
                                        flexDirection: "row",
                                        justifyContent: "flex-start",
                                        alignItems: "flex-start",
                                        gap: "0.4rem"
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: "10px",
                                            height: "10px",
                                            mt: "2px",
                                            backgroundColor: "#efb49c"
                                        }}
                                    ></Box>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: "flex-start",
                                            alignItems: "flex-start",
                                            gap: "0.4rem"
                                        }}
                                    >
                                        <Typography variant='p' fontSize={12}>Bounced Emails - <strong>{`${singleData.bounced_mails}%`}</strong></Typography>
                                        <Typography variant='p' fontSize={12}><strong>{`${singleData.bounced_mails_recipients} - Recipient(s)`}</strong></Typography>
                                    </Box>
                                </Box>

                                <Box
                                    sx={{
                                        width: "31%",
                                        display: 'flex',
                                        flexDirection: "row",
                                        justifyContent: "flex-start",
                                        alignItems: "flex-start",
                                        gap: "0.4rem"
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: "10px",
                                            height: "10px",
                                            mt: "2px",
                                            backgroundColor: "#db84a0"
                                        }}
                                    ></Box>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: "flex-start",
                                            alignItems: "flex-start",
                                            gap: "0.4rem"
                                        }}
                                    >
                                        <Typography variant='p' fontSize={12}>Unsent Emails - <strong>{`${singleData.unsent_mails}%`}</strong></Typography>
                                        <Typography variant='p' fontSize={12}><strong>{`${singleData.unsent_mails_recipients} - Recipient(s)`}</strong></Typography>
                                    </Box>
                                </Box>

                            </Box>

                            <Box
                                sx={{
                                    width: "94%",
                                    ml: "1%",
                                    height: "6px",
                                    display: 'flex',
                                    flexDirection: "row",
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: 0
                                }}
                            >
                                <Box
                                    sx={{
                                        width: `${singleData.opened_mails}%`,
                                        height: "100%",
                                        backgroundColor: "#5fa2d7"
                                    }}
                                ></Box>
                                <Box
                                    sx={{
                                        width: `${singleData.unopened_mails}%`,
                                        height: "100%",
                                        backgroundColor: "#e9e9e9"
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
                                        display: 'flex',
                                        flexDirection: "row",
                                        justifyContent: "flex-start",
                                        alignItems: "flex-start",
                                        gap: "0.4rem"
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: "10px",
                                            height: "10px",
                                            mt: "2px",
                                            backgroundColor: "#5fa2d7"
                                        }}
                                    ></Box>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: "flex-start",
                                            alignItems: "flex-start",
                                            gap: "0.4rem"
                                        }}
                                    >
                                        <Typography variant='p' fontSize={12}>Opened Emails - <strong>{`${singleData.opened_mails}%`}</strong></Typography>
                                        <Typography variant='p' fontSize={12}><strong>{`${singleData.opened_mails_recipients} - Recipient(s)`}</strong></Typography>
                                    </Box>
                                </Box>

                                <Box
                                    sx={{
                                        width: "31%",
                                        display: 'flex',
                                        flexDirection: "row",
                                        justifyContent: "flex-start",
                                        alignItems: "flex-start",
                                        gap: "0.4rem"
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: "10px",
                                            height: "10px",
                                            mt: "2px",
                                            backgroundColor: "#e9e9e9"
                                        }}
                                    ></Box>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: "flex-start",
                                            alignItems: "flex-start",
                                            gap: "0.4rem"
                                        }}
                                    >
                                        <Typography variant='p' fontSize={12}>Unopened Emails - <strong>{`${singleData.unopened_mails}%`}</strong></Typography>
                                        <Typography variant='p' fontSize={12}><strong>{`${singleData.unopened_mails_recipients} - Recipient(s)`}</strong></Typography>
                                    </Box>
                                </Box>
                            </Box>

                            <Box
                                sx={{
                                    width: "35%",
                                    ml: "1%",
                                    height: "6px",
                                    display: 'flex',
                                    flexDirection: "row",
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    gap: 0,
                                    border: "1px solid #ddd"
                                }}
                            >
                                <Box
                                    sx={{
                                        width: `${singleData.click_open_rate}%`,
                                        height: "100%",
                                        backgroundColor: "#f6c272"
                                    }}
                                ></Box>
                                <Box
                                    sx={{
                                        width: `${singleData.complaint_open_rate}%`,
                                        height: "100%",
                                        backgroundColor: "#efb49c"
                                    }}
                                ></Box>
                                <Box
                                    sx={{
                                        width: `${singleData.unsubscribers_open_rate}%`,
                                        height: "100%",
                                        backgroundColor: "#db849f"
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
                                        display: 'flex',
                                        flexDirection: "row",
                                        justifyContent: "flex-start",
                                        alignItems: "flex-start",
                                        gap: "0.4rem"
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: "10px",
                                            height: "10px",
                                            mt: "2px",
                                            backgroundColor: "#f6c272"
                                        }}
                                    ></Box>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: "flex-start",
                                            alignItems: "flex-start",
                                            gap: "0.4rem"
                                        }}
                                    >
                                        <Typography variant='p' fontSize={12}>Clicks/Open Rate - <strong>{`${singleData.click_open_rate}%`}</strong></Typography>
                                        <Typography variant='p' fontSize={12}><strong>{`${singleData.click_open_racipients} - Recipient(s)`}</strong></Typography>
                                    </Box>
                                </Box>

                                <Box
                                    sx={{
                                        width: "31%",
                                        display: 'flex',
                                        flexDirection: "row",
                                        justifyContent: "flex-start",
                                        alignItems: "flex-start",
                                        gap: "0.4rem"
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: "10px",
                                            height: "10px",
                                            mt: "2px",
                                            backgroundColor: "#efb49c"
                                        }}
                                    ></Box>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: "flex-start",
                                            alignItems: "flex-start",
                                            gap: "0.4rem"
                                        }}
                                    >
                                        <Typography variant='p' fontSize={12}>Complaints/Open Rate - <strong>{`${singleData.complaint_open_rate}%`}</strong></Typography>
                                        <Typography variant='p' fontSize={12}><strong>{`${singleData.complaint_open_racipients} - Recipient(s)`}</strong></Typography>
                                    </Box>
                                </Box>

                                <Box
                                    sx={{
                                        width: "31%",
                                        display: 'flex',
                                        flexDirection: "row",
                                        justifyContent: "flex-start",
                                        alignItems: "flex-start",
                                        gap: "0.4rem"
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: "10px",
                                            height: "10px",
                                            mt: "2px",
                                            backgroundColor: "#db849f"
                                        }}
                                    ></Box>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: "flex-start",
                                            alignItems: "flex-start",
                                            gap: "0.4rem"
                                        }}
                                    >
                                        <Typography variant='p' fontSize={12}>Unsubscribers/Open Rate - <strong>{`${singleData.unsubscribers_open_rate}%`}</strong></Typography>
                                        <Typography variant='p' fontSize={12}><strong>{`${singleData.unsubscribers_open_racipients} - Recipient(s)`}</strong></Typography>
                                    </Box>
                                </Box>

                            </Box>
                        </Box>
                    )
                })
            }
        </Box>
    </Box>
  )
}

export default EmailStats