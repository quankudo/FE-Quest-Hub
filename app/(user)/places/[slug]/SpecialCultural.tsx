import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import Button from "@/components/common/Button";

const cultures = [
  {
    title: "Lễ hội Yên Tử",
    content:
      "Diễn ra vào đầu xuân hàng năm, lễ hội thu hút hàng vạn Phật tử và du khách hành hương về non thiêng Yên Tử, nơi khởi nguồn Thiền phái Trúc Lâm, mang đậm bản sắc văn hóa tâm linh Việt Nam.",
    img: "https://images.unsplash.com/photo-1585202900225-6d3ac20a6962", // ảnh đền, chùa, hành hương
  },
  {
    title: "Lễ hội Carnaval Hạ Long",
    content:
      "Sự kiện văn hóa – du lịch đặc sắc nhất Quảng Ninh, tổ chức thường niên với những màn diễu hành sôi động, vũ điệu đường phố, âm nhạc và pháo hoa rực rỡ bên bờ Vịnh Hạ Long.",
    img: "https://images.unsplash.com/photo-1552566626-52f8b828add9", // ảnh lễ hội, ánh sáng
  },
  {
    title: "Lễ hội Trà Cổ",
    content:
      "Tổ chức vào tháng 6 âm lịch tại phường Trà Cổ (Móng Cái), lễ hội có nghi thức rước thần, thi làm cỗ, múa rồng, thể hiện tinh thần đoàn kết và tín ngưỡng thờ Thành hoàng làng của ngư dân vùng biển.",
    img: "https://images.unsplash.com/photo-1555685812-4b943f1cb0eb", // ảnh lễ rước
  },
  {
    title: "Lễ hội đình Cửa Ông",
    content:
      "Được tổ chức vào tháng 2 âm lịch để tưởng nhớ công đức Đức Ông Trần Quốc Tảng – vị tướng nhà Trần có công trấn giữ vùng Đông Bắc. Lễ hội gồm phần rước kiệu, tế lễ và hội trò dân gian.",
    img: "https://images.unsplash.com/photo-1583394838336-acd977736f90", // ảnh đình, rước kiệu
  },
  {
    title: "Phong tục lễ cầu ngư",
    content:
      "Trước mỗi mùa đánh bắt, ngư dân Hạ Long tổ chức lễ cầu ngư để cầu cho mưa thuận gió hòa, đi biển an toàn, cá tôm đầy khoang – một nghi lễ linh thiêng phản ánh đời sống văn hóa biển sâu sắc.",
    img: "https://images.unsplash.com/photo-1605559424843-9e4c9db6f1ab", // ảnh thuyền, biển
  },
  {
    title: "Nghề làm than truyền thống",
    content:
      "Là biểu tượng văn hóa lao động của Quảng Ninh – vùng mỏ, nghề làm than được xem là niềm tự hào của người dân, phản ánh tinh thần kiên cường, bền bỉ và sáng tạo trong lao động.",
    img: "https://images.unsplash.com/photo-1527430253228-e93688616381", // ảnh công nhân, hầm mỏ
  },
];

const SpecialCultural = () => {
  const [ShowAll, setShowAll] = useState(false); //Hiển thị default 3
  const previewCultures = cultures.slice(0, 3);
  return (
    <motion.section
      className="px-6 lg:px-20 py-12 bg-orange-50"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-3 text-orange-700">
          Văn hoá & phong tục
        </h2>
        <p className="text-gray-700 mb-10 text-lg">
          Tìm hiểu những nét đẹp truyền thống và phong tục đặc sắc của vùng đất
          này.
        </p>
      </div>

      {/* 3 mục đầu tiên */}
      <div className="space-y-12">
        {previewCultures.map((c, i) => (
          <motion.div
            key={c.title}
            whileHover={{ scale: 1.01 }}
            className={`flex flex-col md:flex-row items-center gap-8 ${
              i % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            <img
              src={c.img}
              alt={c.title}
              className="w-full md:w-1/2 h-64 object-cover rounded-xl shadow"
            />
            <div className="md:w-1/2">
              <h3 className="text-xl font-semibold mb-2 text-orange-700">
                {c.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">{c.content}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Nút xem thêm */}
      <div className="flex justify-center mt-10">
        <Button text="Xem tất cả phong tục" event={() => setShowAll(true)} />
      </div>

      {/* Popup */}
      <AnimatePresence>
        {ShowAll && (
          <motion.div
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-xl shadow-xl p-6 max-w-5xl w-[90%] h-[90vh] overflow-y-auto relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <button
                onClick={() => setShowAll(false)}
                className="absolute top-4 right-4 bg-orange-100 hover:bg-orange-200 p-2 rounded-full"
              >
                <X className="text-orange-700" />
              </button>

              <h3 className="text-2xl font-bold mb-6 text-orange-700 text-center">
                Tất cả phong tục & lễ hội
              </h3>

              <div className="space-y-10">
                {cultures.map((c, i) => (
                  <div
                    key={c.title}
                    className={`flex flex-col md:flex-row items-center gap-8 ${
                      i % 2 === 1 ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    <img
                      src={c.img}
                      alt={c.title}
                      className="w-full md:w-1/2 h-64 object-cover rounded-xl shadow"
                    />
                    <div className="md:w-1/2">
                      <h3 className="text-xl font-semibold mb-2 text-orange-700">
                        {c.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {c.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default SpecialCultural;
