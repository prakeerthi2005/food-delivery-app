import React, { useEffect, useState, useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cards from "./Cards";
import Slider from "react-slick";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const simpleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    >
      NEXT
    </div>
  );
};
const simplePreviousArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      >
        PREVIOUS
      </div>
    );
  };

const SpecialCategories = () => {
  const [recipes, setRecipes] = useState([]);
  const slider = useRef(null);

  useEffect(() => {
    fetch("http://localhost:6002/menu")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch menu data");
        return res.json();
      })
      .then((data) => {
        const popularItems = data.filter((item) => item.category === "popular");
        setRecipes(popularItems);
      })
      .catch((error) => console.error("Error fetching menu data:", error));
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    nextArrow:<simpleNextArrow/>,
    prevArrow:<simplePreviousArrow/>
  };

  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 my-20 relative ">
      {/* Header Section */}
      <div className="text-left text-sm mb-6">
        <p className="subtitle text-gray-500">Special Dishes</p>
        <h2 className="title text-2xl font-bold">
          Standout Dishes
          <br /> From Our Menu
        </h2>
      </div>
      <div className="justify-between items-center flex">
        <button onClick={()=>slider?.current?.slickPrev()} className="btn p-2 rounded-full ml-5 hover:bg-green">
            <FaAngleLeft/>
        </button>
        <button onClick={()=>slider?.current?.slickNext()} className="btn p-2 rounded-full ml-5 hover:bg-green">
            <FaAngleRight/>
        </button>
      </div>

      {/* Carousel Section */}
      <Slider ref={slider} {...settings} className="overflow-hidden mt-10 space-x-5">
        {recipes.map((item) => (
          <Cards key={item._id} items={item} />
        ))}
      </Slider>
    </div>
  );
};

export default SpecialCategories;
