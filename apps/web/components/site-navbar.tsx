"use client"

import Image from "next/image"
import Link from "next/link"
import { MenuIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { Separator } from "@workspace/ui/components/separator"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@workspace/ui/components/sheet"
import { cn } from "@workspace/ui/lib/utils"

import logo from "@/app/images/logo.png"

const navLinks = [
  { label: "Browse Jobs", href: "/browse-jobs" },
  { label: "Company", href: "/company" },
  { label: "Pricing", href: "/pricing" },
]

const mobileLinkClasses =
  "w-full justify-start rounded-lg px-2.5 py-1.5 text-sm font-medium text-white/70 transition-colors hover:bg-white/5 hover:text-white"

function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("inline-flex shrink-0", className)}>
      <Image src={logo} alt="HireLoop" className="h-8 w-auto sm:h-11" priority />
      <span className="sr-only">HireLoop home</span>
    </Link>
  )
}

function DesktopLinks() {
  return (
    <>
      {navLinks.map((link) => (
        <Button
          key={link.label}
          variant="ghost"
          nativeButton={false}
          className="text-[16px] tracking-[-0.2px]"
          render={<Link href={link.href} />}
        >
          {link.label}
        </Button>
      ))}
      <Separator orientation="vertical" className="mx-2 h-6 self-center" />
      <Button
        variant="ghost"
        nativeButton={false}
        className="font-heading text-lg font-semibold text-primary hover:text-primary"
        render={<Link href="/sign-in" />}
      >
        Sign In
      </Button>
      <Button
        size="lg"
        nativeButton={false}
        className="h-[52px] rounded-xl px-[22px] text-lg font-medium shadow-[inset_0_0_0_1px_rgba(9,10,21,0.1),inset_0_3px_10px_rgba(255,255,255,0.2)]"
        render={<Link href="/sign-up" />}
      >
        Get Started
      </Button>
    </>
  )
}

function MobileLinks() {
  return (
    <>
      {navLinks.map((link) => (
        <SheetClose
          key={link.label}
          render={<Link href={link.href} className={mobileLinkClasses} />}
        >
          {link.label}
        </SheetClose>
      ))}
      <SheetClose
        render={
          <Link
            href="/sign-in"
            className={cn(mobileLinkClasses, "text-primary")}
          />
        }
      >
        Sign In
      </SheetClose>
      <SheetClose
        render={
          <Link
            href="/sign-up"
            className={cn(
              mobileLinkClasses,
              "mt-1 h-9 w-full justify-center rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground"
            )}
          >
            Get Started
          </Link>
        }
      />
    </>
  )
}

function SiteNavbar({ className }: { className?: string }) {
  return (
    <header className={cn("px-4 pt-6 sm:px-6 lg:px-[60px]", className)}>
      <nav className="mx-auto flex h-14 w-full max-w-[1320px] items-center justify-between rounded-2xl border bg-card bg-clip-padding px-3 shadow-sm sm:h-[74px] sm:px-6">
        <Logo />

        {/* Desktop navigation */}
        <div className="hidden items-center gap-0.5 md:flex">
          <DesktopLinks />
        </div>

        {/* Mobile navigation */}
        <Sheet>
          <SheetTrigger
            render={<Button variant="ghost" size="icon" className="md:hidden" />}
          >
            <MenuIcon />
            <span className="sr-only">Open menu</span>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-72 border-white/10 bg-[#222222] text-white [&_[data-slot=sheet-close]]:bg-white/5 [&_[data-slot=sheet-close]]:text-white [&_[data-slot=sheet-close]:hover]:bg-white/10 [&_[data-slot=sheet-close]]:ring-white/20 sm:max-w-xs"
          >
            <SheetHeader>
              <SheetTitle className="flex -mt-1.5">
                <Logo />
              </SheetTitle>
            </SheetHeader>
            <Separator />
            <nav className="flex flex-col gap-1 px-4">
              <MobileLinks />
            </nav>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  )
}

export { SiteNavbar }
