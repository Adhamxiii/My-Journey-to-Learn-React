import React, { memo, useContext } from "react";
import Posts from "./Posts";
import FormAddPost from "./FormAddPost";
import { usePostContext } from "../components/PostProvider";

const Main = memo(() => {
  const { posts, onAddPost } = usePostContext();
  return (
    <main>
      <FormAddPost onAddPost={onAddPost} />
      <Posts posts={posts} />
    </main>
  );
});

export default Main;
