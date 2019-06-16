import React from "react";
import { ListGroup } from "reactstrap";
import "./post-list.css";
// import styled from "styled-components";

import PostListItem from "../post-list-item";

const PostList = ({ posts, onDelete, onToggleImportant, onToggleLike }) => {
  const elements = posts.map(item => {
    const { id, ...itemProps } = item;
    if (id && itemProps.label) {
      return (
        <li key={id} className="list-group-item">
          <PostListItem
            {...itemProps}
            onDelete={() => onDelete(id)}
            onToggleImportant={() => onToggleImportant(id)}
            onToggleLike={() => onToggleLike(id)}
          />
        </li>
      );
    }
    return false;
  });

  return <ListGroup className="app-list">{elements}</ListGroup>;
};
export default PostList;
