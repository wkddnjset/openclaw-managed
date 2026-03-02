"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { RichTextEditor } from "./RichTextEditor";
import { createPost, updatePost } from "@/app/actions/blog";

interface BlogEditorFormProps {
  post?: { id: number; title: string; content: string; published: boolean };
}

export function BlogEditorForm({ post }: BlogEditorFormProps) {
  const router = useRouter();
  const [title, setTitle] = useState(post?.title ?? "");
  const [content, setContent] = useState(post?.content ?? "");
  const [published, setPublished] = useState(post?.published ?? false);
  const [error, setError] = useState("");
  const [isPending, setIsPending] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      setError("제목과 내용을 입력해주세요.");
      return;
    }
    setIsPending(true);
    setError("");

    const formData = new FormData();
    formData.set("title", title);
    formData.set("content", content);
    formData.set("published", String(published));

    const result = post
      ? await updatePost(post.id, formData)
      : await createPost(formData);

    if (result?.error) {
      setError(result.error);
      setIsPending(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <label htmlFor="title" className="text-sm font-medium">
          제목
        </label>
        <input
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          placeholder="게시물 제목을 입력하세요"
          required
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">내용</label>
        <RichTextEditor content={content} onChange={setContent} />
      </div>

      <div className="flex items-center gap-2">
        <input
          id="published"
          type="checkbox"
          checked={published}
          onChange={(e) => setPublished(e.target.checked)}
          className="h-4 w-4 rounded border-input"
        />
        <label htmlFor="published" className="text-sm font-medium cursor-pointer">
          즉시 발행
        </label>
      </div>

      {error && <p className="text-sm text-destructive">{error}</p>}

      <div className="flex gap-3">
        <button
          type="submit"
          disabled={isPending}
          className="inline-flex items-center justify-center rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-6 disabled:opacity-50 transition-colors"
        >
          {isPending ? "저장 중..." : post ? "수정 저장" : "게시물 저장"}
        </button>
        <button
          type="button"
          onClick={() => router.push("/admin/blog")}
          className="inline-flex items-center justify-center rounded-md text-sm font-medium border border-input bg-background hover:bg-muted h-10 px-6 transition-colors"
        >
          취소
        </button>
      </div>
    </form>
  );
}
