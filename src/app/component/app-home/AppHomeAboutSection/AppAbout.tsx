import {
  Box,
  Typography,
  Collapse,
  Button,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import AppContactLink from "./AppContactLink";
import AppAboutTextMobile from "./AppAboutTextMobile";
import AppAboutTextDesktop from "./AppAboutTextDesktop";

const AppAbout = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); // Provera da li je mobilna verzija
  const [showMore, setShowMore] = useState(false); // State za kontrolu vidljivosti

  const handleToggle = () => {
    setShowMore((prev) => !prev);
  };

  return (
    <Box component={"div"}>
      <Box
        component="div"
        sx={{
          float: { xs: "none", md: "left" },
          backgroundImage: 'url("/assets/images/about-me.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundPositionY: { xs: "-52px", md: "center" },
          width: { xs: "300px", md: "400px" },
          height: { xs: "300px", md: "600px" },
          borderRight: { xs: "none", md: "10px solid #fff" },
          borderBottom: { xs: "none", md: "10px solid #fff" },
          borderRadius: { xs: "50%", md: "0" },
          margin: "0 auto",
          marginRight: { xs: "auto", md: 3 },
          marginBottom: { xs: "auto", md: 3 },
        }}
      ></Box>

      <Box
        sx={{
          [theme.breakpoints.down("md")]: {
            opacity: ".8",
            "& *": {
              opacity: "1",
            },
          },
          marginTop: { xs: 3, md: 0 },
          backgroundColor: { xs: "quotesPink.main", md: "unset" },
          borderRadius: { xs: 2, md: 0 },
          textAlign: "justify",
        }}
      >
        {isMobile ? <AppAboutTextMobile /> : <AppAboutTextDesktop />}

        {/* <AppContactLink /> */}
      </Box>
    </Box>
  );
};

export default AppAbout;
