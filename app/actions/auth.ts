"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getAdminToken } from "@/lib/auth";

export async function login(_prev: unknown, formData: FormData) {
  const password = formData.get("password") as string;
  const adminPassword = process.env.ADMIN_PASSWORD ?? "admin";

  if (password !== adminPassword) {
    return { error: "비밀번호가 올바르지 않습니다." };
  }

  const token = getAdminToken();
  const cookieStore = await cookies();
  cookieStore.set("admin_token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7, // 7 days
    path: "/",
  });

  redirect("/admin/blog");
}
