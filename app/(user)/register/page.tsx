import Input from "@/components/common/Input";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
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
      <div className="flex justify-center items-center w-full md:w-1/2 bg-white p-10">
        <div className="w-full p-10 rounded-xl bg-white shadow max-w-md">
          <h3 className="text-2xl font-medium">Đăng ký</h3>
          <form action="" method="post" className="flex flex-col gap-3">
            <Input placeHolder="Username" type="text" id="username_id" />
            <Input placeHolder="Email or username" type="text" id="email_id" />
            <Input placeHolder="Password" type="password" id="password_id" />
            <button
              type="submit"
              className="bg-orange-500 text-white rounded-md px-5 py-3 mt-5"
            >
              Đăng ký
            </button>
            <p className="text-center">
              Have An Account?{" "}
              <Link href={"login"} className="hover:text-orange-500">
                Log In
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
