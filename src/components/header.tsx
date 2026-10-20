"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import { IconPlus, IconSend, Sparkle } from "@/components/icons";

export function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/85 backdrop-blur-md">
      {/* 售罄通知条 */}
      <div className="bg-ink px-4 py-1.5 text-center text-xs text-cream/90">
        <Sparkle className="mr-1.5 inline-block h-3 w-3 text-clay" />
        本批设备已售罄，现接受预订 · 付款后一周内交付
      </div>

      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-6">
        <a href="#top" className="flex items-center gap-2.5" onClick={close}>
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-ink text-clay">
            <Sparkle className="h-4.5 w-4.5" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-serif text-lg font-semibold tracking-tight">
              CC Rent
            </span>
            <span className="mt-1 text-[10px] tracking-wide text-mute">
              海外 Mac 租用
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm text-mute transition-colors hover:bg-cream/60 hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2.5 md:flex">
          {/* 立即预订：hover 时 3D 翻转成蓝色 Telegram 联系按钮 */}
          <a
            href={site.tg.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`立即预订，Telegram 联系 ${site.tg.handle}`}
            className="group relative block h-9 w-40 [perspective:600px]"
          >
            <span className="absolute inset-0 flex items-center justify-center rounded-full bg-ink text-sm font-medium text-cream transition-transform duration-500 [transform-style:preserve-3d] [backface-visibility:hidden] group-hover:[transform:rotateX(90deg)]">
              立即预订
            </span>
            <span className="absolute inset-0 flex items-center justify-center gap-1.5 rounded-full bg-[#2AABEE] text-sm font-medium text-white transition-transform duration-500 [transform-style:preserve-3d] [backface-visibility:hidden] [transform:rotateX(-90deg)] group-hover:[transform:rotateX(0deg)]">
              <IconSend className="h-4 w-4" />
              {site.tg.handle}
            </span>
          </a>
        </div>

        <button
          type="button"
          aria-label="打开菜单"
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-line md:hidden"
        >
          <IconPlus
            className={`h-4 w-4 transition-transform ${open ? "rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* 移动端菜单 */}
      {open && (
        <div className="border-t border-line bg-paper px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-1">
            {site.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={close}
                className="rounded-xl px-4 py-3 text-sm text-mute"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-2">
            <a
              href="#pricing"
              onClick={close}
              className="rounded-full bg-ink px-4 py-2.5 text-center text-sm font-medium text-cream"
            >
              立即预订
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
