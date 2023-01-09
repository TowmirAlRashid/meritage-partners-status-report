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
                        <Typography variant='p' fontSize={12}  textAlign="left">7. CLOSE</Typography>
                    </Box>
                </Box>
            </Box>

            <Box>hi</Box>
        </Box>

        <Box>hi</Box>
    </Box>
  )
}

export default PhasesAndTimeline