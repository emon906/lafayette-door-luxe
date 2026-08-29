import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { Reveal } from "@/components/site/Reveal";
import { LazyVideo } from "@/components/site/LazyVideo";

import heroHome from "@/assets/hero-home.jpg";
import serviceInstall from "@/assets/service-install.jpg";
import serviceRepair from "@/assets/service-repair.jpg";
import residential from "@/assets/residential.jpg";
import commercial from "@/assets/commercial.jpg";
import before1 from "@/assets/before-1.jpg";
import after1 from "@/assets/after-1.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import logo from "@/assets/logo.png";

import heroVideo from "@/assets/hero-video.mp4.asset.json";
import showcaseVideo from "@/assets/showcase-video.mp4.asset.json";
import ctaVideo from "@/assets/cta-video.mp4.asset.json";
import woodClip from "@/assets/clip-wood.mp4.asset.json";

const PHONE = "+1 337-573-9003";
const PHONE_HREF = "tel:+13375739003";
const EMAIL = "huntergdl05@gmail.com";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Garage Doors of Lafayette | Installation & Repair, LA 70525" },
      {
        name: "description",
        content:
          "Local, reliable and insured garage door installation and repair in Lafayette, LA. Residential and commercial service. Call +1 337-573-9003 for a free quote.",
      },
      { property: "og:title", content: "Garage Doors of Lafayette | Installation & Repair" },
      {
        property: "og:description",
        content:
          "Premium garage door installation and repair for homes and businesses across Lafayette and surrounding areas. Free quotes, insured technicians.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

/* ---------------------------------------------------------------- nav */

const NAV = [
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Why Us", href: "#why" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#quote" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-border/70 bg-ivory/85 py-2 backdrop-blur-xl shadow-soft"
          : "border-b border-transparent py-4"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-3">
          <img src={logo} alt="" width={40} height={40} className="h-9 w-9" />
          <span className="leading-tight">
            <span className="block font-display text-[0.98rem] font-semibold tracking-tight text-navy">
              Garage Doors
            </span>
            <span className="block text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-copper">
              of Lafayette
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-9 lg:flex">
          {NAV.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="relative text-sm font-medium text-navy-soft transition-colors hover:text-navy after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-copper after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={PHONE_HREF}
            className="hidden text-sm font-semibold text-navy transition-colors hover:text-copper md:block"
          >
            {PHONE}
          </a>
          <a
            href="#quote"
            className="hidden rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-copper sm:block"
          >
            Free Quote
          </a>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-navy lg:hidden"
          >
            <span className="relative block h-3 w-4">
              <span
                className={`absolute left-0 h-0.5 w-4 bg-current transition-all ${open ? "top-1.5 rotate-45" : "top-0"}`}
              />
              <span
                className={`absolute left-0 top-3 h-0.5 w-4 bg-current transition-all ${open ? "-top-0 -rotate-45 top-1.5" : ""}`}
              />
            </span>
          </button>
        </div>
      </nav>

      {open ? (
        <div className="mx-4 mt-3 rounded-2xl border border-border bg-card p-4 shadow-lift lg:hidden">
          <ul className="grid gap-1">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-2.5 text-sm font-medium text-navy transition-colors hover:bg-secondary"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={PHONE_HREF}
                className="mt-1 block rounded-xl bg-navy px-3 py-2.5 text-center text-sm font-semibold text-primary-foreground"
              >
                Call {PHONE}
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}

/* --------------------------------------------------------------- hero */

function Hero() {
  return (
    <section id="top" className="relative isolate min-h-[92vh] overflow-hidden pt-28">
      <div className="absolute inset-0 -z-10">
        <LazyVideo src={heroVideo.url} poster={heroHome} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-ivory via-ivory/85 to-ivory/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-ivory via-transparent to-ivory/60" />
      </div>

      <div className="mx-auto grid max-w-7xl gap-12 px-5 pb-24 pt-14 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:pb-28">
        <div>
          <Reveal>
            <p className="eyebrow">Lafayette, Louisiana · 70525</p>
          </Reveal>
          <Reveal delay={90}>
            <h1 className="mt-5 max-w-2xl text-balance font-display text-5xl leading-[1.02] text-navy sm:text-6xl lg:text-7xl">
              Garage doors that make the <em className="not-italic text-copper">whole house</em> look finished.
            </h1>
          </Reveal>
          <Reveal delay={180}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-navy-soft">
              Installation, repair and same-week service for homes and businesses across Lafayette and the
              surrounding parishes. Local crews, honest pricing, fully insured.
            </p>
          </Reveal>
          <Reveal delay={260}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#quote"
                className="group rounded-full bg-navy px-8 py-4 text-sm font-semibold tracking-wide text-primary-foreground shadow-lift transition-all duration-300 hover:-translate-y-1 hover:bg-copper"
              >
                Get a Free Quote
                <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
              <a
                href={PHONE_HREF}
                className="rounded-full border border-navy/20 bg-card/70 px-8 py-4 text-sm font-semibold text-navy backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-copper hover:text-copper"
              >
                {PHONE}
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={220} className="lg:justify-self-end">
          <div className="grid max-w-md gap-4 rounded-3xl border border-border/70 bg-card/80 p-6 shadow-lift backdrop-blur-md">
            <div className="flex items-baseline gap-3">
              <span className="font-display text-4xl text-navy">15+</span>
              <span className="text-sm text-muted-foreground">years serving Acadiana homeowners</span>
            </div>
            <div className="h-px bg-border" />
            <div className="flex items-baseline gap-3">
              <span className="font-display text-4xl text-navy">24/7</span>
              <span className="text-sm text-muted-foreground">emergency spring & opener repair</span>
            </div>
            <div className="h-px bg-border" />
            <div className="flex items-baseline gap-3">
              <span className="font-display text-4xl text-copper">100%</span>
              <span className="text-sm text-muted-foreground">insured, licensed local technicians</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- badges */

const BADGES = [
  { title: "Local", copy: "Based in Lafayette — real neighbors, not a call center." },
  { title: "Reliable", copy: "On-time arrivals and doors that keep working for years." },
  { title: "Insured", copy: "Fully licensed and insured on every single job." },
];

function TrustBadges() {
  return (
    <section className="border-y border-border bg-sand/60">
      <div className="mx-auto grid max-w-7xl gap-px bg-border sm:grid-cols-3">
        {BADGES.map((b, i) => (
          <Reveal key={b.title} delay={i * 110} className="bg-sand/60">
            <div className="group h-full px-6 py-12 transition-colors duration-500 hover:bg-card sm:px-10">
              <span className="font-display text-xs tracking-[0.3em] text-copper">0{i + 1}</span>
              <h3 className="mt-4 text-2xl text-navy">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.copy}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ----------------------------------------------------------- services */

function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
      <Reveal>
        <p className="eyebrow">What we do</p>
        <h2 className="mt-4 max-w-3xl text-balance text-4xl leading-tight text-navy sm:text-5xl">
          Two things, done exceptionally well.
        </h2>
      </Reveal>

      <div className="mt-16 grid gap-8 lg:grid-cols-2">
        {[
          {
            img: serviceInstall,
            w: 1200,
            h: 1408,
            tag: "Installation",
            title: "New doors, measured and fitted to the inch",
            copy: "Carriage house, flush modern, full-view glass or insulated steel — we help you choose, then install it clean with hardware that matches your home.",
            points: ["Custom sizing & color match", "Insulated & hurricane-rated options", "Smart openers installed"],
          },
          {
            img: serviceRepair,
            w: 1200,
            h: 1408,
            tag: "Repair",
            title: "Springs, cables, rollers and openers — fixed fast",
            copy: "A broken torsion spring shouldn't cost you a day. We stock the common parts, diagnose honestly, and get the door moving safely again.",
            points: ["Same-week & emergency calls", "Opener and remote troubleshooting", "Safety & balance tune-ups"],
          },
        ].map((s, i) => (
          <Reveal key={s.tag} delay={i * 130}>
            <article className="group h-full overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift">
              <div className="media-frame rounded-none">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  width={s.w}
                  height={s.h}
                  className="h-72 w-full object-cover sm:h-96"
                />
              </div>
              <div className="p-8 sm:p-10">
                <p className="eyebrow">{s.tag}</p>
                <h3 className="mt-3 text-3xl leading-snug text-navy">{s.title}</h3>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">{s.copy}</p>
                <ul className="mt-6 grid gap-2.5">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-sm text-navy-soft">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-copper" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------ video showcase */

function VideoShowcase() {
  return (
    <section className="relative">
      <div className="relative h-[52vh] min-h-[340px] w-full overflow-hidden sm:h-[62vh]">
        <LazyVideo src={showcaseVideo.url} poster={after1} className="h-full w-full object-cover" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ivory via-ivory/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 mx-auto max-w-7xl px-5 pb-10 sm:px-8">
          <Reveal>
            <p className="max-w-2xl font-display text-3xl leading-tight text-navy drop-shadow-sm sm:text-4xl">
              Every panel aligned, every track balanced — craftsmanship you can hear in how quietly it closes.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------- residential/commercial */

function Segments() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
      <Reveal>
        <p className="eyebrow">Who we serve</p>
        <h2 className="mt-4 text-4xl leading-tight text-navy sm:text-5xl">Residential & commercial.</h2>
      </Reveal>

      <div className="mt-14 grid gap-8 lg:grid-cols-2">
        <Reveal>
          <article className="group overflow-hidden rounded-3xl bg-card shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift">
            <div className="media-frame rounded-none">
              <img
                src={residential}
                alt="Residential garage door on a bright Lafayette home"
                loading="lazy"
                width={1200}
                height={900}
                className="h-80 w-full object-cover"
              />
            </div>
            <div className="p-8 sm:p-10">
              <h3 className="text-3xl text-navy">Residential</h3>
              <p className="mt-3 text-muted-foreground">
                Curb appeal, quiet operation and insulation that actually helps in Louisiana summers. Single doors,
                doubles and full replacements.
              </p>
            </div>
          </article>
        </Reveal>

        <Reveal delay={130}>
          <article className="group overflow-hidden rounded-3xl bg-navy text-primary-foreground shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift">
            <div className="media-frame rounded-none">
              <img
                src={commercial}
                alt="Commercial rolling steel doors at a loading dock"
                loading="lazy"
                width={1200}
                height={900}
                className="h-80 w-full object-cover"
              />
            </div>
            <div className="p-8 sm:p-10">
              <h3 className="text-3xl text-primary-foreground">Commercial</h3>
              <p className="mt-3 text-primary-foreground/75">
                Rolling steel, sectional and high-cycle doors for warehouses, shops and fleet bays — serviced on a
                schedule that keeps your day moving.
              </p>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}

/* -------------------------------------------------------- before/after */

function BeforeAfter() {
  return (
    <section id="projects" className="border-y border-border bg-sand/50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow">Before & after</p>
          <h2 className="mt-4 max-w-2xl text-4xl leading-tight text-navy sm:text-5xl">
            The same driveway. A completely different house.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {[
            { img: before1, label: "Before", w: 1000, h: 750, alt: "Weathered garage door before replacement" },
            { img: after1, label: "After", w: 1000, h: 750, alt: "New white carriage house garage door after installation" },
          ].map((item, i) => (
            <Reveal key={item.label} delay={i * 140}>
              <figure className="media-frame relative">
                <img
                  src={item.img}
                  alt={item.alt}
                  loading="lazy"
                  width={item.w}
                  height={item.h}
                  className="h-[22rem] w-full object-cover sm:h-[26rem]"
                />
                <figcaption
                  className={`absolute left-5 top-5 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] ${
                    item.label === "After" ? "bg-copper text-accent-foreground" : "bg-card/90 text-navy"
                  }`}
                >
                  {item.label}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ gallery */

function ProjectGallery() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
      <Reveal>
        <p className="eyebrow">Selected work</p>
        <h2 className="mt-4 max-w-2xl text-4xl leading-tight text-navy sm:text-5xl">
          A look around Acadiana driveways.
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        <Reveal className="md:row-span-2">
          <div className="media-frame h-full">
            <img
              src={gallery1}
              alt="Wood-grain garage door detail in warm sunlight"
              loading="lazy"
              width={1000}
              height={1200}
              className="h-full min-h-[26rem] w-full object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={110} className="md:col-span-2">
          <div className="media-frame h-64 sm:h-72">
            <LazyVideo src={woodClip.url} poster={gallery1} className="h-full w-full object-cover" />
          </div>
        </Reveal>

        <Reveal delay={180}>
          <div className="media-frame h-64 sm:h-72">
            <img
              src={gallery3}
              alt="Service van parked at a Lafayette home"
              loading="lazy"
              width={1008}
              height={1008}
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={240}>
          <div className="media-frame h-64 sm:h-72">
            <img
              src={gallery2}
              alt="Open garage with warm interior lighting at dusk"
              loading="lazy"
              width={1200}
              height={800}
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------- why choose */

const WHY = [
  { t: "Straight answers", c: "We tell you when a repair beats a replacement — even when it's the smaller ticket." },
  { t: "Stocked trucks", c: "Springs, rollers, cables and openers ride with us, so most calls finish in one visit." },
  { t: "Clean job sites", c: "Old door hauled away, hardware swept, driveway left the way we found it." },
  { t: "Written quotes", c: "Flat pricing in writing before work starts. No surprise line items after." },
  { t: "Warranty backed", c: "Manufacturer warranties plus our own labor guarantee on every install." },
  { t: "Local dispatch", c: "Lafayette, Broussard, Youngsville, Carencro, Scott and everywhere between." },
];

function WhyUs() {
  return (
    <section id="why" className="bg-navy py-24 text-primary-foreground lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow">Why choose us</p>
          <h2 className="mt-4 max-w-3xl text-4xl leading-tight text-primary-foreground sm:text-5xl">
            The details other companies skip are the reason people call us back.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {WHY.map((w, i) => (
            <Reveal key={w.t} delay={(i % 3) * 100}>
              <div className="border-t border-primary-foreground/15 pt-6 transition-colors duration-500 hover:border-copper">
                <h3 className="text-xl text-primary-foreground">{w.t}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-primary-foreground/70">{w.c}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------- cta video */

function CtaVideo() {
  return (
    <section className="relative h-[70vh] min-h-[440px] overflow-hidden">
      <LazyVideo src={ctaVideo.url} poster={residential} className="h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-ivory/70 via-ivory/40 to-ivory/90" />
      <div className="absolute inset-0 flex items-center">
        <div className="mx-auto w-full max-w-3xl px-5 text-center sm:px-8">
          <Reveal>
            <h2 className="text-balance font-display text-4xl leading-tight text-navy sm:text-6xl">
              Ready for a door you don't have to think about?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-navy-soft">
              Free, no-pressure quotes across Lafayette and surrounding areas.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <a
                href="#quote"
                className="rounded-full bg-navy px-8 py-4 text-sm font-semibold text-primary-foreground shadow-lift transition-all duration-300 hover:-translate-y-1 hover:bg-copper"
              >
                Get a Free Quote
              </a>
              <a
                href={PHONE_HREF}
                className="rounded-full border border-navy/25 bg-card/80 px-8 py-4 text-sm font-semibold text-navy backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-copper hover:text-copper"
              >
                Call {PHONE}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------- testimonials */

const REVIEWS = [
  {
    q: "Spring snapped on a Sunday and my car was trapped. They were out the next morning and the door is quieter than it's ever been.",
    n: "Danielle T.",
    l: "Lafayette",
  },
  {
    q: "We replaced two doors on a rental property. Fair quote, no upsell, and the new doors changed the whole look of the house.",
    n: "Marc B.",
    l: "Broussard",
  },
  {
    q: "They service the bay doors at our shop. Scheduled maintenance, in and out, never had a day of downtime because of them.",
    n: "Kevin R.",
    l: "Scott",
  },
];

function Testimonials() {
  return (
    <section id="reviews" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
      <Reveal>
        <p className="eyebrow">Testimonials</p>
        <h2 className="mt-4 text-4xl leading-tight text-navy sm:text-5xl">Neighbors say it better.</h2>
      </Reveal>

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {REVIEWS.map((r, i) => (
          <Reveal key={r.n} delay={i * 120}>
            <figure className="flex h-full flex-col justify-between rounded-3xl border border-border bg-card p-8 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift">
              <span aria-hidden className="font-display text-5xl leading-none text-copper-soft">
                &ldquo;
              </span>
              <blockquote className="mt-2 text-lg leading-relaxed text-navy-soft">{r.q}</blockquote>
              <figcaption className="mt-8 border-t border-border pt-5">
                <span className="block text-sm font-semibold text-navy">{r.n}</span>
                <span className="block text-xs uppercase tracking-[0.18em] text-muted-foreground">{r.l}</span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- quote */

function QuoteSection() {
  const [sent, setSent] = useState(false);

  return (
    <section id="quote" className="border-t border-border bg-sand/60 py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <p className="eyebrow">Free quote</p>
          <h2 className="mt-4 text-4xl leading-tight text-navy sm:text-5xl">Tell us about your door.</h2>
          <p className="mt-5 max-w-md text-muted-foreground">
            Send a few details and we'll come back with honest pricing — usually the same day.
          </p>

          <dl className="mt-10 grid gap-6">
            <div>
              <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Phone</dt>
              <dd>
                <a href={PHONE_HREF} className="font-display text-2xl text-navy transition-colors hover:text-copper">
                  {PHONE}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Email</dt>
              <dd>
                <a
                  href={`mailto:${EMAIL}`}
                  className="font-display text-2xl text-navy transition-colors hover:text-copper"
                >
                  {EMAIL}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Service area</dt>
              <dd className="mt-1 text-navy-soft">Lafayette, LA 70525 and surrounding areas</dd>
            </div>
          </dl>
        </Reveal>

        <Reveal delay={130}>
          <form
            className="rounded-3xl border border-border bg-card p-8 shadow-lift sm:p-10"
            onSubmit={(e) => {
              e.preventDefault();
              const data = new FormData(e.currentTarget);
              const body = `Name: ${data.get("name")}\nPhone: ${data.get("phone")}\nService: ${data.get("service")}\n\n${data.get("message")}`;
              window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent("Garage door quote request")}&body=${encodeURIComponent(body)}`;
              setSent(true);
            }}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-medium text-navy">
                Name
                <input
                  name="name"
                  required
                  className="rounded-xl border border-border bg-background px-4 py-3 text-base font-normal text-navy outline-none transition-colors focus:border-copper"
                  placeholder="Your name"
                />
              </label>
              <label className="grid gap-2 text-sm font-medium text-navy">
                Phone
                <input
                  name="phone"
                  required
                  className="rounded-xl border border-border bg-background px-4 py-3 text-base font-normal text-navy outline-none transition-colors focus:border-copper"
                  placeholder="(337) 000-0000"
                />
              </label>
            </div>

            <label className="mt-5 grid gap-2 text-sm font-medium text-navy">
              What do you need?
              <select
                name="service"
                className="rounded-xl border border-border bg-background px-4 py-3 text-base font-normal text-navy outline-none transition-colors focus:border-copper"
              >
                <option>New door installation</option>
                <option>Repair (spring, cable, roller)</option>
                <option>Opener install or repair</option>
                <option>Commercial door service</option>
                <option>Something else</option>
              </select>
            </label>

            <label className="mt-5 grid gap-2 text-sm font-medium text-navy">
              Details
              <textarea
                name="message"
                rows={4}
                className="resize-none rounded-xl border border-border bg-background px-4 py-3 text-base font-normal text-navy outline-none transition-colors focus:border-copper"
                placeholder="Door size, what's happening, best time to reach you…"
              />
            </label>

            <button
              type="submit"
              className="mt-7 w-full rounded-full bg-navy px-8 py-4 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-copper"
            >
              Request My Free Quote
            </button>
            {sent ? (
              <p className="mt-4 text-center text-sm text-copper">
                Opening your email app — or just call {PHONE}.
              </p>
            ) : null}
          </form>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- footer */

function Footer() {
  return (
    <footer className="bg-navy py-16 text-primary-foreground">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 border-b border-primary-foreground/15 pb-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt=""
                loading="lazy"
                width={40}
                height={40}
                className="h-10 w-10 brightness-0 invert"
              />
              <span className="font-display text-lg">Garage Doors of Lafayette</span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-primary-foreground/70">
              Local, reliable and insured garage door installation and repair for residential and commercial
              properties across Lafayette and surrounding areas.
            </p>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.22em] text-copper-soft">Explore</h3>
            <ul className="mt-5 grid gap-2.5 text-sm text-primary-foreground/75">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="transition-colors hover:text-copper-soft">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.22em] text-copper-soft">Contact</h3>
            <ul className="mt-5 grid gap-2.5 text-sm text-primary-foreground/75">
              <li>
                <a href={PHONE_HREF} className="transition-colors hover:text-copper-soft">
                  {PHONE}
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="transition-colors hover:text-copper-soft">
                  {EMAIL}
                </a>
              </li>
              <li>Lafayette, LA 70525</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-8 text-xs text-primary-foreground/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Garage Doors of Lafayette. All rights reserved.</p>
          <p>Licensed & insured · Residential & commercial</p>
        </div>
      </div>
    </footer>
  );
}

/* --------------------------------------------------------------- page */

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBadges />
        <Services />
        <VideoShowcase />
        <Segments />
        <BeforeAfter />
        <ProjectGallery />
        <WhyUs />
        <CtaVideo />
        <Testimonials />
        <QuoteSection />
      </main>
      <Footer />
    </>
  );
}
