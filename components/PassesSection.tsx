"use client";

import { useEffect, useRef, useState } from "react";
import PassCard from "@/components/PassCard";

const packages = [
  {
    name: "Entrada Afiliados",
    price: "50.000",
    details: "Entrada completa al seminario",
    features: ["Entrada completa al seminario", "Acceso a todas las actividades", "Acceso a 2 días"],
    ctaLabel: "Comprar entrada",
    size: "regular" as const,
    extra: "Fecha límite de compra: 12 de octubre de 2026.",
  },
  {
    name: "Semario + Torneo",
    price: "35.000",
    details: "Entrada completa al seminario + Torneo Montés de Oca Judo Open 2026",
    features: ["Entrada completa al seminario", "Acceso a todas las actividades", "Acceso a 2 días", "Entrada al torneo Montés de Oca Judo Open 2026"],
    ctaLabel: "Comprar entrada",
    featured: true,
    size: "large" as const,
    extra: "Aplica a partir de sub-13. Cupo limitado.",
  },
  {
    name: "Entrada General",
    price: "60.000",
    details: "Entrada completa al seminario",
    features: ["Entrada completa al seminario", "Acceso a todas las actividades", "Acceso a 2 días"],
    ctaLabel: "Comprar entrada",
    size: "regular" as const,
    extra: "Fecha límite de compra: 12 de octubre de 2026.",
  },
];

function ChevronLeft({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M15 6L9 12L15 18"
        stroke="currentColor"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronRight({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M9 6L15 12L9 18"
        stroke="currentColor"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function PassesSection() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = () => {
    const el = scrollerRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    setCanScrollLeft(el.scrollLeft > 8);
    setCanScrollRight(el.scrollLeft < maxScroll - 8);
  };

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const isDesktop = window.matchMedia("(min-width: 768px)").matches;
    if (!isDesktop) {
      const featured = el.querySelector<HTMLElement>("[data-featured-pass]");
      featured?.scrollIntoView({ inline: "center", block: "nearest", behavior: "auto" });
    }

    updateScrollState();
    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  const scrollByCard = (direction: -1 | 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-pass-card]");
    const amount = card ? card.offsetWidth + 24 : el.clientWidth * 0.85;
    el.scrollBy({ left: direction * amount, behavior: "smooth" });
  };

  return (
    <div className="w-full">
      <section className="mx-auto max-w-6xl px-6 py-14" id="pases-y-entradas">
        <div className="mb-8 text-center">
          <h2 className="text-6xl font-bold text-highlight font-bebas-neue tracking-widest after:content-[''] after:block after:h-2 after:w-60 after:bg-highlight after:mx-auto after:mt-3">
            Reserva tu lugar
          </h2>
        </div>

        <div className="relative">
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            disabled={!canScrollLeft}
            aria-label="Ver entrada anterior"
            className="absolute left-0 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center bg-highlight text-white shadow-md transition enabled:active:scale-95 disabled:opacity-30 md:hidden"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={() => scrollByCard(1)}
            disabled={!canScrollRight}
            aria-label="Ver siguiente entrada"
            className="absolute right-0 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center bg-highlight text-white shadow-md transition enabled:active:scale-95 disabled:opacity-30 md:hidden"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div
            ref={scrollerRef}
            className="-mx-6 flex snap-x snap-mandatory gap-6 overflow-x-auto overflow-y-hidden overscroll-x-contain px-6 pb-2 scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden md:mx-auto md:grid md:max-w-6xl md:grid-cols-3 md:items-stretch md:gap-8 md:overflow-visible md:px-0 md:pb-0 md:snap-none md:overscroll-auto"
            role="region"
            aria-label="Pases y entradas"
          >
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                data-pass-card
                {...(pkg.featured ? { "data-featured-pass": true } : {})}
                className="w-[min(85vw,22rem)] shrink-0 snap-center md:w-full md:min-w-0 md:shrink"
              >
                <PassCard {...pkg} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
