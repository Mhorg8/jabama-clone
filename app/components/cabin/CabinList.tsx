import React from "react";
import SectionHeading from "../SectionHeading";
import CabinSlider from "./CabinSlider";
import { cabins } from "../../constant";
const CabinList = () => {
  return (
    <div className="container mt-10">
      <SectionHeading text="Special offers for you" />
      <CabinSlider content={cabins} />
    </div>
  );
};

export default CabinList;
