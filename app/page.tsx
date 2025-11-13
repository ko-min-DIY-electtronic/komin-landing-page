"use client"

import { Download, Zap, Truck, Globe, CreditCard, Users } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <Image src="/images/komin.jpg" alt="Ko-Min D.I.Y Store Logo" width={40} height={40} className="h-10 w-10" />
            <span className="hidden text-xl font-bold sm:inline">Ko-Min D.I.Y Store</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Features
            </a>
            <a
              href="#download"
              className="rounded-full bg-primary px-6 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90"
            >
              Download
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="flex flex-col gap-6">
              <div className="space-y-4">
                <h1 className="text-5xl font-bold tracking-tight sm:text-6xl text-balance">
                  Easy Electric DIY in <span className="text-primary">Myanmar</span>
                </h1>
                <p className="text-xl text-muted-foreground">
                  All your electric parts and tools, delivered conveniently across Myanmar. Fast, secure, and trusted.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-3 sm:flex-row">
                <button className="flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-3 font-semibold text-primary-foreground hover:opacity-90 transition-opacity">
                  <Download className="h-5 w-5" />
                  Download Now
                </button>
                <button className="flex items-center justify-center gap-2 rounded-full border-2 border-primary px-8 py-3 font-semibold text-primary hover:bg-primary/5 transition-colors">
                  Learn More
                </button>
              </div>

              {/* App Store Badges */}
              <div className="flex gap-4 items-center pt-4">
                <a href="#" className="transition-opacity hover:opacity-75">
                  <Image
                    src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-example-preferred.png"
                    alt="App Store"
                    width={120}
                    height={40}
                    className="h-10 w-auto"
                  />
                </a>
                <a href="#" className="transition-opacity hover:opacity-75">
                  <Image
                    src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                    alt="Google Play"
                    width={120}
                    height={40}
                    className="h-10 w-auto"
                  />
                </a>
              </div>
            </div>

            {/* Right Visual - Removed app screenshot, replaced with hero banner image */}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="border-t border-border bg-card/50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight mb-4">Myanmar-Focused Features</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Designed specifically for Myanmar customers with features that matter to you
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1: KBZ Pay */}
            <div className="rounded-2xl border border-border bg-background p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="rounded-lg bg-accent/10 p-3">
                  <CreditCard className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold">Secure KBZ Pay</h3>
              </div>
              <p className="text-muted-foreground">
                Easy and secure payment with KBZ Pay. No hassle, no worries—just smooth transactions every time.
              </p>
            </div>

            {/* Feature 2: Nationwide Delivery */}
            <div className="rounded-2xl border border-border bg-background p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="rounded-lg bg-secondary/10 p-3">
                  <Truck className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-bold">Fast Delivery</h3>
              </div>
              <p className="text-muted-foreground">
                Fast and reliable delivery across all major cities and regions in Myanmar. Get your parts quick.
              </p>
            </div>

            {/* Feature 3: Myanmar Language */}
            <div className="rounded-2xl border border-border bg-background p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="rounded-lg bg-primary/10 p-3">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Myanmar Language</h3>
              </div>
              <p className="text-muted-foreground">
                Fully functional in Myanmar language. Shop comfortably in your own language, every step of the way.
              </p>
            </div>

            {/* Feature 4: Quality Products */}
            <div className="rounded-2xl border border-border bg-background p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="rounded-lg bg-accent/10 p-3">
                  <Zap className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold">Premium Products</h3>
              </div>
              <p className="text-muted-foreground">
                Authentic electric parts and tools from trusted brands. Quality guaranteed on every purchase.
              </p>
            </div>

            {/* Feature 5: Expert Support */}
            <div className="rounded-2xl border border-border bg-background p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="rounded-lg bg-secondary/10 p-3">
                  <Users className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-bold">Expert Support</h3>
              </div>
              <p className="text-muted-foreground">
                Chat with our experts anytime. Get advice, tips, and help choosing the right products for you.
              </p>
            </div>

            {/* Feature 6: Instant Stock Check */}
            <div className="rounded-2xl border border-border bg-background p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="rounded-lg bg-primary/10 p-3">
                  <Download className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Stock Updates</h3>
              </div>
              <p className="text-muted-foreground">
                Check product availability instantly. Never miss out on items you need—reserve them quickly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Download CTA Footer */}
      <section
        id="download"
        className="border-t border-border bg-gradient-to-b from-primary/5 to-secondary/5 px-4 py-20 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-7xl text-center">
          <div className="mb-12">
            <Image
              src="/images/komin.jpg"
              alt="Ko-Min D.I.Y Store"
              width={80}
              height={80}
              className="mx-auto h-20 w-20 mb-6"
            />
            <h2 className="text-4xl font-bold tracking-tight mb-4">Ready to Shop Smart?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Download Ko-Min D.I.Y Store today and discover the easiest way to buy electric parts and tools in Myanmar.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-4 mb-8">
            <button className="flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-3 font-semibold text-primary-foreground hover:opacity-90 transition-opacity">
              <Download className="h-5 w-5" />
              Download Now
            </button>
            <a
              href="#features"
              className="flex items-center justify-center gap-2 rounded-full border-2 border-primary px-8 py-3 font-semibold text-primary hover:bg-primary/5 transition-colors"
            >
              Learn More
            </a>
          </div>

          <p className="text-sm text-muted-foreground">Available on iOS and Android • Myanmar language supported</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background/50 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-muted-foreground">© 2025 Ko-Min D.I.Y Store Myanmar. All rights reserved.</p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="/privacy-policy" className="hover:text-foreground transition-colors">
                Privacy
              </a>
              <a href="/terms-and-conditions" className="hover:text-foreground transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
