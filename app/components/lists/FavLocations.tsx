import React from "react";
import SectionHeading from "../SectionHeading";
import ProductSlider from "../ProductSlider";
import { locations } from "../../constant";
const FavLocations = () => {
  return (
    <div className="container mt-10">
      <SectionHeading text="Favorite Locations" />
      <ProductSlider delay={2500} content={locations} />
    </div>
  );
};

export default FavLocations;
