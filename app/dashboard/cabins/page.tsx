import { getCabins } from "@/app/actions";
import DashboardCabinItem from "@/app/components/dashboard/DashboardCabinItem";

import DashboardHeader from "@/app/components/dashboard/DashboardHeader";
import { Cabin } from "@/app/types/types";

import React from "react";

const CabinsPage = async () => {
  const cabins: Cabin[] = await getCabins();
  return (
    <div>
      <DashboardHeader modal="cabin" title="Cabin List" />
      <div className="grid grid-cols-12 gap-4 p-4">
        {cabins.map((cabin) => {
          return <DashboardCabinItem cabin={cabin} key={cabin.id} />;
        })}
      </div>
    </div>
  );
};

export default CabinsPage;
