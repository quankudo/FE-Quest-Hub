"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/common/Button";

export default function AccountEditPage() {
  const [avatar, setAvatar] = useState(
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80"
  );
  const [name, setName] = useState("Huyền Quân");
  const [bio, setBio] = useState("Fullstack Dev • Traveler • Food Lover");
  const [location, setLocation] = useState("Đà Nẵng, Việt Nam");
  const [style, setStyle] = useState("nature");

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => setAvatar(event.target?.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    alert("✅ Hồ sơ đã được cập nhật!");
  };

  return (
    <main className="min-h-screen bg-linear-to-tr from-orange-50 to-white p-8">
      <section className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-orange-100">
        <div className="relative h-48 bg-linear-to-r from-orange-400 to-amber-500">
          <div className="absolute bottom-0 left-0 w-full h-24 bg-linear-to-t from-white to-transparent"></div>
        </div>

        <div className="relative px-8 pb-12 -mt-16">
          <div className="flex flex-col md:flex-row items-center md:items-end gap-6">
            {/* Avatar upload */}
            <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <Image
                src={avatar}
                alt="avatar"
                fill
                className="object-cover"
                priority
              />
              <label className="absolute bottom-0 right-0 bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-full shadow cursor-pointer transition">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleAvatarChange}
                  className="hidden"
                />
                ✏️
              </label>
            </div>

            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl font-extrabold text-slate-800">
                Cập nhật hồ sơ
              </h1>
              <p className="text-slate-600 mt-1">
                Hãy làm hồ sơ của bạn thật nổi bật nhé ✨
              </p>
            </div>
          </div>

          {/* Form */}
          <motion.form
            onSubmit={(e) => e.preventDefault()}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-slate-600 mb-1">
                Họ và tên
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-slate-200 rounded-xl p-3 focus:ring-2 focus:ring-orange-400 focus:border-orange-400 outline-none"
              />
            </div>

            {/* Location */}
            <div>
              <label className="block text-sm font-medium text-slate-600 mb-1">
                Địa điểm
              </label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full border border-slate-200 rounded-xl p-3 focus:ring-2 focus:ring-orange-400 focus:border-orange-400 outline-none"
              />
            </div>

            {/* Bio */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-slate-600 mb-1">
                Giới thiệu bản thân
              </label>
              <textarea
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                rows={3}
                className="w-full border border-slate-200 rounded-xl p-3 focus:ring-2 focus:ring-orange-400 focus:border-orange-400 outline-none resize-none"
              />
            </div>

            {/* Travel style */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-slate-600 mb-2">
                Phong cách du lịch
              </label>
              <div className="flex flex-wrap gap-3">
                {[
                  { key: "nature", label: "🌿 Thiên nhiên" },
                  { key: "food", label: "🍜 Ẩm thực" },
                  { key: "photo", label: "📸 Nhiếp ảnh" },
                  { key: "culture", label: "🏛️ Văn hoá" },
                  { key: "city", label: "🏙️ Đô thị" },
                ].map((s) => (
                  <button
                    key={s.key}
                    type="button"
                    onClick={() => setStyle(s.key)}
                    className={`px-4 py-2 rounded-xl border text-sm transition ${
                      style === s.key
                        ? "bg-orange-500 text-white border-orange-500 shadow"
                        : "bg-white text-slate-600 hover:bg-slate-100 border-slate-200"
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Social */}
            <div>
              <label className="block text-sm font-medium text-slate-600 mb-1">
                Instagram
              </label>
              <input
                type="text"
                placeholder="@username"
                className="w-full border border-slate-200 rounded-xl p-3 focus:ring-2 focus:ring-orange-400 focus:border-orange-400 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-600 mb-1">
                Twitter
              </label>
              <input
                type="text"
                placeholder="@username"
                className="w-full border border-slate-200 rounded-xl p-3 focus:ring-2 focus:ring-orange-400 focus:border-orange-400 outline-none"
              />
            </div>

            {/* Save button */}
            <div className="md:col-span-2 flex justify-center mt-6">
              <Button
                isTypeSubmit={true}
                text="Lưu thay đổi"
                event={handleSave}
              />
            </div>
          </motion.form>
        </div>
      </section>
    </main>
  );
}
