"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Utensils, ChevronLeft, ChevronRight } from "lucide-react";

const foods = [
  {
    name: "Chả mực Hạ Long",
    img: "https://images.unsplash.com/photo-1604908177442-2e058d59d4c3",
    desc: "Món đặc sản nổi tiếng làm từ mực tươi giã tay, thơm dai giòn đặc trưng vùng biển Hạ Long.",
  },
  {
    name: "Sá sùng khô",
    img: "https://images.unsplash.com/photo-1617196037904-3b70ccaa9080",
    desc: "Đặc sản quý hiếm từ biển Quan Lạn, được phơi khô dùng để nấu nước phở, canh, hoặc rang giòn.",
  },
  {
    name: "Bánh cuốn chả mực",
    img: "https://images.unsplash.com/photo-1590080875839-04c93dd7131c",
    desc: "Sự kết hợp giữa bánh cuốn mềm mịn và chả mực giã tay thơm lừng, tạo nên hương vị đậm đà khó quên.",
  },
  {
    name: "Bún bề bề",
    img: "https://images.unsplash.com/photo-1625944267291-4a1cebf37b90",
    desc: "Món bún hải sản hấp dẫn với bề bề tươi, nước dùng ngọt thanh, mang hương vị biển Hạ Long.",
  },
  {
    name: "Sam trứng nướng",
    img: "https://images.unsplash.com/photo-1606851092994-478f9d7c058d",
    desc: "Đặc sản lạ miệng với phần trứng sam béo ngậy, nướng vàng thơm, ăn kèm rau sống và nước chấm chua ngọt.",
  },
];

const SpecialFoods = () => {
  const [index, setIndex] = useState(0);
  const visible = 3; // số món hiển thị cùng lúc
  const total = foods.length;

  const nextSlide = () => {
    if (index < total - visible) setIndex(index + 1);
    else setIndex(0);
  };

  const prevSlide = () => {
    if (index > 0) setIndex(index - 1);
    else setIndex(total - visible);
  };

  return (
    <motion.section
      className="px-6 lg:px-20 py-12 bg-gray-50"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <Utensils className="text-orange-600" /> Món ăn đặc sản
      </h2>

      {/* Vùng chứa slider */}
      <div className="relative overflow-hidden">
        <motion.div
          className="flex"
          animate={{ x: `-${(index * 100) / 3}%` }}
          transition={{ type: "spring", stiffness: 80, damping: 20 }}
        >
          {foods.map((food) => (
            <motion.div
              key={food.name}
              whileHover={{ scale: 1.03 }}
              className="basis-1/3 shrink-0 px-2"
            >
              <div className="bg-white rounded-xl shadow hover:shadow-lg overflow-hidden">
                <img
                  src={food.img}
                  alt={food.name}
                  className="h-48 w-full object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg">{food.name}</h3>
                  <p className="text-gray-600 text-sm mt-1 line-clamp-2">
                    {food.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Nút điều hướng */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow"
        >
          <ChevronLeft className="text-orange-600" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow"
        >
          <ChevronRight className="text-orange-600" />
        </button>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-4 gap-2">
        {Array.from({ length: total - visible + 1 }).map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2.5 h-2.5 rounded-full cursor-pointer transition ${
              i === index ? "bg-orange-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </motion.section>
  );
};

export default SpecialFoods;
