"use client";

import { useState, useEffect, useRef } from "react";

type MsgItem = { kind: "msg"; role: "user" | "agent"; text: string };
type SeqItem = MsgItem | { kind: "typing" };

const SEQUENCE: SeqItem[] = [
  { kind: "msg", role: "user", text: "매일 아침 뉴스 요약해서 슬랙에 보내줘" },
  { kind: "typing" },
  { kind: "msg", role: "agent", text: "news_brief.py 생성 완료\n스케줄러 등록됐습니다. ✓" },
  { kind: "msg", role: "user", text: "경쟁사 블로그도 분석해줘" },
  { kind: "typing" },
  { kind: "msg", role: "agent", text: "competitor_monitor.py 배포 완료\n실행 예정: 내일 오전 07:00 ✓" },
];

// 각 항목이 등장하는 시간 (ms)
const DELAYS = [400, 1000, 2000, 3300, 4000, 5100];
const LOOP_DELAY = 8500;

export function HeroTerminal() {
  const [count, setCount] = useState(0);
  const [loopKey, setLoopKey] = useState(0);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    DELAYS.forEach((d, i) => {
      timers.push(setTimeout(() => setCount(i + 1), d));
    });
    timers.push(
      setTimeout(() => {
        setCount(0);
        setLoopKey((k) => k + 1);
      }, LOOP_DELAY)
    );
    return () => timers.forEach(clearTimeout);
  }, [loopKey]);

  // 항상 스크롤 하단 유지
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [count]);

  const activeItems = SEQUENCE.slice(0, count);

  // typing 아이템은 중간에 남겨두지 않고, 마지막이 typing일 때만 표시
  const msgItems = activeItems.filter(
    (item): item is MsgItem => item.kind === "msg"
  );
  const isTyping = activeItems.at(-1)?.kind === "typing";

  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{
        background: "#111114",
        border: "1px solid rgba(255,255,255,0.06)",
        boxShadow:
          "0 0 0 1px rgba(255,255,255,0.03), 0 32px 64px -16px rgba(0,0,0,0.9), inset 0 1px 0 rgba(255,255,255,0.04)",
      }}
    >
      {/* ── Title bar ── */}
      <div
        className="flex items-center gap-3 px-4 py-3"
        style={{ background: "#161618", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div className="flex gap-1.5 shrink-0">
          <div className="w-3 h-3 rounded-full" style={{ background: "#ff5f56" }} />
          <div className="w-3 h-3 rounded-full" style={{ background: "#ffbd2e" }} />
          <div className="w-3 h-3 rounded-full" style={{ background: "#27c93f" }} />
        </div>
        <div className="flex-1 flex justify-center items-center gap-2">
          <span
            className="relative flex h-1.5 w-1.5"
          >
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
          </span>
          <span className="text-[11px] font-mono text-zinc-500">
            OpenClaw Agent · Slack Workspace
          </span>
        </div>
      </div>

      {/* ── Messages ── */}
      <div
        className="h-[296px] overflow-y-auto px-4 py-4 space-y-3"
        style={{ scrollbarWidth: "none" }}
      >
        {msgItems.map((item, i) => {
          const isUser = item.role === "user";
          return (
            <div
              key={`${loopKey}-${i}`}
              className={`flex flex-col gap-1 animate-fade-in ${isUser ? "items-end" : "items-start"}`}
            >
              <span
                className="text-[10px] font-mono tracking-widest px-1"
                style={{ color: isUser ? "#52525b" : "#818cf8" }}
              >
                {isUser ? "YOU" : "AGENT"}
              </span>
              <div
                className="max-w-[82%] rounded-xl text-sm font-mono whitespace-pre-line leading-relaxed px-3.5 py-2.5"
                style={
                  isUser
                    ? {
                        background: "#1e1e22",
                        color: "#d4d4d8",
                        borderRadius: "12px 12px 2px 12px",
                      }
                    : {
                        background: "rgba(99,102,241,0.12)",
                        border: "1px solid rgba(99,102,241,0.18)",
                        color: "#c7d2fe",
                        borderRadius: "12px 12px 12px 2px",
                      }
                }
              >
                {item.text}
              </div>
            </div>
          );
        })}

        {/* Typing indicator — agent bubble 스타일 동일 */}
        {isTyping && (
          <div
            key={`typing-${loopKey}`}
            className="flex flex-col gap-1 items-start animate-fade-in"
          >
            <span
              className="text-[10px] font-mono tracking-widest px-1"
              style={{ color: "#818cf8" }}
            >
              AGENT
            </span>
            <div
              className="px-4 py-3.5 rounded-xl flex items-center gap-1.5"
              style={{
                background: "rgba(99,102,241,0.12)",
                border: "1px solid rgba(99,102,241,0.18)",
                borderRadius: "12px 12px 12px 2px",
              }}
            >
              {[0, 150, 300].map((d) => (
                <div
                  key={d}
                  className="w-1.5 h-1.5 rounded-full animate-bounce"
                  style={{
                    background: "rgba(129,140,248,0.7)",
                    animationDelay: `${d}ms`,
                  }}
                />
              ))}
            </div>
          </div>
        )}

        {/* 스크롤 앵커 */}
        <div ref={bottomRef} />
      </div>

      {/* ── Input bar ── */}
      <div
        className="px-4 py-3 flex items-center gap-2.5"
        style={{ borderTop: "1px solid rgba(255,255,255,0.05)", background: "#0e0e10" }}
      >
        <div
          className="flex-1 flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-mono"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.07)",
            color: "#3f3f46",
          }}
        >
          <span style={{ color: "#27272a" }}>$</span>
          <span>에이전트에게 지시하기...</span>
        </div>
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
          style={{
            background: "rgba(99,102,241,0.15)",
            border: "1px solid rgba(99,102,241,0.25)",
            color: "#818cf8",
          }}
        >
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
            <path
              d="M6.5 11V2M2 6.5l4.5-4.5 4.5 4.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
