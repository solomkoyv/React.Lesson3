import React, { Component } from "react";

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import PostStatusFilter from "../post-status-filter";
import PostList from "../post-list";
import PostAddForm from "../post-add-form";

// import idGenerator from "react-id-generator";

import "./app.css";
import styled from "styled-components";

const AppBlock = styled.div`
  margin: 0 auto;
  max-width: 800px;
`;

export default class App extends Component {
  state = {
    data: [
      { label: "Учу React", important: true, id: 1, like: true },
      { label: "Сложно конечно", important: false, id: 2 },
      { label: "Но я не сдамся!", important: false, id: 3 },
      { label: "", important: true, id: 4 },
      1,
      [1, 2, 3],
      "assdf",
      {
        label: "Не сдамся всё равно!",
        important: true,
        id: 5,
        like: true
      }
    ]
  };
  maxId = 10;
  deleteItem = id => {
    this.setState(({ data }) => {
      const index = data.findIndex(elem => elem.id === id),
        newData = [...data.slice(0, index), ...data.slice(index + 1)];
      return {
        data: newData
      };
    });
  };

  addItem = body => {
    const newItem = {
      label: body,
      important: false,
      id: this.maxId++
      // id: idGenerator()
    };
    this.setState(({ data }) => {
      const newData = [...data, newItem];
      return { data: newData };
    });
  };

  render() {
    return (
      <AppBlock>
        <AppHeader />
        <div className="search-panel d-flex">
          <SearchPanel />
          <PostStatusFilter />
        </div>
        <PostList posts={this.state.data} onDelete={this.deleteItem} />
        <PostAddForm onAdd={this.addItem} />
      </AppBlock>
    );
  }
}
