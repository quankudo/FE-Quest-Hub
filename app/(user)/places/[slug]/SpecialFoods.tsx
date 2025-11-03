"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Utensils, ChevronLeft, ChevronRight, X } from "lucide-react";
import Button from "@/components/common/Button";

// Dữ liệu mẫu
const foods = [
  {
    name: "Chả mực Hạ Long",
    img: "https://img.freepik.com/free-photo/salad-roll-vegetables-with-salad_1339-4422.jpg?ga=GA1.1.683130327.1761757025&semt=ais_hybrid&w=740&q=80",
    desc: "Món đặc sản nổi tiếng làm từ mực tươi giã tay, thơm dai giòn đặc trưng vùng biển Hạ Long.",
  },
  {
    name: "Sá sùng khô",
    img: "https://img.freepik.com/free-photo/dried-round-fruits-glass-jar_114579-29870.jpg?ga=GA1.1.683130327.1761757025&semt=ais_hybrid&w=740&q=80",
    desc: "Đặc sản quý hiếm từ biển Quan Lạn, được phơi khô dùng để nấu nước phở, canh, hoặc rang giòn.",
  },
  {
    name: "Bánh cuốn chả mực",
    img: "https://img.freepik.com/free-photo/fried-spring-rolls-cutting-board_1150-17010.jpg?ga=GA1.1.683130327.1761757025&semt=ais_hybrid&w=740&q=80",
    desc: "Sự kết hợp giữa bánh cuốn mềm mịn và chả mực giã tay thơm lừng, tạo nên hương vị đậm đà khó quên.",
  },
  {
    name: "Bún bề bề",
    img: "https://img.freepik.com/free-photo/raw-noodle-nests-wooden-plate_114579-88441.jpg?ga=GA1.1.683130327.1761757025&semt=ais_hybrid&w=740&q=80",
    desc: "Món bún hải sản hấp dẫn với bề bề tươi, nước dùng ngọt thanh, mang hương vị biển Hạ Long.",
  },
  {
    name: "Sam trứng nướng",
    img: "https://img.freepik.com/free-photo/pepper-tasty-cuisine-sauce-herbs_1232-3805.jpg?ga=GA1.1.683130327.1761757025&semt=ais_hybrid&w=740&q=80",
    desc: "Đặc sản lạ miệng với phần trứng sam béo ngậy, nướng vàng thơm, ăn kèm rau sống và nước chấm chua ngọt.",
  },
];

export default function SpecialFoods() {
  const [index, setIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const visible = 3;
  const total = foods.length;

  const nextSlide = () =>
    setIndex((prev) => (prev < total - visible ? prev + 1 : 0));
  const prevSlide = () =>
    setIndex((prev) => (prev > 0 ? prev - 1 : total - visible));

  return (
    <motion.section
      className="px-6 lg:px-20 py-12 bg-gray-50 relative"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Tiêu đề */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <Utensils className="text-orange-600" /> Món ăn đặc sản
        </h2>

        <Button text="🍽️ Xem tất cả" event={() => setShowAll(true)} />
      </div>

      {/* Slider */}
      <div className="relative overflow-hidden">
        <motion.div
          className="flex"
          animate={{ x: `-${(index * 100) / visible}%` }}
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

      {/* Popup hiển thị toàn bộ món ăn */}
      <AnimatePresence>
        {showAll && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-5 border-b">
                <h3 className="text-xl font-bold flex items-center gap-2 text-orange-600">
                  <Utensils /> Tất cả món ăn đặc sản
                </h3>
                <button
                  onClick={() => setShowAll(false)}
                  className="p-2 rounded-full hover:bg-gray-100"
                >
                  <X />
                </button>
              </div>

              {/* Danh sách món ăn */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 p-6">
                {foods.map((food) => (
                  <motion.div
                    key={food.name}
                    whileHover={{ scale: 1.03 }}
                    className="bg-white rounded-xl shadow hover:shadow-lg overflow-hidden border border-gray-100"
                  >
                    <img
                      src={food.img}
                      alt={food.name}
                      className="h-40 w-full object-cover"
                    />
                    <div className="p-3">
                      <h4 className="font-semibold text-base">{food.name}</h4>
                      <p className="text-sm text-gray-600 mt-1 line-clamp-3">
                        {food.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
