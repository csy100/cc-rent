import { site } from "@/lib/site";
import { SectionHeading } from "@/components/section-heading";
import { PricingCards } from "@/components/pricing-cards";
import { FaqList } from "@/components/faq-list";
import { ContactCta } from "@/components/contact-cta";
import { HeroWorldMap } from "@/components/world-map";
import {
  IconApple,
  IconArrowRight,
  IconBox,
  IconCalendar,
  IconCheck,
  IconGlobe,
  IconInfinity,
  IconMonitor,
  IconMoon,
  IconRocket,
  IconSend,
  IconShield,
  IconTerminal,
  IconWrench,
  IconZap,
  Sparkle,
} from "@/components/icons";

/* ---------- Hero ---------- */

function HeroContent() {
  const stats = [
    { value: "6 个", label: "可选地区" },
    { value: "500–1000M", label: "独立 IP 带宽" },
    { value: "7 天内", label: "付款后交付" },
  ];
  return (
    <>
      <span className="inline-flex items-center gap-2 rounded-full border border-line bg-card/95 px-4 py-1.5 text-xs text-mute shadow-soft">
        <Sparkle className="h-3.5 w-3.5 text-clay" />
        本批设备已售罄 · 现接受预订，付款后一周内交付
      </span>

      <h1 className="mt-6 font-serif text-[2.5rem] font-medium leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
        海外 Mac mini 租用
        <span className="mt-2 block">
          Claude Code <span className="text-clay">开机即用</span>
        </span>
      </h1>

      <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-mute">
        独享 Mac mini M4 + 家庭宽带独立 IP，预装 Claude Code 与 Claude
        桌面版。可自带账号，也可选含 Claude Max 5x / 20x 的套餐，客服 7×24
        在线。
      </p>

      <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <a
          href="#pricing"
          className="group flex w-full items-center justify-center gap-2 rounded-full bg-ink px-8 py-3.5 text-base font-medium text-cream transition-colors hover:bg-clay sm:w-auto"
        >
          立即预订
          <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </a>
        <a
          href={site.tg.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center gap-2.5 rounded-full border border-line bg-card px-8 py-3.5 text-base text-ink shadow-soft transition-colors hover:border-clay sm:w-auto"
        >
          <IconSend className="h-4 w-4 text-clay" />
          Telegram {site.tg.handle}
        </a>
      </div>

      <dl className="mx-auto mt-10 grid w-full max-w-3xl grid-cols-3 gap-y-8">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col items-center gap-1.5">
            <dd className="font-serif text-xl font-semibold tracking-tight text-ink sm:text-2xl">
              {s.value}
            </dd>
            <dt className="text-xs text-mute">{s.label}</dt>
          </div>
        ))}
      </dl>
    </>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-line">
      <div className="mx-auto max-w-6xl px-6">
        {/* 桌面端：世界地图作为背景，六个可交付地区高亮 + 脉冲标记 */}
        <div className="relative hidden aspect-[1010/666] w-full md:block">
          <div className="absolute inset-0 opacity-55 [mask-image:linear-gradient(to_bottom,black_72%,transparent_98%)]">
            <HeroWorldMap />
          </div>
          {/* 中央柔光，保证文字可读 */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_62%_58%_at_center,rgba(245,244,239,0.9)_0%,rgba(245,244,239,0.45)_55%,transparent_78%)]" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
            <HeroContent />
          </div>
        </div>
        {/* 移动端：无地图背景 */}
        <div className="py-16 text-center md:hidden">
          <HeroContent />
        </div>
      </div>
    </section>
  );
}

/* ---------- 痛点 ---------- */

