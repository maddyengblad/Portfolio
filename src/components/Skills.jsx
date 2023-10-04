import React from "react";

import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import Tailwind from "../assets/tailwind.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#1A1A1A] text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#9F86C0]">
            Skills
          </p>
          <p className="py-4">Technologies I work with currently</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8">
          <div className="hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={HTML} alt="HTML Icon" />
            <p>HTML</p>
          </div>
          <div className="hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={JavaScript} alt="JS Icon" />
            <p>JavaScript</p>
          </div>
          <div className="hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={CSS} alt="CSS Icon" />
            <p>CSS</p>
          </div>
          <div className="hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ReactImg} alt="React Icon" />
            <p>React</p>
          </div>
          <div className="hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Node} alt="NodeJS Icon" />
            <p>NodeJS</p>
          </div>
          <div className="hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Tailwind} alt="Tailwind Icon" />
            <p>Tailwind</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
