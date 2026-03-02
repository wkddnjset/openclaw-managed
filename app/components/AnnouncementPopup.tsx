"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

export function AnnouncementPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem("announcement_dismissed");
    if (!dismissed) {
      setIsVisible(true);
    }
  }, []);

  function dismiss() {
    sessionStorage.setItem("announcement_dismissed", "1");
    setIsVisible(false);
  }

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-md rounded-xl border bg-card text-card-foreground shadow-lg p-8">
        <button
          onClick={dismiss}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="닫기"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
            <span className="text-2xl">📬</span>
          </div>
          <h2 className="text-lg font-semibold mb-2">안내</h2>
          <p className="text-muted-foreground text-sm leading-relaxed mb-6">
            현재 문의가 많아 남겨주시면 순차적으로 연락드리겠습니다.
            <br />
            빠른 시일 내에 답변 드리겠습니다.
          </p>
          <button
            onClick={dismiss}
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-6 py-2"
          >
            확인했습니다
          </button>
        </div>
      </div>
    </div>
  );
}
