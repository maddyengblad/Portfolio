import React from "react";
import TodoList from "../assets/todolist.png";
import PostitNotes from "../assets/postitnotes.png";
import tba from "../assets/tba.png";

const Projects = () => {
  return (
    <div
      name="projects"
      className="w-full md:h-screen text-gray-300 bg-[#1A1A1A]"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-[#9F86C0]">
            Projects
          </p>
          <p className="py-4">Recent projects and work</p>
        </div>
        {/*container*/}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/*item*/}
          <div
            style={{ backgroundImage: `url(${TodoList})` }}
            className="shadow-lg shadow-[#040c16] group container flex justify-center items-center mx-auto content-div"
          >
            {/*hover*/}
            <div className="opacity-0 group-hover:opacity-100 duration-200">
              <span className="text-2xl font-md text-white tracking-wider">
                Todo List made with React
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/maddyengblad/TodoListApp">
                  <button className="text-center px-4 m-2 bg-white text-[#9F86C0] font-medium text-lg">
                    Github
                  </button>
                </a>
                <a href="/">
                  <button className="text-center px-4 m-2 bg-white text-[#9F86C0] font-medium text-lg">
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${PostitNotes})` }}
            className="shadow-lg shadow-[#040c16] group container flex justify-center items-center mx-auto content-div"
          >
            {/*hover*/}
            <div className="opacity-0 group-hover:opacity-100 duration-200">
              <span className="text-2xl font-md text-white tracking-wider">
                Postit Notes made with JS
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/maddyengblad/PostItNotes">
                  <button className="text-center px-4 m-2 bg-white text-[#9F86C0] font-medium text-lg">
                    Github
                  </button>
                </a>
                <a href="/">
                  <button className="text-center px-4 m-2 bg-white text-[#9F86C0] font-medium text-lg">
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/*item*/}
          <div
            style={{ backgroundImage: `url(${tba})` }}
            className="shadow-lg shadow-[#040c16] group container flex justify-center items-center mx-auto content-div"
          >
            {/*hover*/}
            <div className="opacity-0 group-hover:opacity-100 duration-200">
              <span className="text-2xl font-bold text-white tracking-wider text-center"></span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center px-4 m-2 bg-white text-[#9F86C0] font-medium text-lg"></button>
                </a>
                <a href="/">
                  <button className="text-center px-4 m-2 bg-white text-[#9F86C0] font-medium text-lg"></button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
