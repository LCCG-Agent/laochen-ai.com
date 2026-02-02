import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "老陈AI工坊 | 数据分析自动化知识分享",
  description: "分享数分自动化体系、Skills/MCP/Agent工具清单、Office Agent插件使用方法。从道法术器，系统化提升数据处理效率。",
  keywords: "数据分析,Office Agent,Excel插件,Skills,MCP,Agent工作流,数分自动化,老陈",
  authors: [{ name: "老陈" }],
  creator: "老陈",
  publisher: "老陈AI工坊",
  metadataBase: new URL("https://laochen-ai.com"),
  icons: {
    icon: [
      { url: "/logo.jpg", sizes: "any" },
      { url: "/logo.jpg", type: "image/jpeg" },
    ],
    apple: [
      { url: "/logo.jpg" },
    ],
  },
  openGraph: {
    title: "老陈AI工坊 | 数据分析自动化知识分享",
    description: "分享数分自动化体系、工具清单、插件使用方法",
    url: "https://laochen-ai.com",
    siteName: "老陈AI工坊",
    locale: "zh_CN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "老陈AI工坊 | 数据分析自动化知识分享",
    description: "分享数分自动化体系、工具清单、插件使用方法",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">
        {/* 背景光晕效果 */}
        <div className="bg-glow-top" aria-hidden="true" />
        
        {/* 主内容 */}
        {children}
      </body>
    </html>
  );
}
