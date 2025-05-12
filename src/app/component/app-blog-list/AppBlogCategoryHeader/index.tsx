import {
  Box,
  Button,
  Container,
  Stack,
  useMediaQuery,
  useTheme,
  Typography,
  Drawer,
  IconButton,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import LoginIcon from "@mui/icons-material/Login";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const AppBlogCategoryHeader = () => {
  // * Responsive design
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // * State for Drawer
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setDrawerOpen(open);
    };

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

          {isMobile ? (
            <>
              <IconButton
                color="inherit"
                onClick={toggleDrawer(true)}
                sx={{ color: "white" }}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
              >
                <Box
                  sx={{ width: 250, padding: 2 }}
                  role="presentation"
                  onClick={toggleDrawer(false)}
                  onKeyDown={toggleDrawer(false)}
                >
                  <Stack spacing={2}>
                    <Button color="secondary" component={Link} href="/">
                      Početna
                    </Button>
                    <Button
                      color="secondary"
                      component={Link}
                      href="/najnoviji-postovi"
                    >
                      Najnoviji postovi
                    </Button>
                    <Button
                      color="secondary"
                      component={Link}
                      href="/komentari"
                    >
                      Komentari
                    </Button>
                    <Button color="secondary" component={Link} href="/kontakt">
                      Kontakt
                    </Button>
                  </Stack>
                </Box>
              </Drawer>
            </>
          ) : (
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
          )}

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
