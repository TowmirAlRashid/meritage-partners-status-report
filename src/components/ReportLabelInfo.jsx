import { Box, Typography } from '@mui/material'
import React from 'react'

import Logo from "../assets/Logo.png"

const ReportLabelInfo = () => {
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
                    width: "48%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    textAlign: "left",
                    gap: "0.4rem"
                }}
            >
                <Box
                    sx={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                    }}
                >
                    <Box
                        sx={{
                            width: "22%",
                            textAlign: "right",
                            mr: "0.5rem"
                        }}
                    >
                        <Typography variant='p' fontSize={12} fontWeight="bold" textAlign="right">Project Name:</Typography>
                    </Box>
                    <Box>
                        <Typography variant='p' fontSize={12}>Project Possible</Typography>
                    </Box>
                </Box>

                <Box
                    sx={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                    }}
                >
                    <Box
                        sx={{
                            width: "22%",
                            textAlign: "right",
                            mr: "0.5rem"
                        }}
                    >
                        <Typography variant='p' fontSize={12} fontWeight="bold" textAlign="right">Company Name:</Typography>
                    </Box>
                    <Box>
                        <Typography variant='p' fontSize={12}>ABC Industries, Inc</Typography>
                    </Box>
                </Box>

                <Box
                    sx={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                    }}
                >
                    <Box
                        sx={{
                            width: "22%",
                            textAlign: "right",
                            mr: "0.5rem"
                        }}
                    >
                        <Typography variant='p' fontSize={12} fontWeight="bold" textAlign="right">Address:</Typography>
                    </Box>
                    <Box>
                        <Typography variant='p' fontSize={12}>12345 Mainstreet <br /> Laguna Beach, CA <br /> 92651</Typography>
                    </Box>
                </Box>

                <Box
                    sx={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                    }}
                >
                    <Box
                        sx={{
                            width: "22%",
                            textAlign: "right",
                            mr: "0.5rem"
                        }}
                    >
                        <Typography variant='p' fontSize={12} fontWeight="bold" textAlign="right">Primary Contact:</Typography>
                    </Box>
                    <Box>
                        <Typography variant='p' fontSize={12}>Brian Perry <br /> brianperry01@gmail.com <br /> 909-702-2775</Typography>
                    </Box>
                </Box>

                <Box
                    sx={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                    }}
                >
                    <Box
                        sx={{
                            width: "22%",
                            textAlign: "right",
                            mr: "0.5rem"
                        }}
                    >
                        <Typography variant='p' fontSize={12} fontWeight="bold" textAlign="right">Engagement Date:</Typography>
                    </Box>
                    <Box>
                        <Typography variant='p' fontSize={12}>December 14th, 2022 </Typography>
                    </Box>
                </Box>
            </Box>

            <Box
                sx={{
                    width: "48%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                    justifyContent: "flex-end",
                    textAlign: "right"
                }}
            >
                <Box sx={{ textAlign: "right", width: "15rem" }}>
                    <img
                        src={Logo}
                        alt="company logo"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "cover"
                        }}          
                    />
                </Box>
                <Typography variant='p' fontSize={12} lineHeight="1.3rem">2901 West Coast Hwy, Suite 200</Typography>
                <Typography variant='p' fontSize={12} lineHeight="1.3rem">Newport Beach, CA 92663</Typography>
                <Typography variant='p' fontSize={12} lineHeight="1.3rem">Meritage Contact: Brian Perry</Typography>
                <Typography variant='p' fontSize={12} lineHeight="1.3rem">bperry@meritage-partners.com</Typography>
                <Typography variant='p' fontSize={12} lineHeight="1.3rem">cell 909-702-2775</Typography>
            </Box>
        </Box>

        <Box
            sx={{
                width: "100%"
            }}
        >
            <Typography textAlign='center' variant='h6' fontWeight='bold'>
                Status Report: Week of 1/1/22
            </Typography>
        </Box>
    </Box>
  )
}

export default ReportLabelInfo