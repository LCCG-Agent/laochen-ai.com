"""
初始化数据库脚本 V3.2
包含所有新增字段的完整示例数据
"""

from datetime import date
from sqlalchemy.orm import Session
from app.database import SessionLocal, engine, Base
from app.models import Case, Research, Strategy, Competitor, Resource

# 删除旧表，重新创建
print("删除旧数据表...")
Base.metadata.drop_all(bind=engine)
print("创建新数据表...")
Base.metadata.create_all(bind=engine)

def init_cases(db: Session):
    """初始化案例数据 - 时间轴展示"""
    cases_data = [
        {
            "date": date(2026, 1, 31),
            "is_new": True,
            "priority": "high",
            "title": "ChatGPT驱动报表自动化革命",
            "description": "麦肯锡最新报告显示，使用ChatGPT等AI工具可将数据分析师的报表制作时间缩短87%。某大型电商企业试点后，周报生成时间从2小时缩短至15分钟。",
            "tools": ["ChatGPT", "Excel", "Python"],
            "category": "AI应用案例",
            "impact": "效率提升87%",
            "source": "麦肯锡研究报告",
            "authority_level": "权威",
            "source_url": "https://www.mckinsey.com/ai-report-2026"
        },
        {
            "date": date(2026, 1, 30),
            "is_new": True,
            "priority": "high",
            "title": "Claude助力复杂SQL查询生成",
            "description": "德勤数字化团队发布案例研究，Claude在SQL查询生成任务中准确率达92%，显著降低了数据提取的技术门槛，业务团队可以3分钟完成原本需要半天的数据查询工作。",
            "tools": ["Claude", "PostgreSQL"],
            "category": "技术创新",
            "impact": "查询速度提升300%",
            "source": "德勤数字化报告",
            "authority_level": "权威",
            "source_url": "https://www2.deloitte.com/ai-insights"
        },
        {
            "date": date(2026, 1, 28),
            "is_new": True,
            "priority": "medium",
            "title": "AI驱动的数据清洗自动化",
            "description": "TechCrunch报道，一家创业公司使用AI工具将Excel数据清洗流程自动化，从手工操作变为一键完成，节省80%的数据准备时间。",
            "tools": ["ChatGPT", "Python", "Pandas"],
            "category": "效率工具",
            "impact": "时间节省80%",
            "source": "TechCrunch",
            "authority_level": "一般",
            "source_url": "https://techcrunch.com/2026/ai-data-cleaning"
        },
        {
            "date": date(2026, 1, 25),
            "is_new": False,
            "priority": "medium",
            "title": "Copilot加速数据分析代码编写",
            "description": "GitHub官方数据显示，使用Copilot的数据分析师编码速度提升55%，代码质量同步提升，bug率降低40%。",
            "tools": ["GitHub Copilot", "Python"],
            "category": "开发工具",
            "impact": "开发效率提升55%",
            "source": "GitHub官方博客",
            "authority_level": "官方",
            "source_url": "https://github.blog/copilot-data-analysis"
        },
        {
            "date": date(2026, 1, 20),
            "is_new": False,
            "priority": "low",
            "title": "AI辅助数据可视化设计",
            "description": "某数据团队分享经验，使用AI工具自动生成图表配色方案和布局建议，报告美观度显著提升，客户满意度提高30%。",
            "tools": ["ChatGPT", "Tableau"],
            "category": "可视化",
            "impact": "满意度提升30%",
            "source": "Medium博客",
            "authority_level": "一般",
            "source_url": "https://medium.com/ai-visualization"
        },
    ]
    
    for data in cases_data:
        case = Case(**data)
        db.add(case)
    
    db.commit()
    print(f"[OK] 初始化了 {len(cases_data)} 条案例数据")

def init_research(db: Session):
    """初始化调研洞察数据 - 展示分析模型"""
    research_data = [
        {
            "date": date(2026, 1, 31),
            "is_new": True,
            "importance": "high",
            "title": "AI工具市场SWOT分析",
            "description": "基于麦肯锡咨询框架，对当前AI工具在数据分析领域的应用进行全面SWOT分析，识别机遇与挑战。",
            "framework": "SWOT",
            "source": "麦肯锡",
            "model_type": "SWOT",
            "model_data": {
                "S": ["技术成熟度高", "成本持续下降", "易于上手"],
                "W": ["数据隐私风险", "依赖网络连接", "结果需要验证"],
                "O": ["市场需求旺盛", "政策支持力度大", "应用场景丰富"],
                "T": ["监管政策不确定", "技术更新快", "竞争激烈"]
            },
            "source_institution": "麦肯锡咨询",
            "category": "行业分析"
        },
        {
            "date": date(2026, 1, 28),
            "is_new": True,
            "importance": "high",
            "title": "数据分析师技能演进趋势",
            "description": "德勤发布的数据分析师技能模型显示，AI时代数据分析师需要具备的五大核心能力及其重要性评分。",
            "framework": "能力模型",
            "source": "德勤",
            "model_type": "雷达模型",
            "model_data": {
                "ai_tools": 9,
                "data_thinking": 8,
                "business_sense": 9,
                "coding": 7,
                "communication": 8
            },
            "source_institution": "德勤咨询",
            "category": "市场调研"
        },
        {
            "date": date(2026, 1, 25),
            "is_new": False,
            "importance": "medium",
            "title": "AI辅助分析PEST分析",
            "description": "从政治、经济、社会、技术四个维度分析AI工具在企业应用的外部环境因素。",
            "framework": "PEST",
            "source": "波士顿咨询",
            "model_type": "PEST",
            "model_data": {
                "P": ["政府支持AI发展", "数据安全法规"],
                "E": ["AI工具价格下降", "ROI显著提升"],
                "S": ["企业数字化转型加速", "员工接受度提高"],
                "T": ["大模型技术突破", "API生态完善"]
            },
            "source_institution": "波士顿咨询",
            "category": "趋势研判"
        },
    ]
    
    for data in research_data:
        research = Research(**data)
        db.add(research)
    
    db.commit()
    print(f"[OK] 初始化了 {len(research_data)} 条调研数据")

