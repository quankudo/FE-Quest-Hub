import React from "react";
import BlogItem from "./_components/BlogItem";
import TitleHeading from "@/components/common/TitleHeading";

export interface Blog {
  id: number;
  title: string;
  desc: string;
  date: string;
  image: string;
}

const fakeBlogs: Blog[] = [
  {
    id: 1,
    title: "10 Sun Hats For Beach Days, Long",
    desc: "Nulla porttitor accumsan tincidunt. Curabitur aliquet quam id dui posuere blandit.",
    date: "12 Tháng Mười Hai, 2023",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    title: "Cambodia In August: Island Hopping And Weather",
    desc: "Nulla porttitor accumsan tincidunt. Curabitur aliquet quam id dui posuere blandit.",
    date: "12 Tháng Mười Hai, 2023",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    title: "Kenya vs Tanzania Safari: The Better African",
    desc: "Nulla porttitor accumsan tincidunt. Curabitur aliquet quam id dui posuere blandit.",
    date: "12 Tháng Mười Hai, 2023",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80",
  },
];

const ListBlog = () => {
  return (
    <div className="my-20 px-20">
      {/* Header */}
      <TitleHeading
        title="Blog & Tin tức"
        subTitle="Bài viết mới"
        desc="Khám phá bài viết mới nhất với thông tin nổi bật, xu hướng du lịch
        hiện đại và nội dung hữu ích giúp bạn cập nhật mọi điều thú vị."
      />

      {/* Danh sách blog */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {fakeBlogs.map((blog) => (
          <BlogItem key={blog.id} blog={blog} />
        ))}
      </div>

      {/* Nút xem thêm */}
      <div className="flex justify-center mt-12">
        <button className="bg-teal-400 hover:bg-teal-500 text-white font-semibold px-8 py-3 rounded-md">
          XEM THÊM
        </button>
      </div>
    </div>
  );
};

export default ListBlog;
