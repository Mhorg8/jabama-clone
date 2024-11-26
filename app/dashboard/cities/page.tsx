import DashboardItemLists from "@/app/components/dashboard/DashboardItemLists";
import DashboardHeader from "@/app/components/dashboard/DashboardHeader";
import { getCities } from "@/app/actions";

// import CreateNewCity from "@/app/components/forms/CreateNewCity";

const CitiesPage = async () => {
  const cities = await getCities();

  return (
    <div className="">
      <DashboardHeader modal="city" title="Cities list" />
      <DashboardItemLists items={cities} />
    </div>
  );
};

export default CitiesPage;
