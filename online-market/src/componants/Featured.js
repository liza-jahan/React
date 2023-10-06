import React, { useState } from "react";
import { BsChevronCompactLeft,BsChevronCompactRight} from "react-icons/bs";

const Featured = () => {
  const sliders = [
    {
      url: "https://hips.hearstapps.com/hmg-prod/images/turkey-burger-index-64873e8770b34.jpg?crop=0.6666666666666667xw:1xh;center,top&resize=1200:*",
    },
    {
      url: "https://media.istockphoto.com/id/1329622513/photo/delicious-hamburger-with-beef-cutlet-vegetables-and-onions-isolated-on-a-white-background.jpg?s=612x612&w=0&k=20&c=Rs2RpqURifMuXIQhOgRu3nmrhrfC4A1KQtRf1SElo6g=",
    },
    {
      url: "https://media.istockphoto.com/id/938742222/photo/cheesy-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=D1z4xPCs-qQIZyUqRcHrnsJSJy_YbUD9udOrXpilNpI=",
    }
  ];
  const [currentIndex, setCurrentIndex] = useState(1);
  return (
    <div className="max-w-[1520px] h-[500px] w-full py-4 px-4 relative">
      <div className="w-full h-full rounded-2xl bg-cover duration-500" style={{backgroundImage: `url(${sliders[currentIndex].url})`}}></div>
     <div className="absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-red-700 text-white cursor-pointer"><BsChevronCompactLeft/></div>
      </div>
  );
};

export default Featured;
