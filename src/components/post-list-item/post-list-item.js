import React from "react";

import "./post-list-item.css";

let today = new Date(),
  d = today.getDate() < 10 ? `0${today.getDate()}` : today.getDate(),
  m =
    today.getMonth() + 1 < 10
      ? `0${today.getMonth() + 1}`
      : today.getMonth() + 1,
  y = today.getFullYear(),
  date = `${d}.${m}.${y}`;
// today.getDate() + "." + (today.getMonth() + 1) + "." + today.getFullYear();

const PostListItem = () => {
  return (
    <li className="app-list-item d-flex justify-content-between">
      <span className="app-list-item-label">Hello World!</span>
      <div className="d-flex justify-content-center align-item-center">
        <span className="now_date">{date}</span>
        <button type="button" className="btn-star btn-sm">
          <i className="fa fa-star" />
        </button>
        <button type="button" className="btn-trash btn-sm">
          <i className="fa fa-trash-o" />
        </button>
        <i className="fa fa-heart" />
      </div>
    </li>
  );
};
export default PostListItem;
