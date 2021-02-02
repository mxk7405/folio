import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function Navbar() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            activeClassName="text-black"
            className="inflex-flex items-center py-7 px-3 mr-4  transition duration-500 ease-in-out transform hover:text-blue-400 hover:-translate-y-1 hover:scale-110 text-4xl font-bold cursive tracking-widest"
          >
            Home
          </NavLink>
          <NavLink
            to="post"
            className="inline-flex items-center py-3 px-3 my-6 rounded  transition duration-500 ease-in-out transform hover:text-blue-400 hover:-translate-y-1 hover:scale-110"
            activeClassName="ring-2 ring-blue-400 ring-opacity-75 text-blue-400"
          >
            Posts
          </NavLink>
          <NavLink
            to="project"
            className="inline-flex items-center py-3 px-3 my-6 rounded  transition duration-500 ease-in-out transform hover:text-blue-400 hover:-translate-y-1 hover:scale-110"
            activeClassName="ring-2 ring-blue-400 ring-opacity-75 text-blue-400"
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            className="inline-flex items-center py-3 px-3 my-6 rounded  transition duration-500 ease-in-out transform hover:text-blue-400 hover:-translate-y-1 hover:scale-110"
            activeClassName="ring-2 ring-blue-400 ring-opacity-75 text-blue-400"
          >
            About Me!
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon
            // LINKED IN
            url="https://www.linkedin.com/in/willkim436/"
            className="mr-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            // GITHUB
            url="https://github.com/mxk7405"
            className="mr-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </header>
  );
}
