import React, { Component } from "react";
import idGenerator from "react-id-generator";

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import PostStatusFilter from "../post-status-filter";
import PostList from "../post-list";
import PostAddForm from "../post-add-form";

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
    ],
    term: "",
    filter: "all"
  };

  maxId = 10;

  fixData = ({ data }) => {
    const newData = data.filter(item => {
      if (item.label && item.id) {
        return item;
      }
      return false;
    });
    return newData.length;
  };

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
      // id: this.maxId++
      id: idGenerator()
    };
    this.setState(({ data }) => {
      const newData = [...data, newItem];
      return { data: newData };
    });
  };

  onToggleImportant = id => {
    this.setState(({ data }) => {
      const index = data.findIndex(elem => elem.id === id);

      const old = data[index];
      const newItem = { ...old, important: !old.important };
      const newArr = [
        ...data.slice(0, index),
        newItem,
        ...data.slice(index + 1)
      ];
      return {
        data: newArr
      };
    });
  };

  onToggleLike = id => {
    this.setState(({ data }) => {
      const index = data.findIndex(elem => elem.id === id);

      const old = data[index];
      const newItem = { ...old, like: !old.loke };
      const newArr = [
        ...data.slice(0, index),
        newItem,
        ...data.slice(index + 1)
      ];
      return {
        data: newArr
      };
    });
  };

  searchPost = (items, term) => {
    if (term.length === 0) {
      return items;
    }
    return items.filter(item => {
      if (item.label) {
        return item.label.indexOf(term) > -1;
      }
      return false;
    });
  };

  filterPosts = (items, filter) => {
    if (filter === "like") {
      return items.filter(item => item.like);
    } else {
      return items;
    }
  };

  onUpdateSearch = term => {
    this.setState({ term });
  };

  onFilterSelect = filter => {
    this.setState({ filter });
  };

  render() {
    const { data, term, filter, fixData } = this.state;

    const liked = data.filter(item => item.like).length;
    const allPosts = fixData;

    const visiblePosts = this.filterPosts(this.searchPost(data, term), filter);

    return (
      <AppBlock>
        <AppHeader liked={liked} allPosts={allPosts} />
        <div className="search-panel d-flex">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <PostStatusFilter
            filter={filter}
            onFilterSelect={this.onFilterSelect}
          />
        </div>
        <PostList
          posts={visiblePosts}
          onDelete={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleLike={this.onToggleLike}
        />
        <PostAddForm onAdd={this.addItem} />
      </AppBlock>
    );
  }
}
