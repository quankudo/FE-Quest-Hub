import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, "Vui lòng nhập email hoặc username")
    .refine(
      (val) => val.includes("@") && val.length >= 3,
      "Email hoặc tên đăng nhập không hợp lệ"
    ),
  password: z.string().min(6, "Mật khẩu tối thiểu 6 ký tự"),
  rememberMe: z.boolean().optional(),
});

export type LoginFormData = z.infer<typeof loginSchema>;
