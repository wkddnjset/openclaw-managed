import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "도입 문의",
  description:
    "오픈클로(OpenClaw) Managed AI 에이전트 도입 문의. 무료 컨설팅을 신청하세요.",
};

export default function ContactPage() {
  return (
    <div className="fixed inset-0 w-full h-full">
      <iframe
        src="https://www.pluuug.com/form/ci5GlIUYkv"
        className="w-full h-full border-0"
        allow="clipboard-write"
        title="오픈클로 Managed 도입 문의"
      />
    </div>
  );
}
