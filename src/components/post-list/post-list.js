import React from "react";
import { ListGroup } from "reactstrap";
import "./post-list.css";

import PostListItem from "../post-list-item";

const PostList = ({ posts, onDelete, onToggleEdit, onLikeImportant }) => {
  const elements = posts.map(item => {
    const { id, ...itemProps } = item;
    if (id && itemProps.label) {
      return (
        <li key={id} className="list-group-item">
          <PostListItem
            {...itemProps}
            onDelete={() => onDelete(id)}
            onToggleImportant={() => onLikeImportant(id, "important")}
            onToggleLike={() => onLikeImportant(id, "like")}
            onToggleEdit={text => onToggleEdit(id, text)}
          />
        </li>
      );
    }
    return false;
  });

  return <ListGroup className="app-list">{elements}</ListGroup>;
};
export default PostList;
