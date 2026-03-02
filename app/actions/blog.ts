"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

function generateSlug(title: string): string {
  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();

  if (!slug) {
    return `post-${Date.now()}`;
  }
  return `${slug}-${Date.now()}`;
}

export async function createPost(formData: FormData) {
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;
  const published = formData.get("published") === "true";

  if (!title || !content) {
    return { error: "제목과 내용을 입력해주세요." };
  }

  const slug = generateSlug(title);

  await db.blogPost.create({
    data: { title, content, slug, published },
  });

  revalidatePath("/admin/blog");
  redirect("/admin/blog");
}

export async function updatePost(id: number, formData: FormData) {
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;
  const published = formData.get("published") === "true";

  if (!title || !content) {
    return { error: "제목과 내용을 입력해주세요." };
  }

  await db.blogPost.update({
    where: { id },
    data: { title, content, published },
  });

  revalidatePath("/admin/blog");
  redirect("/admin/blog");
}

export async function deletePost(id: number) {
  await db.blogPost.delete({ where: { id } });
  revalidatePath("/admin/blog");
}

export async function togglePublish(id: number, published: boolean) {
  await db.blogPost.update({
    where: { id },
    data: { published: !published },
  });
  revalidatePath("/admin/blog");
}
