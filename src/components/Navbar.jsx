import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../images/logo.png";

const Navbar = () => {
  return (
    <nav
      style={{ background: "#0A2640" }}
      className="flex justify-between items-center px-20 py-8"
    >
      <div>
        <Link to="/">
          <img className="w-24 cursor-pointer" src={logo} alt="" />
        </Link>
      </div>
      <div className="flex items-center gap-5">
        <ul className="flex gap-7 text-white">
          <li>
            {" "}
            <NavLink to="">Product</NavLink>
          </li>
          <li>
            <NavLink>Services</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
        <button className="inline-block font-bold bg-white px-7 py-1 rounded-full">
          Log In
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
