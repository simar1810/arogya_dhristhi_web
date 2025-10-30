"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { wellnessResults } from "@/utils/data";

export default function Carousel() {
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const prev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    beforeChange: (oldIndex, newIndex) => setActiveIndex(newIndex),
    responsive: [
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full flex flex-col p-4 pt-20 md:pt-32 bg-gradient-to-tr from-[#FF61001A] via-[#16BA980D] to-[#0062311A]">
      <div className="w-full flex justify-between">
        <div className="w-full md:w-[60%] mx-auto flex flex-col gap-3 z-30">
          <h1 className="text-2xl md:text-4xl font-semibold text-center w-full">
            Wellness from Our Thriving Community
          </h1>
          <div className="flex gap-4 items-center justify-center">
            <div className="flex gap-2 justify-center items-center">
              {/* <button
                onClick={prev}
                className="w-8 h-8 flex justify-center items-center border border-black rounded-full bg-white shadow-md hover:bg-gray-200 transition-all"
              >
                &#8592;
              </button>
              <button
                onClick={next}
                className="w-8 h-8 flex justify-center items-center border border-black rounded-full bg-white shadow-md hover:bg-gray-200 transition-all"
              >
                &#8594;
              </button> */}
            </div>
            <p className="text-base xl:text-lg text-center text-zinc-600">
              Experience the best wellness transformations through our
              community-driven support and personal coaching.
            </p>
          </div>
        </div>
      </div>

      <Slider
        ref={sliderRef}
        {...settings}
        className="w-full max-w-[1200px] mx-auto [&_.slick-track]:flex [&_.slick-track]:items-end gap-2 overflow-visible mt-10 md:mt-20"
      >
        {wellnessResults.map((item, index) => {
          return (
            <div
              key={item.i}
              className={`flex items-center gap-5 transition-all duration-700 ease-in-out transform mt-auto rounded-xl`}
            >
              <Image
                src={item.img}
                alt=""
                width={419}
                height={443}
                className={`w-full aspect-square transition-all duration-700 ease-in-out transform object-contain origin-bottom rounded-2xl`}
              />
              {/* {index === activeIndex && <div className={"bg-[var(--accent-1)] rounded-xl flex flex-col px-4 py-2 md:p-4 text-white mt-4 md:mt-8 transition-all duration-700 ease-in-out "}>
                                <h1 className='font-semibold font-serif text-[12px] md:text-[24px]'>{item.name}</h1>
                                <p className='text-left text-[8px] md:text-[12px] leading-tight mt-1 md:mt-2'>{item.review}</p>
                            </div>} */}
            </div>
          );
        })}
      </Slider>
      <p className="font-medium text-center mt-8 mb-20 md:mb-32 text-sm md:text-base xl:text-xl italic text-zinc-400">
        <span className="font-semibold">Disclaimer:</span> Results are not typical Individual results may vary
      </p>
    </div>
  );
}
