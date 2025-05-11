"use client";

import { Box, CircularProgress, Typography } from "@mui/material";

export default function Loading() {
  return (
    <Box
      height="60vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <CircularProgress size={40} />
      <Typography variant="body2" mt={2}>
        Učitavanje postova...
      </Typography>
    </Box>
  );
}
