import React, { Component } from "react";
import { NavLink, Outlet } from "react-router-dom";
import CardModal from "../Pages/ShoeStore/CardModal";

export default class HomeTemplate extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
          <NavLink className="navbar-brand ms-2" to="/">
            Navbar
          </NavLink>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          />
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <NavLink
                  activeClassName="active"
                  className="nav-link"
                  to="/lifecycle"
                >
                  Life CyCle
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="active"
                  className="nav-link"
                  to="/demoredux"
                >
                  Demo Redux
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="active"
                  className="nav-link"
                  to="/shoeshop"
                >
                  Shoe Shop
                </NavLink>
              </li>
            </ul>
            <form className="d-flex my-2 my-lg-0">
              <button
                type="button"
                class="btn btn-dark me-2"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                <i class="fa-solid fa-cart-shopping fs-4"></i>
              </button>
            </form>
          </div>
        </nav>
        <Outlet />
        <CardModal/>

        <footer className="bg-dark text-white">Footer</footer>
      </>
    );
  }
}