def init_strategies(db: Session):
    """初始化沙盘推演数据 - 展示行动路径"""
    strategies_data = [
        {
            "date": date(2026, 1, 31),
            "is_new": True,
            "recommendation": "high",
            "difficulty": "入门",
            "title": "数据分析师AI转型3个月路径",
            "description": "为传统数据分析师设计的AI工具掌握路径，从零基础到熟练应用，预计3个月完成转型。",
            "duration": "3个月",
            "steps": ["学习AI工具基础", "实战项目练习", "建立工作流程"],
            "action_path": [
                {
                    "step": 1,
                    "title": "第1个月：工具学习期",
                    "action": "掌握ChatGPT、Claude基础用法，学习提示词工程",
                    "attention": "注意保护数据隐私，不要上传敏感信息",
                    "industry_case": "某互联网公司数据团队1个月完成全员AI工具培训"
                },
                {
                    "step": 2,
                    "title": "第2个月：实战应用期",
                    "action": "在真实工作场景中使用AI工具，建立个人提示词库",
                    "attention": "需要验证AI输出结果的准确性",
                    "industry_case": "某金融公司分析师使用AI后报表效率提升60%"
                },
                {
                    "step": 3,
                    "title": "第3个月：流程优化期",
                    "action": "建立标准化AI辅助工作流程，培训团队成员",
                    "attention": "关注团队协作和知识沉淀",
                    "industry_case": "某电商团队建立AI工具最佳实践手册"
                }
            ],
            "industry_comparison": "对标案例：某大型互联网公司数据部门3个月完成AI转型，团队效率提升70%",
            "key_milestones": [
                {"month": 1, "milestone": "完成工具学习", "indicator": "能独立使用3种以上AI工具"},
                {"month": 2, "milestone": "实战项目落地", "indicator": "至少完成5个真实工作任务"},
                {"month": 3, "milestone": "流程标准化", "indicator": "建立团队AI工作流程文档"}
            ],
            "timeline_months": 3
        },
        {
            "date": date(2026, 1, 28),
            "is_new": True,
            "recommendation": "high",
            "difficulty": "中级",
            "title": "企业数据分析AI化改造6个月计划",
            "description": "面向企业数据团队的全面AI化改造路径，包括工具选型、培训、落地、优化全流程。",
            "duration": "6个月",
            "steps": ["需求调研", "工具选型", "试点培训", "全面推广", "持续优化"],
            "action_path": [
                {
                    "step": 1,
                    "title": "第1-2个月：调研与选型",
                    "action": "评估团队现状，选择合适的AI工具组合",
                    "attention": "考虑成本、安全性、易用性",
                    "industry_case": "某制造业企业选择了ChatGPT+自建模型的混合方案"
                },
                {
                    "step": 2,
                    "title": "第3-4个月：试点推广",
                    "action": "选择1-2个核心业务场景试点，验证效果",
                    "attention": "建立效果评估指标体系",
                    "industry_case": "某零售企业从销售数据分析场景开始试点"
                },
                {
                    "step": 3,
                    "title": "第5-6个月：全面落地",
                    "action": "推广到所有数据分析场景，建立最佳实践",
                    "attention": "关注长期ROI和团队能力提升",
                    "industry_case": "某金融机构6个月后数据分析效率提升85%"
                }
            ],
            "industry_comparison": "对标案例：某世界500强企业6个月完成数据团队AI改造，年节省成本500万元",
            "key_milestones": [
                {"month": 2, "milestone": "完成工具选型", "indicator": "确定AI工具技术方案"},
                {"month": 4, "milestone": "试点验证完成", "indicator": "ROI达到预期目标"},
                {"month": 6, "milestone": "全面推广完成", "indicator": "80%以上员工熟练使用"}
            ],
            "timeline_months": 6
        },
    ]
    
    for data in strategies_data:
        strategy = Strategy(**data)
        db.add(strategy)
    
    db.commit()
    print(f"[OK] 初始化了 {len(strategies_data)} 条策略数据")

