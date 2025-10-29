"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const heros = [
  {
    title: "Khám phá Việt Nam cùng TravelAI",
    subTitle:
      "Công nghệ trí tuệ nhân tạo giúp bạn lên hành trình thông minh, phù hợp sở thích và ngân sách.",
    imageUrl_01: "/images/hero-01.jpg",
    imageUrl_02: "/images/hero-02.jpg",
  },
  {
    title: "Trải nghiệm văn hóa & ẩm thực địa phương",
    subTitle:
      "Thưởng thức món ăn đặc sản, khám phá phong tục tập quán và những câu chuyện địa phương độc đáo.",
    imageUrl_01: "/images/hero-03.jpg",
    imageUrl_02: "/images/hero-04.jpg",
  },
  {
    title: "Đặt nhà & hướng dẫn viên dễ dàng",
    subTitle:
      "Kết nối với chủ nhà uy tín và hướng dẫn viên chuyên nghiệp để có chuyến đi an toàn, đáng nhớ.",
    imageUrl_01: "/images/hero-05.jpg",
    imageUrl_02: "/images/hero-06.jpg",
  },
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % heros.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const hero = heros[index];

  return (
    <section
      className="relative w-full overflow-hidden bg-cover bg-center h-[90vh]"
      style={{
        backgroundImage: `url('/images/bg-hero.png')`,
      }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center py-16 mt-10 px-6 md:px-12 gap-10">
        {/* Left content */}
        <div className="relative z-10">
          <h5 className="text-orange-500 font-semibold mb-3 text-lg">
            Lên đường ngay
          </h5>

          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                {hero.title}
              </h1>
              <p className="text-gray-600 mb-6">{hero.subTitle}</p>
              <button className="bg-orange-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-orange-600 transition">
                Đặt vé ngay
              </button>
            </motion.div>
          </AnimatePresence>

          {/* Step Indicators */}
          <div className="absolute -left-20 top-1/2 -translate-y-1/2 flex flex-col items-center space-y-4 mt-8 md:mt-0">
            {heros.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-10 h-10 flex items-center justify-center rounded-full border-2 ${
                  i === index
                    ? "bg-orange-500 text-white border-orange-500"
                    : "bg-white text-orange-500 border-orange-400"
                } transition`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>

        {/* Right images */}
        <div className="relative flex items-center justify-center">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8 }}
            className="relative w-full flex items-center justify-center"
          >
            {/* Image 1 */}
            <div className="absolute top-0 left-0 w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-white shadow-lg z-10">
              <Image
                src={hero.imageUrl_01}
                alt="Hero Image 1"
                fill
                className="object-cover"
              />
            </div>

            {/* Image 2 */}
            <div className="absolute bottom-0 right-0 w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-8 border-white shadow-lg">
              <Image
                src={hero.imageUrl_02}
                alt="Hero Image 2"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
