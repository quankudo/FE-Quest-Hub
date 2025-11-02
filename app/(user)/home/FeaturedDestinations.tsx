"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import TitleHeading from "@/components/common/TitleHeading";

const slides = [
  {
    id: 1,
    title: "Sapa - Việt Nam",
    desc: "Thị trấn trong mây với ruộng bậc thang kỳ vĩ và nền văn hóa dân tộc đa dạng.",
    img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1920&q=80",
  },
  {
    id: 2,
    title: "Hội An - Việt Nam",
    desc: "Phố cổ lung linh ánh đèn lồng, nơi lưu giữ dấu ấn văn hóa Việt cổ kính.",
    img: "https://travel-spark.monamedia.net/wp-content/uploads/2023/12/destinations-1-5.jpg",
  },
  {
    id: 3,
    title: "Đà Lạt - Việt Nam",
    desc: "Thành phố ngàn hoa, khí hậu se lạnh và khung cảnh lãng mạn quanh năm.",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80",
  },
  {
    id: 4,
    title: "Phú Quốc - Việt Nam",
    desc: "Hòn đảo ngọc nổi tiếng với bãi biển xanh ngọc và hoàng hôn rực rỡ.",
    img: "https://travel-spark.monamedia.net/wp-content/uploads/2023/12/destinations-1-1.jpg",
  },
  {
    id: 5,
    title: "Hạ Long - Việt Nam",
    desc: "Kỳ quan thiên nhiên thế giới với hàng ngàn hòn đảo đá vôi tuyệt đẹp.",
    img: "https://images.unsplash.com/photo-1533587851505-d119e13fa0d7?auto=format&fit=crop&w=1920&q=80",
  },
];

export default function FeaturedDestinations() {
  const [active, setActive] = useState(0);

  const nextSlide = () => setActive((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setActive((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval); // cleanup khi unmount
  }, []);

  return (
    <section className="relative w-full h-screen flex items-center justify-center flex-col">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <TitleHeading
          title="Điểm đến nổi bật"
          subTitle="Featured Destinations"
          desc="Khám phá những địa điểm du lịch đặc sắc nhất Việt Nam — từ Sapa huyền ảo, Hội An cổ kính đến Phú Quốc thơ mộng và Hạ Long hùng vĩ."
        />
      </motion.div>

      <div className="relative w-full h-[700px] overflow-hidden">
        <div className="absolute inset-0 overflow-visible">
          {slides.map((item, i) => {
            // tính vị trí của item
            const diff = (i - active + slides.length) % slides.length;

            let style = "";
            if (diff === 0) style = "left-0 top-0 w-full h-full";
            else if (diff === 1)
              style =
                "left-1/2 top-1/2 -translate-y-1/2 w-[220px] h-[300px] z-20 rounded-xl";
            else if (diff === 2)
              style =
                "left-[calc(50%+230px)] top-1/2 -translate-y-1/2 w-[220px] h-[300px] z-20 opacity-90 rounded-xl";
            else if (diff === 3)
              style =
                "left-[calc(50%+460px)] top-1/2 -translate-y-1/2 w-[220px] h-[300px] opacity-60 z-20 rounded-xl";
            else style = "opacity-0 pointer-events-none z-20";

            return (
              <motion.div
                key={item.id}
                className={`absolute overflow-hidden shadow-xl transition-all duration-1000 ease-in-out ${style}`}
                animate={{ opacity: 1 }}
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
                {/* Nội dung chỉ hiển thị ở ảnh chính */}
                {diff === 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 60, filter: "blur(10px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.8 }}
                    className="absolute top-1/2 left-20 -translate-y-1/2 text-white max-w-md"
                  >
                    <h2 className="text-5xl font-bold mb-4">{item.title}</h2>
                    <p className="text-gray-200 mb-5 leading-relaxed">
                      {item.desc}
                    </p>
                    <button className="px-6 py-3 bg-orange-500 rounded-md hover:bg-orange-600 transition font-semibold">
                      Xem chi tiết
                    </button>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Nút điều hướng */}
        <div className="absolute bottom-8 w-full flex justify-center gap-6 z-50">
          <button
            onClick={prevSlide}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white/80 hover:bg-white transition shadow"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white/80 hover:bg-white transition shadow"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
