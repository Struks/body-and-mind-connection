"use client";

import { Box, Stack, Typography } from "@mui/material";

interface AppQuotesProps {
  children: React.ReactNode;
  author: string;
  title: string;
}

const AppQuotes = ({ children, author, title }: AppQuotesProps) => {
  return (
    <Stack
      direction="column"
      spacing={4}
      sx={{ textAlign: "center", mt: 4, maxWidth: "360px", mx: "auto" }}
    >
      <Box
        component={"div"}
        sx={{
          backgroundImage: "url('/assets/images/brush-stroke.png')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          padding: { xs: ".8rem", sm: "1rem", md: "1.5rem" },
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "18px", sm: "21px", md: "28px" },
          }}
        >
          {title}
        </Typography>
      </Box>

      <Box
        component={"div"}
        sx={{
          backgroundColor: "quotesPink.main",
          borderRadius: "20px",
          padding: { xs: ".8rem", sm: "1rem", md: "1.5rem" },
        }}
      >
        {children}

        <Typography
          variant="body2"
          sx={{
            mt: 2,
            fontWeight: "bold",
            color: "#1a237e",
          }}
        >
          - {author} -
        </Typography>
      </Box>
    </Stack>
  );
};

export default AppQuotes;
