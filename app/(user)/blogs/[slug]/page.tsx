"use client";

import React, { useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import BlogSidebar from "./BlogSidebar";
import Reactions from "./Reactions";

export type Comment = {
  id: string;
  author: string;
  avatar?: string;
  content: string;
  createdAt: string; // ISO
  replies?: Comment[];
};

export type ReactionCounts = {
  like: number;
  love: number;
  wow: number;
  sad: number;
  angry: number;
};

const sampleComments: Comment[] = [
  {
    id: "c1",
    author: "Lan Anh",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=80&q=80",
    content:
      "Bài viết rất hữu ích — mình sẽ lưu lại hành trình này để đi cuối năm!",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3).toISOString(),
    replies: [
      {
        id: "c1-r1",
        author: "Tác giả",
        content: "Cảm ơn bạn! Nếu cần mình có thể gửi checklist đồ đạc.",
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2).toISOString(),
      },
    ],
  },
  {
    id: "c2",
    author: "Minh",
    content: "Ảnh đẹp quá! Chắc phải lên kế hoạch đặt vé thôi 😄",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 10).toISOString(),
  },
];

const initialReactions: ReactionCounts = {
  like: 124,
  love: 86,
  wow: 32,
  sad: 3,
  angry: 1,
};

export default function BlogDetailPage() {
  // --- Mock article data ---
  const article = useMemo(
    () => ({
      id: "a1",
      title: "Khám phá Sapa: Mùa mây trắng và những cung đường lãng mạn",
      cover:
        "https://img.freepik.com/free-photo/rice-terrace-ban-pa-bong-piang-chiang-mai-thailand_335224-1360.jpg?ga=GA1.1.683130327.1761757025&semt=ais_hybrid&w=740&q=80",
      subtitle:
        "Hành trình qua những ruộng bậc thang, homestay ấm cúng và nền văn hóa Hà Nhì độc đáo.",
      author: {
        name: "Huyền Quân",
        avatar:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
        bio: "Fullstack dev & travel lover. Khám phá VN cùng mình.",
      },
      meta: {
        date: "Nov 2, 2025",
        readTime: "6 min read",
        rating: 4.8,
      },
    }),
    []
  );

  return (
    <article className="min-h-screen bg-slate-50">
      {/* HERO */}
      <header className="relative h-[56vh] md:h-[60vh] w-full overflow-hidden">
        <Image
          src={article.cover}
          alt={article.title}
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />

        <div className="absolute bottom-8 left-6 md:left-12 text-white max-w-3xl">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-extrabold leading-tight drop-shadow"
          >
            {article.title}
          </motion.h1>
          <p className="mt-3 text-sm md:text-base opacity-90">
            {article.subtitle}
          </p>

          <div className="mt-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden border ring-1 ring-white/40">
              <Image
                src={article.author.avatar}
                alt={article.author.name}
                width={40}
                height={40}
                className="object-cover"
              />
            </div>
            <div>
              <div className="text-sm font-medium">{article.author.name}</div>
              <div className="text-xs opacity-80">
                {article.meta.date} • {article.meta.readTime}
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 md:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* MAIN */}
          <main className="lg:col-span-2 bg-white rounded-2xl p-6 shadow">
            {/* Summary quick info */}
            <div className="mb-6 grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard label="Best time" value="Sep - Nov" />
              <StatCard label="Avg cost" value="3-5M VND" />
              <StatCard label="Duration" value="3 days" />
              <StatCard label="Rating" value={`${article.meta.rating} ★`} />
            </div>

            {/* Content sample (you would load markdown or rich content here) */}
            <div className="prose max-w-none prose-slate">
              <p>
                Sapa là một trong những điểm đến kỳ vĩ của Việt Nam với những
                cung đường ruộng bậc thang trải dài trên sườn núi. Bài viết này
                sẽ hướng dẫn bạn cách đi, lưu trú và trải nghiệm văn hóa bản
                địa.
              </p>

              <h3>Ngày 1 — Khởi hành & khám phá bản</h3>
              <p>
                Bắt đầu từ Hà Nội, bạn có thể đi xe giường nằm hoặc tàu hỏa đến
                Lào Cai, sau đó thuê xe hoặc đi bộ đến Sapa. Hãy dành buổi chiều
                để đi bộ trong bản và thưởng thức ẩm thực địa phương.
              </p>

              <figure>
                <Image
                  src="https://img.freepik.com/free-photo/rice-terrace-ban-pa-bong-piang-chiang-mai-thailand_335224-1360.jpg?ga=GA1.1.683130327.1761757025&semt=ais_hybrid&w=740&q=80"
                  alt="sapa"
                  width={1200}
                  height={700}
                  className="rounded-lg object-cover"
                />
                <figcaption>Ruộng bậc thang nhìn từ trên cao.</figcaption>
              </figure>

              <h3>Tips</h3>
              <ul>
                <li>Chuẩn bị áo ấm dù vào mùa hè.</li>
                <li>Thương lượng giá với dịch vụ địa phương.</li>
                <li>Tôn trọng phong tục bản địa.</li>
              </ul>

              <blockquote>
                "Hãy đi thật chậm để thấy Sapa — vẻ đẹp nằm trong những khoảnh
                khắc tĩnh lặng."
              </blockquote>
            </div>

            {/* Gallery carousel (simple) */}
            <div className="mt-6">
              <h4 className="font-semibold mb-3">Ảnh nổi bật</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  article.cover,
                  "https://img.freepik.com/free-photo/beautiful-shot-green-field-with-village-houses-background_181624-29834.jpg?ga=GA1.1.683130327.1761757025&semt=ais_hybrid&w=740&q=80",
                  "https://img.freepik.com/free-photo/small-cottage-with-black-tile-roof-surrounded-by-green-fields_181624-52642.jpg?ga=GA1.1.683130327.1761757025&semt=ais_hybrid&w=740&q=80",
                  "https://img.freepik.com/free-photo/young-woman-walking-wooden-path-with-green-rice-field-vang-vieng-laos_335224-1260.jpg?ga=GA1.1.683130327.1761757025&semt=ais_hybrid&w=740&q=80",
                ].map((src, i) => (
                  <div
                    key={i}
                    className="relative h-40 rounded-lg overflow-hidden"
                  >
                    <Image
                      src={src}
                      alt={`g${i}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Reactions */}
            <Reactions
              initialReactions={initialReactions}
              sampleComments={sampleComments}
            />
          </main>

          {/* SIDEBAR */}
          <BlogSidebar article={article} />
        </div>

        {/* CTA */}
        <div className="my-8 bg-white rounded-2xl p-6 shadow flex items-center justify-between">
          <div>
            <div className="text-lg font-semibold">Thích bài viết này?</div>
            <div className="text-sm text-slate-600">
              Lưu vào hành trình của bạn hoặc chia sẻ cho bạn bè.
            </div>
          </div>
          <div className="flex gap-3">
            <button className="px-4 py-2 rounded-md border">Lưu</button>
            <button className="px-4 py-2 rounded-md bg-orange-500 text-white">
              Chia sẻ
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

// ---------------- Helper components ----------------
function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-orange-50 rounded-xl p-3 text-center">
      <div className="text-sm text-slate-500">{label}</div>
      <div className="font-semibold text-orange-600 mt-1">{value}</div>
    </div>
  );
}
