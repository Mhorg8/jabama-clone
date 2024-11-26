import React from "react";
interface Props {
  params: Promise<{ s: string }>;
}
const SearchResult = async ({ params }: Props) => {
  const { s } = await params;
  return <div className="mt-[150px]">{s}</div>;
};

export default SearchResult;
