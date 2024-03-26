import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import homemadeimg from '../assets/Images/homemade.png'
import noodels from '../assets/Images/Noodels.png'
import egg from '../assets/Images/Egg.png'
import sushi from '../assets/Images/Sushi.png'
import coffeebreak from '../assets/Images/Coffee-break.png'

export default function CardSlider(props) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <Carousel responsive={responsive} className = 'maincarousel'>
        <div className="card">
            <img src= {homemadeimg} alt="homemade.png" width="200" height="200" />
            <h2 className="namestyle">Homemade</h2>
            <p className="namestyle"><span className="price">$</span>10</p>
        </div>
        <div className="card">
            <img src= {noodels} alt="noodels" width="200" height="200" />
            <h2 className="namestyle">Noodels</h2>
            <p className="namestyle"><span className="price">$</span>30</p>
        </div>
        <div className="card">
            <img src= {egg} alt="egg" width="200" height="200" />
            <h2 className="namestyle">Egg</h2>
            <p className="namestyle"><span className="price">$</span>40</p>
        </div>
        <div className="card">
            <img src= {sushi} alt="sushi" width="200" height="200" />
            <h2 className="namestyle">Sushi Dizzy</h2>
            <p className="namestyle"><span className="price">$</span>50</p>
        </div>
        <div className="card">
            <img src= {coffeebreak} alt="coffee" width="200" height="200"/>
            <h2 className="namestyle">The Coffee Break</h2>
            <p className="namestyle"><span className="price">$</span>60</p>
        </div>
        <div className="card">
            <img src= {homemadeimg} alt="homemade.png" width="200" height="200" />
            <h2 className="namestyle">Homemade</h2>
            <p className="namestyle"><span className="price">$</span>20</p>
        </div>
      </Carousel>
    </>
  );
}