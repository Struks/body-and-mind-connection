// components/BlogCard.tsx
"use client";

import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Avatar,
  Button,
  useTheme,
} from "@mui/material";
import { styled } from "@mui/system";

// * Types
type PropsType = {
  blogPost: {
    // todo: bice iz repositories/types/BlogCategoryTypes
    id: number;
    image: string;
    name: string;
    author: {
      name: string;
      avatar: string;
    };
  };
};

// * Styled components

const TitleOnHover = styled(Typography)(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  padding: theme.spacing(2),
  marginTop: theme.spacing(2),
  color: "primary.main",
  fontWeight: 700,
  textAlign: "center",
  transform: "translateY(-100%)",
  opacity: 0,
  zIndex: 2,
  transition: "all 0.3s ease",
  backgroundImage: "url('/assets/images/brush-stroke-no-bg.png')",
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  // padding: { xs: ".8rem", sm: "1rem", md: "1.5rem" },
}));

const HoverCard = styled(Card)(({ theme }) => ({
  position: "relative",
  overflow: "hidden",
  borderRadius: theme.spacing(2),
  cursor: "pointer",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "scale(1.02)",
    boxShadow: theme.shadows,
    "& .overlay": {
      opacity: 0.4,
    },
    "& .readMore": {
      opacity: 1,
      transform: "translateY(0)",
    },
    "& .titleOnHover": {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
  "@media (hover: none)": {
    "&:hover": {
      transform: "none",
      boxShadow: "none",
    },
  },
}));

const Overlay = styled(Button)({
  position: "absolute",
  top: 0,
  left: 0,
  height: "100%",
  width: "100%",
  backgroundColor: "rgba(0,0,0,0.5)",
  // backdropFilter: "blur(2px)",
  transition: "opacity 0.3s ease",
  zIndex: 1,
});

const ReadMore = styled(Button)({
  position: "absolute",
  bottom: 16,
  right: 16,
  zIndex: 2,
  backgroundColor: "#f0dfe9",
  opacity: 0,
  transform: "translateY(20px)",
  transition: "all 0.3s ease",
});

const BlogCard = ({ blogPost }: PropsType) => {
  return (
    <HoverCard sx={{ height: { xs: 300, sm: 400 } }}>
      <TitleOnHover className="titleOnHover" variant="h6">
        {blogPost.name}
      </TitleOnHover>

      <CardMedia
        component="img"
        height="100%"
        image={blogPost.image}
        alt={blogPost.name}
        sx={{ objectFit: "cover" }}
      />

      <Overlay className="overlay" />

      <CardContent
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          zIndex: 2,
          color: "#fff",
          width: "100%",
          "& .hideOnHover": {
            transition: "opacity 0.3s",
          },
          ".MuiCard-root:hover & .hideOnHover": {
            opacity: 0,
            pointerEvents: "none",
          },
        }}
      >
        <Typography
          variant="h6"
          fontWeight="bold"
          textAlign={"left"}
          className="hideOnHover"
        >
          {blogPost.name}
        </Typography>
        <Box mt={1} display="flex" alignItems="center" className="hideOnHover">
          <Avatar
            src={blogPost.author.avatar}
            sx={{ width: 24, height: 24, mr: 1 }}
          />
          <Typography variant="body2">by {blogPost.name}</Typography>
        </Box>
      </CardContent>

      <ReadMore
        className="readMore"
        size="small"
        variant="contained"
        sx={{ textTransform: "none", backgroundColor: "#f0dfe9" }}
      >
        Pročitaj više
      </ReadMore>
    </HoverCard>
  );
};

export default BlogCard;
