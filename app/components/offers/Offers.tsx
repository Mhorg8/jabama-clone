import { cabins } from "@/app/constant";
import CabinSlider from "../cabin/CabinSlider";
import SectionHeading from "../SectionHeading";

const Offers = () => {
  return (
    <div className="container bg-black py-10">
      <SectionHeading
        textColor="text-white"
        text="Instant and confirmed bookings"
      />
      <p className="text-white text-lg tracking-wide">
        No need for host approval, your stay is quickly secured
      </p>

      <CabinSlider content={cabins} />
    </div>
  );
};

export default Offers;
