import {
  Cpu,
  ArrowRight,
  Slack,
  MessageCircle,
  MessageSquare,
  Send,
  MessageCircleCode,
  XCircle,
  Users,
  Server,
  RefreshCcw,
  TerminalSquare,
  Globe,
  Blocks,
  Sparkles,
  ShieldCheck,
  Lock,
  ShieldAlert,
  Trash2,
  Github,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import { ContactForm } from "./components/ContactForm";
import { AnnouncementPopup } from "./components/AnnouncementPopup";

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
  brand: {
    "@type": "Brand",
    name: "OpenClaw Managed",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AnnouncementPopup />
      {/* Navigation (shadcn topbar style) */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-14 items-center justify-between">
            <div className="flex items-center gap-2 font-semibold">
              <div className="bg-primary text-primary-foreground p-1 rounded-md">
                <Cpu className="w-5 h-5" />
              </div>
              <span>
                OpenClaw<span className="text-muted-foreground font-normal">.managed</span>
              </span>
            </div>
            <nav className="flex items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4 py-2"
              >
                도입 문의
              </a>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-24 pb-32 lg:pt-36 lg:pb-40 border-b border-border">
          <div className="absolute inset-0 bg-grid-pattern z-0 pointer-events-none" />
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
            <div className="inline-flex items-center rounded-full border border-border bg-background px-2.5 py-0.5 text-xs font-semibold text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 mb-8 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2 animate-pulse" />
              최신 OpenClaw 완벽 지원
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 max-w-4xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-900 to-zinc-500">
                OpenClaw
              </span>
              를 통해
              <br />
              나만의 AI 비서를 만드세요
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl font-medium">
              월 9만원으로 구독하는 나만의 독립된 AI 에이전트.
              <br className="hidden sm:block" />
              복잡한 세팅 없이 원하는 업무용 메신저와 즉시 연동됩니다.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 py-2"
              >
                에이전트 구축하기
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
              <a
                href="#features"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 px-8 py-2"
              >
                어떤 일을 할 수 있나요?
              </a>
            </div>

            <div className="mt-20 pt-10 flex flex-col items-center border-t border-border/50 w-full max-w-3xl">
              <p className="text-sm font-medium text-muted-foreground mb-6">
                다음 채널들과 완벽하게 연동됩니다
              </p>
              <div className="flex flex-wrap justify-center gap-6 sm:gap-10 text-muted-foreground">
                <div className="flex items-center gap-2 hover:text-foreground transition-colors">
                  <Slack className="w-5 h-5" /> <span className="font-medium text-sm">Slack</span>
                </div>
                <div className="flex items-center gap-2 hover:text-foreground transition-colors">
                  <MessageCircle className="w-5 h-5" />{" "}
                  <span className="font-medium text-sm">Line</span>
                </div>
                <div className="flex items-center gap-2 hover:text-foreground transition-colors">
                  <MessageSquare className="w-5 h-5" />{" "}
                  <span className="font-medium text-sm">Discord</span>
                </div>
                <div className="flex items-center gap-2 hover:text-foreground transition-colors">
                  <Send className="w-5 h-5" />{" "}
                  <span className="font-medium text-sm">Telegram</span>
                </div>
                <div className="flex items-center gap-2 hover:text-foreground transition-colors">
                  <MessageCircleCode className="w-5 h-5" />{" "}
                  <span className="font-medium text-sm">Google Chat</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem & Value Prop Section */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-4">
                  아직도 비용을 낭비하고 계신가요?
                </h2>
                <p className="text-muted-foreground text-lg mb-8">
                  로컬 AI 구동을 위한 맥미니 구매, 복잡한 환경 설정, 그리고 계속 늘어나는 구독료.
                  이제 비효율적인 리소스 낭비를 멈출 때입니다.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <XCircle className="w-5 h-5 text-destructive shrink-0" />
                    <span>초기 하드웨어 구매 비용 및 유지보수 부담</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <XCircle className="w-5 h-5 text-destructive shrink-0" />
                    <span>개별 AI 서비스 다중 구독으로 인한 고정비 증가</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <XCircle className="w-5 h-5 text-destructive shrink-0" />
                    <span>직접 코드를 짜고 업데이트를 관리해야 하는 피로감</span>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border bg-card text-card-foreground shadow-sm overflow-hidden">
                <div className="flex flex-col space-y-1.5 p-6 border-b border-border bg-muted/20">
                  <h3 className="font-semibold leading-none tracking-tight text-xl">
                    월 9만원의 혁신
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    에이전트 팀 구축부터 관리까지 한 번에
                  </p>
                </div>
                <div className="p-6 space-y-6">
                  <div className="flex gap-4">
                    <div className="mt-1 bg-primary/10 p-2 rounded-md h-fit text-primary shrink-0">
                      <Users className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">나만의 AI 팀 빌딩</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        목적에 맞는 여러 에이전트를 생성하여 팀처럼 구성하고 활용할 수 있습니다.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="mt-1 bg-primary/10 p-2 rounded-md h-fit text-primary shrink-0">
                      <Server className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">워크스페이스 당 8GB RAM 제공</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        무거운 리서치나 코드 실행 작업도 쾌적하게 처리할 수 있는 전용 자원을
                        할당합니다.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="mt-1 bg-primary/10 p-2 rounded-md h-fit text-primary shrink-0">
                      <RefreshCcw className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">최신 업데이트 완전 관리</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        복잡한 버전업, 종속성 문제, 오류 수정 등 모든 관리를 저희가 책임집니다.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features (Skills) */}
        <section id="features" className="py-24 border-t border-border bg-background">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight mb-4">어떤 걸 할 수 있나요?</h2>
              <p className="text-muted-foreground text-lg">
                OpenClaw가 기본 제공하는 수십 개의 스킬(Skill)들을 자유롭게 활용하세요. 지시에
                따라 즉시 실행하는 진짜 &apos;비서&apos;가 생깁니다.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="rounded-xl border bg-card text-card-foreground shadow-sm p-6 hover:shadow-md transition-shadow">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                  <TerminalSquare className="w-5 h-5 text-foreground" />
                </div>
                <h3 className="font-semibold mb-2">로컬 파일 & 셸 제어</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  할당된 워크스페이스 내에서 셸 스크립트를 실행하고, 파일을 자유롭게 읽고 쓰며 코드를
                  테스트합니다.
                </p>
              </div>
              <div className="rounded-xl border bg-card text-card-foreground shadow-sm p-6 hover:shadow-md transition-shadow">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                  <Globe className="w-5 h-5 text-foreground" />
                </div>
                <h3 className="font-semibold mb-2">웹 리서치 자동화</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  브라우저를 열어 최신 뉴스와 문서를 수집하고, 분석된 요약 보고서를 연동된 메신저로
                  즉시 전송합니다.
                </p>
              </div>
              <div className="rounded-xl border bg-card text-card-foreground shadow-sm p-6 hover:shadow-md transition-shadow">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                  <Blocks className="w-5 h-5 text-foreground" />
                </div>
                <h3 className="font-semibold mb-2">API 및 워크플로우 연동</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  이메일 발송, 캘린더 등록, DB 조회 등 외부 API와 결합하여 반복적인 사내 업무를
                  자동화합니다.
                </p>
              </div>
            </div>

            <div className="mt-12 rounded-xl border border-zinc-800 bg-zinc-950 text-zinc-50 shadow-2xl overflow-hidden relative">
              <div className="absolute inset-0 bg-grid-pattern-dark pointer-events-none opacity-20" />
              <div className="flex items-center px-4 py-3 border-b border-zinc-800 bg-zinc-900/50">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="mx-auto flex items-center gap-2 text-xs text-zinc-400 font-mono">
                  <Sparkles className="w-3 h-3" /> 대화형 스킬 자동 생성
                </div>
              </div>
              <div className="p-6 md:p-8 lg:p-10 relative z-10 grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <h3 className="text-2xl font-bold tracking-tight mb-4">
                    &quot;이런 기능도 가능한가요?&quot;
                  </h3>
                  <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                    필요한 기능이 목록에 없더라도 문제없습니다. 메신저에서 에이전트에게 원하는
                    기능을 설명하세요. <br />
                    <br />
                    에이전트가 요구사항을 분석하여{" "}
                    <strong>직접 파이썬 코드를 작성하고 새로운 Skill을 생성</strong>하여 즉시 업무에
                    투입합니다.
                  </p>
                </div>
                <div className="font-mono text-sm space-y-4 bg-zinc-900/80 p-5 rounded-lg border border-zinc-800">
                  <div className="flex gap-3">
                    <span className="text-blue-400 shrink-0">User:</span>
                    <span className="text-zinc-300">
                      매일 아침 네이버 금융에서 환율 긁어오는 스킬 만들어줘.
                    </span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-green-400 shrink-0">Agent:</span>
                    <span className="text-zinc-300">
                      네, 환율 정보를 크롤링하는{" "}
                      <span className="text-yellow-300">currency_skill.py</span>를 작성하여
                      워크스페이스에 등록했습니다. 지금 바로 실행해볼까요?
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-24 border-t border-border bg-muted/30">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight mb-4">실제 구축 사례</h2>
              <p className="text-muted-foreground text-lg">
                OpenClaw Managed로 이미 시작한 팀들의 이야기입니다.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {/* Case 1 */}
              <div className="rounded-xl border bg-card text-card-foreground shadow-sm overflow-hidden flex flex-col">
                <div className="p-6 border-b border-border bg-muted/20">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-blue-100 text-blue-700 shrink-0">
                      <Blocks className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
                      콘텐츠 마케팅
                    </span>
                  </div>
                  <h3 className="font-semibold text-lg leading-tight">
                    콘텐츠 마케팅 에이전시 팀 AI
                  </h3>
                </div>
                <div className="p-6 flex-1 flex flex-col gap-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    영업, 마케팅, 기술 등을 담당하는 <strong className="text-foreground">6개 AI 에이전트</strong>로 구성한
                    자율 실행 팀입니다. 슬랙으로 연동해 실제 고객을 발굴하고, 프로젝트 실행까지
                    자동으로 진행합니다.
                  </p>
                  <div className="mt-auto space-y-2">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <MessageSquare className="w-3.5 h-3.5 shrink-0" />
                      <span>Slack 연동</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Users className="w-3.5 h-3.5 shrink-0" />
                      <span>6개 역할 분리 에이전트 운영</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Case 2 */}
              <div className="rounded-xl border bg-card text-card-foreground shadow-sm overflow-hidden flex flex-col">
                <div className="p-6 border-b border-border bg-muted/20">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700 shrink-0">
                      <RefreshCcw className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
                      투자 자동화
                    </span>
                  </div>
                  <h3 className="font-semibold text-lg leading-tight">
                    주식 투자 AI 에이전트
                  </h3>
                </div>
                <div className="p-6 flex-1 flex flex-col gap-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    매일 시장 데이터를 수집·분석해 <strong className="text-foreground">전략적 투자를 직접 실행</strong>하고
                    결과를 보고합니다. 포트폴리오 조정과 다양한 매매 방식을 스스로 시도하며
                    지속적으로 개선합니다.
                  </p>
                  <div className="mt-auto space-y-2">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Globe className="w-3.5 h-3.5 shrink-0" />
                      <span>실시간 데이터 수집 및 분석</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Send className="w-3.5 h-3.5 shrink-0" />
                      <span>Telegram으로 일일 결과 보고</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Case 3 */}
              <div className="rounded-xl border bg-card text-card-foreground shadow-sm overflow-hidden flex flex-col">
                <div className="p-6 border-b border-border bg-muted/20">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-purple-100 text-purple-700 shrink-0">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
                      SNS 자동화
                    </span>
                  </div>
                  <h3 className="font-semibold text-lg leading-tight">
                    AI 인플루언서
                  </h3>
                </div>
                <div className="p-6 flex-1 flex flex-col gap-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    영상을 기획하고 <strong className="text-foreground">직접 편집·발행</strong>하는 것까지 자동으로
                    진행합니다. 여러 SNS 채널을 동시에 관리하며 콘텐츠 파이프라인 전체를
                    운영합니다.
                  </p>
                  <div className="mt-auto space-y-2">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <TerminalSquare className="w-3.5 h-3.5 shrink-0" />
                      <span>영상 편집 자동화</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <MessageSquare className="w-3.5 h-3.5 shrink-0" />
                      <span>다채널 SNS 동시 관리</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Security */}
        <section className="py-24 border-t border-border bg-background">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="w-full lg:w-1/2 order-2 lg:order-1 relative">
                <div className="aspect-video w-full rounded-xl overflow-hidden border border-border shadow-sm bg-background relative">
                  <Image
                    src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800&h=600"
                    alt="서버 룸"
                    fill
                    className="object-cover opacity-90 grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div className="absolute -bottom-6 -right-4 md:-right-6 bg-background p-4 rounded-xl border border-border shadow-lg flex items-center gap-3">
                  <div className="bg-emerald-100 text-emerald-700 p-2 rounded-md">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div className="pr-2">
                    <p className="text-sm font-semibold text-foreground">베어메탈 환경</p>
                    <p className="text-xs text-muted-foreground">100% 격리된 독립 인프라</p>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-1/2 order-1 lg:order-2">
                <h2 className="text-3xl font-bold tracking-tight mb-4">
                  데이터 보안,
                  <br />
                  클라우드에 맡기지 마세요.
                </h2>
                <p className="text-muted-foreground text-lg mb-8">
                  AI 에이전트의 강력한 파일/셸 제어 권한 때문에 정보 유출이 걱정되시나요? 저희는
                  공용 퍼블릭 클라우드를 사용하지 않습니다.
                </p>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <Lock className="w-6 h-6 text-primary shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">직접 관리하는 하드웨어</h4>
                      <p className="text-sm text-muted-foreground">
                        철저히 격리된 자체 베어메탈 서버 환경을 구축하여 외부의 위협으로부터 인프라를
                        직접 통제합니다.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <ShieldAlert className="w-6 h-6 text-primary shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">비인가 스킬 차단</h4>
                      <p className="text-sm text-muted-foreground">
                        검증되지 않은 외부 접근이나 악의적인 프롬프트 인젝션을 원천 차단하는 보안
                        시스템이 적용되어 있습니다.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Trash2 className="w-6 h-6 text-primary shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">샌드박스 초기화</h4>
                      <p className="text-sm text-muted-foreground">
                        작업이 끝난 샌드박스와 민감한 임시 데이터는 즉시, 그리고 완벽하게
                        파기됩니다.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA & Contact Form */}
        <section id="contact" className="py-24 border-t border-border bg-background">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">도입이 망설여지시나요?</h2>
              <p className="text-muted-foreground text-lg">
                개발 지식이 없어도 괜찮습니다. 고객님의 업무 환경에 딱 맞는<br />에이전트 활용법을{" "}
                <strong>컨설팅</strong>해 드리고 있습니다.
              </p>
            </div>

            <ContactForm />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-background py-8">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 font-semibold">
            <Cpu className="w-5 h-5 text-muted-foreground" />
            <span className="text-muted-foreground">OpenClaw.managed</span>
          </div>
          <p className="text-sm text-muted-foreground">
            &copy; 2026 OpenClaw Managed Service. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
