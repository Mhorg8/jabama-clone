import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
const ImageSlider = ({ images }: { delay: number; images: string[] }) => {
  return (
    <div>
      {" "}
      <Swiper
        slidesPerView={1} // Default number of slides (for small screens)
        loop={true}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="w-full rounded-lg h-[150px] md:h-[175px]">
        {images.map((item, index) => (
          <SwiperSlide key={index} className="cursor-pointer relative ">
            <Image
              src={item}
              alt=""
              fill
              sizes="fill"
              className="object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
