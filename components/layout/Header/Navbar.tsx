"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const navbars = [
  { name: "Trang chủ", href: "/" },
  { name: "Địa điểm", href: "/places" },
  { name: "Tours", href: "/tours" },
  { name: "HomeStay", href: "/homestay" },
  { name: "Tin tức", href: "/news" },
  { name: "Hướng dẫn", href: "/guides" },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-5 font-medium">
      {navbars.map((item) => {
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`px-3 transition-colors duration-200 ${
              isActive ? "text-[#37d4d9]" : "text-gray-700 hover:text-[#37d4d9]"
            }`}
          >
            {item.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;
