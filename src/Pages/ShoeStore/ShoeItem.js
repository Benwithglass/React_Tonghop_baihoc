import React, { Component } from "react";
import { NavLink } from "react-router-dom";


export default class ShoeItem extends Component {
  render() {
    // bóc tách
    const {image, name, price, id} = this.props.item;
    return (
      <div className="card mb-3">
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">${price}</p>
          <NavLink to={`/shoes-detail/${id}`}>Xem chi tiết</NavLink>
        </div>
      </div>
    );
  }
}
