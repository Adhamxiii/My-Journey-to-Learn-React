import React, { useContext } from "react";
import { usePostContext } from "../components/PostProvider";


const Results = () => {
  const { posts } = usePostContext();
  return <p>🚀 {posts.length} atomic posts found</p>;
};

export default Results;
