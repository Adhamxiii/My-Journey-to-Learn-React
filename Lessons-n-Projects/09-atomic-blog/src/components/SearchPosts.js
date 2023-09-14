import React, { useContext } from "react";
import { usePostContext } from "../components/PostProvider";

const SearchPosts = () => {
  const { searchQuery, setSearchQuery } = usePostContext();
  return (
    <input
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder="Search posts..."
    />
  );
};

export default SearchPosts;
