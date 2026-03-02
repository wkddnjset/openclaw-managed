import { BlogEditorForm } from "@/app/components/BlogEditorForm";

export default function NewBlogPage() {
  return (
    <div className="max-w-3xl">
      <div className="mb-6">
        <h1 className="text-2xl font-bold tracking-tight">새 글 작성</h1>
        <p className="text-sm text-muted-foreground mt-1">새로운 블로그 게시물을 작성합니다.</p>
      </div>
      <BlogEditorForm />
    </div>
  );
}
