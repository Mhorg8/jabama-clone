import React from "react";

interface Props {
  params: Promise<{ id: number }>;
}

const page = async ({ params }: Props) => {
  const { id } = await params;
  console.log(id);

  return <div className="mt-[150px]">{id}</div>;
};

export default page;
