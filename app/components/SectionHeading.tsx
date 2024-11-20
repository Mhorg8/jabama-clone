import React from "react";

interface Props {
  text: string;
  textColor?: string;
}

const SectionHeading = ({ text, textColor }: Props) => {
  return (
    <h1
      className={`${
        textColor ? textColor : "text-neutral-800"
      } text-xl md:text-3xl font-bold `}>
      {text}
    </h1>
  );
};

export default SectionHeading;
