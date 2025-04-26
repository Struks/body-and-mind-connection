// components/AppNeuronsHeaderIcons.js

import React from "react";
import Link from "next/link";
import {
  Box,
  IconButton,
  Tooltip,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
import styles from "./AppNeurons.module.css";

const AppNeuronsHeaderIcons = () => {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("md")); // Use theme breakpoints for better responsiveness

  const links = [
    {
      href: "/posts",
      tooltipLabel: "Pogledajte najnovije tekstove",
      bgColor: "secondary.main",
      icon: <DescriptionRoundedIcon />,
      text: "Najnoviji postovi",
    },
    {
      href: "/posts",
      tooltipLabel: "Kontaktirajte me",
      bgColor: "border.main",
      icon: <MailOutlineRoundedIcon />,
      text: "Kontakt",
    },
    {
      href: "/posts",
      tooltipLabel: "Pogledajte komentare",
      bgColor: "quotesPink.main",
      icon: <ChatBubbleOutlineRoundedIcon />,
      text: "Komentari",
    },
  ];

  return (
    <Box display="flex" justifyContent="center" gap={6} mt={6}>
      {links.map((link, index) => (
        // <Tooltip key={index} title={link.tooltipLabel} arrow>
        //   <Link href={link.href} passHref>
        //     <IconButton
        //       className={styles.swingOnHover}
        //       sx={{ bgcolor: link.bgColor, padding: 2, opacity: 0.8 }}
        //     >
        //       {React.cloneElement(link.icon, {
        //         sx: { fontSize: 40, color: "#3D3D68", opacity: 1 },
        //       })}
        //     </IconButton>
        //   </Link>
        // </Tooltip>

        <Box key={index} textAlign="center" flex={1}>
          {/* {isMobile ? (
            <>
              <Link href={link.href} passHref>
                <IconButton
                  className={styles.swingOnHover}
                  sx={{
                    bgcolor: link.bgColor,
                    padding: 2,
                  }}
                >
                  {React.cloneElement(link.icon, {
                    sx: { fontSize: 40, color: "#3D3D68" },
                  })}
                </IconButton>
              </Link>
              <Typography variant="body2" mt={1}>
                {link.text}
              </Typography>
            </>
          ) : (
            <Tooltip
              key={index}
              title={link.tooltipLabel}
              arrow
              slotProps={{
                popper: {
                  modifiers: [
                    {
                      name: "offset",
                      options: {
                        offset: [0, 20],
                      },
                    },
                  ],
                },
              }}
            >
              <Link href={link.href} passHref>
                <IconButton
                  className={styles.swingOnHover}
                  sx={{ bgcolor: link.bgColor, padding: 2, opacity: 0.8 }}
                >
                  {React.cloneElement(link.icon, {
                    sx: { fontSize: 40, color: "#3D3D68", opacity: 1 },
                  })}
                </IconButton>
              </Link>
            </Tooltip>
          )} */}

          <Link href={link.href} passHref>
            <IconButton
              className={styles.swingOnHover}
              sx={{
                bgcolor: link.bgColor,
                padding: 2,
              }}
            >
              {React.cloneElement(link.icon, {
                sx: { fontSize: 40, color: "#3D3D68" },
              })}
            </IconButton>
          </Link>
          <Typography variant="body2" mt={1}>
            {link.text}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default AppNeuronsHeaderIcons;
