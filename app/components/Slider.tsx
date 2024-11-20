"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import { sliderImage } from "../constant";

const Slider = () => {
  return (
    <div className="container">
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        spaceBetween={50}
        slidesPerView={1}
        modules={[Autoplay]}
        loop={true}
        className="w-full">
        {sliderImage.map((item, index) => (
          <SwiperSlide className="" key={index}>
            <div className="relative w-full h-[280px] cursor-pointer">
              <Image
                src={item.image}
                fill
                sizes="fill"
                alt=""
                className="rounded-xl w-full object-cover bg-red-200"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
