"use client";

import { Container, Stack } from "@mui/material";

//* Custom components
import AppHomeNeuronsSection from "./component/app-home/AppHomeNeuronsSection";
import AppHomeAboutSection from "./component/app-home/AppHomeAboutSection";

export default function Home() {
  return (
    <Container maxWidth="xl" sx={{ textAlign: "center", overflow: "hidden" }}>
      <Stack direction="column" spacing={{ xs: 2, md: 9 }}>
        <AppHomeNeuronsSection />

        <AppHomeAboutSection />
      </Stack>
    </Container>
  );
}
