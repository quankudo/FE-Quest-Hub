import React from "react";
import { Plane, MapPin, Users, Compass } from "lucide-react";

const features = [
  {
    icon: <Compass className="w-10 h-10 text-orange-500" />,
    title: "Các hoạt động đặc biệt",
    desc: "Khám phá những trải nghiệm độc đáo, mang đậm dấu ấn văn hóa và địa phương.",
  },
  {
    icon: <Users className="w-10 h-10 text-orange-500" />,
    title: "Hướng dẫn viên",
    desc: "Kết nối với hướng dẫn viên am hiểu địa phương để hành trình thêm thú vị.",
  },
  {
    icon: <Plane className="w-10 h-10 text-orange-500" />,
    title: "Đặt vé máy bay",
    desc: "Dễ dàng tìm kiếm, so sánh và đặt vé máy bay với giá ưu đãi.",
  },
  {
    icon: <MapPin className="w-10 h-10 text-orange-500" />,
    title: "Quản lý vị trí",
    desc: "Theo dõi và lưu trữ các địa điểm yêu thích trong chuyến đi của bạn.",
  },
];

const FeatureSection = () => {
  return (
    <div className="flex flex-wrap justify-center gap-8 my-16 px-20">
      {features.map((feature, index) => (
        <div
          key={index}
          className="feature-card relative group flex flex-col items-center text-white p-10 rounded-2xl flex-1
          bg-linear-to-br from-orange-400 to-orange-500 shadow-md transition-all duration-500 
          hover:from-teal-400 hover:to-teal-500 hover:shadow-xl"
        >
          {/* Hiệu ứng nền chéo */}
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.15)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.15)_50%,rgba(255,255,255,0.15)_75%,transparent_75%,transparent)] bg-size-[20px_20px] rounded-2xl pointer-events-none" />

          {/* Icon + Orbit */}
          <div className="relative z-10 mt-2 mb-4 w-20 h-20 rounded-full bg-white flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
            {/* Icon đứng yên */}
            <div className="relative z-20">{feature.icon}</div>

            {/* Orbit chứa 2 chấm xoay */}
            <div className="orbit absolute inset-0 flex items-center justify-center">
              <span className="absolute -top-2 -left-2 w-4 h-4 bg-teal-400 rounded-full transition-colors duration-300 group-hover:bg-orange-500"></span>
              <span className="absolute -bottom-2 -right-2 w-4 h-4 bg-teal-400 rounded-full transition-colors duration-300 group-hover:bg-orange-500"></span>
            </div>
          </div>

          {/* Nội dung */}
          <h4 className="z-10 text-lg font-semibold text-center mb-2 transition-colors duration-300">
            {feature.title}
          </h4>
          <p className="z-10 text-center text-sm leading-relaxed px-2">
            {feature.desc}
          </p>
        </div>
      ))}
    </div>
  );
};

export default FeatureSection;
