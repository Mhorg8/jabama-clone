import CabinList from "./components/cabin/CabinList";
import Categories from "./components/category/Categories";
import CitiesList from "./components/lists/CitiesList";
import FavLocations from "./components/lists/FavLocations";
import Hero from "./components/Hero/Hero";
import MobileHero from "./components/Hero/MobileHero";
import InfoSection from "./components/InfoSection";
import Offers from "./components/offers/Offers";
import Blogs from "./components/blogs/Blogs";

export default function Home() {
  return (
    <div>
      {/* desktop version */}
      <div className="hidden md:block">
        <Hero />
      </div>
      {/* mobile version */}
      <div className="block md:hidden">
        <MobileHero />
      </div>
      <Categories />
      <FavLocations />
      <CitiesList />
      <CabinList />
      <Offers />
      <InfoSection />
      <Blogs />
    </div>
  );
}
