"use client";

import { ChevronDown } from "lucide-react";

export function ContactForm() {
  return (
    <div className="max-w-xl mx-auto rounded-xl border bg-card text-card-foreground shadow-sm">
      <form
        className="p-6 md:p-8 space-y-6"
        onSubmit={(e) => {
          e.preventDefault();
          alert("문의가 성공적으로 접수되었습니다. (UI 데모입니다)");
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              이름 / 회사명
            </label>
            <input
              id="name"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="홍길동 / (주)오픈컴퍼니"
              required
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="tel"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              연락처
            </label>
            <input
              id="tel"
              type="tel"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="010-0000-0000"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <label
            htmlFor="messenger"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            주로 사용하는 메신저
          </label>
          <div className="relative">
            <select
              id="messenger"
              className="flex h-10 w-full appearance-none rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 pr-10"
              defaultValue=""
            >
              <option value="" disabled>
                선택해주세요
              </option>
              <option>Slack</option>
              <option>Line</option>
              <option>Discord</option>
              <option>Telegram</option>
              <option>Google Chat</option>
              <option>기타 / 아직 모름</option>
            </select>
            <ChevronDown className="absolute right-3 top-3 h-4 w-4 opacity-50 pointer-events-none" />
          </div>
        </div>

        <div className="space-y-2">
          <label
            htmlFor="message"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            해결하고 싶은 업무 (선택)
          </label>
          <textarea
            id="message"
            className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="어떤 업무를 자동화하고 싶으신가요?"
          />
        </div>

        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 py-2 w-full mt-2"
        >
          무료 컨설팅 신청하기
        </button>
      </form>
    </div>
  );
}
