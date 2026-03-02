"use client";

import { Cpu, Lock } from "lucide-react";
import { login } from "@/app/actions/auth";
import { useActionState } from "react";

const initialState = { error: "" };

export default function LoginPage() {
  const [state, formAction, isPending] = useActionState(login, initialState);

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30">
      <div className="w-full max-w-sm">
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="bg-primary text-primary-foreground p-1.5 rounded-md">
            <Cpu className="w-5 h-5" />
          </div>
          <span className="font-semibold text-lg">OpenClaw Admin</span>
        </div>

        <div className="rounded-xl border bg-card shadow-sm">
          <div className="p-6 border-b border-border">
            <h1 className="font-semibold text-lg">관리자 로그인</h1>
            <p className="text-sm text-muted-foreground mt-1">어드민 패널에 접근하려면 비밀번호를 입력하세요.</p>
          </div>
          <form action={formAction} className="p-6 space-y-4">
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium">
                비밀번호
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-2.5 w-4 h-4 text-muted-foreground" />
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoFocus
                  className="flex h-10 w-full rounded-md border border-input bg-background pl-9 pr-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  placeholder="비밀번호 입력"
                />
              </div>
            </div>

            {state?.error && (
              <p className="text-sm text-destructive">{state.error}</p>
            )}

            <button
              type="submit"
              disabled={isPending}
              className="inline-flex items-center justify-center rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full disabled:opacity-50 transition-colors"
            >
              {isPending ? "로그인 중..." : "로그인"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
