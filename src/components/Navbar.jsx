import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/logo.svg";
import { Link } from "react-scroll";
import cv from "../assets/Mathies_Engblad_CV.pdf";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#1A1A1A] text-gray-300">
      <div>
        <img src={Logo} alt="Logo" style={{ width: "65px" }} />
      </div>

      {/*menu*/}
      <div className="hidden md:flex">
        <ul className="hidden md:flex">
          <li className="hover:text-[#9F86C0] duration-200">
            <Link activeClass="active" to="home" smooth={true} duration={500}>
              :Home
            </Link>
          </li>
          <li className="hover:text-[#9F86C0] duration-200">
            <Link activeClass="active" to="skills" smooth={true} duration={500}>
              :Skills
            </Link>
          </li>
          <li className="hover:text-[#9F86C0] duration-200">
            <Link
              activeClass="active"
              to="projects"
              smooth={true}
              duration={500}
            >
              :Projects
            </Link>
          </li>
          <li className="hover:text-[#9F86C0] duration-200">
            <Link
              activeClass="active"
              to="contact"
              smooth={true}
              duration={500}
            >
              :Contact
            </Link>
          </li>
        </ul>
      </div>
      {/*burger*/}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/*mobile*/}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#1A1A1A] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl hover:text-[#9F86C0] duration-200">
          {" "}
          <Link
            onClick={handleClick}
            activeClass="active"
            to="home"
            smooth={true}
            duration={500}
          >
            :Home
          </Link>
        </li>
        <li className="py-6 text-4xl hover:text-[#9F86C0] duration-200">
          {" "}
          <Link
            onClick={handleClick}
            activeClass="active"
            to="skills"
            smooth={true}
            duration={500}
          >
            :Skills
          </Link>
        </li>
        <li className="py-6 text-4xl hover:text-[#9F86C0] duration-200">
          {" "}
          <Link
            onClick={handleClick}
            activeClass="active"
            to="projects"
            smooth={true}
            duration={500}
          >
            :Projects
          </Link>
        </li>
        <li className="py-6 text-4xl hover:text-[#9F86C0] duration-200">
          {" "}
          <Link
            onClick={handleClick}
            activeClass="active"
            to="contact"
            smooth={true}
            duration={500}
          >
            :Contact
          </Link>
        </li>
      </ul>

      {/*social icons*/}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-300">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/mengblad/"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/maddyengblad"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#5E548E]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="mailto:maddyengblad@gmail.com?"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#9F86C0]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href={cv}
              download
            >
              CV <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
