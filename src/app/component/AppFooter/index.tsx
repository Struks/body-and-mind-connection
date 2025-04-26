// components/Footer.tsx
import { Box, Typography, Link } from "@mui/material";

const AppFooter = () => {
  return (
    <Box
      component="footer"
      sx={{
        // borderTop: "1px solid #e0e0e0",
        backgroundColor: "#fdfcfe",
        py: 2,
        textAlign: "center",
      }}
    >
      <Typography variant="body2" color="text.secondary">
        © 2025 All rights reserved. Crafted with ❤️ by{" "}
        <Link
          href="https://www.linkedin.com/in/edvin-strujic-a36007211/"
          target="_blank"
          underline="hover"
          variant="body1"
          rel="noopener noreferrer"
          color="primary.main"
          sx={{
            fontWeight: "bold",
          }}
        >
          Strux
        </Link>
      </Typography>
    </Box>
  );
};

export default AppFooter;
