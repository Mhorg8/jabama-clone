"use client";
import Link from "next/link";

import { motion } from "framer-motion";

interface Props {
  text: string;
  type?: "submit" | "button";
  click?: () => void;
  textColor?: string;
  bgColor?: string;
  link?: boolean;
  path?: string;
  customStyle?: string;
  textSize?: string;
  haveMotion?: boolean;
}

const WhiteButton = ({
  text,
  textColor,
  bgColor,
  click,
  link,
  path,
  customStyle,
  textSize,
  haveMotion,
  type = "button",
}: Props) => {
  const buttonContent = (
    <span
      className={`${textColor && textColor} ${
        textSize ? textSize : "text-lg"
      } `}>
      {text}
    </span>
  );

  const commonClassNames = `${customStyle ? customStyle : ""} ${
    bgColor ? bgColor : "bg-transparent"
  } white__button w-full h-full`;

  if (link) {
    if (haveMotion) {
      return (
        <motion.div
          initial={{ backgroundColor: "#fff", color: "#000", scale: 1 }}
          whileTap={{ backgroundColor: "#ffa500", color: "#fff", scale: 1.07 }}
          whileHover={{ backgroundColor: "#ffa500", color: "#fff", scale: 1 }}
          transition={{ duration: 0.2 }}
          className={commonClassNames}>
          <Link href={path ? path : "/"}>{buttonContent}</Link>
        </motion.div>
      );
    }

    return (
      <Link className={commonClassNames} href={path ? path : "/"}>
        {buttonContent}
      </Link>
    );
  }

  if (haveMotion) {
    return (
      <motion.button
        initial={{ backgroundColor: "#ffaa", color: "#000", scale: 1 }}
        whileTap={{ backgroundColor: "#ffa500", color: "#fff", scale: 1.07 }}
        whileHover={{ backgroundColor: "#ffa500", color: "#fff", scale: 1 }}
        transition={{ duration: 0.2 }}
        className={commonClassNames}
        type={type}
        onClick={click}>
        {buttonContent}
      </motion.button>
    );
  }

  return (
    <button className={commonClassNames} type={type} onClick={click}>
      {buttonContent}
    </button>
  );
};

export default WhiteButton;
