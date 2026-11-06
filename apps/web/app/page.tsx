import { SiteNavbar } from "@/components/site-navbar"
import { SiteHero } from "@/components/site-hero"

export default function Page() {
  // The homepage design is dark — force the dark palette tokens for this tree.
  return (
    <div className="dark flex min-h-svh flex-col bg-background text-foreground">
      <SiteNavbar />
      <SiteHero />
    </div>
  )
}
