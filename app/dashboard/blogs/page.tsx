import { getBlogs } from "@/app/actions";
import DashboardItemAction from "@/app/components/dashboard/DashbaordItemActions";
import DashboardHeader from "@/app/components/dashboard/DashboardHeader";
import Image from "next/image";
import React from "react";

const BlogPage = async () => {
  const blogs = await getBlogs();
  return (
    <div className="flex flex-col items-center justify-center">
      <DashboardHeader title="Blogs list" modal="blog" />
      <div className="grid grid-cols-12 gap-4 p-4 w-full">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="col-span-6 md:col-span-4 lg:col-span-3 w-full h-[300px] bg-white rounded-lg shadow-md hover:shadow-lg cursor-pointer p-2">
            <div className="h-2/3 w-full relative">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                sizes="fill"
                className="object-cover rounded-md"
              />
            </div>
            <div className="leading-none mt-2">
              <h2 className="text-xl font-bold capitalize">{blog.title}</h2>
              <h2 className="text-base text-neutral-800">{blog.subtitle}</h2>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm text-neutral-600">{blog.desc}</p>
              <DashboardItemAction id={blog.id} url="/api/newBlog" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
