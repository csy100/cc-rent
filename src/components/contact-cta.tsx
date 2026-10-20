import { site } from "@/lib/site";
import { IconCard, IconSend, Sparkle } from "@/components/icons";

export function ContactCta({ id = "contact" }: { id?: string }) {
  return (
    <section id={id} className="relative overflow-hidden bg-ink">
      <Sparkle className="absolute -right-16 -top-16 h-64 w-64 text-clay/20 animate-twinkle" />
      <Sparkle className="absolute -bottom-20 -left-20 h-72 w-72 text-clay/10 animate-twinkle [animation-delay:2s]" />

      <div className="relative mx-auto max-w-4xl px-6 py-20 text-center sm:py-28">
        <p className="flex items-center justify-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-clay">
          <Sparkle className="h-3.5 w-3.5" />
          开始使用
        </p>
        <h2 className="mt-4 font-serif text-3xl font-medium leading-tight tracking-tight text-cream sm:text-5xl">
          现在预订，一周内
          <br className="sm:hidden" />
          上手 Claude Code
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-cream/60">
          联系客服选择地区与套餐，付款锁定名额。交付后远程接入，开机即用，
          客服 7×24 在线。
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={site.tg.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2.5 rounded-full bg-clay px-8 py-3.5 text-base font-medium text-cream transition-colors hover:bg-clay-deep sm:w-auto"
          >
            <IconSend className="h-4.5 w-4.5" />
            Telegram {site.tg.handle}
          </a>
          <a
            href="#pricing"
            className="flex w-full items-center justify-center gap-2 rounded-full border border-cream/20 px-8 py-3.5 text-base text-cream transition-colors hover:border-clay hover:text-clay sm:w-auto"
          >
            查看价格
          </a>
        </div>

        <p className="mt-10 flex flex-wrap items-center justify-center gap-2 text-xs text-cream/40">
          <IconCard className="h-4 w-4" />
          支持支付宝 · 微信支付 · 对公转账 · 淘宝 / 闲鱼
        </p>
      </div>
    </section>
  );
}
