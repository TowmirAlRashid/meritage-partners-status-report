import { Box, Typography } from '@mui/material'
import React from 'react'

import data from "../tallyData"

const TallyOfActivities = () => {
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
        <Typography variant='p' fontSize={12} fontWeight="bold" textAlign="right">Tally Of Activities</Typography>

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
            <Box
                sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "flex-start"
                }}
            >
                <Typography variant='p' fontSize={12} fontWeight="bold" textAlign="left" sx={{ width: "10%", ml: "5rem" }}>Date</Typography>
                <Typography variant='p' fontSize={12} fontWeight="bold" textAlign="left" sx={{ width: "90%" }}>Action</Typography>
            </Box>

            {
                data.map(singleData => {
                    return (
                        <Box
                            sx={{
                                width: "100%",
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "flex-start",
                                alignItems: "flex-start"
                            }}
                            key={singleData.id}
                        >
                            <Typography variant='p' fontSize={12} textAlign="left" sx={{ width: "10%", ml: "5rem" }}>{singleData.date}</Typography>
                            <Typography variant='p' fontSize={12} textAlign="left" sx={{ width: "90%" }}>{singleData.action}</Typography>
                        </Box>
                    )
                })
            }
        </Box>
    </Box>
  )
}

export default TallyOfActivities