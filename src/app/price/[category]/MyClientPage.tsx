"use client";
import { useEffect, useState } from "react";

import AppBlogList from "@/app/component/app-blog-list/AppBlogList";
import AppBlogCategoryHeader from "@/app/component/app-blog-list/AppBlogCategoryHeader";

import { Box, Container } from "@mui/material";

// * Types
type PropsType = {
  params: {
    category: string;
  };
  blogCategoryList: BlogCategoryType[];
};

//! ovo ido u repositories/types/BlogCategoryTypes
type BlogCategoryType = {
  id: number;
  image: string;
  name: string;
  author: {
    name: string;
    avatar: string;
  };
};

// * Template
const MyClientPage = ({ params, blogCategoryList }: PropsType) => {
  return (
    <Box component={"div"}>
      <AppBlogCategoryHeader />

      <Container
        maxWidth="xl"
        sx={{
          textAlign: "center",
          overflow: "hidden",
          pt: 4,
        }}
      >
        <AppBlogList blogPosts={blogCategoryList} />
      </Container>
    </Box>
  );
};

export default MyClientPage;
