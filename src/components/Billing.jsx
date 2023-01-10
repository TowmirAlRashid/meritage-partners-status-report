import { Box, Typography } from '@mui/material'
import React from 'react'

import data from "../monthlyStatus";

const Billing = () => {

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
        <Typography variant='p' fontSize={12} fontWeight="bold" textAlign="right">Billing</Typography>

        <Box
            sx={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                gap: "1rem"
            }}
        >
            <Box
                sx={{
                    width: "32%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    gap: "0.4rem"
                }}
            >
                <Box
                    sx={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                    }}
                >
                    <Typography variant='p' fontSize={12} fontWeight="bold" sx={{ width: "40%" }}>Retainer:</Typography>
                    <Typography variant='p' fontSize={12} fontWeight="bold" sx={{ width: "60%" }}>Status:</Typography>
                </Box>

                <Box
                    sx={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                    }}
                >
                    <Typography variant='p' fontSize={12} sx={{ width: "40%" }}>{data?.[0]?.month}</Typography>
                    <Typography variant='p' fontSize={12} sx={{ width: "60%" }}>{data?.[0]?.status}</Typography>
                </Box>

                <Box
                    sx={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                    }}
                >
                    <Typography variant='p' fontSize={12} sx={{ width: "40%" }}>{data?.[1]?.month}</Typography>
                    <Typography variant='p' fontSize={12} sx={{ width: "60%" }}>{data?.[1]?.status}</Typography>
                </Box>

                <Box
                    sx={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                    }}
                >
                    <Typography variant='p' fontSize={12} sx={{ width: "40%" }}>{data?.[2]?.month}</Typography>
                    <Typography variant='p' fontSize={12} sx={{ width: "60%" }}>{data?.[2]?.status}</Typography>
                </Box>

                <Box
                    sx={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                    }}
                >
                    <Typography variant='p' fontSize={12} sx={{ width: "40%" }}>{data?.[3]?.month}</Typography>
                    <Typography variant='p' fontSize={12} sx={{ width: "60%" }}>{data?.[3]?.status}</Typography>
                </Box>
            </Box>

            <Box
                sx={{
                    width: "32%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    gap: "0.4rem"
                }}
            >
                <Box
                    sx={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                    }}
                >
                    <Typography variant='p' fontSize={12} fontWeight="bold" sx={{ width: "40%" }}>Retainer:</Typography>
                    <Typography variant='p' fontSize={12} fontWeight="bold" sx={{ width: "60%" }}>Status:</Typography>
                </Box>

                <Box
                    sx={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                    }}
                >
                    <Typography variant='p' fontSize={12} sx={{ width: "40%" }}>{data?.[4]?.month}</Typography>
                    <Typography variant='p' fontSize={12} sx={{ width: "60%" }}>{data?.[4]?.status}</Typography>
                </Box>

                <Box
                    sx={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                    }}
                >
                    <Typography variant='p' fontSize={12} sx={{ width: "40%" }}>{data?.[5]?.month}</Typography>
                    <Typography variant='p' fontSize={12} sx={{ width: "60%" }}>{data?.[5]?.status}</Typography>
                </Box>

                <Box
                    sx={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                    }}
                >
                    <Typography variant='p' fontSize={12} sx={{ width: "40%" }}>{data?.[6]?.month}</Typography>
                    <Typography variant='p' fontSize={12} sx={{ width: "60%" }}>{data?.[6]?.status}</Typography>
                </Box>

                <Box
                    sx={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                    }}
                >
                    <Typography variant='p' fontSize={12} sx={{ width: "40%" }}>{data?.[7]?.month}</Typography>
                    <Typography variant='p' fontSize={12} sx={{ width: "60%" }}>{data?.[7]?.status}</Typography>
                </Box>
            </Box>

            <Box
                sx={{
                    width: "32%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    gap: "0.4rem"
                }}
            >
                <Box
                    sx={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                    }}
                >
                    <Typography variant='p' fontSize={12} fontWeight="bold" sx={{ width: "40%" }}>Retainer:</Typography>
                    <Typography variant='p' fontSize={12} fontWeight="bold" sx={{ width: "60%" }}>Status:</Typography>
                </Box>

                <Box
                    sx={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                    }}
                >
                    <Typography variant='p' fontSize={12} sx={{ width: "40%" }}>{data?.[8]?.month}</Typography>
                    <Typography variant='p' fontSize={12} sx={{ width: "60%" }}>{data?.[8]?.status}</Typography>
                </Box>

                <Box
                    sx={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                    }}
                >
                    <Typography variant='p' fontSize={12} sx={{ width: "40%" }}>{data?.[9]?.month}</Typography>
                    <Typography variant='p' fontSize={12} sx={{ width: "60%" }}>{data?.[9]?.status}</Typography>
                </Box>

                <Box
                    sx={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                    }}
                >
                    <Typography variant='p' fontSize={12} sx={{ width: "40%" }}>{data?.[10]?.month}</Typography>
                    <Typography variant='p' fontSize={12} sx={{ width: "60%" }}>{data?.[10]?.status}</Typography>
                </Box>

                <Box
                    sx={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                    }}
                >
                    <Typography variant='p' fontSize={12} sx={{ width: "40%" }}>{data?.[11]?.month}</Typography>
                    <Typography variant='p' fontSize={12} sx={{ width: "60%" }}>{data?.[11]?.status}</Typography>
                </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default Billing