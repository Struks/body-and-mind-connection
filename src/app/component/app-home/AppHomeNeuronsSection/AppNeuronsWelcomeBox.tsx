import { Box, Typography } from "@mui/material";

const AppNeuronsWelcomeBox = () => {
  return (
    <Box
      sx={{
        backgroundColor: "quotesPink.main",
        opacity: 0.8,
        borderRadius: "20px",
        border: "1px solid #E0D7EF",
        padding: 3,
        // maxWidth: 400,
        margin: "20px auto",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: { xs: ".8rem", sm: "1rem", md: "1.5rem" },
        mt: { xs: 4, md: 6 },

        // // RESPONSIVE
        // "@media (min-width: 600px)": {
        //   padding: 4,
        //   marginTop: 4,
        // },
        // "@media (min-width: 960px)": {
        //   padding: 5,
        //   marginTop: 6,
        // },
      }}
    >
      <Typography
        variant="h6"
        sx={{
          color: "textPrimary.main",
          fontWeight: "bold",
          fontSize: { xs: "1.1rem", sm: "1.3rem", md: "1.5rem" },
          mb: 1,
          opacity: 1,
        }}
      >
        Dobrodošao/la na mjesto Povezanosti.
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: "textPrimary.main",
          fontSize: { xs: "0.9rem", sm: "1rem" },
          textAlign: "justify",
        }}
      >
        Ovo je mjesto gdje si dobrodošao/la sa svime što jesi. Prostor gdje
        nijedan dio tebe nije suvišan, jer prava snaga dolazi iz toga da budeš u
        kontaktu sa svim djelovima sebe. I to je ono najljepše u nama.
      </Typography>
    </Box>
  );
};

export default AppNeuronsWelcomeBox;
