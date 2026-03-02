export const dynamic = "force-dynamic";

import { db } from "@/lib/db";
import { notFound } from "next/navigation";
import { BlogEditorForm } from "@/app/components/BlogEditorForm";

interface EditBlogPageProps {
  params: Promise<{ id: string }>;
}

export default async function EditBlogPage({ params }: EditBlogPageProps) {
  const { id } = await params;
  const post = await db.blogPost.findUnique({ where: { id: Number(id) } });

  if (!post) notFound();

  return (
    <div className="max-w-3xl">
      <div className="mb-6">
        <h1 className="text-2xl font-bold tracking-tight">게시물 수정</h1>
        <p className="text-sm text-muted-foreground mt-1">{post.title}</p>
      </div>
      <BlogEditorForm post={post} />
    </div>
  );
}
