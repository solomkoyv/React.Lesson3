import React from "react";

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import PostStatusFilter from "../post-status-filter";
import PostList from "../post-list";
import PostAddForm from "../post-add-form";

import "./app.css";

const App = () => {
  const data = [
    { label: "Учу React", important: true, id: "ghdf" },
    { label: "Сложно конечно", important: false, id: "kjdf" },
    { label: "Но я не сдамся!", important: false, id: "dsklf" },
    { label: "", important: false, id: "ddswsklf" },
    1,
    [1, 2, 3],
    "assdf",
    { label: "Не сдамся всё равно!", important: false, id: "dsklfff" }
  ];

  return (
    <div className="app">
      <AppHeader />
      <div className="search-panel d-flex">
        <SearchPanel />
        <PostStatusFilter />
      </div>
      <PostList posts={data} />
      <PostAddForm />
    </div>
  );
};

export default App;
