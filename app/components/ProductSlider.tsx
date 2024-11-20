"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { Location } from "../types/types";
import { useRouter } from "next/navigation";
import LocationItem from "./LocationItem";
import { motion } from "framer-motion";
interface Props {
  content: Location[];
  delay: number;
}

const ProductSlider = ({ content, delay }: Props) => {
  const router = useRouter();
  const updateSearchParams = (location: string) => {
    const params = new URLSearchParams(window.location.search);
    params.set("city", location);

    router.push(`/?${params}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.3 }}>
      <Swiper
        autoplay={{
          delay: delay,
          disableOnInteraction: false,
        }}
        spaceBetween={10}
        slidesPerView={3} // Default number of slides (for small screens)
        modules={[Autoplay]}
        loop={true}
        breakpoints={{
          // When the window width is 640px or more, show 5 slides
          780: {
            slidesPerView: 6,
          },
          640: {
            slidesPerView: 4,
          },
          // For screens smaller than 640px, show 3 slides
          320: {
            slidesPerView: 3,
          },
        }}
        className="w-full">
        {content.map((item) => (
          <SwiperSlide
            className="cursor-pointer"
            key={item.location}
            onClick={() => updateSearchParams(item.location)}>
            <LocationItem item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};

export default ProductSlider;
