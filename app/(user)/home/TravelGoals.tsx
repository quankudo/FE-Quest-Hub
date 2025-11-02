"use client";

import Button from "@/components/common/Button";
import TitleHeading from "@/components/common/TitleHeading";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const travelGoals = [
  {
    id: 1,
    name: "Thư giãn",
    desc: "Tận hưởng không gian yên bình tại những bãi biển và resort tuyệt đẹp.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    name: "Khám phá",
    desc: "Khám phá những vùng đất mới và hòa mình vào thiên nhiên hùng vĩ.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    name: "Văn hóa",
    desc: "Trải nghiệm lễ hội, di tích và nét đẹp văn hóa địa phương.",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 4,
    name: "Ẩm thực",
    desc: "Khám phá hương vị độc đáo từ khắp nơi trên thế giới.",
    image:
      "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 5,
    name: "Chụp ảnh",
    desc: "Lưu giữ khoảnh khắc đáng nhớ qua những góc ảnh tuyệt đẹp.",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 6,
    name: "Mạo hiểm",
    desc: "Leo núi, dù lượn và những thử thách đầy phấn khích.",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80",
  },
];

const TravelGoals = () => {
  return (
    <section className="px-20 py-20">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <TitleHeading
          title="Khám phá theo mục tiêu du lịch"
          subTitle="Travel Goals"
          desc="Chọn phong cách du lịch phù hợp với bạn — từ thư giãn, khám phá đến ẩm thực và trải nghiệm văn hóa độc đáo tại Việt Nam."
        />
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {travelGoals.map((goal, i) => (
          <motion.div
            key={goal.id}
            className="relative group h-80 rounded-2xl overflow-hidden shadow-lg cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: i * 0.15,
              ease: "easeOut",
            }}
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src={goal.image}
              alt={goal.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/40 to-transparent transition group-hover:from-black/80" />

            <div className="absolute bottom-6 left-6 right-6 text-white">
              <motion.h3
                className="text-2xl font-semibold mb-2"
                whileHover={{ y: -3 }}
                transition={{ duration: 0.3 }}
              >
                {goal.name}
              </motion.h3>
              <p className="text-sm text-gray-200 mb-3">{goal.desc}</p>
              <Button text="Khám phá ngay" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TravelGoals;
