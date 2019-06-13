import React from "react";
import { Button } from "reactstrap";
import "./post-add-form.css";
import styled from "styled-components";

const BottomPanel = styled.div`
  display: flex;
  margin-top: 20px;
  input {
    width: auto;
    flex-grow: 1;
    margin-right: 3px;
    text-indent: 2rem;
  }
`;

const PostAddForm = ({ onAdd }) => {
  return (
    <BottomPanel>
      <input placeholder="О чём вы думаете сейчас" />
      <Button outline color="secondary" onClick={() => onAdd("Hello")}>
        Добавить
      </Button>
    </BottomPanel>
  );
};
export default PostAddForm;
