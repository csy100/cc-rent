import { faqs } from "@/lib/site";
import { IconPlus } from "@/components/icons";

export function FaqList({ limit }: { limit?: number }) {
  const items = limit ? faqs.slice(0, limit) : faqs;
  return (
    <div className="divide-y divide-line rounded-2xl border border-line bg-card shadow-soft">
      {items.map((faq) => (
        <details key={faq.q} className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-left">
            <span className="text-[15px] font-medium text-ink">{faq.q}</span>
            <IconPlus className="h-4 w-4 shrink-0 text-clay-deep transition-transform duration-300 group-open:rotate-45" />
          </summary>
          <p className="px-6 pb-6 text-sm leading-relaxed text-mute">{faq.a}</p>
        </details>
      ))}
    </div>
  );
}