def init_competitors(db: Session):
    """初始化竞品雷达数据 - 展示竞品分析"""
    competitors_data = [
        {
            "date": date(2026, 1, 31),
            "is_new": True,
            "attention_level": "high",
            "title": "ChatGPT Plus推出数据分析专业版",
            "description": "OpenAI发布ChatGPT数据分析专业版，新增Python代码执行、数据可视化、Excel直连等功能，对传统BI工具形成直接竞争。",
            "company": "OpenAI",
            "impact": "可能替代部分轻量级数据分析工具，对数据分析工作流产生重大影响。",
            "source": "OpenAI官方博客",
            "product_name": "ChatGPT Data Analyst Pro",
            "risk_level": "高",
            "counter_strategy": "关注其API能力，考虑集成到现有工作流；加强团队培训，将其作为辅助工具而非替代工具；重点关注数据安全和隐私保护。",
            "key_metrics": {
                "功能完整度": 9,
                "易用性": 9,
                "价格竞争力": 7,
                "数据安全": 6,
                "生态完整度": 8,
                "技术先进性": 9
            },
            "update_frequency": "每周"
        },
        {
            "date": date(2026, 1, 28),
            "is_new": True,
            "attention_level": "high",
            "title": "Google推出Gemini Analytics",
            "description": "Google发布专门面向数据分析的Gemini Analytics，深度集成BigQuery和Google Workspace，支持多模态数据分析。",
            "company": "Google",
            "impact": "对企业级数据分析市场形成冲击，尤其是已使用Google云服务的客户。",
            "source": "Google Cloud Blog",
            "product_name": "Gemini Analytics",
            "risk_level": "高",
            "counter_strategy": "评估与现有技术栈的兼容性；关注其企业版的定价策略；考虑多云策略，避免供应商锁定。",
            "key_metrics": {
                "功能完整度": 8,
                "易用性": 8,
                "价格竞争力": 6,
                "数据安全": 8,
                "生态完整度": 9,
                "技术先进性": 8
            },
            "update_frequency": "每月"
        },
        {
            "date": date(2026, 1, 25),
            "is_new": False,
            "attention_level": "medium",
            "title": "Tableau推出AI Copilot功能",
            "description": "Salesforce旗下Tableau发布AI Copilot，用自然语言生成可视化图表，降低BI工具使用门槛。",
            "company": "Salesforce",
            "impact": "传统BI工具开始AI化转型，对数据分析师的技能要求发生变化。",
            "source": "Tableau官网",
            "product_name": "Tableau AI Copilot",
            "risk_level": "中",
            "counter_strategy": "跟踪其AI功能的成熟度；评估是否需要升级现有Tableau许可；培训团队使用新功能。",
            "key_metrics": {
                "功能完整度": 7,
                "易用性": 8,
                "价格竞争力": 5,
                "数据安全": 9,
                "生态完整度": 8,
                "技术先进性": 7
            },
            "update_frequency": "每季度"
        },
    ]
    
    for data in competitors_data:
        competitor = Competitor(**data)
        db.add(competitor)
    
    db.commit()
    print(f"[OK] 初始化了 {len(competitors_data)} 条竞品数据")

def init_resources(db: Session):
    """初始化资源数据"""
    resources_data = [
        {
            "name": "数据分析报告生成提示词",
            "problem": "解决问题:数据报告撰写耗时长,缺乏结构化思路",
            "description": "输入原始数据和分析目标,AI自动生成结构化报告,包含数据摘要、趋势分析、洞察结论和建议。适用于周报、月报、专项分析报告。",
            "type": "提示词模板",
            "format": "TXT",
            "category": "prompts",
            "is_example": True
        },
        {
            "name": "Excel数据清洗VBA宏",
            "problem": "解决问题:重复的数据清洗工作效率低,容易出错",
            "description": "一键清洗Excel数据:去除空白行/列、统一格式、处理缺失值、删除重复项。支持批量处理多个工作表,大幅提升数据准备效率。",
            "type": "VBA代码",
            "format": "VBA",
            "category": "code",
            "is_example": True
        },
        {
            "name": "SQL查询优化提示词",
            "problem": "解决问题:复杂SQL查询编写困难,优化思路不清晰",
            "description": "通过AI辅助生成和优化SQL查询语句,支持多表关联、复杂筛选条件、性能优化建议。适用于PostgreSQL、MySQL、SQL Server等主流数据库。",
            "type": "提示词模板",
            "format": "TXT",
            "category": "prompts",
            "is_example": True
        },
    ]
    
    for data in resources_data:
        resource = Resource(**data)
        db.add(resource)
    
    db.commit()
    print(f"[OK] 初始化了 {len(resources_data)} 条资源数据")

def main():
    """主函数"""
    print("开始初始化数据库 V3.2...")
    print("=" * 50)
    
    db = SessionLocal()
    try:
        init_cases(db)
        init_research(db)
        init_strategies(db)
        init_competitors(db)
        init_resources(db)
        print("=" * 50)
        print("数据库初始化完成！所有数据已导入。")
    except Exception as e:
        print(f"初始化失败: {e}")
        import traceback
        traceback.print_exc()
        db.rollback()
    finally:
        db.close()

if __name__ == "__main__":
    main()
