import type { Metadata } from "next";
import "./globals.css";
import "./yenai-intro.css";
import "./ip-notebook.css";
import "./portfolio-interactions.css";
import "./lookbook.css";
import "./account-collage.css";
import "./note-cards.css";
import "./toolbox.css";
import "./ip-selected-work.css";
import "./page-structure.css";
import { assetPath } from "./asset-path";

export const metadata: Metadata = {
  icons: { icon: assetPath("/favicon.svg") },
  title: "詹依娜 · 个人作品集",
  description: "詹依娜的个人作品集：在拾佳文化实习、服务 IP 是亮亮 / 涂芷靓的经历，山河集品牌号的内容策划与运营经历，以及个人穿搭账号「椰奶没喝饱_」和饰品店铺「摇滚椰奶冻」。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <head><style>{`@font-face{font-family:NotebookScript;src:url(${assetPath("/fonts/script.woff2")}) format("woff2");font-style:normal;font-weight:400;font-display:swap}@font-face{font-family:HuangYou;src:url(${assetPath("/fonts/huangyou.woff2")}) format("woff2");font-style:normal;font-weight:400;font-display:swap}`}</style></head>
      <body>{children}</body>
    </html>
  );
}
