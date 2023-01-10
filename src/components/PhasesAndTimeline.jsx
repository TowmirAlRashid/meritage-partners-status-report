import { Box, Typography } from '@mui/material'
import React from 'react'

const PhasesAndTimeline = () => {
  return (
    <Box
        sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem"
        }}
    >
        <Box
            sx={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "flex-start",
                gap: "1rem"
            }}
        >
            <Box
                sx={{
                    width: "30%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: "0.4rem"
                }}
            >
                <Typography variant='p' fontSize={12} fontWeight="bold" textAlign="right">Phases: </Typography>

                <Box
                    sx={{
                        width: "70%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        gap: "0"
                    }}
                >
                    <Box
                        sx={{
                            width: "100%",
                            backgroundColor: "#ead1dc",
                            pl: "0.4rem",
                            pt: "0.2rem",
                            pb: "0.2rem"
                        }}
                    >
                        <Typography variant='p' fontSize={12}  textAlign="left">1. On Boarding/Intake </Typography>
                    </Box>
                    <Box
                        sx={{
                            width: "100%",
                            backgroundColor: "#d9d2e9",
                            pl: "0.4rem",
                            pt: "0.2rem",
                            pb: "0.2rem"
                        }}
                    >
                        <Typography variant='p' fontSize={12}  textAlign="left">2. Pre-Market Prep</Typography>
                    </Box>
                    <Box
                        sx={{
                            width: "100%",
                            backgroundColor: "#d9ead3",
                            pl: "0.4rem",
                            pt: "0.2rem",
                            pb: "0.2rem"
                        }}
                    >
                        <Typography variant='p' fontSize={12}  textAlign="left">3. Marketing</Typography>
                    </Box>
                    <Box
                        sx={{
                            width: "100%",
                            backgroundColor: "#a4c2f4",
                            pl: "0.4rem",
                            pt: "0.2rem",
                            pb: "0.2rem"
                        }}
                    >
                        <Typography variant='p' fontSize={12}  textAlign="left">4. Negotiations</Typography>
                    </Box>
                    <Box
                        sx={{
                            width: "100%",
                            backgroundColor: "#f9cb9c",
                            pl: "0.4rem",
                            pt: "0.2rem",
                            pb: "0.2rem"
                        }}
                    >
                        <Typography variant='p' fontSize={12}  textAlign="left">5. Due Dilegence</Typography>
                    </Box>
                    <Box
                        sx={{
                            width: "100%",
                            backgroundColor: "#a2c4c9",
                            pl: "0.4rem",
                            pt: "0.2rem",
                            pb: "0.2rem"
                        }}
                    >
                        <Typography variant='p' fontSize={12}  textAlign="left">6. Definitive Agreements</Typography>
                    </Box>
                    <Box
                        sx={{
                            width: "100%",
                            backgroundColor: "#ffe599",
                            pl: "0.4rem",
                            pt: "0.2rem",
                            pb: "0.2rem"
                        }}
                    >
                        <Typography variant='p' fontSize={12}  textAlign="left">7. Close</Typography>
                    </Box>
                </Box>
            </Box>

            <Box
                sx={{
                    width: "70%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: "0.4rem"
                }}
            >
                <Typography variant='p' fontSize={12} fontWeight="bold" textAlign="right">Timeline & Expectations:</Typography>

                <Typography variant='p' fontSize={12} textAlign="left" lineHeight={1.5}>
                    Pre Market preparation has a handful of items and tasks to check to keep us on track. Once on-boarding is finished, we will
                    begin the financial analysis to find the adjusted EBITDA, run projections, and forecasting. A preliminary Due Diligence sheet
                    will be sent as well to prepare for some of the TQL's (tough questions list) that groups will ask for and will be needed in DD.
                    During this phase Meritage will create all necessary documentation that will be received in the market place.
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
                gap: "1rem"
            }}
        >
            <Box
                sx={{
                    width: "30%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: "0.4rem"
                }}
            >
                <Typography variant='p' fontSize={12} fontWeight="bold" textAlign="right">Current Phase:</Typography>

                <Box
                    sx={{
                        width: "70%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        gap: "0"
                    }}
                >
                    <Box
                        sx={{
                            width: "100%",
                            backgroundColor: "#d9d2e9",
                            pl: "0.4rem",
                            pt: "0.2rem",
                            pb: "0.2rem"
                        }}
                    >
                        <Typography variant='p' fontSize={12}  textAlign="left">PRE-MARKET PREP</Typography>
                    </Box>
                </Box>
            </Box>

            <Box
                sx={{
                    width: "70%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: "0.4rem"
                }}
            >
                <Typography variant='p' fontSize={12} fontWeight="bold" textAlign="right">Notes:</Typography>

                <Typography variant='p' fontSize={12} textAlign="left">
                    We aim to be out of pre-market phase by February 16th, 2023
                </Typography>

                <Typography variant='p' fontSize={12} fontWeight="bold" textAlign="right">Next Action Item:</Typography>

                <Typography variant='p' fontSize={12} textAlign="left">
                    Schedule CIM review with Brian Perry from ABC Industries
                </Typography>
            </Box>
        </Box>
    </Box>
  )
}

export default PhasesAndTimeline