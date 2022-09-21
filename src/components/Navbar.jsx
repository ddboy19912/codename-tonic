import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav
      style={{ background: "#0A2640" }}
      className="flex justify-between items-center px-20 py-8"
    >
      <div className=" w-full flex justify-center md:justify-start md:w-32">
        <NavLink to="/">
          <img className="w-24 cursor-pointer" src={logo} alt="" />
        </NavLink>
      </div>
      <div className=" hidden md:flex justify-end items-center gap-5 w-full">
        <ul className="flex gap-7 text-white">
          <li className="cursor-pointer">
            {" "}
            <NavLink to="">Product</NavLink>
          </li>
          <li className="cursor-pointer">
            <Link
              to="services"
              spy={true}
              smooth={true}
              offset={-30}
              duration={500}
            >
              Services
            </Link>
          </li>
          <li className="cursor-pointer">
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
        <button
          className="inline-block font-bold bg-white px-7 py-1 rounded-full"
          onClick={() => alert("No Login functionality")}
        >
          Log In
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
