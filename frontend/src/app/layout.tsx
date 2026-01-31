import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "老陈AI工坊 | 数据分析师如何用AI做分析",
  description: "专注数据分析师的AI应用实践。涵盖AI工具案例、市场调研、最佳路径、竞品监控、资源工具等。帮助数据分析师提升效率,用AI赋能数据分析工作。",
  keywords: "数据分析,AI工具,数据分析师,ChatGPT,Claude,AI赋能,数据分析案例,市场调研,竞品分析,AI提示词",
  authors: [{ name: "老陈" }],
  creator: "老陈",
  publisher: "老陈AI工坊",
  metadataBase: new URL("https://laochen-ai.com"),
  openGraph: {
    title: "老陈AI工坊 | 数据分析师如何用AI做分析",
    description: "专注数据分析师的AI应用实践。提供AI工具案例、市场调研、最佳路径、竞品监控、资源工具。",
    url: "https://laochen-ai.com",
    siteName: "老陈AI工坊",
    locale: "zh_CN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "老陈AI工坊 | 数据分析师如何用AI做分析",
    description: "数据分析师的AI应用实践平台",
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
    <html lang="zh-CN" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
