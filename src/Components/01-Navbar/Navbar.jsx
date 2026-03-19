import { Facebook, Github, Instagram, Linkedin, Menu, X } from "lucide-react";
import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  function menuIconHandler() {
    setOpen(!open);
  }

  return (
    <nav className="mx-auto border-2 p-4 flex justify-between items-center sticky top-0 z-10">
      {/* Left */}
      <div className="flex justify-center items-center gap-4">
        {/* Menu Logo */}
        <div
          onClick={menuIconHandler}
          className="cursor-pointer flex lg:hidden"
        >
          {open ? (
            <X className="cursor-pointer"></X>
          ) : (
            <Menu className="cursor-pointer"></Menu>
          )}
        </div>
        {/* Menu Logo Components */}
        <div
          className={`space-y-6 absolute left-5 top-20 transition-all duration-1000 backdrop-blur-lg bg-black/30 ${open? "opacity-100 visible" : "opacity-0 invisible"} border p-5 rounded-lg`}
        >
          <ul className="flex lg:hidden flex-col gap-3 justify-center items-center">
            <li className="">
              <a href="#about-me">About</a>
            </li>
            <li className="">
              <a href="#technical-skills">Skills</a>
            </li>
            <li className="">
              <a href="#projects">Projects</a>
            </li>
          </ul>
          <div className="flex md:hidden flex-row gap-3 justify-center items-center">
            <a href="https://www.instagram.com/parvezn.shadhin/">
              <Instagram></Instagram>
            </a>
            <a href="https://www.facebook.com/Parvez.Nur.Shadhin">
              <Facebook></Facebook>
            </a>
            <a href="https://www.linkedin.com/in/parvez-nur-shadhin/">
              <Linkedin></Linkedin>
            </a>
            <a href="https://github.com/parvez-nur-shadhin">
              <Github></Github>
            </a>
          </div>
        </div>

        <h1 className="text-xl md:text-xl lg:text-3xl font-bold">
          Parvez Nur Shadhin
        </h1>
        <ul className="hidden lg:flex gap-3 justify-center items-center">
          <li className="">
            <a href="#about-me">About Me</a>
          </li>
          <li className="">
            <a href="#technical-skills">Technical Skills</a>
          </li>
          <li className="">
            <a href="#projects">Projects</a>
          </li>
        </ul>
      </div>
      {/* Right */}
      <div className="hidden md:flex gap-3 justify-center items-center">
        <a href="https://www.instagram.com/parvezn.shadhin/">
          <Instagram></Instagram>
        </a>
        <a href="https://www.facebook.com/Parvez.Nur.Shadhin">
          <Facebook></Facebook>
        </a>
        <a href="https://www.linkedin.com/in/parvez-nur-shadhin/">
          <Linkedin></Linkedin>
        </a>
        <a href="https://github.com/parvez-nur-shadhin">
          <Github></Github>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
