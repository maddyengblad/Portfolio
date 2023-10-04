import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import stars from "../assets/nightsky.png";
// import { useEffect, useState } from "react";    // this is for the wp fetch part.

const Home = () => {
  // The following is for the teacher, to show that I understand how to fetch JSON data form WP.
  // Although I am not directly using it, becoause wordpress had major issues working with my site.
  // It should still work, but I am fetching from my other domain with WP on it.
  // I have since used firebase in another project.
  //
  /*   const [posts, setposts] = useState([]);
  useEffect(() => {
    async function getPosts() {
      const url =
        "https://maddyengblad.com/wp-json/wp/v2/posts?_embed&categories=10";
      const response = await fetch(url);
      const data = await response.json();
      setposts(data);
    }
    getPosts();
  }, []);

  return (
    <section className="home-section">
      <h1>Wellcome to Hellsome Travels</h1>
      {posts.map((post) => (
        <Content key={post.id} post={post} />
      ))}
    </section>
  );
} */
  return (
    <div
      name="home"
      style={{ backgroundImage: `url(${stars})` }}
      className="w-full h-screen bg-[#1A1A1A] bg-no-repeat bg-cover bg-blend-hard-light shadow-lg shadow-[#040c16] "
    >
      {/*container*/}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-gray-300 px-1">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-gray-300">
          Maddy Engblad
        </h1>
        <h2 className="text-2xl sm:text-4xl px-1 font-bold text-[#9F86C0]">
          I'm a Frontend Developer
        </h2>
        <p className="text-gray-300 py-4 px-1 max-w-[500px] ">
          Born in 1995, originally from Copenhagen, now living in Aarhus. I love
          expressing myself through the things I create, whether it's music,
          food or websites. I'm currently looking for an internship, please have
          a look around and if you're interested, feel free to contact me.
        </p>
        <div>
          <Link
            activeClass="active"
            to="projects"
            smooth={true}
            duration={500}
            className="text-white group border-2 px-6 py-3 my-2 mx-1 flex items-center justify-center hover:bg-[#9F86C0] hover:border-[#9F86C0] w-32 cursor-pointer duration-200"
          >
            :Projects
            <span className="group-hover:rotate-90 duration-300 px-1">
              <HiArrowNarrowRight />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
