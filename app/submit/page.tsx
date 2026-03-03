import type { Metadata } from "next";
import { CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "문의 접수 완료",
  description: "오픈클로 Managed 도입 문의가 접수되었습니다.",
};

export default function SubmitPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-background">
      <div className="max-w-md w-full text-center">
        <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 mb-6">
          <CheckCircle className="w-8 h-8 text-emerald-600" />
        </div>

        <h1 className="text-2xl font-bold tracking-tight mb-3">
          문의가 접수되었습니다!
        </h1>
        <p className="text-muted-foreground leading-relaxed mb-8">
          현재 문의가 많아 순차적으로 연락드리고 있습니다.
          <br />
          빠른 시일 내에 답변 드리겠습니다.
        </p>

        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 py-2"
        >
          홈으로 돌아가기
          <ArrowRight className="ml-2 w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
