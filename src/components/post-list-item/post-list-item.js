import React, { Component } from "react";

import "./post-list-item.sass";

import Date from "../post-list-item-date";

export default class PostListItem extends Component {
  state = {
    edit: false
  };

  onToggleEdite = () => {
    this.setState(({ edit }) => {
      return { edit: !edit };
    });
  };

  render() {
    const {
      label,
      important,
      like,
      onDelete,
      onToggleImportant,
      onToggleLike,
      onToggleEdit
    } = this.props;

    const { edit } = this.state;

    let classNames = "app-list-item d-flex justify-content-between";

    if (important) {
      classNames += " important";
    }
    if (like) {
      classNames += " like";
    }
    if (edit) {
      classNames += " activ";
    }
    return (
      <div className={classNames}>
        {edit ? (
          <input
            type="text"
            onChange={e => {
              onToggleEdit(e.target.value);
            }}
            defaultValue={label}
          />
        ) : (
          <span className="app-list-item-label" onClick={onToggleLike}>
            {label}
          </span>
        )}
        <div className="d-flex justify-content-center align-item-center">
          <span className="now_date">{Date}</span>
          <button className="btn btn-edit btn-sm" onClick={this.onToggleEdite}>
            {edit ? (
              <i className="fa fa-check" />
            ) : (
              <i className="fa fa-pencil" />
            )}
          </button>
          <button
            type="button"
            className="btn-star btn-sm"
            onClick={onToggleImportant}
          >
            <i className="fa fa-star" />
          </button>
          <button type="button" className="btn-trash btn-sm" onClick={onDelete}>
            <i className="fa fa-trash-o" />
          </button>
          <i className="fa fa-heart" />
        </div>
      </div>
    );
  }
}