function PainPoints() {
  const pains = [
    {
      icon: IconMoon,
      title: "笔记本一合盖，长任务就断",
      desc: "跑一晚的代码说断就断——睡眠、断网、断电，长任务在本地笔记本上根本跑不安稳。",
    },
    {
      icon: IconBox,
      title: "主力机被各种依赖装花",
      desc: "不同项目的依赖越装越多，工作机越来越乱，出问题只能推倒重来。",
    },
    {
      icon: IconApple,
      title: "没有 Mac，构建无从下手",
      desc: "想写 iOS / macOS 应用，却没有一台 Mac；为了一次构建买整机又太贵。",
    },
    {
      icon: IconWrench,
      title: "环境配置和网络折腾半天",
      desc: "装环境、配代理、搞支付，还没开始写代码，一个晚上就过去了。",
    },
  ];
  return (
    <section id="why" className="bg-cream">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <SectionHeading
          center
          eyebrow="为什么是租用"
          title="把环境问题交给我们，你只负责写代码"
          lead="Claude Code 很强，但总被设备与网络拖后腿。一台远程常驻的 Mac mini，解决所有这些问题。"
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pains.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-line bg-card p-6 shadow-soft transition-shadow hover:shadow-lift"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-clay-soft text-clay-deep">
                <p.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-serif text-lg font-medium leading-snug text-ink">
                {p.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-mute">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- 对比表 ---------- */

const comparisonRows: {
  label: string;
  cc: string;
  ccGood?: boolean;
  self: string;
  other: string;
}[] = [
  {
    label: "Claude 订阅",
    cc: "自带或含 Max 5x / 20x",
    ccGood: true,
    self: "需自行订阅，支付方式受限",
    other: "多为共享号，便宜但易封",
  },
  {
    label: "网络环境",
    cc: "家庭宽带独立 IP，500–1000M",
    ccGood: true,
    self: "需自行解决，成本高且不稳定",
    other: "不提供",
  },
  {
    label: "设备",
    cc: "独享 Mac mini M4 整机",
    ccGood: true,
    self: "需自购设备（¥4,000+）",
    other: "不提供",
  },
  {
    label: "封号风险",
    cc: "正常使用无限更换",
    ccGood: true,
    self: "自行承担",
    other: "封号不赔",
  },
  {
    label: "售后服务",
    cc: "7×24 客服支持",
    ccGood: true,
    self: "无",
    other: "有限甚至失联",
  },
  {
    label: "付款方式",
    cc: "支付宝 / 微信 / 对公转账",
    ccGood: true,
    self: "—",
    other: "多为个人转账",
  },
];

function Comparison() {
  return (
    <section id="compare" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <SectionHeading
          center
          eyebrow="算一笔账"
          title="一张表看懂 CC Rent 值不值"
          lead="对比自己折腾和市面上买号，租一台整机的优势一目了然。"
        />
        <div className="mt-12 overflow-x-auto rounded-2xl border border-line bg-card shadow-soft">
          <table className="w-full min-w-[640px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-line text-left">
                <th className="px-6 py-4 font-medium text-mute">对比项</th>
                <th className="bg-clay-soft/60 px-6 py-4 font-medium text-clay-deep">
                  CC Rent
                </th>
                <th className="px-6 py-4 font-medium text-mute">自己折腾</th>
                <th className="px-6 py-4 font-medium text-mute">市面上买号</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.label} className="border-b border-line last:border-0">
                  <td className="px-6 py-4 text-ink/80">{row.label}</td>
                  <td className="bg-clay-soft/60 px-6 py-4">
                    <span className="flex items-center gap-2 font-medium text-ink">
                      {row.ccGood && <IconCheck className="h-4 w-4 shrink-0 text-clay-deep" />}
                      {row.cc}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-mute">{row.self}</td>
                  <td className="px-6 py-4 text-mute">{row.other}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

/* ---------- 设备详情 ---------- */

function Device() {
  const specs = [
    "Mac mini M4 芯片，16G 内存 + 256G 存储",
    "预装 Claude Code、Claude 桌面版、Homebrew、Xcode",
    "家庭宽带独立 IP，带宽 500–1000M",
    "UU 远程 / ToDesk 接入，交付即可用",
  ];
  return (
    <section id="device" className="bg-cream">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="设备与环境"
              title="一台只属于你的 Mac mini M4"
              lead="每台设备独立交付、独立 IP，不做共享。六个地区可选，付款后一周内交付。"
            />
            <ul className="mt-8 space-y-3.5">
              {specs.map((s) => (
                <li key={s} className="flex items-start gap-3 text-[15px] text-ink/85">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-clay-soft">
                    <IconCheck className="h-3 w-3 text-clay-deep" />
                  </span>
                  {s}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <p className="text-xs font-medium uppercase tracking-widest text-mute">
                可选地区
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {site.regions.map((r) => (
                  <span
                    key={r}
                    className="flex items-center gap-1.5 rounded-full border border-line bg-card px-3.5 py-1.5 text-sm text-ink/80"
                  >
                    <IconGlobe className="h-3.5 w-3.5 text-clay" />
                    {r}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Mac mini 视觉卡片 */}
          <div className="relative">
            <div className="rounded-3xl border border-line bg-card p-8 shadow-lift sm:p-10">
              <div className="mx-auto w-56 rounded-2xl bg-gradient-to-b from-[#3c3b36] to-[#23221e] p-5 shadow-xl">
                <div className="rounded-xl border border-white/10 bg-[#181713] p-4">
                  <div className="flex items-center justify-between">
                    <Sparkle className="h-4.5 w-4.5 text-clay" />
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-clay" />
                  </div>
                  <p className="mt-7 font-mono text-[10px] leading-relaxed text-cream/50">
                    ssh cc-rent ~
                  </p>
                  <p className="mt-0.5 font-mono text-xs text-cream">
                    $ claude <span className="ml-0.5 inline-block h-3 w-1.5 animate-pulse bg-clay align-middle" />
                  </p>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-3 gap-2 text-center">
                {["M4 芯片", "16G 内存", "256G 存储"].map((s) => (
                  <div key={s} className="rounded-xl border border-line bg-paper px-2 py-2.5 text-xs text-ink/80">
                    {s}
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -right-3 -top-4 flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-xs font-medium text-cream shadow-lift sm:-right-5">
              <IconZap className="h-3.5 w-3.5 text-clay" />
              家庭宽带独立 IP
            </div>
            <div className="absolute -bottom-4 -left-3 flex items-center gap-2 rounded-full bg-clay px-4 py-2 text-xs font-medium text-cream shadow-lift sm:-left-5">
              <IconTerminal className="h-3.5 w-3.5" />
              Claude Code 预装
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

/* ---------- 使用场景 ---------- */

function UseCases() {
  const cases = [
    {
      icon: IconMoon,
      title: "整夜长任务",
      desc: "机器 7×24 常驻在线，长任务、大批量生成、长时间对话，放心跑一整夜。",
    },
    {
      icon: IconCalendar,
      title: "定时自动化",
      desc: "launchd / cron 定时任务随便挂，定时跑脚本、抓数据、出报告，全自动。",
    },
    {
      icon: IconApple,
      title: "iOS 与 macOS 构建",
      desc: "需要 Xcode 环境？远程一台 Mac，编译、打包、上架一条龙。",
    },
    {
      icon: IconGlobe,
      title: "固定环境，随处接入",
      desc: "环境只配一次，家里、公司、出差路上，远程接入就是同一台机器。",
    },
  ];
  return (
    <section id="scenarios" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <SectionHeading
          center
          eyebrow="使用场景"
          title="一台远程 Mac，能做的事很多"
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cases.map((c) => (
            <div
              key={c.title}
              className="group rounded-2xl border border-line bg-card p-6 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-lift"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-ink text-clay transition-colors group-hover:bg-clay group-hover:text-cream">
                <c.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-serif text-lg font-medium text-ink">{c.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-mute">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- 账号保障 ---------- */

function Guarantee() {
  const points = [
    "Max 5x / 20x 套餐，正常使用下账号被封无限次免费更换",
    "设备故障或换号期间的停机时间，服务期自动顺延",
    "独享设备、独享 IP，不与任何人共用",
  ];
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <div className="relative overflow-hidden rounded-3xl bg-ink px-8 py-14 sm:px-14">
          <Sparkle className="absolute -right-10 -top-10 h-48 w-48 animate-twinkle text-clay/15" />
          <div className="relative grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-clay">
                <IconShield className="h-4 w-4" />
                账号保障
              </p>
              <h2 className="mt-4 font-serif text-3xl font-medium leading-tight tracking-tight text-cream sm:text-4xl">
                正常使用，
                <span className="text-clay">无限换号</span>
              </h2>
              <p className="mt-4 text-base leading-relaxed text-cream/60">
                买号最怕封号跑路。CC Rent 的 Max 套餐承诺：只要你是正常写代码、
                正常对话，账号出了问题我们负责换到能用力止。
              </p>
            </div>
            <ul className="space-y-4">
              {points.map((p) => (
                <li
                  key={p}
                  className="flex items-start gap-3.5 rounded-2xl border border-cream/10 bg-cream/5 p-4.5 text-[15px] leading-relaxed text-cream/85"
                >
                  <IconInfinity className="mt-0.5 h-5 w-5 shrink-0 text-clay" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- 价格 ---------- */

const billingNotes = [
  "服务期从交付当天开始计算，付款后的等待时间不计费",
  "按月计费，不自动续费，到期不续自动结束",
  "服务期内不支持中途退款，到期后设备重置、数据清除，请提前备份",
  "中途仅支持 Max 5x 升级至 Max 20x，按剩余天数折算差价",
  "设备故障或换号造成的停机时间，服务期顺延",
  "支持开发票，需额外加收税点，具体税率咨询客服",
  "本批设备已售罄，现接受预订，付款后一周内交付",
];

function Pricing() {
  return (
    <section id="pricing" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <SectionHeading
          center
          eyebrow="价格"
          title="简单透明的三档价格"
          lead="按月计费，不自动续费。所有套餐均为独享设备 + 独立 IP，交付即用。"
        />
        <div className="mt-12">
          <PricingCards />
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <SectionHeading eyebrow="计费说明" title="下单前请了解" />
            <p className="mt-4 text-sm leading-relaxed text-mute">
              本批设备已售罄，目前接受预订，付款后一周内交付。有任何疑问，
              随时通过 Telegram {site.tg.handle} 联系客服。
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {billingNotes.map((note) => (
              <li
                key={note}
                className="flex items-start gap-2.5 rounded-xl border border-line bg-card p-4 text-sm leading-relaxed text-ink/85 shadow-soft"
              >
                <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-clay-deep" />
                {note}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------- 四步流程 ---------- */

function Process() {
  const steps = [
    {
      n: "01",
      icon: IconSend,
      title: "联系客服",
      desc: "Telegram 联系，说明需求与用量。",
    },
    {
      n: "02",
      icon: IconGlobe,
      title: "选择地区与套餐",
      desc: "六个地区可选，四档套餐按需选择。",
    },
    {
      n: "03",
      icon: IconMonitor,
      title: "付款锁定",
      desc: "支付宝 / 微信支付 / 对公转账均可。",
    },
    {
      n: "04",
      icon: IconRocket,
      title: "远程交付，开机即用",
      desc: "一周内交付，远程接入即可开始写代码。",
    },
  ];
  return (
    <section id="process" className="bg-cream">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <SectionHeading
          center
          eyebrow="使用流程"
          title="四步，从下单到开写"
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div
              key={s.n}
              className="relative rounded-2xl border border-line bg-card p-6 shadow-soft"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-clay-soft text-clay-deep">
                  <s.icon className="h-5 w-5" />
                </span>
                <span className="font-serif text-3xl font-semibold text-line">{s.n}</span>
              </div>
              <h3 className="mt-5 font-serif text-lg font-medium text-ink">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-mute">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- 帮助中心 ---------- */

function Help() {
  const quickstart = [
    {
      icon: IconMonitor,
      title: "安装远程工具",
      desc: "交付时客服会提供 UU 远程 / ToDesk 的账号与接入方式，在你的电脑或手机上安装对应客户端。",
    },
    {
      icon: IconRocket,
      title: "远程接入 Mac mini",
      desc: "登录后即可看到你的 Mac mini，桌面操作、文件传输都和本地一样。",
    },
    {
      icon: IconTerminal,
      title: "打开终端，运行 claude",
      desc: "打开「终端」App，输入 claude 回车，Claude Code 立即启动；首次使用按提示登录账号（自带或套餐提供的 Max 账号）。",
    },
    {
      icon: IconSend,
      title: "遇到问题找客服",
      desc: `Telegram ${site.tg.handle}，7×24 在线，设备故障与账号问题第一时间处理。`,
    },
  ];
  const tips = [
    "关闭自动睡眠：系统设置 → 电池/节能 → 关闭自动睡眠，长任务更稳",
    "定时任务：用 launchd 或 cron 挂后台任务，机器 7×24 在线",
    "文件传输：远程工具自带传输，也可用 scp / rsync 走 SSH",
    "到期提醒：到期前客服会提醒续费，不续费请提前备份数据",
  ];
  return (
    <section id="help" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <SectionHeading
          center
          eyebrow="帮助中心"
          title="从交付到上手，只要四步"
          lead="设备交付后，跟着下面的步骤操作，十分钟内跑起你的第一个 Claude Code 任务。"
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {quickstart.map((s, i) => (
            <div key={s.title} className="relative rounded-2xl border border-line bg-card p-6 shadow-soft">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-ink text-clay">
                  <s.icon className="h-5 w-5" />
                </span>
                <span className="font-serif text-2xl font-semibold text-line">
                  0{i + 1}
                </span>
              </div>
              <h3 className="mt-4 font-serif text-lg font-medium text-ink">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-mute">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 max-w-3xl">
          <h3 className="font-serif text-xl font-medium text-ink">让长任务跑得更稳</h3>
          <ul className="mt-6 space-y-4">
            {tips.map((t) => (
              <li
                key={t}
                className="flex items-start gap-3 rounded-2xl border border-line bg-card p-5 text-[15px] leading-relaxed text-ink/85 shadow-soft"
              >
                <Sparkle className="mt-1 h-4 w-4 shrink-0 text-clay" />
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */

function Faq() {
  return (
    <section id="faq" className="bg-cream">
      <div className="mx-auto max-w-3xl px-6 py-20 sm:py-24">
        <SectionHeading
          center
          eyebrow="常见问题"
          title="你想问的，这里都有"
          lead="没有找到答案？直接通过 Telegram 联系客服，7×24 在线。"
        />
        <div className="mt-12">
          <FaqList />
        </div>
      </div>
    </section>
  );
}

/* ---------- 政策 ---------- */

function Policies() {
  const policies = [
    {
      id: "terms",
      title: "服务条款",
      items: [
        "提供海外 Mac mini 设备租用及可选配的 Claude 账号服务，全部套餐均为独享设备与独立 IP",
        "Max 套餐账号仅限正常使用；禁止共享、转售账号及违反 Anthropic 条款的行为，违规封号不在免费更换范围内",
        "服务期自交付当日起算，按月计费不自动续费；中途仅支持 Max 5x 升级 Max 20x，差价按剩余天数折算",
        "用户自行备份数据，到期后设备重置清除；因故障或不可抗力停机，服务期顺延",
      ],
    },
    {
      id: "refund",
      title: "退款政策",
      items: [
        "付款后、交付前，可随时申请全额退款",
        "服务期内不支持中途退款，不续费即自动到期",
        "设备故障、换号造成的停机时间服务期顺延；设备连续故障无法修复，按剩余天数退款",
        "正常使用下账号被封无限次更换，不支持因此退款；退款按原渠道 3–7 个工作日到账",
      ],
    },
    {
      id: "privacy",
      title: "隐私政策",
      items: [
        "仅收集用于交付与客服的联系方式；付款由支付宝、微信支付等持牌渠道处理",
        "不收集、不监控你在设备上的代码、对话与文件，服务到期后整机重置清除",
        "信息仅用于交付服务、售后支持与开票，不用于任何其他目的",
        "对本政策有疑问，可通过 Telegram @aidenchen100 联系",
      ],
    },
  ];
  return (
    <section id="policies" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <SectionHeading
          center
          eyebrow="政策"
          title="透明公开，白纸黑字"
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {policies.map((p) => (
            <div
              key={p.id}
              id={p.id}
              className="rounded-2xl border border-line bg-card p-6 shadow-soft"
            >
              <h3 className="flex items-center gap-2.5 font-serif text-lg font-medium text-ink">
                <Sparkle className="h-4 w-4 text-clay" />
                {p.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {p.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-mute">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-clay" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <PainPoints />
      <Comparison />
      <Device />
      <UseCases />
      <Guarantee />
      <Pricing />
      <Process />
      <Help />
      <Faq />
      <Policies />
      <ContactCta />
    </>
  );
}
