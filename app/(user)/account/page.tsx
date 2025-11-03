"use client";

import React from "react";
import Image from "next/image";
import AccountTabs from "./AccountTabs";

// ---------- Types
type Badge = { id: string; title: string; icon?: string; level?: string };

// ---------- Sample data
const badges: Badge[] = [
  { id: "explorer", title: "Explorer", icon: "🏕️", level: "Lv.7" },
  { id: "photographer", title: "Photographer", icon: "📸" },
  { id: "foodie", title: "Foodie", icon: "🍜" },
];

export interface Trip {
  id: number;
  title: string;
  date: string;
  cover: string;
  summary: string;
}

const trips: Trip[] = [
  {
    id: 1,
    title: "Sapa Mù Sương",
    date: "Mar 2025",
    cover:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80",
    summary: "Ruộng bậc thang, homestay, văn hóa dân tộc",
  },
  {
    id: 2,
    title: "Hội An Đêm Đèn Lồng",
    date: "Dec 2024",
    cover:
      "https://travel-spark.monamedia.net/wp-content/uploads/2023/12/destinations-1-5.jpg",
    summary: "Phố cổ, ẩm thực và cổ kính",
  },
  {
    id: 3,
    title: "Đà Lạt Lãng Mạn",
    date: "Sep 2024",
    cover:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    summary: "Cà phê, hoa, đường đèo tuyệt đẹp",
  },
];

// ---------- Small helper components
function IconBadge({ b }: { b: Badge }) {
  return (
    <div className="flex items-center gap-3 bg-white/60 backdrop-blur rounded-2xl px-3 py-2 shadow-sm">
      <div className="text-2xl">{b.icon}</div>
      <div className="text-sm text-slate-700">
        <div className="font-semibold">{b.title}</div>
        {b.level && <div className="text-xs text-slate-500">{b.level}</div>}
      </div>
    </div>
  );
}

