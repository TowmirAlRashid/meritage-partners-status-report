import { Box, Typography } from "@mui/material";
import React from "react";

const Billing = ({ engClosingDate, invoiceResponse }) => {
  function getMonths(closingDate) {
    const closing = new Date(closingDate);
    const closingMonth = closing.getMonth();
    const months = [];

    for (let i = closingMonth; i <= 11; i++) {
      months.push(i);
    }

    for (let i = 0; i < closingMonth; i++) {
      months.push(i);
    }

    return months;
  }
  const monthNumbers = getMonths(engClosingDate);

  function processMonthsData(months, invoiceArray) {
    // Sort the input array of objects by date in ascending order
    invoiceArray?.sort((a, b) => {
      const dateA = new Date(a?.date);
      const dateB = new Date(b?.date);
      return dateA - dateB;
    });

    // Create an array of objects representing each month
    const monthData = months.map((month, index) => {
      const monthNumber = index + 1;
      const monthName = `month ${monthNumber}`;
      const dataForMonth = invoiceArray?.find((item) => {
        const itemDate = new Date(item?.date);
        const itemMonth = itemDate.getMonth();
        return itemMonth === month;
      });
      const status = dataForMonth ? dataForMonth?.status : "";
      return {
        month: monthName,
        status: status,
      };
    });

    return monthData;
  }

  const data = processMonthsData(monthNumbers, invoiceResponse?.data);

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
      <Typography variant="p" fontSize={12} fontWeight="bold" textAlign="right">
        Billing
      </Typography>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          gap: "1rem",
        }}
      >
        <Box
          sx={{
            width: "32%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: "0.4rem",
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
            <Typography
              variant="p"
              fontSize={12}
              fontWeight="bold"
              sx={{ width: "40%" }}
            >
              Retainer:
            </Typography>
            <Typography
              variant="p"
              fontSize={12}
              fontWeight="bold"
              sx={{ width: "60%" }}
            >
              Status:
            </Typography>
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
            <Typography variant="p" fontSize={12} sx={{ width: "40%" }}>
              {data?.[0]?.month}
            </Typography>
            <Typography variant="p" fontSize={12} sx={{ width: "60%" }}>
              {data?.[0]?.status}
            </Typography>
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
            <Typography variant="p" fontSize={12} sx={{ width: "40%" }}>
              {data?.[1]?.month}
            </Typography>
            <Typography variant="p" fontSize={12} sx={{ width: "60%" }}>
              {data?.[1]?.status}
            </Typography>
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
            <Typography variant="p" fontSize={12} sx={{ width: "40%" }}>
              {data?.[2]?.month}
            </Typography>
            <Typography variant="p" fontSize={12} sx={{ width: "60%" }}>
              {data?.[2]?.status}
            </Typography>
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
            <Typography variant="p" fontSize={12} sx={{ width: "40%" }}>
              {data?.[3]?.month}
            </Typography>
            <Typography variant="p" fontSize={12} sx={{ width: "60%" }}>
              {data?.[3]?.status}
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            width: "32%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: "0.4rem",
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
            <Typography
              variant="p"
              fontSize={12}
              fontWeight="bold"
              sx={{ width: "40%" }}
            >
              Retainer:
            </Typography>
            <Typography
              variant="p"
              fontSize={12}
              fontWeight="bold"
              sx={{ width: "60%" }}
            >
              Status:
            </Typography>
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
            <Typography variant="p" fontSize={12} sx={{ width: "40%" }}>
              {data?.[4]?.month}
            </Typography>
            <Typography variant="p" fontSize={12} sx={{ width: "60%" }}>
              {data?.[4]?.status}
            </Typography>
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
            <Typography variant="p" fontSize={12} sx={{ width: "40%" }}>
              {data?.[5]?.month}
            </Typography>
            <Typography variant="p" fontSize={12} sx={{ width: "60%" }}>
              {data?.[5]?.status}
            </Typography>
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
            <Typography variant="p" fontSize={12} sx={{ width: "40%" }}>
              {data?.[6]?.month}
            </Typography>
            <Typography variant="p" fontSize={12} sx={{ width: "60%" }}>
              {data?.[6]?.status}
            </Typography>
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
            <Typography variant="p" fontSize={12} sx={{ width: "40%" }}>
              {data?.[7]?.month}
            </Typography>
            <Typography variant="p" fontSize={12} sx={{ width: "60%" }}>
              {data?.[7]?.status}
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            width: "32%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: "0.4rem",
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
            <Typography
              variant="p"
              fontSize={12}
              fontWeight="bold"
              sx={{ width: "40%" }}
            >
              Retainer:
            </Typography>
            <Typography
              variant="p"
              fontSize={12}
              fontWeight="bold"
              sx={{ width: "60%" }}
            >
              Status:
            </Typography>
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
            <Typography variant="p" fontSize={12} sx={{ width: "40%" }}>
              {data?.[8]?.month}
            </Typography>
            <Typography variant="p" fontSize={12} sx={{ width: "60%" }}>
              {data?.[8]?.status}
            </Typography>
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
            <Typography variant="p" fontSize={12} sx={{ width: "40%" }}>
              {data?.[9]?.month}
            </Typography>
            <Typography variant="p" fontSize={12} sx={{ width: "60%" }}>
              {data?.[9]?.status}
            </Typography>
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
            <Typography variant="p" fontSize={12} sx={{ width: "40%" }}>
              {data?.[10]?.month}
            </Typography>
            <Typography variant="p" fontSize={12} sx={{ width: "60%" }}>
              {data?.[10]?.status}
            </Typography>
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
            <Typography variant="p" fontSize={12} sx={{ width: "40%" }}>
              {data?.[11]?.month}
            </Typography>
            <Typography variant="p" fontSize={12} sx={{ width: "60%" }}>
              {data?.[11]?.status}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Billing;
