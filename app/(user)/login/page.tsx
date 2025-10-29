"use client";

import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginFormData } from "@/schemas/auth/login.schema";
import Input from "@/components/common/Input";
import Image from "next/image";
import Link from "next/link";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  useEffect(() => {
    const savedEmail = localStorage.getItem("saved_email");
    const savedPassword = localStorage.getItem("saved_password");
    if (savedEmail) {
      setValue("email", savedEmail);
      setValue("password", savedPassword || "");
      setValue("rememberMe", true);
    }
  }, [setValue]);

  const onSubmit = (data: LoginFormData) => {
    console.log("Login data:", data);
    const isSuccess = true;

    if (isSuccess && data.rememberMe) {
      localStorage.setItem("saved_email", data.email);
      localStorage.setItem("saved_password", data.password);
    } else {
      localStorage.removeItem("saved_email");
      localStorage.removeItem("saved_password");
    }
  };

  return (
    <div className="flex min-h-screen">
      <div className="hidden md:block w-1/2">
        <Image
          src="/images/image-login.jpg"
          alt="Login Image"
          width={800}
          height={650}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="flex justify-center items-center w-full md:w-1/2 bg-white p-10">
        <div className="w-full max-w-md shadow-lg rounded-xl p-10">
          <h3 className="text-2xl font-semibold mb-2 text-center text-gray-800">
            Đăng nhập
          </h3>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            <div>
              <Input
                placeHolder="Email hoặc username"
                type="text"
                id="email_id"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <Input
                placeHolder="Mật khẩu"
                type="password"
                id="password_id"
                {...register("password")}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="flex justify-between items-center mb-5">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="remember_me"
                  {...register("rememberMe")}
                  className="w-5 h-5 rounded border border-gray-400 appearance-none 
                    checked:bg-orange-500 checked:border-orange-500 relative cursor-pointer"
                />
                <label htmlFor="remember_me">Remember me</label>
              </div>
              <Link
                href="forgot-password"
                className="italic hover:text-orange-500"
              >
                Quên mật khẩu?
              </Link>
            </div>

            <button
              type="submit"
              className="bg-orange-500 text-white rounded-md px-5 py-3 hover:bg-orange-600 transition-colors"
            >
              Đăng nhập
            </button>

            <p className="text-center mt-4 text-gray-600">
              Chưa có tài khoản?{" "}
              <Link
                href="/register"
                className="hover:text-orange-500 font-medium"
              >
                Đăng ký
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
