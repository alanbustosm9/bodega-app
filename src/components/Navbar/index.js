import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Logout } from "./../../actions/auth";

const Navbar = () => {
  const { name } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(Logout());
  };

  return (
    <div className="navbar navbar-dark bg-dark mb-4">
      <span className="navbar-brand">
        <a href="/">Inicio</a>
      </span>

      <span className="navbar-brand">{name}</span>

      <a
        href="/new-products"
        className="btn btn-info d-block d-md-inline-block"
      >
        Agregar Producto &#43;
      </a>

      <button className="btn btn-outline-danger" onClick={handleLogout}>
        <i className="fas fa-sign-out-alt"></i>
        <span> Salir</span>
      </button>
    </div>
  );
};

export default Navbar;
