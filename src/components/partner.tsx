import React, { useLayoutEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { partnerData } from "./../model/partnerData";
const Partner = () => {
  const [slidesToShow, setSlidesToShow] = useState(3);

  useLayoutEffect(() => {
    const updateSlidesToShow = () => {
      if (window.innerWidth <= 768) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);
    return () => {
      window.removeEventListener("resize", updateSlidesToShow);
    };
  }, []);

  const settings = {
    // dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div id="partner" className="bg-white py-40 ">
      <div className="mx-auto  ">
        <div className="  lg:mx-0">
          <h2 className="md:text-3xl text-2xl font-bold tracking-tight mx-20 mb-5 text-gray-900 ">
            OUR PARTNERS
          </h2>
        </div>
        <div className=" h-2 w-full bg-primary" />
        <Slider
          {...settings}
          className="mx-auto  mt-10 grid max-w-2xl grid-cols-2  gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-4 xl:grid-cols-4"
        >
          {partnerData?.map((partner: any, index: number) => {
            return (
              <li key={partner._id} className="">
                <img
                  width={1000}
                  height={1000}
                  className="mx-auto w-[200px] h-[130px] rounded-md object-contain"
                  src={partner.image}
                  alt=""
                />
              </li>
            );
          })}
        </Slider>
        <div className=" h-2 w-full bg-primary" />
      </div>
    </div>
  );
};

export default Partner;
