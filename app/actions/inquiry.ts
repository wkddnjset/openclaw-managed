"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function markAsRead(id: number) {
  await db.inquiry.update({
    where: { id },
    data: { read: true },
  });
  revalidatePath("/admin/inquiries");
}

export async function markAsUnread(id: number) {
  await db.inquiry.update({
    where: { id },
    data: { read: false },
  });
  revalidatePath("/admin/inquiries");
}
