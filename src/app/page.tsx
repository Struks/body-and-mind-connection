"use client";

import { Box, Container, Stack } from "@mui/material";

//* Custom components
import AppHomeNeuronsSection from "./component/app-home/AppHomeNeuronsSection";
import AppHomeAboutSection from "./component/app-home/AppHomeAboutSection";

export default function Home() {
  return (
    <Box
      component={"div"}
      sx={{
        backgroundImage: "url('/assets/images/connection-bg-neurons.jpg')",

        backgroundSize: "cover",
        backgroundPosition: "top left",
        backgroundAttachment: "fixed",
        display: "flex", // Use flexbox to align content
        flexDirection: "column", // Ensure content stacks vertically
        justifyContent: "center", // Center content vertically
        alignItems: "center", // Center content horizontally
        overflow: "auto",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          textAlign: "center",
          overflow: "hidden",
        }}
      >
        <Stack direction="column" spacing={{ xs: 2, md: 9 }}>
          <AppHomeNeuronsSection />

          <AppHomeAboutSection />
        </Stack>
      </Container>
    </Box>
  );
}
