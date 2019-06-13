import React from "react";

import "./post-list.css";

import PostListItem from "../post-list-item";

const PostList = ({ posts }) => {
  const elements = posts.map(item => {
    const { id, ...itemProps } = item;
    if (id && itemProps.label) {
      return (
        <li key={id} className="list-group-item">
          <PostListItem {...itemProps} />
        </li>
      );
    }
    return false;
  });

  return <ul className="app-list list-group">{elements}</ul>;
};
export default PostList;
