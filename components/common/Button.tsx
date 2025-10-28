import React from "react";

const Button = ({ text }: { text: string }) => {
  return (
    <button
      className="
        relative overflow-hidden rounded-md border bg-orange-500
        px-6 py-2 text-white
        transition-all duration-300 hover:text-white group
      "
    >
      <span className="relative z-10">{text}</span>

      {/* Hiệu ứng chạy chéo từ top-left */}
      <span
        className="
          absolute top-0 left-0 w-full h-full bg-cyan-200
          -translate-x-full -translate-y-full
          transition-transform duration-500 ease-out
          group-hover:translate-x-0 group-hover:translate-y-0
        "
      ></span>

      {/* Hiệu ứng chạy chéo từ bottom-right */}
      <span
        className="
          absolute bottom-0 right-0 w-full h-full bg-primary-color
          translate-x-full translate-y-full
          transition-transform duration-500 ease-out
          group-hover:translate-x-0 group-hover:translate-y-0
        "
      ></span>
    </button>
  );
};

export default Button;
