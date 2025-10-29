import z from "zod";

export const forgotPasswordSchema = z.object({
  email: z
    .string()
    .min(1, "Vui lòng nhập email hoặc username")
    .refine(
      (val) => val.includes("@") && val.length >= 3,
      "Email không hợp lệ"
    ),
});

export type ForgotPasswordData = z.infer<typeof forgotPasswordSchema>;
