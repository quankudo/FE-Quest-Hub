"use client";
import Input from "@/components/common/Input";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  RegisterFormData,
  registerSchema,
} from "@/schemas/auth/register.schema";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data: RegisterFormData) => {
    console.log("✅ Register Data:", data);
  };

  return (
    <div className="flex min-h-screen">
      {/* Bên trái */}
      <div className="w-1/2">
        <Image
          src={"/images/image-login.jpg"}
          alt="Register Image"
          width={800}
          height={650}
          className="object-cover h-full w-full"
        />
      </div>

      {/* Bên phải */}
      <div className="flex justify-center items-center w-full md:w-1/2 bg-white p-10">
        <div className="w-full p-10 rounded-xl bg-white shadow max-w-md">
          <h3 className="text-2xl font-medium mb-2 text-center">Đăng ký</h3>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-3"
          >
            <Input
              placeHolder="Username"
              type="text"
              id="username_id"
              {...register("username")}
            />
            {errors.username && (
              <p className="text-red-500 text-sm">{errors.username.message}</p>
            )}

            <Input
              placeHolder="Email"
              type="email"
              id="email_id"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}

            <Input
              placeHolder="Password"
              type="password"
              id="password_id"
              {...register("password")}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}

            <Input
              placeHolder="Confirm Password"
              type="password"
              id="confirm_id"
              {...register("confirmPassword")}
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">
                {errors.confirmPassword.message}
              </p>
            )}

            <button
              type="submit"
              className="bg-orange-500 text-white rounded-md px-5 py-3 mt-5 hover:bg-orange-600 transition"
            >
              Đăng ký
            </button>

            <p className="text-center mt-4">
              Đã có tài khoản?{" "}
              <Link href="/login" className="hover:text-orange-500 font-medium">
                Đăng nhập
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
