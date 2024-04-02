import React from "react";
import { Link, NavLink } from "react-router-dom";
import foodLogo from "../assets/Images/Aboutpageimg.png";

export default function LoginError(props) {
  return (
    <>
      <section className="flex items-center h-screen p-16 bg-stone-900">
        <div className="container flex flex-col items-center ">
          <div className="flex flex-col gap-6 max-w-md text-center">
            <h2 className="font-extrabold text-9xl text-gray-600 dark:text-gray-100">
              <span className="sr-only">Error</span>404
              {/* <img src={foodLogo} alt="img" /> */}
            </h2>
            <p className="text-2xl md:text-3xl dark:text-gray-300">
              To Connect with us Please make yourself Register first
            </p>
            <p className="text-2xl md:text-3xl dark:text-gray-300">
              Already Register please Login first
            </p>
            <NavLink
              to="/register"
              className="px-8 py-4 text-xl font-semibold rounded bg-purple-600 text-gray-50 hover:text-gray-200"
            >
              Register
            </NavLink>
            <NavLink
              to="/login"
              className="px-8 py-4 text-xl font-semibold rounded bg-purple-600 text-gray-50 hover:text-gray-200"
            >
              Log In
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
}
