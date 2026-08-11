type PassCardProps = {
  name: string;
  price: string;
  details: string;
  features: string[];
  ctaLabel?: string;
  featured?: boolean;
  size?: "regular" | "large";
  validity?: string;
};

export default function PassCard({
  name,
  price,
  details,
  features,
  ctaLabel = "Choose package",
  featured = false,
  size = "regular",
  validity,
}: PassCardProps) {
  const isLarge = size === "large";

  return (
    <article
      className={[
        " border bg-white p-6 shadow-sm transition-all duration-200",
        isLarge ? "md:scale-105 md:p-8" : "md:p-6",
        featured
          ? "border-highlight shadow-highlight md:shadow-lg"
          : "border-gray-200 hover:shadow-md",
      ].join(" ")}
    >
      {featured && (
        <span className="mb-4 inline-block bg-highlight px-3 py-1 text-lg font-light uppercase tracking-wide text-white font-bebas-neue tracking-widest">
          Más vendido
        </span>
      )}

      <h3 className={isLarge ? "text-2xl font-bold text-gray-900" : "text-xl font-bold text-gray-900"}>
        {name}
      </h3>
      <p className="mt-2 text-3xl font-extrabold text-gray-900">₡{price}</p>
      <p className="mt-2 text-sm text-gray-600">{details}</p>

      <ul className="mt-5 pl-6 text-sm text-gray-700">
        {features.map((feature) => (
          <li key={feature} className="list-disc marker:text-highlight-dark marker:text-lg items-start tex">
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <a
        className={[
          "mt-6 block w-full px-4 py-2.5 text-center text-xl font-semibold transition-colors font-bebas-neue tracking-widest  ",
          featured
            ? "bg-highlight text-white hover:bg-highlight/80"
            : "bg-highlight text-white hover:bg-highlight/80",
        ].join(" ")}
        href="https://docs.google.com/forms/d/e/1FAIpQLScmogv5bI8x2hAUgIWOuEj-FXsUNJMEOkEp1EpcKPk0W7KMuQ/viewform?usp=publish-editor"
        target="_blank"
        rel="noreferrer"
      >
        {ctaLabel}
      </a>

      {validity && <p className="mt-6 text-sm text-gray-950 font-bold">{validity}</p>}
    </article>
  );
}