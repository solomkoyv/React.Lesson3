import React from "react";

import "./post-add-form.css";

const PostAddForm = () => {
  return (
    <form action="#" className="bottom-panel d-flex">
      <input
        type="text"
        className="form-control new-post-label"
        placeholder="О чём вы думаете сейчас"
      />
      <button type="submit" className="btn btn-outline-secondary">
        Добавить
      </button>
    </form>
  );
};
export default PostAddForm;
