import Image from "next/image";
import React from "react";

type BlogSidebarProps = {
  article: {
    author: {
      name: string;
      avatar: string;
      bio: string;
    };
  };
};

const BlogSidebar = ({ article }: BlogSidebarProps) => {
  return (
    <aside className="space-y-6">
      <div className="bg-white rounded-2xl p-4 shadow">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <Image
              src={article.author.avatar}
              alt={article.author.name}
              width={48}
              height={48}
              className="object-cover"
            />
          </div>
          <div>
            <div className="font-semibold">{article.author.name}</div>
            <div className="text-sm text-slate-500">{article.author.bio}</div>
          </div>
        </div>

        <div className="mt-4 flex gap-2">
          <button className="px-3 py-2 rounded-md bg-orange-600 text-white">
            Follow
          </button>
          <button className="px-3 py-2 rounded-md border">Message</button>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-4 shadow">
        <h4 className="font-semibold mb-3">Quick info</h4>
        <ul className="text-sm text-slate-600 space-y-2">
          <li>Location: Sapa, Lào Cai</li>
          <li>Best time: Sep - Nov</li>
          <li>Difficulty: Easy — Moderate</li>
          <li>Price level: $$</li>
        </ul>
      </div>

      <div className="bg-white rounded-2xl p-4 shadow">
        <h4 className="font-semibold mb-3">Related posts</h4>
        <ul className="space-y-3 text-sm">
          <li className="flex items-center gap-3">
            <div className="w-12 h-8 rounded overflow-hidden relative">
              <Image
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80"
                alt="r1"
                fill
                className="object-cover"
              />
            </div>
            <div>Đà Lạt lãng mạn - 3 ngày</div>
          </li>
          <li className="flex items-center gap-3">
            <div className="w-12 h-8 rounded overflow-hidden relative">
              <Image
                src="https://images.unsplash.com/photo-1533587851505-d119e13fa0d7?auto=format&fit=crop&w=400&q=80"
                alt="r2"
                fill
                className="object-cover"
              />
            </div>
            <div>Hạ Long - Kỳ quan vịnh biển</div>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default BlogSidebar;
