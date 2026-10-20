export const site = {
  name: "CC Rent",
  tagline: "海外 Mac mini 租用，Claude Code 开机即用",
  description:
    "独享海外 Mac mini M4，家庭宽带独立 IP，预装 Claude Code 与 Claude 桌面版，Claude Max 5x/20x 可选，7×24 客服支持。",
  soldOut: true,
  tg: { handle: "@aidenchen100", url: "https://t.me/aidenchen100" },
  regions: ["北美", "日本", "韩国", "新加坡", "马来西亚", "印尼"],
  nav: [
    { label: "首页", href: "#top" },
    { label: "价格", href: "#pricing" },
    { label: "常见问题", href: "#faq" },
    { label: "帮助中心", href: "#help" },
  ],
};

export const tierCommonFeatures = [
  "独享 Mac mini M4（16G 内存 + 256G 存储）",
  "家庭宽带独立 IP，带宽 500–1000M",
  "预装 Claude Code + Claude 桌面版",
  "预装 Homebrew、Xcode 等常用工具",
  "UU 远程 / ToDesk 随时接入",
  "7×24 客服支持",
];

export type Tier = {
  id: string;
  name: string;
  price: number | string;
  unit: string;
  desc: string;
  badge?: string;
  featured?: boolean;
  features: string[];
  cta: string;
};

export const tiers: Tier[] = [
  {
    id: "mac",
    name: "仅 Mac 租赁",
    price: 999,
    unit: "¥ / 月",
    desc: "自带 Claude 账号，只租设备与网络环境",
    features: [...tierCommonFeatures, "使用自己的 Claude 账号登录"],
    cta: "联系预订",
  },
  {
    id: "max5",
    name: "Mac + Max 5x",
    price: 1888,
    unit: "¥ / 月",
    desc: "含 Claude Max 5x 账号，约为 Pro 的 5 倍用量",
    badge: "最受欢迎",
    featured: true,
    features: [
      ...tierCommonFeatures,
      "含 Claude Max 5x 账号",
      "正常使用封号无限更换",
    ],
    cta: "联系预订",
  },
  {
    id: "max20",
    name: "Mac + Max 20x",
    price: 3888,
    unit: "¥ / 月",
    desc: "含 Claude Max 20x 账号，约为 Pro 的 20 倍用量",
    features: [
      ...tierCommonFeatures,
      "含 Claude Max 20x 账号",
      "正常使用封号无限更换",
      "优先客服通道",
    ],
    cta: "联系预订",
  },
  {
    id: "team",
    name: "多台 / 团队",
    price: "面议",
    unit: "",
    desc: "多台 Mac 与账号打包，按台数与时长计价",
    features: [
      "每台均为独享 Mac mini M4",
      "独立 IP，可指定地区",
      "可自带或统一提供 Max 账号",
      "支持对公转账与发票",
    ],
    cta: "联系客服",
  },
];

export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "海外 Mac mini 租用一个月多少钱？可以直接用 Claude 吗？",
    a: "共三档：¥999/月（仅 Mac，自带账号）、¥1,888/月（含 Claude Max 5x）、¥3,888/月（含 Claude Max 20x）。所有套餐均为独享 Mac mini M4 + 家庭宽带独立 IP，预装 Claude Code 与 Claude 桌面版，交付即可用。",
  },
  {
    q: "我已经有 Claude 账号，能只租 Mac 吗？",
    a: "可以，选择 ¥999/月的「仅 Mac 租赁」。设备与网络环境与含号套餐完全一致，只是不含 Claude 账号；你用自己的账号登录即可，账号的订阅状态由你自己负责。",
  },
  {
    q: "套餐应该怎么选？",
    a: "已有账号选「仅 Mac 租赁」；需要提供账号、用量不确定选 Max 5x；每天长时间写代码推荐 Max 20x；需要多台机器选团队方案，价格面议。",
  },
  {
    q: "服务期从什么时候开始计算？",
    a: "从交付当天开始计算，付款后等待设备准备的时间不计入服务期。",
  },
  {
    q: "中途可以升级套餐吗？",
    a: "可以，仅支持 Max 5x 升级至 Max 20x，按剩余天数折算差价，具体金额由客服核算。",
  },
  {
    q: "支持开发票吗？税点多少？",
    a: "支持，发票需额外加收税点，具体税率请咨询客服。",
  },
  {
    q: "到期不想续费怎么办？",
    a: "不续费即可，无需任何操作，服务自动到期。服务期内不支持中途退款；到期后设备会被重置、数据清除，请提前备份。",
  },
  {
    q: "多台机器有优惠吗？",
    a: "有，根据台数与时长单独议价，请直接联系客服。",
  },
  {
    q: "如何远程操作这台 Mac？",
    a: "通过 UU 远程或 ToDesk 接入，交付时会提供账号与连接方式；Claude Code 也可以在你本地终端通过 SSH 使用。",
  },
  {
    q: "支持哪些付款方式？",
    a: "支持支付宝、微信支付，也支持对公转账；如需通过淘宝或闲鱼交易，请联系客服。",
  },
  {
    q: "账号会被封吗？封了怎么办？",
    a: "使用 Max 套餐在正常使用下（正常写代码、正常对话）如账号被封，无限次免费更换；设备故障或换号造成的停机时间会顺延服务期。",
  },
  {
    q: "现在下单多久能用上？",
    a: "本批设备已售罄，目前接受预订，付款后一周内交付。后续批次到货后会按付款顺序安排。",
  },
];
