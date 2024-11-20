import ProductSlider from "../ProductSlider";
import SectionHeading from "../SectionHeading";
import { locations } from "../../constant";
import WhiteButton from "../WhiteButton";
const CitiesList = () => {
  return (
    <div className="container mt-10 w-full flex flex-col">
      <div className="flex items-center justify-between">
        <SectionHeading text="Accommodation in cities of Iran" />
        <div className="hidden md:flex mr-5 z-10">
          <WhiteButton
            text="Show More"
            link
            haveMotion
            textSize="14px"
            path="/"
            customStyle="mt-5 w-[100px] px-2"
          />
        </div>
      </div>
      <ProductSlider delay={3000} content={locations} />

      <WhiteButton
        text="Show More "
        link
        path="/"
        haveMotion
        customStyle="mt-5 md:hidden"
      />
    </div>
  );
};

export default CitiesList;