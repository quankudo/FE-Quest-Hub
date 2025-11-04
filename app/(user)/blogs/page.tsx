"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const blogs = [
  {
    id: 1,
    title: "Khám phá Sapa: Mùa mây trắng và những cung đường lãng mạn",
    category: "Địa điểm",
    author: "Minh Nguyễn",
    date: "28/10/2025",
    summary:
      "Hành trình đến Sapa, nơi núi rừng hùng vĩ và bản làng yên bình hòa quyện trong sương sớm. Khám phá văn hóa dân tộc và những cung đường mộng mơ.",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    title: "5 món ăn đặc sản miền Trung khiến bạn nhớ mãi",
    category: "Ẩm thực",
    author: "Lan Anh",
    date: "20/10/2025",
    summary:
      "Cùng khám phá những món ăn đậm đà hương vị miền Trung như mì Quảng, bún bò Huế, bánh bèo... khiến thực khách phải lòng ngay từ lần đầu.",
    image:
      "https://images.unsplash.com/photo-1601050690597-df7b02d1f8a1?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    title: "Hành trình 3 ngày ở Đà Lạt – Lịch trình chi tiết cho người mới",
    category: "Cẩm nang",
    author: "Huyền Trân",
    date: "18/10/2025",
    summary:
      "Lịch trình 3 ngày khám phá Đà Lạt từ trung tâm thành phố đến những điểm check-in độc đáo, dành cho người lần đầu đến với thành phố ngàn hoa.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 4,
    title: "Bí quyết săn vé máy bay giá rẻ mùa du lịch",
    category: "Mẹo hay",
    author: "Quốc Bảo",
    date: "10/10/2025",
    summary:
      "Tổng hợp mẹo chọn thời điểm, so sánh giá, săn flash sale và sử dụng ứng dụng thông minh để tiết kiệm tối đa khi đặt vé máy bay.",
    image:
      "https://images.unsplash.com/photo-1519677100203-a0e668c92439?auto=format&fit=crop&w=900&q=80",
  },
];

export default function BlogPage() {
  const [filter, setFilter] = useState<string>("Tất cả");

  const filteredBlogs =
    filter === "Tất cả" ? blogs : blogs.filter((b) => b.category === filter);

  const categories = ["Tất cả", "Địa điểm", "Ẩm thực", "Cẩm nang", "Mẹo hay"];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* HERO */}
      <section className="relative h-[60vh] flex items-center justify-center text-white overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80"
          alt="hero"
          fill
          className="object-cover brightness-75"
        />
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Khám phá thế giới qua từng câu chuyện
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg opacity-90 max-w-2xl mx-auto"
          >
            Blog du lịch chia sẻ kinh nghiệm, ẩm thực và hành trình khám phá
            khắp Việt Nam và thế giới.
          </motion.p>
        </div>
      </section>

      {/* FILTER */}
      <div className="px-20 py-10">
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === cat
                  ? "bg-orange-600 text-white shadow"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* BLOG GRID */}
        <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredBlogs.map((b, i) => (
            <motion.div
              key={b.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-xl transition"
            >
              <div className="relative w-full h-56">
                <Image
                  src={b.image}
                  alt={b.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5 space-y-3">
                <span className="text-xs text-orange-500 font-semibold uppercase tracking-wide">
                  {b.category}
                </span>
                <h3 className="text-lg font-semibold line-clamp-2 hover:text-orange-600 transition">
                  {b.title}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-3">
                  {b.summary}
                </p>

                <div className="flex items-center justify-between pt-2 text-xs text-gray-500 border-t border-gray-100">
                  <span>{b.author}</span>
                  <span>{b.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
