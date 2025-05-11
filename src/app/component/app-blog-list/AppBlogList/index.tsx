import BlogCard from "../AppBlogCard";

import { Box } from "@mui/material";

// * Types
type PropsType = {
  blogPosts: {
    id: number;
    image: string;
    name: string;
    author: {
      name: string;
      avatar: string;
    };
  }[];
};

const BlogList = ({ blogPosts }: PropsType) => {
  return (
    <Box
      display="grid"
      gridTemplateColumns={{ xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" }}
      gap={4}
    >
      {blogPosts.map((post, i) => (
        <BlogCard key={i} blogPost={post} />
      ))}
    </Box>
  );
};

export default BlogList;
