"use client";
import { AnimatePresence, motion } from "framer-motion";
import {
  MapPin,
  Clock,
  Star,
  Share2,
  Bookmark,
  Ticket,
  Globe,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useEffect, useState } from "react";
import SpecialFoods from "./SpecialFoods";
import SpecialCultural from "./SpecialCultural";

export default function PlaceDetailPage() {
  // Mock data – bạn sẽ fetch thực tế bằng getServerSideProps hoặc API
  const place = {
    name: "Vịnh Hạ Long",
    category: "Danh lam thắng cảnh",
    address: "Hạ Long, Quảng Ninh, Việt Nam",
    average_rating: 4.7,
    ticket_price: 120000,
    opening_hours: "06:00 - 18:00",
    lat: 20.949,
    lng: 107.1839,
    description:
      "Vịnh Hạ Long là di sản thiên nhiên thế giới, nổi tiếng với hàng nghìn hòn đảo đá vôi và hang động kỳ vĩ. Du khách có thể đi thuyền kayak, thăm hang Sửng Sốt, hoặc ngắm hoàng hôn trên du thuyền.",
    images: [
      "https://travel-spark.monamedia.net/wp-content/uploads/2023/12/4-900x490.jpg",
      "https://travel-spark.monamedia.net/wp-content/uploads/2023/12/5-1-900x490.jpg",
      "https://travel-spark.monamedia.net/wp-content/uploads/2023/12/6-1-900x490.jpg",
      "https://travel-spark.monamedia.net/wp-content/uploads/2023/12/8-2.jpg",
    ],
  };

  const [imgIndex, setImgIndex] = useState(0);
  const next = () => setImgIndex((i) => (i + 1) % place.images.length);
  const prev = () =>
    setImgIndex((i) => (i - 1 + place.images.length) % place.images.length);

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval); // clear interval khi component unmount
  }, [place.images.length]);

  return (
    <div className="bg-linear-to-b from-orange-50 to-white text-gray-800 min-h-screen">
      {/* Header */}
      <section className="px-6 lg:px-20 py-10 grid lg:grid-cols-2 gap-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col justify-center"
        >
          <h1 className="text-4xl lg:text-5xl font-bold mb-3">{place.name}</h1>
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
            <MapPin size={16} />
            <span>{place.address}</span>
          </div>
          <div className="flex items-center gap-3 text-yellow-500 mb-4">
            <Star size={18} className="fill-yellow-400" />
            <span className="text-gray-800 font-medium">
              {place.average_rating.toFixed(1)}
            </span>
            <span className="text-gray-500 text-sm">/ 5.0</span>
          </div>
          <p className="text-gray-700 leading-relaxed mb-6">
            {place.description}
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-4 py-2 bg-orange-600 text-white rounded-lg flex items-center gap-2 shadow hover:bg-orange-700 transition">
              <Share2 size={18} /> Chia sẻ
            </button>
            <button className="px-4 py-2 border border-orange-600 text-orange-600 rounded-lg flex items-center gap-2 hover:bg-orange-50 transition">
              <Bookmark size={18} /> Lưu lại
            </button>
          </div>
        </motion.div>

        {/* Image Gallery */}
        <motion.div
          className="relative overflow-hidden rounded-2xl shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <div className="relative w-full h-[420px]">
            <AnimatePresence mode="wait">
              <motion.img
                key={imgIndex}
                src={place.images[imgIndex]}
                alt=""
                className="absolute w-full h-full object-cover"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />
            </AnimatePresence>
          </div>
          <button
            onClick={prev}
            className="absolute top-1/2 left-4 -translate-y-1/2 text-orange-600 bg-white/80 p-2 rounded-full hover:scale-105 transition"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={next}
            className="absolute top-1/2 right-4 -translate-y-1/2 text-orange-600 bg-white/80 p-2 rounded-full hover:scale-105 transition"
          >
            <ChevronRight />
          </button>
          <div className="flex justify-center gap-2 absolute bottom-4 left-0 right-0">
            {place.images.map((_, i) => (
              <button
                key={i}
                onClick={() => setImgIndex(i)}
                className={`w-3 h-3 rounded-full ${
                  i === imgIndex ? "bg-orange-600" : "bg-white/70"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </section>

      {/* Quick info */}
      <section className="px-6 lg:px-20 py-8 grid sm:grid-cols-3 gap-4">
        <InfoCard icon={Clock} title="Giờ mở cửa" value={place.opening_hours} />
        <InfoCard
          icon={Ticket}
          title="Giá vé"
          value={`${place.ticket_price} VND`}
        />
        <InfoCard icon={Globe} title="Loại địa điểm" value={place.category} />
      </section>

      <SpecialFoods />

      <SpecialCultural />
      {/* Map */}
      <section className="px-6 lg:px-20 py-12">
        <h2 className="text-2xl font-bold mb-4">Vị trí trên bản đồ</h2>
        <div className="rounded-xl overflow-hidden shadow-lg h-[400px]">
          <iframe
            src={`https://www.google.com/maps?q=${place.lat},${place.lng}&z=14&output=embed`}
            className="w-full h-full border-0"
            loading="lazy"
          />
        </div>
      </section>
    </div>
  );
}

// Small reusable info card component
function InfoCard({
  icon: Icon,
  title,
  value,
}: {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>; // cho phép truyền icon component (Lucide icon hoặc SVG)
  title: string; // tiêu đề, ví dụ "Giờ mở cửa"
  value: string | number; // giá trị hiển thị (text hoặc số)
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="flex flex-col items-center justify-center bg-white rounded-xl p-5 shadow-sm hover:shadow-md text-center"
    >
      <div className="text-orange-600 mb-2">
        <Icon />
      </div>
      <div className="font-semibold">{title}</div>
      <div className="text-gray-600 text-sm mt-1">{value}</div>
    </motion.div>
  );
}
