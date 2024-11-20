import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/" className="relative w-[80px] h-[30px] block">
      <Image
        src="/logo.svg"
        alt=""
        className="object-contain "
        fill
        sizes="fill"
      />
    </Link>
  );
};

export default Logo;
