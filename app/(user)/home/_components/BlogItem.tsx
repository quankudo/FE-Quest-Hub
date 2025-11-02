import React from "react";
import { CalendarDays, ArrowRight } from "lucide-react";
import { Blog } from "../ListBlog";
import Button from "@/components/common/Button";

const BlogItem = ({ blog }: { blog: Blog }) => {
  return (
    <div className="border border-orange-200 rounded-xl overflow-hidden bg-white hover:shadow-xl transition-all duration-300 flex flex-col">
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-52 object-cover rounded-t-xl"
      />
      <div className="p-5 flex flex-col grow">
        <h3 className="font-semibold text-lg mb-2 line-clamp-2">
          {blog.title}
        </h3>
        <p className="text-gray-600 text-sm grow line-clamp-2">{blog.desc}</p>

        <div className="flex items-center text-gray-500 text-sm my-4">
          <CalendarDays className="w-4 h-4 mr-2" />
          {blog.date}
        </div>

        <Button text={`ĐỌC THÊM`} icon={ArrowRight} notWidthFull={true} />
      </div>
    </div>
  );
};

export default BlogItem;
