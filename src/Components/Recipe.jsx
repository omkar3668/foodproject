import React from "react";
import CardSlider from "./CardSlider";

export default function Recipe(props) {
  return (
    <>
      <div className="flex justify-center items-center bg-yellow-400 pb-35">
        <h1 className="leading-normal font-bold text-3xl  text-white">
          Our Recipes
        </h1>
      </div>
      <CardSlider />
    </>
  );
}
