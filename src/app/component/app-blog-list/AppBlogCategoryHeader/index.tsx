import {
  Box,
  Button,
  Container,
  Stack,
  useMediaQuery,
  useTheme,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import LoginIcon from "@mui/icons-material/Login";

const AppBlogCategoryHeader = () => {
  // * Responsive design
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      component={"div"}
      sx={{ backgroundColor: "primary.main", paddingBottom: 6 }}
    >
      <Container
        maxWidth="xl"
        sx={{ textAlign: "center", overflow: "hidden", pt: 4 }}
      >
        <Stack direction={"row"} spacing={4} justifyContent={"space-between"}>
          <Box
            component={"div"}
            sx={{ padding: 1, backgroundColor: "white", borderRadius: 7 }}
          >
            <Image
              src="/assets/images/logo-plava.png"
              alt="Logo"
              width={isMobile ? 20 : 60}
              height={isMobile ? 20 : 60}
            />
          </Box>

          <Box component={"div"}>
            <Stack direction="row" spacing={2} alignItems="center">
              <Button
                color="secondary"
                component={Link}
                href="/"
                sx={{ color: "white" }}
              >
                Početna
              </Button>

              <Button
                color="secondary"
                component={Link}
                href="/najnoviji-postovi"
                sx={{ color: "white" }}
              >
                Najnoviji postovi
              </Button>

              <Button
                color="secondary"
                component={Link}
                href="/komentari"
                sx={{ color: "white" }}
              >
                Komentari
              </Button>

              <Button
                color="secondary"
                component={Link}
                href="/kontakt"
                sx={{ color: "white" }}
              >
                Kontakt
              </Button>
            </Stack>
          </Box>

          <Box component={"div"}>
            <Link
              href={"/prijava"}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 4,
                color: "white",
                textDecoration: "none",
                fontWeight: 500,
              }}
            >
              <LoginIcon sx={{ mr: 0.5 }} /> Prijavi se
            </Link>
          </Box>
        </Stack>

        <Typography
          variant="h1"
          color="white"
          textAlign={"left"}
          mt={7}
          sx={{
            fontSize: "2rem",
            "@media (min-width:600px)": {
              fontSize: "2.3565rem",
            },
            "@media (min-width:960px)": {
              fontSize: "2.5707rem",
            },
            "@media (min-width:1200px)": {
              fontSize: "2.9991rem",
            },
          }}
        >
          Ovo je naslov blog kategorija
        </Typography>
      </Container>
    </Box>
  );
};

export default AppBlogCategoryHeader;
