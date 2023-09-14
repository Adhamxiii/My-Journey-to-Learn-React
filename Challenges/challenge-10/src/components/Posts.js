import React, { useContext } from "react";
import List from "./List";
import { usePostContext } from "../components/PostProvider";


const Posts = () => {
  const { posts } = usePostContext();
  return (
    <section>
      <List posts={posts} />
    </section>
  );
};

export default Posts;
