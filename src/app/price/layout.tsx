import Footer from "../component/AppFooter";
import { Box } from "@mui/material";

const PriceCategoryLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box component={"div"} sx={{ overflow: "auto" }}>
      {children}

      <Footer />
    </Box>
  );
};

export default PriceCategoryLayout;
