"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  Bell,
  ChevronDown,
  Heart,
  Home,
  LogOut,
  MapPin,
  User,
} from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const IconBar = () => {
  const [isAccountDropdownOpen, setAccountDropdownOpen] = useState(false);

  const handleClickAccount = () => {
    setAccountDropdownOpen(!isAccountDropdownOpen);
  };

  return (
    <div className="flex items-center gap-4">
      <Bell className="w-5 h-5 cursor-pointer" />
      <Heart className="w-5 h-5 text-red-500 cursor-pointer" />
      <div className="relative">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={handleClickAccount}
        >
          <User className="w-5 h-5" />
          <p className="flex items-center gap-1">
            <span>Huyền Quân</span>
            <ChevronDown className="w-4 h-4" />
          </p>
        </div>
        <AnimatePresence>
          {isAccountDropdownOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }} // lúc bắt đầu
              animate={{ opacity: 1, y: 0 }} // khi mở
              exit={{ opacity: 0, y: -10 }} // khi đóng
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="absolute top-full left-0 mt-2 z-10 overflow-hidden bg-white shadow-md rounded-lg w-max flex flex-col"
            >
              <Link
                href="#"
                className="flex items-center gap-3 px-5 py-3 hover:bg-gray-50 text-sm"
              >
                <User size={18} className="text-gray-600" /> Profile
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 px-5 py-3 hover:bg-gray-50 text-sm"
              >
                <MapPin size={18} className="text-gray-600" /> Lịch trình cá
                nhân
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 px-5 py-3 hover:bg-gray-50 text-sm"
              >
                <Home size={18} className="text-gray-600" /> Lịch sử hành trình
              </Link>
              <button className="flex items-center gap-3 px-5 py-3 text-red-500 hover:bg-red-50">
                <LogOut size={18} /> Đăng xuất
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default IconBar;