// Tiny SVG sparkline for stats
function Sparkline({ values = [3, 5, 4, 7, 6] }: { values?: number[] }) {
  const max = Math.max(...values);
  const points = values
    .map(
      (v, i) => `${(i / (values.length - 1)) * 100},${100 - (v / max) * 100}`
    )
    .join(" ");
  return (
    <svg viewBox="0 0 100 100" className="w-24 h-12">
      <polyline
        fill="none"
        stroke="#FB923C"
        strokeWidth={3}
        points={points}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ---------- Main component
export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-slate-50 p-8">
      {/* Header hero */}
      <section className="relative rounded-2xl overflow-hidden bg-linear-to-tr from-cyan-50 to-white shadow-lg">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image
            src="/images/bg-profile.jpg"
            alt="cover"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="relative z-10 p-8 md:p-12 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {/* Profile card */}
          <div className="md:col-span-2 flex items-center gap-6">
            <div className="relative w-36 h-36 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80"
                alt="avatar"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-slate-800">
                Huyền Quân
              </h1>
              <p className="mt-1 text-slate-600">
                Fullstack Dev • Traveler • Food Lover
              </p>

              <div className="mt-4 flex flex-wrap gap-3">
                {badges.map((b) => (
                  <IconBadge key={b.id} b={b} />
                ))}
              </div>

              <div className="mt-6 flex gap-3">
                <button className="px-4 py-2 rounded-xl bg-orange-500 text-white font-medium shadow hover:bg-orange-600 transition">
                  Edit profile
                </button>
                <button className="px-4 py-2 rounded-xl border border-slate-200 bg-white text-slate-700 hover:shadow">
                  Share profile
                </button>
              </div>
            </div>
          </div>

          {/* Mini stats */}
          <div className="flex flex-col gap-4 items-start md:items-end">
            <div className="bg-white rounded-2xl p-4 shadow-sm w-full md:w-56">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-slate-500">Trips</div>
                  <div className="text-2xl font-semibold text-slate-800">
                    {trips.length}
                  </div>
                </div>
                <Sparkline values={[2, 4, 5, 7, 6]} />
              </div>
            </div>

            <div className="bg-white rounded-2xl p-4 shadow-sm w-full md:w-56">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-slate-500">Followers</div>
                  <div className="text-2xl font-semibold text-slate-800">
                    1.2k
                  </div>
                </div>
                <Sparkline values={[1, 3, 2, 5, 4]} />
              </div>
            </div>

            <div className="bg-white rounded-2xl p-4 shadow-sm w-full md:w-56">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-slate-500">Rating</div>
                  <div className="text-2xl font-semibold text-slate-800">
                    4.8
                  </div>
                </div>
                <div className="text-sm text-amber-400">★ ★ ★ ★ ★</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content area */}
      <section className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: profile summary + stats */}
        <div className="col-span-2 space-y-6">
          {/* Tabs */}
          <AccountTabs trips={trips} />

          {/* Additional panels */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-4 shadow">
              <h4 className="font-semibold mb-3">Travel Insights</h4>
              <p className="text-sm text-slate-600">
                AI says you prefer coastal & food experiences. Try these hidden
                gems...
              </p>
              <div className="mt-3 flex gap-2 flex-wrap">
                <button className="px-3 py-1 rounded-md bg-slate-100 text-sm">
                  Coastal
                </button>
                <button className="px-3 py-1 rounded-md bg-slate-100 text-sm">
                  Local Food
                </button>
                <button className="px-3 py-1 rounded-md bg-slate-100 text-sm">
                  Photography
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-4 shadow">
              <h4 className="font-semibold mb-3">Achievements</h4>
              <div className="flex gap-3 items-center">
                <div className="w-20 h-20 rounded-lg bg-linear-to-tr from-amber-300 to-orange-400 flex items-center justify-center text-white font-bold text-xl">
                  Lv7
                </div>
                <div>
                  <div className="font-semibold">Explorer Level 7</div>
                  <p className="text-sm text-slate-600">
                    Bạn đã đi 45 địa điểm và viết 12 review.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: compact profile + mini map + social */}
        <aside className="space-y-6">
          <div className="bg-white rounded-2xl p-4 shadow">
            <h4 className="font-semibold mb-3">Quick Profile</h4>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80"
                  alt="a"
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
              <div>
                <div className="font-semibold">Huyền Quân</div>
                <div className="text-sm text-slate-500">Đà Nẵng, Việt Nam</div>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="bg-slate-50 rounded-md p-2 text-center">
                <div className="text-sm text-slate-500">Following</div>
                <div className="font-semibold">245</div>
              </div>
              <div className="bg-slate-50 rounded-md p-2 text-center">
                <div className="text-sm text-slate-500">Followers</div>
                <div className="font-semibold">1.2k</div>
              </div>
            </div>
          </div>

          <div className="bg-linear-to-r from-purple-500 to-indigo-500 text-white rounded-2xl p-5 shadow">
            <h4 className="font-semibold mb-2">Phong cách du lịch của bạn</h4>
            <p className="text-2xl font-bold mb-1">🌿 Người yêu thiên nhiên</p>
            <p className="text-sm opacity-90">
              Thích những nơi yên bình, gần gũi thiên nhiên và văn hóa địa
              phương.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-4 shadow">
            <h4 className="font-semibold mb-3">Mục tiêu du lịch</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>🌏 Ghé 10 quốc gia trong 5 năm tới</li>
              <li>🍣 Thử đặc sản tại mỗi điểm đến</li>
              <li>📸 Đăng 100 ảnh review chất lượng</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-4 shadow">
            <h4 className="font-semibold mb-3">Social</h4>
            <div className="flex gap-3">
              <button className="p-2 rounded-md bg-blue-600 text-white">
                Twitter
              </button>
              <button className="p-2 rounded-md bg-pink-600 text-white">
                Instagram
              </button>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}
