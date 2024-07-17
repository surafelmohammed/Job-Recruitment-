import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBarsStaggered, FaTwitter } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";
import "../App.css";
import { UserContext } from "../App";
import { FiInstagram } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { value1, value2, value3, value4 } = useContext(UserContext);
  const [profile, setProfile] = useState(false);

  const logout = async () => {
    await fetch("http://localhost:3000/auth/logout", {
      method: "POST",
      headers: { "content-type": "application/json" },
      credentials: "include",
    });
    console.log("--------------------------------logged out sccessfully");
    value3.setEmail("");
  };

  let menu, mobilmenu;
  if (value1.email === "") {
    menu = (
      <div className="taxt-base text-primary font-medium space-x-5 hidden lg:block">
        <Link to={"/signin"} className="py-2 px-5 border rounded">
          Log in
        </Link>
        <Link
          to={"/signup"}
          className="py-2 px-5 border rounded bg-blue text-white"
        >
          Sign up
        </Link>
      </div>
    );
  } else {
    menu = (
      <div className="taxt-base text-primary font-medium space-x-5 hidden lg:block">
        <Link
          to={"/"}
          onClick={() => {
            setProfile(true);
          }}
          className="h-[2rem] bg-blue py-2 px-5 border rounded-full text-white"
        >
          {value2.username}
        </Link>
        {/* user profile */}
        <div
          className={
            profile ? "block border py-10 px-4 lg:px-16 bg-[#FAFAFA]" : "hidden"
          }
        >
          <div className="fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm flex justify-end items-start ">
            <div className="bg-white pl-12 pr-12 rounded-xl w-[18rem] flex flex-col gap-4 m-10">
              <div className="flex">
                <div className="w-full"></div>
                <button
                  onClick={() => {
                    setProfile(false);
                  }}
                  className="rounded-full text-lg text-black p-4"
                >
                  X
                </button>
              </div>
              <div className="w-full flex flex-col justify-center items-center gap-2">
                <button className="rounded-full text-5xl text-white bg-blue p-4">
                  {value2.username.slice(0, 2)}
                </button>
                <p className="block text-xl font-light">{value2.username}</p>
                <p className="font-light">{value1.email}</p>
              </div>
              <div className="w-full flex gap-2 justify-center mb-4">
                <a className="ml-3 border p-3 rounded-full text-white text-xl  hover:scale-125 ease-in-out duration-300">
                  <FaTwitter className="text-blue" />
                </a>
                <a className="ml-3 border p-3 rounded-full text-white text-xl  hover:scale-125 ease-in-out duration-300">
                  <FiInstagram className="text-blue" />
                </a>

                <a className="ml-3 border p-3 rounded-full text-white text-xl  hover:scale-125 ease-in-out duration-300">
                  <FaLinkedinIn className="text-blue" />
                </a>
              </div>
              <div className="w-full mb-6">
                <span className="font-light">
                  Account Type : {value4.accountType}
                </span>
                <p className="font-light">Username : {value2.username}</p>
              </div>
            </div>
          </div>
        </div>

        <Link
          to={"/signin"}
          onClick={logout}
          className="py-2 px-5 border text-blue rounded"
        >
          LogOut
        </Link>
      </div>
    );
  }

  if (value1.email === "") {
    mobilmenu = (
      <div className="flex flex-col taxt-base text-primary font-medium space-x-5 md:hidden w-60">
        <Link
          to={"/signin"}
          className="py-2 px-5 border rounded bg-blue text-white"
        >
          Log in
        </Link>
        <Link
          to={"/signup"}
          className="py-2 px-5 border rounded bg-blue text-white"
        >
          Sign up
        </Link>
      </div>
    );
  } else {
    mobilmenu = (
      <div className="taxt-base text-primary font-medium space-x-5 md:hidden flex flex-col gap-2">
        <Link to={"/"} className="py-2 px-5 border rounded-l-full bg-white">{`${
          value2.username
        } ${value4.accountType !== "seeker" ? "COMPANY" : ""}`}</Link>
        <Link
          to={"/signin"}
          onClick={logout}
          className="py-2 px-5 border rounded text-white bg-blue"
        >
          LogOut
        </Link>
      </div>
    );
  }

  const handleMenuToggler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="max-w-screen-2xl container mx-auto xl:px-24 px-4 bg-white shadow-lg">
      <nav className="flex justify-between items-center py-6 ">
        <a href="/" className="text-2xl text-blue">
          <strong>IE</strong> engineering{" "}
        </a>
        {/* nav items for large Devices */}
        <ul className="hidden md:flex gap-6">
          <li className="text-base text-primary font-light">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Start a search
            </NavLink>
          </li>
          <li
            className={
              value1.email === "" || value4.accountType == "seeker"
                ? "hidden"
                : "text-base text-primary font-light"
            }
          >
            <NavLink
              to="/my-job"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              My Job
            </NavLink>
          </li>
          <li
            className={
              value1.email === "" || value4.accountType == "seeker"
                ? "hidden"
                : "text-base text-primary font-light"
            }
          >
            <NavLink
              to="/dashboard"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Dashboard
            </NavLink>
          </li>
          <li
            className={
              value1.email === "" || value4.accountType == "seeker"
                ? "hidden"
                : "text-base text-primary font-light"
            }
          >
            <NavLink
              to="/post-job"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Post A Job
            </NavLink>
          </li>
          <li className="text-base text-primary font-light">
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              About
            </NavLink>
          </li>
          <li className="text-base text-primary font-light">
            <NavLink
              to="/contact-us"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Contact
            </NavLink>
          </li>
        </ul>
        {/* signup and login button */}
        {menu}
        {/* mobile menu */}
        <div className="md:hidden">
          <button onClick={handleMenuToggler}>
            {isMenuOpen ? (
              <FaXmark className="w-5 h-5 text-primary" />
            ) : (
              <FaBarsStaggered className="w-5 h-5 text-primary" />
            )}
          </button>
        </div>
      </nav>
      <div className={isMenuOpen ? "flex gap-3" : "hidden"}>
        <ul className="bg-gray-200 px-4 py-5 rounded-lg md:hidden w-full">
          <li className="text-base text-primary font-semibold">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Start a search
            </NavLink>
          </li>
          <li
            className={
              value1.email === "" || value4.accountType == "seeker"
                ? "hidden"
                : "text-base text-primary font-semibold"
            }
          >
            <NavLink
              to="/my-job"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              My Job
            </NavLink>
          </li>
          <li
            className={
              value1.email === "" || value4.accountType == "seeker"
                ? "hidden"
                : "text-base text-primary font-semibold"
            }
          >
            <NavLink
              to="/dashboard"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Dashboard
            </NavLink>
          </li>
          <li
            className={
              value1.email === "" || value4.accountType == "seeker"
                ? "hidden"
                : "text-base text-primary font-semibold"
            }
          >
            <NavLink
              to="/post-job"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Post A Job
            </NavLink>
          </li>
          <li className="text-base text-primary font-semibold">
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              About
            </NavLink>
          </li>
        </ul>
        {mobilmenu}
      </div>
    </header>
  );
};

export default Navbar;
