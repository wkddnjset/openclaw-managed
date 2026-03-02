export const dynamic = "force-dynamic";

import { db } from "@/lib/db";
import { Mail } from "lucide-react";
import { InquiryActions } from "@/app/components/InquiryActions";

export default async function InquiriesPage() {
  const inquiries = await db.inquiry.findMany({ orderBy: { createdAt: "desc" } });
  const unreadCount = inquiries.filter((i) => !i.read).length;

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold tracking-tight">문의 관리</h1>
        <p className="text-sm text-muted-foreground mt-1">
          총 {inquiries.length}개 ({unreadCount}개 미읽음)
        </p>
      </div>

      {inquiries.length === 0 ? (
        <div className="rounded-xl border border-dashed border-border bg-card p-16 text-center">
          <Mail className="w-8 h-8 text-muted-foreground mx-auto mb-3" />
          <p className="text-muted-foreground text-sm">아직 접수된 문의가 없습니다.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {inquiries.map((inquiry) => (
            <div
              key={inquiry.id}
              className={`rounded-xl border bg-card p-5 transition-colors ${
                !inquiry.read ? "border-primary/30 bg-primary/5" : ""
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <span className="font-semibold text-sm">{inquiry.name}</span>
                    <span className="text-muted-foreground text-xs">·</span>
                    <span className="text-sm text-muted-foreground">{inquiry.phone}</span>
                    {inquiry.email && (
                      <>
                        <span className="text-muted-foreground text-xs">·</span>
                        <span className="text-sm text-muted-foreground">{inquiry.email}</span>
                      </>
                    )}
                    <span className="inline-flex items-center rounded-full bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground">
                      {inquiry.messenger}
                    </span>
                    {!inquiry.read && (
                      <span className="inline-flex items-center rounded-full bg-blue-100 text-blue-700 px-2 py-0.5 text-xs font-medium">
                        새 문의
                      </span>
                    )}
                  </div>
                  {inquiry.message ? (
                    <p className="text-sm text-foreground leading-relaxed">{inquiry.message}</p>
                  ) : (
                    <p className="text-sm text-muted-foreground italic">메시지 없음</p>
                  )}
                  <p className="text-xs text-muted-foreground mt-2">
                    {new Date(inquiry.createdAt).toLocaleString("ko-KR")}
                  </p>
                </div>
                <InquiryActions id={inquiry.id} read={inquiry.read} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
