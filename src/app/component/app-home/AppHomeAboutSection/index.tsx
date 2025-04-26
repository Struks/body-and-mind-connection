import { Box, Stack, Typography } from "@mui/material";
import AppContactLink from "./AppContactLink";
import AppAbout from "./AppAbout";
import AppQuotes from "../AppHomeNeuronsSection/AppQuotes";
import opacityActiveStyles from "@/theme/opacityActiveStyles";

const AppHomeAboutSection = () => {
  return (
    <Stack
      direction="column"
      alignItems="center"
      spacing={{ xs: 4, md: 8, xl: 12 }}
    >
      <Typography variant="h2" color="textPrimary.main">
        O meni
      </Typography>

      <AppAbout />

      {/* Only for mobile */}
      <Box component="div" display={{ xs: "block", md: "none" }}>
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
      </Box>

      {/* Only for mobile */}
      {/* <Box component="div" display={{ xs: "block", md: "none" }}>
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
      </Box> */}
    </Stack>
  );
};

export default AppHomeAboutSection;
