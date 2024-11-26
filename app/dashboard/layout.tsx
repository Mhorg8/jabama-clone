"use client";
import SidebarItem from "../components/sidebar/SidebarItem";
import SidebarToggler from "../components/sidebar/SidebarToggler";
import { useAppSelector } from "../lib/redux/hooks";
import { sidebarItems } from "../constant";

const layout = ({ children }: { children: React.ReactNode }) => {
  const sidebarStatus = useAppSelector((state) => state.sidebar.sidebarStatus);

  return (
    <div className="mt-[150px] md:mt-[100px]">
      <div className="grid grid-cols-10 h-[calc(100dvh-20dvh)] relative">
        {sidebarStatus && (
          <div className="col-span-2 md:col-span-1 bg-neutral-200 relative p-4">
            <ul
              className="flex flex-col items-center justify-start md:justify-center h-full gap-7 fixed top-[150px] left-10 md:static 
            ">
              {sidebarItems.map((item) => {
                return <SidebarItem item={item} key={item.id} />;
              })}
            </ul>
          </div>
        )}

        <div
          className={`${
            sidebarStatus ? " col-span-8 md:col-span-9" : "col-span-10"
          } bg-neutral-300 relative`}>
          <SidebarToggler />
          <div className="mt-12">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default layout;
