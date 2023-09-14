import React, { useContext } from "react";
import { usePostContext } from "../components/PostProvider";


const List = () => {
  const { posts } = usePostContext();
  return (
    <ul>
      {posts.map((post, i) => (
        <li key={i}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
  );
};

export default List;
