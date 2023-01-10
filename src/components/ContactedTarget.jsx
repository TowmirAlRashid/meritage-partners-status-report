import { Box, Typography } from '@mui/material'
import React from 'react'

import data from "../contactedTargetData"

const ContactedTarget = () => {
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
        <Typography variant='p' fontSize={12} fontWeight="bold" textAlign="right">Contacted Targets Breakdown:</Typography>

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
                <Typography variant='p' fontSize={12} fontWeight="bold" textAlign="left" sx={{ width: "15%" }}>Name</Typography>
                <Typography variant='p' fontSize={12} fontWeight="bold" textAlign="left" sx={{ width: "15%" }}>Group</Typography>
                <Typography variant='p' fontSize={12} fontWeight="bold" textAlign="left" sx={{ width: "15%" }}>Status</Typography>
                <Typography variant='p' fontSize={12} fontWeight="bold" textAlign="left" sx={{ width: "15%" }}>Source</Typography>
                <Typography variant='p' fontSize={12} fontWeight="bold" textAlign="left" sx={{ width: "40%" }}>Note</Typography>
            </Box>

            {
                data.map(singleData => {
                    return (
                        <Box
                            k
                            sx={{
                                width: "100%",
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "flex-start",
                                alignItems: "flex-start"
                            }}
                        >
                            <Typography variant='p' fontSize={12} textAlign="left" sx={{ width: "15%" }}>{singleData.name}</Typography>
                            <Typography variant='p' fontSize={12} textAlign="left" sx={{ width: "15%" }}>{singleData.group}</Typography>
                            <Typography variant='p' fontSize={12} textAlign="left" sx={{ width: "15%" }}>{singleData.status}</Typography>
                            <Typography variant='p' fontSize={12} textAlign="left" sx={{ width: "15%" }}>{singleData.source}</Typography>
                            <Typography variant='p' fontSize={12} textAlign="left" sx={{ width: "40%" }}>{singleData.note}</Typography>
                        </Box>
                    )
                }) 
            }
        </Box>
    </Box>
  )
}

export default ContactedTarget