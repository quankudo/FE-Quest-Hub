import React from "react";

const ButtonSecond = ({
  text,
  disabled,
  type,
}: {
  text: string;
  disabled: boolean;
  type: "submit" | "button";
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className="
        rounded-md bg-orange-500 w-full
        px-6 py-2 text-white
        transition-all duration-300 hover:bg-orange-600
      "
    >
      {text}
    </button>
  );
};

export default ButtonSecond;
