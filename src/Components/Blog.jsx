import React from "react";
import foodLogo from "../assets/Images/Aboutpageimg.png";
import blogImg1 from "../assets/Images/blogimg1.png";
import blogImg2 from "../assets/Images/blogimg2.png";
import blogImg3 from "../assets/Images/blogimg3.png";

export default function Blog(props) {
  return (
    <>
      <div className="flex justify-center items-center pt-6">
        <img src={foodLogo} alt="food-logo" />
      </div>
      <div className="flex justify-center items-center px-45">
        <p className="text-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem
          excepturi.
        </p>
      </div>
      <div className="cardStyle">
      <div className="justify-center items-center grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        <div className="rounded overflow-hidden shadow-lg border-gray-800">
          <img className="w-full border"  src={blogImg1} alt="burger" />
          <div className="px-6 py-4 border">
            <div className="font-bold text-xl mb-2">Spicy Burger</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, Nonea! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
        </div>

        <div className="rounded overflow-hidden shadow-lg">
          <img className="w-full border" src={blogImg2} alt="Egg" />
          <div className="px-6 py-4 border">
            <div className="font-bold text-xl mb-2">Egg Toast</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, Nonea! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
        </div>

        <div className="rounded overflow-hidden shadow-lg">
          <img className="w-full border" src={blogImg3} alt="Toast" />
          <div className="px-6 py-4 border">
            <div className="font-bold text-xl mb-2">Pizza</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, Nonea! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
