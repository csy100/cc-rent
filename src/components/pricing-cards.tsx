import { tiers, site } from "@/lib/site";
import { IconCheck, Sparkle } from "@/components/icons";

export function PricingCards() {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      {tiers.map((tier) => (
        <div
          key={tier.id}
          className={`relative flex flex-col rounded-2xl border p-6 transition-shadow ${
            tier.featured
              ? "border-ink bg-ink text-cream shadow-lift"
              : "border-line bg-card shadow-soft hover:shadow-lift"
          }`}
        >
          {tier.badge && (
            <span className="absolute -top-3 left-6 rounded-full bg-clay px-3 py-1 text-xs font-medium text-cream">
              {tier.badge}
            </span>
          )}

          <h3
            className={`font-serif text-xl font-medium ${
              tier.featured ? "text-cream" : "text-ink"
            }`}
          >
            {tier.name}
          </h3>
          <p
            className={`mt-1.5 text-sm leading-relaxed ${
              tier.featured ? "text-cream/60" : "text-mute"
            }`}
          >
            {tier.desc}
          </p>

          <div className="mt-5 flex items-baseline gap-1.5">
            <span
              className={`font-serif text-4xl font-semibold tracking-tight ${
                tier.featured ? "text-clay" : "text-ink"
              }`}
            >
              {typeof tier.price === "number" ? `¥${tier.price.toLocaleString()}` : tier.price}
            </span>
            {tier.unit && (
              <span
                className={`text-sm ${tier.featured ? "text-cream/50" : "text-mute"}`}
              >
                {tier.unit}
              </span>
            )}
          </div>

          <ul className="mt-6 flex-1 space-y-2.5 border-t border-current/10 pt-6 text-sm">
            {tier.features.map((f) => (
              <li key={f} className="flex items-start gap-2.5">
                <IconCheck
                  className={`mt-0.5 h-4 w-4 shrink-0 ${
                    tier.featured ? "text-clay" : "text-clay-deep"
                  }`}
                />
                <span className={tier.featured ? "text-cream/85" : "text-ink/80"}>
                  {f}
                </span>
              </li>
            ))}
          </ul>

          <a
            href={site.tg.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`mt-6 flex items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium transition-colors ${
              tier.featured
                ? "bg-clay text-cream hover:bg-clay-deep"
                : "bg-ink text-cream hover:bg-clay"
            }`}
          >
            <Sparkle className="h-3.5 w-3.5" />
            {tier.cta}
          </a>
        </div>
      ))}
    </div>
  );
}
