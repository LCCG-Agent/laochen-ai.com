"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  ChevronDown,
  HelpCircle,
  Download,
  Settings,
  FileText,
  AlertCircle,
  Mail,
  MessageCircle
} from "lucide-react";

/**
 * FAQ页面 - 常见问题
 */
export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // FAQ分类
  const faqCategories = [
    {
      id: "getting-started",
      title: "新手入门",
      icon: HelpCircle,
      color: "var(--accent-blue)",
      bgColor: "rgba(59,130,246,0.15)",
      questions: [
        {
          q: "什么是老陈AI工坊？",
          a: "老陈AI工坊是一个专注数据分析自动化的平台。我们提供体系框架（理念）、标准规范（规范）、工具技巧（方法）、实用工具（工具）四层体系的解决方案，帮助你用一句话完成数据分析任务。",
        },
        {
          q: "我需要有编程基础吗？",
          a: "完全不需要！老陈AI工坊的设计理念就是\"一句话，我帮你\"。你只需要用自然语言描述你想做的分析，系统会自动完成所有技术工作。",
        },
        {
          q: "如何开始使用？",
          a: "1. 首先下载安装 Office Agent（免费）\n2. 从模板库选择你需要的模板并下载\n3. 在 Office Agent 中导入模板\n4. 输入一句话指令，开始自动化分析\n\n建议新手从「一键周报模板」或「数据清洗模板」开始体验。",
        },
        {
          q: "Office Agent 是什么？",
          a: "Office Agent 是模板运行的基础环境，是一个桌面应用程序。它可以连接你的 Excel/WPS 等办公软件，执行模板中定义的自动化流程。Office Agent 完全免费，支持 Windows 系统。",
        },
      ],
    },
    {
      id: "templates",
      title: "模板相关",
      icon: Download,
      color: "var(--accent-emerald)",
      bgColor: "rgba(16,185,129,0.15)",
      questions: [
        {
          q: "模板是免费的吗？",
          a: "是的，目前所有模板都是免费的。我们希望更多人能体验到数据分析自动化的便利。未来可能会推出一些高级模板，但基础模板将永久免费。",
        },
        {
          q: "如何安装模板？",
          a: "1. 在模板库页面找到你需要的模板\n2. 点击\"下载模板\"按钮\n3. 打开 Office Agent，点击\"导入模板\"\n4. 选择下载的模板文件\n5. 导入成功后即可使用",
        },
        {
          q: "模板支持哪些数据格式？",
          a: "模板主要支持 Excel (.xlsx, .xls) 和 CSV 格式。部分模板还支持从数据库或 API 获取数据。具体支持的格式请查看每个模板的详情页说明。",
        },
        {
          q: "可以自定义模板吗？",
          a: "可以！每个模板都支持一定程度的自定义。你可以修改输出格式、调整分析逻辑、添加自己的指令等。详细的自定义教程请查看「方法」栏目中的相关文章。",
        },
      ],
    },
    {
      id: "usage",
      title: "使用问题",
      icon: Settings,
      color: "var(--accent-amber)",
      bgColor: "rgba(245,158,11,0.15)",
      questions: [
        {
          q: "指令怎么写才能被正确理解？",
          a: "指令要清晰描述你想要的结果，例如：\n- ✅ \"按月份汇总销售额并生成折线图\"\n- ✅ \"去除重复行，统一日期格式为YYYY-MM-DD\"\n- ❌ \"分析一下这个数据\"（太模糊）\n\n每个模板详情页都提供了示例指令，建议参考使用。",
        },
        {
          q: "执行出错了怎么办？",
          a: "1. 检查数据格式是否符合要求（查看模板说明）\n2. 确认指令描述是否清晰准确\n3. 查看错误提示信息，通常会说明问题原因\n4. 如果仍无法解决，可以联系我们获取帮助",
        },
        {
          q: "处理大数据量会很慢吗？",
          a: "取决于数据量和分析复杂度。一般来说：\n- 1万行以内：几秒到1分钟\n- 1-10万行：1-5分钟\n- 10万行以上：可能需要更长时间\n\n我们在持续优化性能，大部分场景下的体验都是比较流畅的。",
        },
        {
          q: "数据会被上传到云端吗？安全吗？",
          a: "你的数据安全是我们最重视的事情：\n- 所有数据处理都在本地完成，不会上传到云端\n- 模板执行过程中不会访问任何外部服务器\n- Office Agent 不会收集任何用户数据\n\n你可以放心使用，数据始终在你的电脑上。",
        },
      ],
    },
    {
      id: "framework",
      title: "框架学习",
      icon: FileText,
      color: "var(--accent-purple)",
      bgColor: "rgba(139,92,246,0.15)",
      questions: [
        {
          q: "四层体系是什么意思？",
          a: "这是我们对数据分析自动化能力的分层：\n- 理念：方法论和体系框架，帮你建立正确的思维方式\n- 规范：标准化的规则和流程，确保分析工作有章可循\n- 方法：具体的工具和技巧，可以直接拿来使用\n- 工具：Office Agent插件，开箱即用\n\n四者相辅相成，从理念到工具逐步落地。",
        },
        {
          q: "应该从哪里开始学习？",
          a: "推荐的学习路径：\n1. 先下载一个模板体验一下自动化的感觉\n2. 阅读\"理念\"栏目的体系框架文章，建立整体认知\n3. 根据需要学习\"方法\"栏目中的具体工具\n4. 逐步扩展使用更多模板\n\n详细的学习路线请查看\"理念\"栏目中的\"推荐学习路线\"部分。",
        },
        {
          q: "如何建立自己的数据分析自动化体系？",
          a: "核心是6个模块：\n1. 目标：明确你要交付什么\n2. 数据源：确定数据从哪来\n3. 标准化：统一字段和口径\n4. 自动化流程：搭建处理链路\n5. 质量控制：建立检查机制\n6. 复用资产：沉淀模板和经验\n\n详细内容请查看\"理念\"栏目的\"数分自动化体系地图\"。",
        },
      ],
    },
    {
      id: "troubleshooting",
      title: "故障排查",
      icon: AlertCircle,
      color: "var(--accent-rose)",
      bgColor: "rgba(244,63,94,0.15)",
      questions: [
        {
          q: "Office Agent 无法启动",
          a: "可能的原因和解决方法：\n1. 确认系统版本：需要 Windows 10 或更高版本\n2. 检查是否被杀毒软件拦截：添加信任或白名单\n3. 尝试以管理员身份运行\n4. 重新下载安装最新版本\n\n如果仍无法解决，请联系我们并提供错误截图。",
        },
        {
          q: "模板导入失败",
          a: "请检查：\n1. 模板文件是否完整（重新下载试试）\n2. Office Agent 是否是最新版本\n3. 是否有其他程序正在使用该文件\n4. 文件路径中是否包含特殊字符\n\n通常重新下载模板文件可以解决问题。",
        },
        {
          q: "执行过程中程序卡住",
          a: "1. 等待几分钟，大数据量可能需要更长时间\n2. 检查任务管理器中的 CPU/内存使用情况\n3. 如果确认卡死，可以强制结束进程后重试\n4. 尝试减少数据量或分批处理\n\n如果频繁卡住，请联系我们排查。",
        },
        {
          q: "输出结果不符合预期",
          a: "可能的原因：\n1. 指令描述不够精确：参考模板示例修改指令\n2. 数据格式问题：检查是否符合模板要求\n3. 数据质量问题：先用清洗模板处理数据\n4. 模板版本问题：更新到最新版本\n\n欢迎在交流群反馈，我们会持续优化。",
        },
      ],
    },
  ];

  // 计算全局索引
  let globalIndex = 0;
  const flatQuestions = faqCategories.flatMap(cat => 
    cat.questions.map(q => ({ ...q, category: cat.title, index: globalIndex++ }))
  );

  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              常见问题
            </h1>
            <p className="text-xl text-[var(--text-secondary)] leading-relaxed">
              找不到答案？欢迎联系我们，我们很乐意帮助你。
            </p>
          </div>
        </div>
      </section>

      {/* FAQ列表 */}
      <section className="section bg-[var(--bg-secondary)]">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            {faqCategories.map((category) => (
              <div key={category.id} id={category.id} className="mb-12 last:mb-0">
                {/* 分类标题 */}
                <div className="flex items-center gap-3 mb-6">
                  <div 
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: category.bgColor }}
                  >
                    <category.icon className="w-5 h-5" style={{ color: category.color }} />
                  </div>
                  <h2 className="text-xl font-bold">{category.title}</h2>
                </div>

                {/* 问题列表 */}
                <div className="space-y-3">
                  {category.questions.map((item, index) => {
                    const currentGlobalIndex = flatQuestions.findIndex(
                      q => q.category === category.title && q.q === item.q
                    );
                    const isOpen = openIndex === currentGlobalIndex;

                    return (
                      <div key={index} className="card">
                        <button
                          onClick={() => setOpenIndex(isOpen ? null : currentGlobalIndex)}
                          className="w-full flex items-center justify-between text-left cursor-pointer"
                        >
                          <span className="font-medium pr-4">{item.q}</span>
                          <ChevronDown 
                            className={`w-5 h-5 shrink-0 text-[var(--text-muted)] transition-transform ${
                              isOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        {isOpen && (
                          <div className="mt-4 pt-4 border-t border-[var(--border-secondary)]">
                            <p className="text-[var(--text-secondary)] whitespace-pre-line">
                              {item.a}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 联系我们 */}
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="card text-center py-12">
              <h2 className="text-2xl font-bold mb-4">还有其他问题？</h2>
              <p className="text-[var(--text-tertiary)] mb-8">
                如果上面没有找到你的问题答案，欢迎通过以下方式联系我们
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link 
                  href="mailto:contact@laochen-ai.com"
                  className="btn btn-primary"
                >
                  <Mail className="w-5 h-5" />
                  <span>发送邮件</span>
                </Link>
                <button className="btn btn-secondary">
                  <MessageCircle className="w-5 h-5" />
                  <span>加入交流群</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
