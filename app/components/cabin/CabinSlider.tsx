"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { Cabin } from "../../types/types";
import CabinItem from "./CabinItem";
import { motion } from "framer-motion";

interface Props {
  content: Cabin[];
}
const CabinSlider = ({ content }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.3 }}>
      <Swiper
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        spaceBetween={10}
        slidesPerView={3} // Default number of slides (for small screens)
        modules={[Autoplay]}
        loop={true}
        breakpoints={{
          // When the window width is 640px or more, show 5 slides
          780: {
            slidesPerView: 5,
          },
          640: {
            slidesPerView: 2,
          },
          // For screens smaller than 640px, show 3 slides
          320: {
            slidesPerView: 1,
          },
        }}
        className="w-full mt-5">
        {content.map((item, index) => (
          <SwiperSlide className="cursor-pointer" key={index}>
            <CabinItem item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};

export default CabinSlider;
