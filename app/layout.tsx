import type { Metadata } from "next";
import { Inter, Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const notoSansKr = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "OpenClaw Managed - 나만의 AI 에이전트 팀",
  description:
    "월 9만원으로 구독하는 나만의 독립된 AI 에이전트. 복잡한 세팅 없이 원하는 업무용 메신저와 즉시 연동됩니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${inter.variable} ${notoSansKr.variable} antialiased min-h-screen flex flex-col bg-background text-foreground font-sans`}>
        {children}
      </body>
    </html>
  );
}
