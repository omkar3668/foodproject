import React from "react";
import burgerImg from "../assets/Images/burger.png";
import { NavLink } from "react-router-dom";

export default function Home(props) {
  return (
    <div className="bg-stone-900">
      <div className="container mx-auto flex flex-col md:flex-row items-center py-10 md:my-22">
        <div className="flex flex-col w-full lg:w-1/2 justify-center items-start pt-12 pb-24 px-6">
          <h1 className="leading-normal font-bold text-5xl my-4 text-white">
            Discover Restaurants that deliver near you
          </h1>
          <p className="leading-normal mb-4 text-gray-300">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Asperiores, eveniet. Atque, veritatis sit. Nam, voluptates nihil
            vitae enim dicta consequuntur in alias, repudiandae, modi
            necessitatibus earum quia reiciendis iusto dolores.
          </p>
          <button className="bg-transparent text-white hover:bg-yellow-400 hover:shadow-lg py-2 px-4 border border-white hover:border-transparent">
            <NavLink to="/Recipe">Order Now</NavLink>
          </button>
        </div>

        <div className="w-full lg:w-1/2 lg:py-6 text-center">
          <img
            className="fill-current text-gray-900  mx-auto"
            src={burgerImg}
            alt="burger"
            viewBox="0 0 20 20"
          />
        </div>
      </div>
    </div>
  );
}
