import PassCard from "@/components/PassCard";

const packages = [
  {
    name: "Preventa",
    price: "30.000",
    details: "Entrada completa al seminario",
    features: ["Entrada completa al seminario", "Acceso a todas las actividades", "Acceso a 2 días"],
    ctaLabel: "Comprar entrada",
    featured: true,
    size: "large" as const,
    validity: "Precio de preventa hasta el 15 de abril o hasta agotar cupos",
    extra: "Con la compra de esta entrada obten 50% de descuento en el torneo Montés de Oca Judo Open 2026.",
  },
  {
    name: "Entrada General",
    price: "47.500",
    details: "Entrada completa al seminario",
    features: ["Entrada completa al seminario", "Acceso a todas las actividades", "Acceso a 2 días"],
    ctaLabel: "Comprar entrada",
    size: "regular" as const,
    extra: "Con la compra de esta entrada obten 50% de descuento en el torneo Montés de Oca Judo Open 2026.",
  },

];

export default function PassesSection() {
  return (
    <div className="w-full">
      <section className="mx-auto max-w-6xl px-6 py-14" id="pases-y-entradas">
        <div className="mb-8 text-center">
          <h2 className="text-6xl font-bold text-highlight font-bebas-neue tracking-widest after:content-[''] after:block after:h-2 after:w-60 after:bg-highlight after:mx-auto after:mt-3">Reserva tu lugar</h2>
        </div>

        <div
          className="-mx-6 flex snap-x snap-mandatory gap-6 overflow-x-auto overflow-y-hidden overscroll-x-contain px-6 pb-2 scroll-smooth [scrollbar-width:thin] md:mx-auto md:grid md:max-w-4xl md:grid-cols-2 md:items-stretch md:gap-8 md:overflow-visible md:px-0 md:pb-0 md:snap-none md:overscroll-auto"
          role="region"
          aria-label="Pases y entradas"
        >
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className="w-[min(85vw,22rem)] shrink-0 snap-center md:w-full md:min-w-0 md:shrink"
            >
              <PassCard {...pkg} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
