"use client";
import { useState } from "react";
import SectionHeading from "../SectionHeading";
import WhiteButton from "../WhiteButton";
import CreateNewCity from "../forms/CreateNewCity";
import CreateNewCabin from "../forms/CreateNewCabin";
import CreateNewBlog from "../forms/CreateNewBlog";

interface Props {
  title: string;
  modal?: string;
}

const DashboardHeader = ({ title, modal }: Props) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  return (
    <div className="flex items-center justify-between w-full container">
      <SectionHeading text={title} />
      <WhiteButton
        click={() => setOpenModal(true)}
        text="Create new"
        type="button"
        textSize="14px"
        customStyle="max-w-[130px] hover:bg-orangeColor hover:text-white transition duration-200"
      />

      {openModal && modal === "city" && (
        <CreateNewCity closeModal={() => setOpenModal(false)} />
      )}
      {openModal && modal === "cabin" && (
        <CreateNewCabin closeModal={() => setOpenModal(false)} />
      )}

      {openModal && modal === "blog" && (
        <CreateNewBlog closeModal={() => setOpenModal(false)} />
      )}
    </div>
  );
};

export default DashboardHeader;
