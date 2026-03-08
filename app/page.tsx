import Image from "next/image";
import { RevealSection } from "./components/RevealSection";
import { HeroTerminal } from "./components/HeroTerminal";
import { ArrowRight, XCircle } from "lucide-react";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "오픈클로 (OpenClaw) Managed",
  description:
    "월 99,000원으로 구독하는 완전 관리형 AI 에이전트 서비스. 슬랙·텔레그램·디스코드 연동, 세팅 없이 바로 사용 가능.",
  offers: {
    "@type": "Offer",
    price: "99000",
    priceCurrency: "KRW",
    priceValidUntil: "2026-12-31",
    availability: "https://schema.org/InStock",
  },
  brand: { "@type": "Brand", name: "OpenClaw Managed" },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ─────────────────────────────────────────────────────────
          HEADER
      ───────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex h-14 items-center justify-between">
          <div className="font-mono text-sm text-white flex items-center gap-2">
            <span className="text-zinc-600">//</span>
            <span>OpenClaw</span>
            <span className="text-zinc-600">.managed</span>
          </div>
          <nav className="flex items-center gap-6">
            <a href="#features" className="hidden sm:block text-sm text-zinc-500 hover:text-white font-mono transition-colors">
              기능
            </a>
            <a href="#cases" className="hidden sm:block text-sm text-zinc-500 hover:text-white font-mono transition-colors">
              사례
            </a>
            <a
              href="/contact"
              className="shimmer-btn font-mono text-sm bg-white text-zinc-950 font-semibold px-4 py-1.5 rounded-md hover:bg-zinc-100 transition-colors"
            >
              도입 문의 →
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-1">

        {/* ─────────────────────────────────────────────────────────
            HERO
        ───────────────────────────────────────────────────────── */}
        <section className="relative bg-[#0a0a0a] overflow-hidden pt-28 pb-0">
          <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />
          <div className="orb orb-1 top-[-80px] left-[-80px] opacity-50 pointer-events-none" />
          <div className="orb orb-2 top-[30%] right-[-120px] opacity-35 pointer-events-none" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center pb-24">

              {/* Left */}
              <div>
                <div className="animate-fade-in inline-flex items-center gap-2 font-mono text-xs text-zinc-500 border border-zinc-800 px-3 py-1.5 rounded mb-10">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
                  AI 에이전트 구독 서비스 — OpenClaw Managed
                </div>

                <h1 className="animate-fade-in delay-100 text-5xl lg:text-6xl font-bold text-white leading-[1.08] tracking-tight mb-6">
                  나만의 AI 팀을<br />
                  <span className="gradient-text">구독하세요</span>
                </h1>

                <p className="animate-fade-in delay-200 text-zinc-400 text-lg leading-relaxed mb-10 max-w-lg">
                  월 <span className="text-white font-semibold">99,000원</span>.
                  세팅 없이 바로 시작하는 독립된 AI 에이전트.<br />
                  원하는 메신저와 즉시 연동됩니다.
                </p>

                <div className="animate-fade-in delay-300 flex flex-col sm:flex-row gap-3">
                  <a
                    href="/contact"
                    className="shimmer-btn group inline-flex items-center justify-center gap-2 bg-white text-zinc-950 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-zinc-100 transition-all shadow-xl shadow-white/10 hover:-translate-y-0.5"
                  >
                    에이전트 구축 시작하기
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                  <a
                    href="#features"
                    className="inline-flex items-center justify-center gap-2 border border-zinc-800 text-zinc-300 text-sm px-6 py-3 rounded-lg hover:border-zinc-600 hover:text-white transition-all"
                  >
                    어떤 일을 할 수 있나요?
                  </a>
                </div>
              </div>

              {/* Right — Terminal */}
              <div className="animate-fade-in delay-400">
                <HeroTerminal />
              </div>
            </div>
          </div>

          {/* Messenger strip */}
          <div className="relative z-10 border-t border-white/[0.06] bg-zinc-950/60">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex flex-wrap items-center gap-4 sm:gap-8">
              <span className="font-mono text-[10px] text-zinc-600 uppercase tracking-widest">연동 채널</span>
              {["Slack", "Discord", "Telegram", "Line", "Google Chat"].map((name) => (
                <span
                  key={name}
                  className="font-mono text-sm text-zinc-500 hover:text-zinc-300 transition-colors cursor-default"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────
            FEATURE GRID
        ───────────────────────────────────────────────────────── */}
        <section id="features" className="bg-[#0f0f0f] border-t border-white/[0.05] scroll-mt-14">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
            <RevealSection className="mb-14">
              <p className="font-mono text-[10px] text-zinc-600 uppercase tracking-widest mb-3">// 핵심 기능</p>
              <h2 className="text-2xl font-bold text-white">어떤 일을 할 수 있나요?</h2>
            </RevealSection>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 border border-zinc-800/60 rounded-xl overflow-hidden">
              {[
                {
                  n: "01",
                  title: "로컬 파일\n& 셸 제어",
                  desc: "워크스페이스 내에서 셸 스크립트를 실행하고, 파일을 자유롭게 읽고 쓰며 코드를 테스트합니다.",
                },
                {
                  n: "02",
                  title: "웹 리서치\n자동화",
                  desc: "브라우저를 열어 최신 뉴스와 문서를 수집하고, 분석된 보고서를 메신저로 즉시 전송합니다.",
                },
                {
                  n: "03",
                  title: "API & 워크플로우\n연동",
                  desc: "이메일 발송, 캘린더 등록, DB 조회 등 외부 API와 결합하여 반복 업무를 자동화합니다.",
                },
                {
                  n: "04",
                  title: "커스텀 스킬\n자동 생성",
                  desc: "메신저에서 원하는 기능을 말하면 에이전트가 직접 파이썬 코드를 작성해 즉시 배포합니다.",
                },
              ].map((f, i) => (
                <RevealSection
                  key={f.n}
                  delay={i * 80}
                  className={`p-8 ${i > 0 ? "border-l border-zinc-800/60" : ""}`}
                >
                  <span className="font-mono text-xs text-zinc-700 block mb-6">{f.n}</span>
                  <h3 className="text-white font-semibold text-base mb-3 whitespace-pre-line leading-snug">
                    {f.title}
                  </h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{f.desc}</p>
                </RevealSection>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────
            STATS
        ───────────────────────────────────────────────────────── */}
        <section className="bg-white border-t border-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
              {[
                { value: "₩99,000", label: "월 단일 요금" },
                { value: "8 GB", label: "전용 RAM 할당" },
                { value: "5개+", label: "메신저 즉시 연동" },
                { value: "24 / 7", label: "완전 자동 운영" },
              ].map((s) => (
                <RevealSection key={s.value} className="py-10 px-8 text-center">
                  <p className="font-mono text-2xl md:text-3xl font-bold text-zinc-900 number-highlight">
                    {s.value}
                  </p>
                  <p className="text-xs text-zinc-500 mt-1.5 font-medium">{s.label}</p>
                </RevealSection>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────
            PROBLEM / VALUE
        ───────────────────────────────────────────────────────── */}
        <section className="py-28 bg-zinc-50 border-t border-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-20 items-start">

              <RevealSection direction="left">
                <p className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest mb-4">
                  // 문제 인식
                </p>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 mb-5 leading-tight">
                  아직도 이런 비용을<br />낭비하고 계신가요?
                </h2>
                <p className="text-zinc-500 text-base leading-relaxed mb-10">
                  맥미니 구매, 복잡한 환경 설정, 계속 늘어나는 구독료.<br />
                  비효율적인 낭비를 멈출 때입니다.
                </p>
                <div className="space-y-4">
                  {[
                    "초기 하드웨어 구매 비용 및 유지보수 부담",
                    "개별 AI 서비스 다중 구독으로 인한 고정비 증가",
                    "직접 코드를 짜고 업데이트를 관리해야 하는 피로감",
                  ].map((t) => (
                    <div key={t} className="flex items-start gap-3">
                      <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                      <span className="text-zinc-600 text-sm leading-relaxed">{t}</span>
                    </div>
                  ))}
                </div>
              </RevealSection>

              <RevealSection direction="right" delay={120}>
                <p className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest mb-4">
                  // 솔루션
                </p>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 mb-5 leading-tight">
                  월 99,000원으로<br />해결하세요
                </h2>
                <div className="space-y-6">
                  {[
                    {
                      title: "나만의 AI 팀 빌딩",
                      desc: "목적별 여러 에이전트를 생성해 팀처럼 구성하고 활용할 수 있습니다.",
                    },
                    {
                      title: "워크스페이스 당 8GB RAM",
                      desc: "무거운 리서치나 코드 실행도 쾌적하게 처리하는 전용 자원을 할당합니다.",
                    },
                    {
                      title: "최신 업데이트 완전 관리",
                      desc: "버전업, 종속성, 오류 수정 등 모든 관리를 저희가 책임집니다.",
                    },
                  ].map((item, i) => (
                    <div key={item.title} className="flex gap-5">
                      <div className="font-mono text-[10px] text-zinc-400 pt-1 shrink-0 w-6">
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      <div>
                        <h4 className="font-semibold text-zinc-900 text-sm mb-1">{item.title}</h4>
                        <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </RevealSection>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────
            CASE STUDIES
        ───────────────────────────────────────────────────────── */}
        <section id="cases" className="py-28 bg-white border-t border-border scroll-mt-14">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <RevealSection className="mb-16">
              <p className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest mb-3">
                // 구축 사례
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 mb-4">
                실제 구축 사례
              </h2>
              <p className="text-zinc-500 text-base max-w-lg">
                OpenClaw Managed로 이미 시작한 팀들의 이야기입니다.
              </p>
            </RevealSection>

            <div className="grid lg:grid-cols-3 border border-border rounded-xl overflow-hidden">
              {[
                {
                  n: "01",
                  category: "콘텐츠 마케팅",
                  title: "콘텐츠 마케팅 에이전시 팀 AI",
                  desc: "영업·마케팅·기술 역할을 담당하는 6개 AI 에이전트로 구성한 자율 실행 팀. 슬랙으로 연동해 고객 발굴부터 프로젝트 실행까지 자동화합니다.",
                  tags: ["Slack 연동", "6 에이전트"],
                  delay: 0,
                },
                {
                  n: "02",
                  category: "투자 자동화",
                  title: "주식 투자 AI 에이전트",
                  desc: "매일 시장 데이터를 수집·분석해 전략적 투자를 직접 실행하고 결과를 보고합니다. 포트폴리오 조정과 다양한 매매 방식을 스스로 시도하며 개선합니다.",
                  tags: ["실시간 분석", "Telegram 보고"],
                  delay: 100,
                },
                {
                  n: "03",
                  category: "SNS 자동화",
                  title: "AI 인플루언서",
                  desc: "영상을 기획하고 직접 편집·발행하는 것까지 자동으로 진행합니다. 여러 SNS 채널을 동시에 관리하며 콘텐츠 파이프라인 전체를 운영합니다.",
                  tags: ["영상 자동화", "다채널 관리"],
                  delay: 200,
                },
              ].map((c, i) => (
                <RevealSection
                  key={c.n}
                  delay={c.delay}
                  className={`p-8 flex flex-col gap-6 ${i > 0 ? "border-l border-border" : ""}`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] text-zinc-400">{c.n}</span>
                    <span className="font-mono text-[10px] text-zinc-400 border border-zinc-200 px-2 py-0.5 rounded">
                      {c.category}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-bold text-zinc-900 text-base mb-3 leading-snug">{c.title}</h3>
                    <p className="text-zinc-500 text-sm leading-relaxed">{c.desc}</p>
                  </div>
                  <div className="mt-auto flex gap-2 flex-wrap">
                    {c.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] font-mono text-zinc-500 bg-zinc-100 px-2.5 py-1 rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </RevealSection>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────
            SECURITY
        ───────────────────────────────────────────────────────── */}
        <section className="py-28 bg-zinc-50 border-t border-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-20 items-center">

              <RevealSection direction="left" className="order-2 lg:order-1">
                <div className="relative">
                  <div className="aspect-video rounded-2xl overflow-hidden border border-border shadow-xl group">
                    <Image
                      src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800&h=600"
                      alt="서버 룸"
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 opacity-80 group-hover:opacity-100"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-white border border-border shadow-lg rounded-xl px-4 py-3 animate-float">
                    <p className="text-sm font-semibold text-zinc-900">베어메탈 환경</p>
                    <p className="text-xs text-zinc-500">100% 격리된 독립 인프라</p>
                  </div>
                </div>
              </RevealSection>

              <RevealSection direction="right" delay={120} className="order-1 lg:order-2">
                <p className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest mb-4">
                  // 보안
                </p>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 mb-5 leading-tight">
                  데이터 보안,<br />클라우드에 맡기지 마세요.
                </h2>
                <p className="text-zinc-500 text-base leading-relaxed mb-10">
                  AI 에이전트의 강력한 파일/셸 제어 권한이 걱정되시나요?<br />
                  저희는 공용 퍼블릭 클라우드를 사용하지 않습니다.
                </p>
                <div className="space-y-6">
                  {[
                    {
                      title: "직접 관리하는 하드웨어",
                      desc: "철저히 격리된 자체 베어메탈 서버 환경을 구축하여 외부 위협으로부터 인프라를 직접 통제합니다.",
                    },
                    {
                      title: "비인가 스킬 차단",
                      desc: "검증되지 않은 외부 접근이나 악의적인 프롬프트 인젝션을 원천 차단합니다.",
                    },
                    {
                      title: "샌드박스 초기화",
                      desc: "작업이 끝난 샌드박스와 민감한 임시 데이터는 즉시, 그리고 완벽하게 파기됩니다.",
                    },
                  ].map((item, i) => (
                    <div key={item.title} className="flex gap-5">
                      <div className="font-mono text-[10px] text-zinc-400 pt-0.5 shrink-0 w-6">
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      <div>
                        <h4 className="font-semibold text-zinc-900 text-sm mb-1">{item.title}</h4>
                        <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </RevealSection>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────
            CTA
        ───────────────────────────────────────────────────────── */}
        <section className="relative bg-[#0a0a0a] overflow-hidden py-28 border-t border-white/[0.05]">
          <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
          <div className="orb orb-1 top-[-200px] right-[-100px] opacity-40 pointer-events-none" />
          <div className="orb orb-3 bottom-[-100px] left-[20%] opacity-30 pointer-events-none" />

          <RevealSection className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <p className="font-mono text-[10px] text-zinc-600 uppercase tracking-widest mb-6">
              // 무료 컨설팅
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 tracking-tight leading-tight">
              도입이 망설여지시나요?
            </h2>
            <p className="text-zinc-400 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              개발 지식이 없어도 괜찮습니다.<br />
              고객님의 업무에 딱 맞는 에이전트 활용법을{" "}
              <span className="text-white font-semibold">무료로 컨설팅</span>해 드립니다.
            </p>
            <a
              href="/contact"
              className="shimmer-btn group inline-flex items-center gap-2 bg-white text-zinc-950 font-semibold text-sm px-8 py-3.5 rounded-lg hover:bg-zinc-100 transition-all shadow-2xl shadow-white/10 hover:-translate-y-0.5"
            >
              도입 문의하기
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </RevealSection>
        </section>
      </main>

      {/* ─────────────────────────────────────────────────────────
          FOOTER
      ───────────────────────────────────────────────────────── */}
      <footer className="bg-[#0a0a0a] border-t border-white/[0.06] py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between gap-10">
            <div>
              <div className="font-mono text-sm text-white flex items-center gap-2 mb-5">
                <span className="text-zinc-600">//</span>
                <span>OpenClaw</span>
                <span className="text-zinc-600">.managed</span>
              </div>
              <div className="space-y-1.5 text-xs text-zinc-500 font-mono leading-relaxed">
                <p className="text-zinc-400">(주)똑똑한개발자 · 대표 서장원</p>
                <p>사업자등록번호 426-81-00521</p>
                <p>서울특별시 마포구 홍익로5안길 28, 5층</p>
                <a
                  href="https://toktokhan.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block hover:text-zinc-300 transition-colors underline underline-offset-2"
                >
                  toktokhan.dev
                </a>
              </div>
            </div>
            <div className="flex flex-col items-start md:items-end justify-between gap-6">
              <div className="flex gap-3">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-zinc-600 hover:text-zinc-300 border border-zinc-800 hover:border-zinc-600 px-3 py-2 rounded transition-colors"
                >
                  GitHub
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-zinc-600 hover:text-zinc-300 border border-zinc-800 hover:border-zinc-600 px-3 py-2 rounded transition-colors"
                >
                  X (Twitter)
                </a>
              </div>
              <p className="font-mono text-xs text-zinc-700">
                © 2026 (주)똑똑한개발자. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
