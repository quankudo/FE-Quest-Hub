"use client";

import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { motion } from "framer-motion";
import Image from "next/image";

const destinations = [
  {
    id: 1,
    title: "Sapa - Việt Nam",
    desc: "Thị trấn trong mây với ruộng bậc thang kỳ vĩ và nền văn hóa dân tộc đa dạng.",
    img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80",
    lat: 22.335,
    lng: 103.843,
  },
  {
    id: 2,
    title: "Hội An - Việt Nam",
    desc: "Phố cổ lung linh ánh đèn lồng, lưu giữ dấu ấn văn hóa Việt cổ kính.",
    img: "https://travel-spark.monamedia.net/wp-content/uploads/2023/12/destinations-1-5.jpg",
    lat: 15.88,
    lng: 108.338,
  },
  {
    id: 3,
    title: "Đà Lạt - Việt Nam",
    desc: "Thành phố ngàn hoa, khí hậu se lạnh và khung cảnh lãng mạn quanh năm.",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
    lat: 11.94,
    lng: 108.458,
  },
  {
    id: 4,
    title: "Phú Quốc - Việt Nam",
    desc: "Hòn đảo ngọc nổi tiếng với bãi biển xanh ngọc và hoàng hôn rực rỡ.",
    img: "https://travel-spark.monamedia.net/wp-content/uploads/2023/12/destinations-1-1.jpg",
    lat: 10.227,
    lng: 103.963,
  },
  {
    id: 5,
    title: "Hạ Long - Việt Nam",
    desc: "Kỳ quan thiên nhiên thế giới với hàng ngàn hòn đảo đá vôi tuyệt đẹp.",
    img: "https://images.unsplash.com/photo-1533587851505-d119e13fa0d7?auto=format&fit=crop&w=900&q=80",
    lat: 20.921,
    lng: 107.084,
  },
];

const customIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
});

export default function PlacesMap() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const center: [number, number] = [16.0471, 108.2068];

  return (
    <div className="flex min-h-[90vh] bg-gray-50">
      {/* MAP */}
      <div className="w-[65%] h-[90vh] relative">
        <MapContainer
          center={center}
          zoom={6}
          scrollWheelZoom={true}
          className="w-full h-full rounded-2xl shadow-lg"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {destinations.map((d) => (
            <Marker
              key={d.id}
              position={[d.lat, d.lng]}
              icon={customIcon}
              eventHandlers={{ click: () => setSelectedId(d.id) }}
            >
              <Popup>
                <div className="font-semibold text-sm">{d.title}</div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      {/* LIST */}
      <div className="w-[35%] overflow-y-scroll p-6 space-y-6 bg-white shadow-inner">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-semibold text-gray-800"
        >
          Địa điểm nổi bật ở Việt Nam
        </motion.h2>

        {destinations.map((d, i) => (
          <motion.div
            key={d.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            onClick={() => setSelectedId(d.id)}
            className={`cursor-pointer bg-gray-50 rounded-2xl shadow hover:shadow-xl transition p-3 flex items-center gap-4 border ${
              selectedId === d.id
                ? "border-blue-400 bg-blue-50"
                : "border-transparent"
            }`}
          >
            <Image
              src={d.img}
              alt={d.title}
              width={100}
              height={80}
              className="rounded-xl object-cover w-[100px] h-20"
            />
            <div>
              <h3 className="font-bold text-gray-800">{d.title}</h3>
              <p className="text-sm text-gray-600 line-clamp-2">{d.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
