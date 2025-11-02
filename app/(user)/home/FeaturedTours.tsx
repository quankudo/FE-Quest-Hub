"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import TitleHeading from "@/components/common/TitleHeading";

const tours = [
  {
    id: 1,
    title: "Khám phá Sapa mù sương",
    desc: "Trải nghiệm ruộng bậc thang kỳ vĩ và văn hóa dân tộc độc đáo.",
    img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1920&q=80",
  },
  {
    id: 2,
    title: "Phố cổ Hội An",
    desc: "Dạo phố đèn lồng lung linh và thưởng thức ẩm thực miền Trung.",
    img: "https://travel-spark.monamedia.net/wp-content/uploads/2023/12/destinations-1-5.jpg",
  },
  {
    id: 3,
    title: "Đà Lạt mộng mơ",
    desc: "Thành phố ngàn hoa với khí hậu se lạnh quanh năm.",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80",
  },
  {
    id: 4,
    title: "Phú Quốc – Thiên đường biển",
    desc: "Tận hưởng hoàng hôn và làn nước trong xanh ngọc bích.",
    img: "https://travel-spark.monamedia.net/wp-content/uploads/2023/12/destinations-1-1.jpg",
  },
  {
    id: 5,
    title: "Kỳ quan Hạ Long",
    desc: "Ngắm vịnh Hạ Long kỳ vĩ với hàng ngàn đảo đá vôi.",
    img: "https://images.unsplash.com/photo-1533587851505-d119e13fa0d7?auto=format&fit=crop&w=1920&q=80",
  },
];

export default function FeaturedTours() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const nextSlide = () => setActive((prev) => (prev + 1) % tours.length);
  const prevSlide = () =>
    setActive((prev) => (prev - 1 + tours.length) % tours.length);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => nextSlide(), 3000);
    return () => clearInterval(timer);
  }, [active, paused]);

  return (
    <section
      className="relative py-20 bg-gray-50 overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="container mx-auto px-6 text-center">
        <TitleHeading
          title="Tour nổi bật"
          subTitle="Hành trình đáng nhớ"
          desc="Khám phá những tour du lịch được yêu thích nhất — nơi trải nghiệm và cảm xúc hòa quyện."
        />

        <div className="relative mt-14 flex items-center justify-center">
          {/* Nút trái */}
          <button
            onClick={prevSlide}
            className="absolute left-4 z-20 p-3 bg-white rounded-full shadow hover:bg-gray-100 transition"
          >
            <ChevronLeft size={28} />
          </button>

          {/* Container cố định vị trí 3 thẻ */}
          <div className="relative w-[1000px] h-[500px] flex items-center justify-center overflow-hidden">
            {tours.map((tour, index) => {
              const offset = (index - active + tours.length) % tours.length;

              // vị trí slide
              let translateX = 0;
              let scale = 0.8;
              let opacity = 0.5;
              let zIndex = 1;

              if (offset === 0) {
                translateX = -350;
                opacity = 0.7;
              } else if (offset === 1) {
                translateX = 0;
                scale = 1;
                opacity = 1;
                zIndex = 5;
              } else if (offset === 2) {
                translateX = 350;
                opacity = 0.7;
              } else {
                translateX = 700;
                opacity = 0;
              }

              return (
                <motion.div
                  key={tour.id}
                  animate={{ x: translateX, scale, opacity, zIndex }}
                  transition={{ type: "spring", stiffness: 100, damping: 20 }}
                  className="absolute w-[350px] h-[450px] rounded-2xl overflow-hidden shadow-lg cursor-pointer group"
                >
                  <Image
                    src={tour.img}
                    alt={tour.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-6 left-6 text-left text-white">
                    <h3 className="text-2xl font-semibold mb-2">
                      {tour.title}
                    </h3>
                    <p className="text-sm opacity-90 line-clamp-2">
                      {tour.desc}
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      className="mt-4 bg-white text-gray-900 px-4 py-2 rounded-full text-sm font-medium shadow"
                    >
                      Xem chi tiết
                    </motion.button>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Nút phải */}
          <button
            onClick={nextSlide}
            className="absolute right-4 z-20 p-3 bg-white rounded-full shadow hover:bg-gray-100 transition"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      </div>
    </section>
  );
}
