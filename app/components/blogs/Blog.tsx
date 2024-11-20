import { Blog as BlogType } from "@/app/types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  blog: BlogType;
}
const Blog = ({ blog }: Props) => {
  return (
    <div className="col-span-12 md:col-span-4 lg:col-span-3 hover:scale-105 cursor-pointer  transition duration-200">
      <div className="w-full h-[300px]  border border-neutral-400 rounded-lg p-2">
        <Link
          href={`/blogs/${blog.id}`}
          className="relative h-2/3 w-full block">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            sizes="fill"
            className="object-cover rounded-lg"
          />
        </Link>

        <div className="space-y-1 h-1/2 mt-2">
          <h4 className="text-sm text-red-500">Experience</h4>
          <h2 className="text-lg font-semibold">{blog.title}</h2>
          <p className="text-sm text-neutral-400">{blog.subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
