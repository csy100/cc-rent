import { site } from "@/lib/site";
import { IconSend, Sparkle } from "@/components/icons";

export function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-cream text-clay">
                <Sparkle className="h-4.5 w-4.5" />
              </span>
              <span className="font-serif text-lg font-semibold">CC Rent</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/60">
              {site.tagline}。把环境与设备交给我们，你只负责写代码。
            </p>
            <p className="mt-4 text-xs text-cream/40">
              Claude 为 Anthropic 的商标，本服务与 Anthropic 无隶属关系。
            </p>
          </div>

          <div>
            <h3 className="text-xs font-medium uppercase tracking-widest text-cream/40">
              产品
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><a className="text-cream/80 transition-colors hover:text-clay" href="#top">首页</a></li>
              <li><a className="text-cream/80 transition-colors hover:text-clay" href="#pricing">价格</a></li>
              <li><a className="text-cream/80 transition-colors hover:text-clay" href="#faq">常见问题</a></li>
              <li><a className="text-cream/80 transition-colors hover:text-clay" href="#help">帮助中心</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-medium uppercase tracking-widest text-cream/40">
              政策
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><a className="text-cream/80 transition-colors hover:text-clay" href="#terms">服务条款</a></li>
              <li><a className="text-cream/80 transition-colors hover:text-clay" href="#refund">退款政策</a></li>
              <li><a className="text-cream/80 transition-colors hover:text-clay" href="#privacy">隐私政策</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-medium uppercase tracking-widest text-cream/40">
              联系我们
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a
                  href={site.tg.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-cream/80 transition-colors hover:text-clay"
                >
                  <IconSend className="h-4 w-4 text-clay" />
                  Telegram {site.tg.handle}
                </a>
              </li>
              <li className="text-cream/60">7×24 小时在线</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-cream/10 pt-6 text-xs text-cream/40 sm:flex-row">
          <p>© 2026 CC Rent · 保留所有权利 · 地图数据 @svg-maps/world (MIT)</p>
          <p>支持支付宝 · 微信支付 · 对公转账</p>
        </div>
      </div>
    </footer>
  );
}
