import Input from "@/components/common/Input";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const LoginPage = () => {
  return (
    <div className="flex min-h-screen">
      {/* Bên trái */}
      <div className="w-1/2">
        <Image
          src={"/images/image-login.jpg"}
          alt="Login Image"
          width={800}
          height={650}
        />
      </div>

      {/* Bên phải - Form login */}
      <div className="flex justify-center items-center w-full md:w-1/2 bg-white p-10">
        <div className="w-full max-w-md shadow p-10">
          <h3 className="text-2xl font-medium mb-6">Đăng nhập</h3>
          <form action="" method="post" className="flex flex-col gap-4">
            <Input placeHolder="Email or username" type="text" id="email_id" />
            <Input placeHolder="Password" type="password" id="password_id" />

            <div className="flex justify-between items-center mb-5">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="remember_me"
                  className="
                    w-5 h-5 rounded border border-gray-400 appearance-none 
                    checked:bg-orange-500 checked:border-orange-500 relative
                  "
                />
                <label htmlFor="remember_me">Remember me</label>
              </div>
              <Link href={""} className="italic hover:text-orange-500">
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              className="bg-orange-500 text-white rounded-md px-5 py-3 hover:bg-orange-600 transition-colors"
            >
              Đăng nhập
            </button>

            <p className="text-center mt-4">
              Don't have an account?{" "}
              <Link href={"register"} className="hover:text-orange-500">
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
