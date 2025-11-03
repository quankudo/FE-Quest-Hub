"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Mountain, Sun, Landmark } from "lucide-react";
import TitleHeading from "@/components/common/TitleHeading";

const regions = [
  {
    key: "bac",
    name: "Miền Bắc",
    desc: "Khám phá nét đẹp cổ kính, hùng vĩ của núi rừng và thủ đô ngàn năm văn hiến.",
    image:
      "https://img.freepik.com/free-photo/asian-woman-wearing-vietnam-culture-traditional-strawberry-garden-doi-ang-khang-chiang-mai-thailand_335224-754.jpg?ga=GA1.1.683130327.1761757025&semt=ais_hybrid&w=740&q=80",
    cities: [
      {
        name: "Hà Nội",
        icon: Landmark,
        desc: "Thủ đô ngàn năm văn hiến, giao hòa giữa cổ kính và hiện đại.",
        image: "/images/hanoi.jpg",
      },
      {
        name: "Sa Pa",
        icon: Mountain,
        desc: "Thị trấn sương mù nổi tiếng với ruộng bậc thang và văn hóa dân tộc.",
        image: "/images/sapa.jpg",
      },
      {
        name: "Hạ Long",
        icon: MapPin,
        desc: "Kỳ quan thiên nhiên thế giới với hàng nghìn hòn đảo đá vôi kỳ vĩ.",
        image: "/images/halong.jpg",
      },
    ],
  },
  {
    key: "trung",
    name: "Miền Trung",
    desc: "Vẻ đẹp bình dị của biển xanh, cát trắng và những di sản văn hóa thế giới.",
    image:
      "https://img.freepik.com/free-photo/view-world-monument-celebrate-world-heritage-day_23-2151297145.jpg?ga=GA1.1.683130327.1761757025&semt=ais_hybrid&w=740&q=80",
    cities: [
      {
        name: "Đà Nẵng",
        icon: Sun,
        desc: "Thành phố đáng sống với biển xanh và cây cầu Rồng biểu tượng.",
        image: "/images/danang.jpg",
      },
      {
        name: "Hội An",
        icon: Landmark,
        desc: "Phố cổ rực rỡ đèn lồng, di sản văn hóa thế giới của Việt Nam.",
        image: "/images/hoian.jpg",
      },
      {
        name: "Huế",
        icon: MapPin,
        desc: "Cố đô trầm mặc bên dòng Hương Giang thơ mộng.",
        image: "/images/hue.jpg",
      },
    ],
  },
  {
    key: "nam",
    name: "Miền Nam",
    desc: "Sức sống năng động, hiện đại cùng nét đẹp sông nước miền Tây hiền hòa.",
    image:
      "https://img.freepik.com/free-photo/mountain-countryside-landmark-china-tourism_1417-191.jpg?ga=GA1.1.683130327.1761757025&semt=ais_hybrid&w=740&q=80",
    cities: [
      {
        name: "TP. Hồ Chí Minh",
        icon: Landmark,
        desc: "Trung tâm kinh tế năng động, nơi giao thoa của nhịp sống hiện đại.",
        image: "/images/hcm.jpg",
      },
      {
        name: "Cần Thơ",
        icon: MapPin,
        desc: "Xứ Tây Đô với chợ nổi Cái Răng và sông nước hữu tình.",
        image: "/images/cantho.jpg",
      },
      {
        name: "Phú Quốc",
        icon: Sun,
        desc: "Đảo ngọc với biển xanh cát trắng, thiên đường nghỉ dưỡng Việt Nam.",
        image: "/images/phuquoc.jpg",
      },
    ],
  },
];

const RegionExplorer = () => {
  const [selected, setSelected] = useState("bac");
  const region = regions.find((r) => r.key === selected)!;

  return (
    <div className="relative w-full py-16 bg-gray-50 overflow-hidden">
      {/* Title */}
      <TitleHeading
        title="Khám phá Việt Nam"
        subTitle="Vùng miền nổi bật"
        desc="Chọn vùng để bắt đầu hành trình, khám phá vẻ đẹp độc đáo của từng miền đất nước."
      />

      {/* Tabs */}
      <div className="flex justify-center gap-5 mb-10">
        {regions.map((r) => (
          <button
            key={r.key}
            onClick={() => setSelected(r.key)}
            className={`px-8 py-3 rounded-full transition-all font-medium shadow
              ${
                selected === r.key
                  ? "bg-orange-50 text-orange-600"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
          >
            {r.name}
          </button>
        ))}
      </div>

      {/* Main Region Section */}
      <div className="relative w-full max-w-7xl mx-auto rounded-2xl overflow-hidden shadow-lg">
        <AnimatePresence mode="wait">
          <motion.div
            key={region.key}
            initial={{ opacity: 0, scale: 0.98, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: -30 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative"
          >
            {/* Background */}
            <div className="absolute inset-0">
              <img
                src={region.image}
                alt={region.name}
                className="w-full h-[520px] object-cover"
              />
              <div className="absolute inset-0 bg-black/50"></div>
            </div>

            {/* Overlay info */}
            <div className="relative z-10 text-white p-10 flex flex-col justify-center h-[520px]">
              <motion.h3
                key={region.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-3xl font-bold mb-4"
              >
                {region.name}
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-lg mb-8 max-w-xl"
              >
                {region.desc}
              </motion.p>

              {/* Cities Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl">
                {region.cities.map((city, i) => {
                  const Icon = city.icon;
                  return (
                    <motion.div
                      key={city.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + i * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden cursor-pointer hover:bg-white/20 transition-all"
                    >
                      <div className="h-36 overflow-hidden relative">
                        <img
                          src={city.image}
                          alt={city.name}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
                      </div>
                      <div className="p-4">
                        <div className="flex items-center gap-2 mb-1">
                          <Icon className="w-5 h-5 text-yellow-300" />
                          <h4 className="font-semibold text-white">
                            {city.name}
                          </h4>
                        </div>
                        <p className="text-sm text-gray-200">{city.desc}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default RegionExplorer;
