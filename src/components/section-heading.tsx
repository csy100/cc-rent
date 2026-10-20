import { Sparkle } from "@/components/icons";

export function SectionHeading({
  eyebrow,
  title,
  lead,
  dark = false,
  center = false,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  dark?: boolean;
  center?: boolean;
}) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      <p
        className={`flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] ${
          center ? "justify-center" : ""
        } ${dark ? "text-clay" : "text-clay-deep"}`}
      >
        <Sparkle className="h-3.5 w-3.5" />
        {eyebrow}
      </p>
      <h2
        className={`mt-4 font-serif text-3xl font-medium leading-tight tracking-tight sm:text-4xl ${
          dark ? "text-cream" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {lead && (
        <p className={`mt-4 text-base leading-relaxed ${dark ? "text-cream/60" : "text-mute"}`}>
          {lead}
        </p>
      )}
    </div>
  );
}
