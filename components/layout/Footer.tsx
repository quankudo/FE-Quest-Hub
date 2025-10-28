import Image from "next/image";
import React from "react";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 px-20 py-10">
      <div className="flex justify-between gap-10">
        {/* Logo + Giới thiệu */}
        <div className="flex-1">
          <Image
            src="/images/Summer-travel-logo.jpg"
            alt="Logo"
            width={160}
            height={100}
            className="object-cover rounded-lg"
          />
          <p className="mt-4 text-sm leading-relaxed">
            Nền tảng du lịch thông minh giúp bạn khám phá địa điểm, món ăn,
            phong tục và hành trình hoàn hảo. Cùng tạo nên trải nghiệm đáng nhớ
            với hướng dẫn viên và chủ nhà uy tín.
          </p>
        </div>

        {/* Liên kết nhanh */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-white">
            Liên kết nhanh
          </h4>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-white">
                Trang chủ
              </a>
            </li>
            <li>
              <a href="/places" className="hover:text-white">
                Địa điểm
              </a>
            </li>
            <li>
              <a href="/tours" className="hover:text-white">
                Tours
              </a>
            </li>
            <li>
              <a href="/homestay" className="hover:text-white">
                Homestay
              </a>
            </li>
            <li>
              <a href="/blog" className="hover:text-white">
                Blog du lịch
              </a>
            </li>
          </ul>
        </div>

        {/* Hỗ trợ */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-white">Hỗ trợ</h4>
          <ul className="space-y-2">
            <li>
              <a href="/about" className="hover:text-white">
                Về chúng tôi
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white">
                Liên hệ
              </a>
            </li>
            <li>
              <a href="/faq" className="hover:text-white">
                Câu hỏi thường gặp
              </a>
            </li>
            <li>
              <a href="/policy" className="hover:text-white">
                Chính sách & điều khoản
              </a>
            </li>
          </ul>
        </div>

        {/* Mạng xã hội */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-white">
            Kết nối với chúng tôi
          </h4>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-500">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-pink-500">
              <Instagram size={20} />
            </a>
            <a href="#" className="hover:text-sky-400">
              <Twitter size={20} />
            </a>
            <a href="#" className="hover:text-red-500">
              <Youtube size={20} />
            </a>
          </div>
          <div className="mt-5 text-sm flex flex-col gap-3">
            <p className="flex items-center gap-2">
              <MapPin size={18} /> 123 Đường Du Lịch, Quận 1, TP. HCM
            </p>
            <p className="flex items-center gap-2">
              <Phone size={18} /> 0123 456 789
            </p>
            <p className="flex items-center gap-2">
              <Mail size={18} /> travelai@example.com
            </p>
          </div>
        </div>
        <div className="flex-1">
          <h4 className="text-lg font-semibold mb-4 text-white">Galary</h4>
          <div className="grid grid-cols-3 gap-2">
            {[
              "/images/galary-1.jpg",
              "/images/galary-2.png",
              "/images/galary-3.jpg",
              "/images/galary-4.jpg",
              "/images/galary-5.jpg",
              "/images/galary-6.jpg",
            ].map((src, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-lg cursor-pointer"
              >
                <Image
                  src={src}
                  alt={`Gallery ${index + 1}`}
                  width={150}
                  height={100}
                  className="w-full h-24 object-cover transform group-hover:scale-110 transition duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                  <span className="text-white text-xs font-medium">
                    Xem thêm
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm">
        © {new Date().getFullYear()} TravelAI — Tất cả quyền được bảo lưu.
      </div>
    </footer>
  );
};

export default Footer;
