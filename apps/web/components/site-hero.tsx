import Image from "next/image"
import Link from "next/link"
import { MapPinIcon, SearchIcon, SparklesIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"

import heroMap from "@/app/images/hero-map.png"

const trendingRoles = [
  { label: "Product Designer", href: "/browse-jobs?role=product-designer" },
  { label: "AI Engineering", href: "/browse-jobs?role=ai-engineering" },
  { label: "Dev-ops Engineer", href: "/browse-jobs?role=dev-ops-engineer" },
]

function HeroBadge() {
  return (
    <div className="flex items-center justify-center">
      {/* Gradient hairlines flanking the pill (64px, gray -> navy) */}
      <span className="hidden h-px w-16 bg-[linear-gradient(90deg,rgba(1,1,35,0.7),rgba(168,168,168,0.7))] sm:block" />
      <div className="relative rounded-full p-px">
        {/* Conic rainbow shimmer ring */}
        <span
          aria-hidden
          className="absolute inset-0 rounded-full bg-[conic-gradient(from_140deg,#ff00ff,#0000ff,#00ffff,#00ff00,#ffff00,#ffbf00,#ff0000,#ff00ff)] opacity-70"
        />
        <div className="relative flex h-12 items-center gap-3 rounded-full bg-[linear-gradient(180deg,#474747_-169.32%,#010102_100%)] px-6 shadow-[inset_0_0_6px_6px_rgba(0,0,0,0.1)]">
          <SparklesIcon className="size-6 text-white/90" />
          <span className="font-mono text-xl whitespace-nowrap text-white">
            50,000+ new jobs this month
          </span>
        </div>
      </div>
      <span className="hidden h-px w-16 bg-[linear-gradient(270deg,rgba(1,1,35,0.7),rgba(168,168,168,0.7))] sm:block" />
    </div>
  )
}

function HeroSearch() {
  return (
    <form
      action="/browse-jobs"
      method="get"
      className="mx-auto flex w-full max-w-[784px] flex-col gap-2 rounded-2xl bg-[#101010] p-2 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)] sm:h-16 sm:flex-row sm:items-center sm:gap-0"
    >
      <div className="flex flex-1 items-center gap-2 px-4">
        <SearchIcon className="size-6 shrink-0 text-white/70" />
        <input
          type="text"
          name="q"
          placeholder="Job title, skill or company"
          className="h-[27px] min-w-0 flex-1 bg-transparent text-base leading-[27px] text-white placeholder:text-white/80"
        />
      </div>
      <span className="mx-6 hidden h-[23px] w-px bg-white/20 sm:block" />
      <div className="flex flex-1 items-center gap-2 px-4">
        <MapPinIcon className="size-6 shrink-0 text-white/70" />
        <input
          type="text"
          name="location"
          placeholder="Location or Remote"
          className="h-[27px] min-w-0 flex-1 bg-transparent text-base leading-[27px] text-white placeholder:text-white/80"
        />
      </div>
      <Button
        type="submit"
        size="lg"
        aria-label="Search"
        className="h-12 w-full shrink-0 rounded-xl px-4 shadow-[inset_0_0_0_1px_rgba(9,10,21,0.1),inset_0_3px_10px_rgba(255,255,255,0.2)] sm:h-12 sm:w-12 sm:px-0"
      >
        <span className="font-semibold text-[#141b34] sm:hidden">Search</span>
        <SearchIcon className="hidden size-6 text-[#141b34] sm:block" />
      </Button>
    </form>
  )
}

function TrendingRoles() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      <span className="font-heading mr-2 text-base text-white/70">
        Trending Position
      </span>
      {trendingRoles.map((role) => (
        <Link
          key={role.label}
          href={role.href}
          className="flex h-[33px] items-center rounded-full bg-[#1a1a1b] px-3 text-[14px] leading-[21px] text-white transition-colors hover:bg-[#242427]"
        >
          {role.label}
        </Link>
      ))}
    </div>
  )
}

function SiteHero({ className }: { className?: string }) {
  return (
    <section
      className={
        "relative isolate overflow-hidden bg-background px-4 pt-24 pb-56 text-center sm:px-6 sm:pt-[176px] " +
        (className ?? "")
      }
    >
      {/* Soft purple glow behind the badge/title (Figma magenta dome, blurred) */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-[-8rem] left-1/2 z-0 h-[420px] w-[1400px] max-w-none -translate-x-1/2 rounded-full bg-[#dc02ce]/12 blur-[140px]"
      />
      {/* Dotted world map — 1180x731, 2px blur, starting behind the search bar */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-[416px] left-1/2 z-0 -translate-x-1/2"
      >
        <Image
          src={heroMap}
          alt=""
          className="w-[1180px] max-w-none blur-[2px]"
        />
      </div>
      {/* Glowing purple dome below the hero (Figma: blurred #5c53fe ellipse + radial gradient) */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-[640px] left-1/2 z-0 h-[1037px] w-[1208px] max-w-none -translate-x-1/2 rounded-full bg-[#5c53fe] blur-[148px] [mask-image:linear-gradient(to_bottom,black_55%,transparent_95%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-[640px] left-1/2 z-0 h-[1037px] w-[1208px] max-w-none -translate-x-1/2 rounded-full bg-[radial-gradient(516px_443px_at_50%_0%,#5c53fe_0%,rgba(92,83,254,0.6)_29%,rgba(92,83,254,0.5)_52%,transparent_100%)] [mask-image:linear-gradient(to_bottom,black_55%,transparent_95%)]"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[784px] flex-col">
        <HeroBadge />
        <div className="mt-8 flex flex-col gap-4">
          <h1 className="font-heading text-4xl font-bold tracking-[-0.02em] text-white sm:text-[56px] sm:leading-[64px]">
            Find Your Dream Job Today
          </h1>
          <p className="font-heading text-pretty text-lg leading-[29px] text-white/70 sm:text-xl sm:leading-[32px]">
            HireLoop connects top talent with world-class companies. Browse
            thousands of curated opportunities and land your next role — faster.
          </p>
        </div>
        <div className="mt-12">
          <HeroSearch />
        </div>
        <div className="mt-6">
          <TrendingRoles />
        </div>
      </div>
    </section>
  )
}

export { SiteHero }
