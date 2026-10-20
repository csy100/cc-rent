import { readFileSync } from "node:fs";
import path from "node:path";

// 预压缩的世界地图（源自 @svg-maps/world，MIT 协议）
const RAW = readFileSync(
  path.join(process.cwd(), "src/components/world.svg"),
  "utf8",
);

// 标记坐标经几何验证：每个点均落在对应国家轮廓内部（群岛国家取最大陆地深点）
type MarkerDef = {
  id: string;
  label: string;
  x: number;
  y: number;
  labelPos: "top" | "bottom" | "left" | "right";
};

const markers: MarkerDef[] = [
  { id: "us", label: "北美", x: 241.0, y: 394.0, labelPos: "top" },
  { id: "jp", label: "日本", x: 875.2, y: 326.9, labelPos: "top" },
  { id: "kr", label: "韩国", x: 833.7, y: 353.0, labelPos: "bottom" },
  { id: "sg", label: "新加坡", x: 766.0, y: 459.0, labelPos: "right" },
  { id: "my", label: "马来西亚", x: 763.0, y: 449.0, labelPos: "left" },
  { id: "id", label: "印尼", x: 766.6, y: 483.4, labelPos: "right" },
];

const TEXT_STYLE =
  'font-size="13" font-family="-apple-system, PingFang SC, Hiragino Sans GB, Microsoft YaHei, sans-serif" font-weight="600" fill="#141413" stroke="#f5f4ef" stroke-width="3.5" paint-order="stroke" stroke-linejoin="round"';

const markerSvg = markers
  .map((m, i) => {
    const label =
      m.labelPos === "top"
        ? `<text x="${m.x.toFixed(1)}" y="${(m.y - 20).toFixed(1)}" text-anchor="middle" ${TEXT_STYLE}>${m.label}</text>`
        : m.labelPos === "bottom"
          ? `<text x="${m.x.toFixed(1)}" y="${(m.y + 28).toFixed(1)}" text-anchor="middle" ${TEXT_STYLE}>${m.label}</text>`
          : m.labelPos === "left"
            ? `<text x="${(m.x - 22).toFixed(1)}" y="${(m.y + 4.5).toFixed(1)}" text-anchor="end" ${TEXT_STYLE}>${m.label}</text>`
            : `<text x="${(m.x + 22).toFixed(1)}" y="${(m.y + 4.5).toFixed(1)}" ${TEXT_STYLE}>${m.label}</text>`;
    return `<g>
  <circle cx="${m.x.toFixed(1)}" cy="${m.y.toFixed(1)}" r="4.5" fill="#d97757" stroke="#f5f4ef" stroke-width="1.8"/>
  <circle cx="${m.x.toFixed(1)}" cy="${m.y.toFixed(1)}" r="4.5" fill="#d97757">
    <animate attributeName="r" values="4.5;12;4.5" dur="2.6s" begin="${(i * 0.45).toFixed(2)}s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0.45;0;0.45" dur="2.6s" begin="${(i * 0.45).toFixed(2)}s" repeatCount="indefinite"/>
  </circle>
  ${label}
</g>`;
  })
  .join("\n");

// 地图 + 内嵌标记（随 SVG 一起缩放，任意容器比例下都对齐）
export const WORLD_MAP_SVG = RAW.replace("</svg>", markerSvg + "\n</svg>");

/** 主视觉区背景版地图：六个可交付地区淡陶土色高亮，标记带脉冲动画 */
export function HeroWorldMap() {
  return (
    <div
      aria-hidden
      className="h-full w-full [&_svg]:h-full [&_svg]:w-full [&_path]:fill-cream-deep [&_path]:stroke-paper [&_path]:[stroke-width:0.5] [&_#us]:fill-clay-soft [&_#jp]:fill-clay-soft [&_#kr]:fill-clay-soft [&_#sg]:fill-clay-soft [&_#my]:fill-clay-soft [&_#id]:fill-clay-soft"
      dangerouslySetInnerHTML={{ __html: WORLD_MAP_SVG }}
    />
  );
}
