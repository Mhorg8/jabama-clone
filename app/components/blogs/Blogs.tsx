import { blogs } from "@/app/constant";
import SectionHeading from "../SectionHeading";
import Blog from "./Blog";

const Blogs = () => {
  return (
    <div className="container mt-10">
      <SectionHeading text="Experience on the journey" />
      <p className="text-neutral-400 text-lg">
        Book experiences and day tours with a skilled and knowledgeable guide
      </p>

      <div className="grid grid-cols-12 w-full gap-4 mt-5">
        {blogs.map((blog) => {
          return <Blog key={blog.id} blog={blog} />;
        })}
      </div>
    </div>
  );
};

export default Blogs;
