import { Location } from "@/app/types/types";
import Image from "next/image";
import DashboardItemAction from "./DashbaordItemActions";

interface Props {
  item: Location;
}

const DashboardItem = ({ item }: Props) => {
  return (
    <div key={item.id} className="dashboard__item">
      <div className="relative w-full h-3/4">
        <Image
          src={item.images}
          alt={item.location}
          fill
          className="object-cover rounded-md"
          sizes="fll"
        />
      </div>
      <div className="mt-2 flex items-center justify-between">
        <h2 className="text-lg font-semibold">City: {item.location}</h2>
        <DashboardItemAction url="/api/newCity" id={item.id} />
      </div>
    </div>
  );
};

export default DashboardItem;
