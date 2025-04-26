import React from "react";
import {
  Typography,
  Box,
  Container,
  Stack,
  Link,
  useMediaQuery,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";
import opacityActiveStyles from "@/theme/opacityActiveStyles";

//* Custom components
import AppNeuronsSlideShow from "./AppNeuronsSlideShow";
import AppQuotes from "./AppQuotes";
import AppNeuronsHeaderIcons from "./AppNeuronsHeaderIcons";
import AppHomeNeuronsWelcomeBox from "./AppNeuronsWelcomeBox";

const AppHomeNeuronSection: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); // Use theme breakpoints for better responsiveness

  return (
    <Stack
      direction="column"
      alignItems="center"
      gap={{ xs: 0, md: 4 }}
      pb={4}
      spacing={4}
      sx={{
        height: { xs: "auto", md: "100vh" },
        justifyContent: "flex-start",
      }}
    >
      {/* <Typography
        variant="h1"
        sx={{
          fontSize: { xs: "1.5rem", md: "2rem", lg: "2.7rem", xl: "3.5rem" },
          color: "textPrimary.main",
          textAlign: "center",
          textShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
        }}
      >
        Dobrodošli na mjesto priča, misli i istraživanja <br /> o onome što nas
        čini povezanima – i ljudima.
      </Typography> */}

      <AppNeuronsHeaderIcons />

      {/* Only for mobile view */}
      {isMobile && <AppHomeNeuronsWelcomeBox />}

      <Grid
        container
        spacing={4}
        justifyContent={"space-between"}
        alignContent={"space-between"}
        width={"100%"}
        pb={{ xs: 9, md: 0 }}
        pt={{ xs: 9, md: 2, xl: 10 }}
        sx={{
          height: { xs: "100%", md: "auto" },
        }}
      >
        {/* Only for desktop view */}
        <Grid
          size={{ xs: 12, md: 3 }}
          justifyContent="center"
          sx={{
            height: { md: "100%" },
            alignItems: "center",
            display: { xs: "none", md: "flex" },
          }}
        >
          <AppHomeNeuronsWelcomeBox />
        </Grid>

        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{
            height: { md: "100%" },
            display: "flex",
            justifyContent: "center",
          }}
        >
          <AppNeuronsSlideShow />
        </Grid>

        {/* Only for desktop view */}
        <Grid
          size={{ xs: 12, md: 3 }}
          sx={{
            height: { md: "100%" },
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            order: { xs: 1, md: 3 }, // Swap position on mobile
          }}
        >
          <AppQuotes title="CONNECTION." author="BRENE BROWN">
            <Typography
              variant="body1"
              sx={{ maxWidth: "600px", mx: "auto", color: "textPrimary.main" }}
            >
              The energy that exists between people when they feel{" "}
              <Box
                component="span"
                sx={{ fontStyle: "italic", fontWeight: "bold" }}
              >
                <Typography
                  variant="body1Quotes"
                  color="textPrimary.main"
                  sx={{ fontWeight: "bold" }}
                >
                  seen
                </Typography>
              </Box>{" "}
              and{" "}
              <Box
                component="span"
                sx={{ fontStyle: "italic", fontWeight: "bold" }}
              >
                <Typography
                  variant="body1Quotes"
                  color="textPrimary.main"
                  sx={{ fontWeight: "bold" }}
                >
                  valued
                </Typography>
              </Box>{" "}
              and{" "}
              <Box
                component="span"
                sx={{ fontStyle: "italic", fontWeight: "bold" }}
              >
                <Typography
                  variant="body1Quotes"
                  color="textPrimary.main"
                  sx={{ fontWeight: "bold" }}
                >
                  heard
                </Typography>
              </Box>
              .
            </Typography>
          </AppQuotes>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default AppHomeNeuronSection;
