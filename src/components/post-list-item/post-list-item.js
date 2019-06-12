import React, { Component } from "react";

import "./post-list-item.css";

import Date from "../post-list-item-date";

export default class PostListItem extends Component {
  state = { important: false, like: false };
  onImportant = () => {
    this.setState(({ important }) => ({ important: !important }));
  };
  onLike = () => {
    this.setState(({ like }) => ({ like: !like }));
  };
  render() {
    const { label } = this.props;
    const { important, like } = this.state;
    let classNames = "app-list-item d-flex justify-content-between";

    if (important) {
      classNames += " important";
    }
    if (like) {
      classNames += " like";
    }
    return (
      <div className={classNames}>
        <span className="app-list-item-label" onClick={this.onLike}>
          {label}
        </span>
        <div className="d-flex justify-content-center align-item-center">
          <span className="now_date">{Date}</span>
          <button className="btn btn-sm">
            <i className="fa fa-pencil" />
          </button>
          <button
            type="button"
            className="btn-star btn-sm"
            onClick={this.onImportant}
          >
            <i className="fa fa-star" />
          </button>
          <button type="button" className="btn-trash btn-sm">
            <i className="fa fa-trash-o" />
          </button>
          <i className="fa fa-heart" />
        </div>
      </div>
    );
  }
}
