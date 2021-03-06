import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Logout } from "./../../actions/auth";

const Navbar = () => {
  const { name } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(Logout());
  };

  return (
    <div className="navbar navbar-dark bg-dark mb-4">
      <Link to={"/"}>
        <h4>Inicio</h4>
      </Link>

      <span className="navbar-brand">{name}</span>

      <button className="btn btn-outline-danger" onClick={handleLogout}>
        <i className="fas fa-sign-out-alt"></i>
        <span> Salir</span>
      </button>
    </div>
  );
};

export default Navbar;
