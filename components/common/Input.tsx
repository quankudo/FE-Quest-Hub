import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeHolder: string;
  type: "text" | "tel" | "email" | "password";
  id: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ placeHolder, type, id, ...props }, ref) => {
    return (
      <div className="relative mt-4">
        <input
          ref={ref} // ✅ cho react-hook-form
          type={type}
          id={id}
          {...props} // ✅ để nhận name, onChange, onBlur, v.v.
          className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent 
          rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0
          focus:border-orange-600 peer"
          placeholder=" "
        />
        <label
          htmlFor={id}
          className="absolute text-sm text-gray-500 duration-300 transform
          -translate-y-4 scale-75 top-2 z-10 origin bg-white px-2 peer-focus:px-2
          peer-focus:text-orange-600 peer-placeholder-shown:scale-100 
          peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 
          peer-focus:top-2 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 
          rtl:peer-focus:left-auto start-2"
        >
          {placeHolder}
        </label>
      </div>
    );
  }
);

Input.displayName = "Input";
export default Input;
