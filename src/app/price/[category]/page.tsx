// App components
import MyClientPage from "./MyClientPage";

import { notFound } from "next/navigation";

// * Types
type PropsType = {
  params: {
    category: string;
  };
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

// * Metadata

// * Fetching data (SSR) -- fetch API

const BlogCategoryPage = ({ params }: PropsType) => {
  // * Fetching data (SSR) -- component variable for fetching data
  const blogCategoryList = [
    {
      id: 1,
      image: "/assets/images/logo-plava.png",
      // image: "/assets/images/logo-plava.png",
      name: "Blog Category 1",
      author: {
        name: "Author 1",
        avatar: "/assets/images/logo-plava.png",
      },
    },
    {
      id: 2,
      image: "/assets/images/logo-plava.png",
      name: "Blog Category 2",
      author: {
        name: "Author 2",
        avatar: "/assets/images/logo-plava.png",
      },
    },
    {
      id: 3,
      name: "Blog Category 3",
      image: "/assets/images/logo-plava.png",
      author: {
        name: "Author 3",
        avatar: "/assets/images/logo-plava.png",
      },
    },
    {
      id: 4,
      image: "/assets/images/logo-plava.png",
      // image: "/assets/images/logo-plava.png",
      name: "Blog Category 1",
      author: {
        name: "Author 1",
        avatar: "/assets/images/logo-plava.png",
      },
    },
    {
      id: 5,
      image: "/assets/images/logo-plava.png",
      name: "Blog Category 2",
      author: {
        name: "Author 2",
        avatar: "/assets/images/logo-plava.png",
      },
    },
    {
      id: 6,
      name: "Blog Category 3",
      image: "/assets/images/logo-plava.png",
      author: {
        name: "Author 3",
        avatar: "/assets/images/logo-plava.png",
      },
    },
  ] as BlogCategoryType[];

  // * 404 if category is not found
  // if (blogCategoryList.error) { // todo: zamjeniti kada se doda fetch
  if (blogCategoryList.length === 0) {
    notFound();
  }

  return <MyClientPage params={params} blogCategoryList={blogCategoryList} />;
};

export default BlogCategoryPage;
