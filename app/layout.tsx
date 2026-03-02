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

const siteUrl = "https://openclaw.kr";

export const metadata: Metadata = {
  title: {
    default: "오픈클로 (OpenClaw) Managed — AI 에이전트 구독 서비스 | 월 99,000원",
    template: "%s | 오픈클로 Managed",
  },
  description:
    "오픈클로(OpenClaw) Managed는 월 99,000원으로 나만의 AI 에이전트 팀을 구독하는 완전 관리형 서비스입니다. 슬랙·텔레그램·디스코드 연동, 세팅 없이 바로 사용, AI 업무 자동화를 지금 시작하세요.",
  keywords: [
    "AI 에이전트",
    "오픈클로",
    "OpenClaw",
    "AI 비서",
    "업무 자동화",
    "AI 구독 서비스",
    "슬랙 AI",
    "텔레그램 봇",
    "AI 에이전트 팀",
    "월구독 AI",
    "AI 자동화",
    "OpenClaw Managed",
  ],
  authors: [{ name: "오픈클로 Managed" }],
  creator: "OpenClaw Managed",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: siteUrl,
    siteName: "오픈클로 (OpenClaw) Managed",
    title: "오픈클로 (OpenClaw) Managed — AI 에이전트 구독 서비스",
    description:
      "세팅 없이 바로 시작하는 나만의 AI 에이전트. 슬랙·텔레그램 등 메신저와 즉시 연동, 월 99,000원 단일 요금.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "오픈클로 Managed - AI 에이전트 구독 서비스",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "오픈클로 (OpenClaw) Managed — AI 에이전트 구독 서비스",
    description:
      "세팅 없이 바로 시작하는 나만의 AI 에이전트. 슬랙·텔레그램 등 메신저와 즉시 연동, 월 99,000원 단일 요금.",
    images: ["/og-image.png"],
  },
  verification: {
    other: {
      "naver-site-verification": "992dc57edb6b8c13e63de6d07a6c352f1eb01c68",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
