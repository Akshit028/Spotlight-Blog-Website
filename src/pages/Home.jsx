import React from "react";
import { Container } from "../components/index";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import home from '../images/home.png'

function Home() {
  const authStatus = useSelector((state) => state.auth.status);

  return (
    <Container>
      <div className="relative w-full bg-black">
        <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
          <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
            <h1 className="mt-8 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-6xl">
              <span className="text-[#DCDF00] text-4xl md:text-5xl lg:text-7xl">Spotlight</span>. your go-to destination for all things blogging.
            </h1>
            <p className="mt-8 text-lg text-white">
              Dive into insightful articles, captivating stories, and thought provoking discussions, or unleash your creativity and share your own perspectives by contributing your own blog posts.
            </p>

            <Link to={authStatus ? "/all-posts" : "/login"}>
              <button
                type="button"
                className="rounded-md mt-8  bg-[#DCDF00] hover:bg-[#DCDF00]/80  px-3 py-2 text-md font-semibold text-black "
              >
                {authStatus ? "View All Posts" : "Get Started"}
              </button>
            </Link>
          </div>
          <div className="relative lg:col-span-5 lg:-mr-8 xl:col-span-6">
            <img
              className="aspect-[3/2] bg-gray-50 object-cover lg:aspect-[4/3] lg:h-[700px] xl:aspect-[16/9]"
              src={home}
              alt={home}
            />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Home;

