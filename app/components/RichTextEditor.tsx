"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Bold, Italic, Strikethrough, List, ListOrdered, Quote, Undo, Redo, Heading2, Heading3, Code } from "lucide-react";
import { useEffect } from "react";

interface RichTextEditorProps {
  content?: string;
  onChange: (html: string) => void;
}

export function RichTextEditor({ content = "", onChange }: RichTextEditorProps) {
  const editor = useEditor({
    extensions: [StarterKit],
    content,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class:
          "min-h-[400px] w-full px-4 py-3 focus:outline-none prose prose-sm max-w-none text-foreground",
      },
    },
  });

  useEffect(() => {
    if (editor && content && editor.isEmpty) {
      editor.commands.setContent(content);
    }
  }, [editor, content]);

  if (!editor) return null;

  const toolbarBtn = (active: boolean, onClick: () => void, title: string, children: React.ReactNode) => (
    <button
      type="button"
      title={title}
      onClick={onClick}
      className={`p-1.5 rounded transition-colors ${
        active
          ? "bg-primary text-primary-foreground"
          : "text-muted-foreground hover:text-foreground hover:bg-muted"
      }`}
    >
      {children}
    </button>
  );

  return (
    <div className="rounded-md border border-input bg-background overflow-hidden">
      {/* Toolbar */}
      <div className="flex flex-wrap gap-0.5 p-2 border-b border-input bg-muted/30">
        {toolbarBtn(editor.isActive("heading", { level: 2 }), () => editor.chain().focus().toggleHeading({ level: 2 }).run(), "제목 2", <Heading2 className="w-4 h-4" />)}
        {toolbarBtn(editor.isActive("heading", { level: 3 }), () => editor.chain().focus().toggleHeading({ level: 3 }).run(), "제목 3", <Heading3 className="w-4 h-4" />)}

        <div className="w-px h-6 bg-border mx-1 self-center" />

        {toolbarBtn(editor.isActive("bold"), () => editor.chain().focus().toggleBold().run(), "굵게", <Bold className="w-4 h-4" />)}
        {toolbarBtn(editor.isActive("italic"), () => editor.chain().focus().toggleItalic().run(), "기울임", <Italic className="w-4 h-4" />)}
        {toolbarBtn(editor.isActive("strike"), () => editor.chain().focus().toggleStrike().run(), "취소선", <Strikethrough className="w-4 h-4" />)}
        {toolbarBtn(editor.isActive("code"), () => editor.chain().focus().toggleCode().run(), "인라인 코드", <Code className="w-4 h-4" />)}

        <div className="w-px h-6 bg-border mx-1 self-center" />

        {toolbarBtn(editor.isActive("bulletList"), () => editor.chain().focus().toggleBulletList().run(), "목록", <List className="w-4 h-4" />)}
        {toolbarBtn(editor.isActive("orderedList"), () => editor.chain().focus().toggleOrderedList().run(), "번호 목록", <ListOrdered className="w-4 h-4" />)}
        {toolbarBtn(editor.isActive("blockquote"), () => editor.chain().focus().toggleBlockquote().run(), "인용", <Quote className="w-4 h-4" />)}

        <div className="w-px h-6 bg-border mx-1 self-center" />

        {toolbarBtn(false, () => editor.chain().focus().undo().run(), "실행 취소", <Undo className="w-4 h-4" />)}
        {toolbarBtn(false, () => editor.chain().focus().redo().run(), "다시 실행", <Redo className="w-4 h-4" />)}
      </div>

      {/* Editor content */}
      <EditorContent editor={editor} />
    </div>
  );
}
