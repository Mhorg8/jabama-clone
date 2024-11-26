import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-[30dvh] md:h-[calc(100dvh-20dvh)] relative">
      <Image
        src="/hero.jpg"
        alt=""
        fill
        sizes="fill"
        className="object-cover aspect-auto"
      />
    </div>
  );
};

export default Hero;
