"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import {
  ForgotPasswordData,
  forgotPasswordSchema,
} from "@/schemas/auth/forgot-password.schema";
import Input from "@/components/common/Input";
import ButtonSecond from "@/components/common/ButtonSecond";

const ForgotPasswordPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ForgotPasswordData>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const [success, setSuccess] = React.useState(false);

  const onSubmit = async (data: ForgotPasswordData) => {
    console.log("Forgot password email:", data.email);

    // Giả lập gọi API
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setSuccess(true);
    reset();
  };

  return (
    <div
      className="flex justify-center items-center w-full min-h-[80vh]"
      style={{
        backgroundImage: `url('/images/bg-forgot-password.jpg')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="p-8 rounded-2xl bg-white shadow-md w-[400px]">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Quên mật khẩu
        </h2>

        {!success ? (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <Input
                placeHolder="Nhập Email"
                type="text"
                id="forgot-password_id"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <ButtonSecond
              type="submit"
              disabled={isSubmitting}
              text={
                isSubmitting ? "Đang gửi..." : "Gửi liên kết đặt lại mật khẩu"
              }
            />

            <p className="text-sm text-center mt-3">
              <Link href="/login" className="text-blue-600 hover:underline">
                ← Quay lại đăng nhập
              </Link>
            </p>
          </form>
        ) : (
          <div className="text-center space-y-4">
            <p className="text-green-600 font-medium">
              Liên kết đặt lại mật khẩu đã được gửi đến email của bạn.
            </p>
            <Link
              href="/login"
              className="text-blue-600 hover:underline inline-block"
            >
              Quay lại trang đăng nhập
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
