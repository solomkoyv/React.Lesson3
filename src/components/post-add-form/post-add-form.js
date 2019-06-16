import React, { Component } from "react";
import { Button } from "reactstrap";
import "./post-add-form.css";
import styled from "styled-components";

const BottomPanel = styled.form`
  display: flex;
  margin-top: 20px;
  input {
    width: auto;
    flex-grow: 1;
    margin-right: 3px;
    text-indent: 2rem;
  }
`;

export default class PostAddForm extends Component {
  state = { text: "" };

  onValueChange = event => {
    this.setState({ text: event.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onAdd(this.state.text);
    this.setState({ text: "" });
  };

  render() {
    return (
      <BottomPanel onSubmit={this.onSubmit}>
        <input
          placeholder="О чём вы думаете сейчас"
          onChange={this.onValueChange}
          value={this.state.text}
        />
        <Button outline color="secondary">
          Добавить
        </Button>
      </BottomPanel>
    );
  }
}
