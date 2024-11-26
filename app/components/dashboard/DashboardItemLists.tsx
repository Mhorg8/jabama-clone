import { Location } from "@/app/types/types";

import DashboardItem from "./DashboardItem";

interface Props {
  items: Location[];
}

const DashboardItemLists = async ({ items }: Props) => {
  return (
    <div className="grid grid-cols-12 px-4 gap-4 mt-5 p-4">
      {items.map((item) => {
        return <DashboardItem item={item} key={item.id} />;
      })}
    </div>
  );
};

export default DashboardItemLists;
