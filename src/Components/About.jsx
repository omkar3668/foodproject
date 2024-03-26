import React from "react";
import foodLogo from "../assets/Images/Aboutpageimg.png";
import foodImage from "../assets/Images/aboutimg2.png";
import { useState } from "react";

const paragraphStyle = {
  WebkitLineClamp: 9,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  display: "-webkit-box",
};

export default function About(props) {
  const [para, setPara] = useState(false);

  function handelClick() {
    setPara(!para);
  }
  return (
    <>
      <div className="flex justify-center items-center pt-12">
        <img src={foodLogo} alt="food-logo" />
      </div>
      <div className="flex justify-center items-center px-45">
        <p className="text-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem
          excepturi, <br /> amet Lorem ipsum, dolor sit amet consectetur
          adipisicing elit.
        </p>
      </div>
      <div className="parent">
        <div className="child1">
          <h1 className="title1">Best Food</h1>
          <p style={para ? null : paragraphStyle}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime at
            nostrum, placeat esse obcaecati quia consequuntur incidunt, dolores
            doloribus blanditiis nesciunt nihil! Maxime aspernatur repellat
            minima blanditiis ipsum nesciunt labore voluptatem, praesentium
            dicta voluptatibus incidunt, recusandae ab dolores cupiditate eum.
            Atque sequi unde, hic laudantium dolore temporibus harum fuga
            consequuntur.Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Maxime at Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Maxime at
          </p>
          <button onClick={handelClick} className="title2">
            {para ? "Read less" : "Read more ->"}
          </button>
        </div>
        <div className="child2">
          <img src={foodImage} alt="food-logo2" />
        </div>
      </div>
    </>
  );
}
