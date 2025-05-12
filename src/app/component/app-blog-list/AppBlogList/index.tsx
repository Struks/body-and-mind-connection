import BlogCard from "../AppBlogCard";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

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

const BlogCardWrapper = ({ children }: { children: React.ReactNode }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

const BlogList = ({ blogPosts }: PropsType) => {
  return (
    <Box
      display="grid"
      gridTemplateColumns={{ xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" }}
      gap={4}
    >
      {blogPosts.map((post, i) => (
        <BlogCardWrapper key={i}>
          <BlogCard blogPost={post} />
        </BlogCardWrapper>
      ))}
    </Box>
  );
};

export default BlogList;
