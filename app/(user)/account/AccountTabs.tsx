import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import { Trip } from "./page";

const AccountTabs = ({ trips }: { trips: Trip[] }) => {
  const [tab, setTab] = useState<"trips" | "wishlist" | "photos" | "reviews">(
    "trips"
  );

  const gallery = trips.flatMap((t, i) => [t.cover]);

  return (
    <div className="bg-white rounded-2xl p-4 shadow">
      <div className="flex items-center gap-4 border-b pb-4">
        {[
          { key: "trips", label: "Hành trình của tôi" },
          { key: "wishlist", label: "Wishlist" },
          { key: "photos", label: "Ảnh" },
          { key: "reviews", label: "Đánh giá" },
        ].map((t) => (
          <button
            key={t.key}
            onClick={() => setTab(t.key as any)}
            className={`px-3 py-2 rounded-md font-medium transition ${
              tab === (t.key as any)
                ? "bg-orange-50 text-orange-600"
                : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="p-6">
        <AnimatePresence mode="wait" initial={false}>
          {tab === "trips" && (
            <motion.div
              key="trips"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {trips.map((t) => (
                <article
                  key={t.id}
                  className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col md:flex-row"
                >
                  <div className="relative w-full md:w-44 h-40 md:h-auto">
                    <Image
                      src={t.cover}
                      alt={t.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 flex-1">
                    <h3 className="font-semibold text-lg">{t.title}</h3>
                    <p className="text-sm text-slate-500 mt-1">{t.summary}</p>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="text-xs text-slate-500">{t.date}</div>
                      <div className="flex items-center gap-2">
                        <button className="px-3 py-2 bg-orange-500 text-white rounded-md text-sm">
                          View
                        </button>
                        <button className="px-3 py-2 border rounded-md text-sm">
                          Share
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </motion.div>
          )}

          {tab === "wishlist" && (
            <motion.div
              key="wishlist"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
            >
              {gallery.map((g, i) => (
                <div
                  key={i}
                  className="rounded-2xl overflow-hidden shadow relative h-40"
                >
                  <Image src={g} alt={`g${i}`} fill className="object-cover" />
                  <div className="absolute inset-0 bg-linear-to-t from-black/30" />
                  <div className="absolute bottom-3 left-3 text-white font-semibold">
                    Wishlist #{i + 1}
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {tab === "photos" && (
            <motion.div
              key="photos"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-3"
            >
              {gallery.map((g, i) => (
                <div
                  key={i}
                  className="rounded-xl overflow-hidden h-36 relative"
                >
                  <Image src={g} alt={`p${i}`} fill className="object-cover" />
                </div>
              ))}
            </motion.div>
          )}

          {tab === "reviews" && (
            <motion.div
              key="reviews"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
              className="space-y-4"
            >
              <div className="bg-white p-4 rounded-2xl shadow">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-100" />
                  <div>
                    <div className="flex items-center gap-2">
                      <div className="font-semibold">Sapa Mù Sương</div>
                      <div className="text-xs text-amber-400">★ ★ ★ ★ ★</div>
                    </div>
                    <p className="text-sm text-slate-600 mt-2">
                      Tuyệt vời – homestay ấm áp, người dân thân thiện.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AccountTabs;
