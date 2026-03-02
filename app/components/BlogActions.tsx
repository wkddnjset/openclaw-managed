"use client";

import { Pencil, Trash2, Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { deletePost, togglePublish } from "@/app/actions/blog";

interface BlogActionsProps {
  id: number;
  published: boolean;
}

export function BlogActions({ id, published }: BlogActionsProps) {
  async function handleDelete() {
    if (!confirm("정말 삭제하시겠습니까?")) return;
    await deletePost(id);
  }

  return (
    <div className="flex items-center justify-end gap-1">
      <form action={async () => { await togglePublish(id, published); }}>
        <button
          type="submit"
          title={published ? "발행 취소" : "발행"}
          className="p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
        >
          {published ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
        </button>
      </form>
      <Link
        href={`/admin/blog/${id}`}
        className="p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
      >
        <Pencil className="w-4 h-4" />
      </Link>
      <button
        onClick={handleDelete}
        title="삭제"
        className="p-1.5 rounded-md text-muted-foreground hover:text-destructive hover:bg-muted transition-colors"
      >
        <Trash2 className="w-4 h-4" />
      </button>
    </div>
  );
}
