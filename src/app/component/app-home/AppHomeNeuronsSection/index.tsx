import React from "react";
import { Typography, Box, Container, Stack, Link } from "@mui/material";
import Grid from "@mui/material/Grid2";
import opacityActiveStyles from "@/theme/opacityActiveStyles";

//* Custom components
import AppNeuronsSlideShow from "./AppNeuronsSlideShow";
import AppQuotes from "./AppQuotes";

const AppHomeNeuronSection: React.FC = () => {
  return (
    <Stack
      direction="column"
      alignItems="center"
      gap={{ xs: 0, md: 4 }}
      py={4}
      spacing={4}
      sx={{
        height: { xs: "auto", md: "100vh" },
        justifyContent: { xs: "flex-start", md: "space-around" },
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontSize: { xs: "1.5rem", md: "2rem", lg: "2.7rem", xl: "3.5rem" },
          color: "primary.main",
          textAlign: "center",
          textShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
        }}
      >
        Dobrodošli na mjesto priča, misli i istraživanja <br /> o onome što nas
        čini povezanima – i ljudima.
      </Typography>

      <Grid
        container
        spacing={4}
        justifyContent={"space-between"}
        alignContent={"space-between"}
        width={"100%"}
        py={{ xs: 9, md: 0 }}
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
          <Box
            component={"div"}
            onClick={() => {
              const linkElement = document.getElementById("new-posts-link");
              linkElement?.click();
            }}
            sx={{
              ...opacityActiveStyles,
              backgroundColor: "quotesPink.main",
              borderRadius: "20px",
              padding: { xs: ".8rem", sm: "1rem", md: "1.5rem" },
              boxShadow: "3px 5px 13px -4px rgba(0,0,0,1)",
              transition: "box-shadow 0.3s ease-in-out",
              cursor: "pointer",
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: "18px", sm: "21px", md: "28px" },
              }}
            >
              <Link
                id="new-posts-link"
                href={"/najnoviji-postovi"}
                underline="none"
              >
                Najnoviji postovi
              </Link>
            </Typography>
          </Box>
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
              sx={{ maxWidth: "600px", mx: "auto", color: "primary.main" }}
            >
              The energy that exists between people when they feel{" "}
              <Box
                component="span"
                sx={{ fontStyle: "italic", fontWeight: "bold" }}
              >
                <Typography
                  variant="body1Quotes"
                  color="primary.main"
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
                  color="primary.main"
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
                  color="primary.main"
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
