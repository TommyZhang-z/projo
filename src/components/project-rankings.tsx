"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

// Define the Project type
type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  tier: number;
};

// Sample project data
const projects: Project[] = [
  {
    id: "PRJ001",
    title: "ICPC 组队平台",
    description:
      "一个中心化的系统，允许没有固定团队的学生注册并被匹配到具有类似经验的学生。",
    tags: ["开发", "数据库", "Outlook接入", "UI/UX"],
    tier: 0,
  },
  {
    id: "PRJ009",
    title: "UNSW Finance: 办公桌预约",
    description:
      "一个办公桌预约系统，允许用户通过俯瞰图去预约校园内的办公桌。(对前端要求会相对高点)",
    tags: ["开发", "数据库", "实时通信", "Outlook接入", "UI/UX"],
    tier: 1,
  },
  {
    id: "PRJ015",
    title: "自主身份证明 (Self-Sovereign Identity)",
    description:
      "一个的自主身份证明系统，允许用户拥有自己的身份证明，而不是由政府或公司控制。（需要对安全技术有一定的了解，比如密码学）",
    tags: ["网络安全", "端到端", "开发", "移动端开发", "密码学"],
    tier: 2,
  },
  {
    id: "PRJ028",
    title: "自适应在线化学教程",
    description:
      "一个自适应化学教学实验室在线教程的开发，允许学生以自己选择的节奏高效的学习。（网页分析的部分可能会有点难）",
    tags: ["开发", "数据库", "数据可视化", "Moodle接入", "网页分析", "UI/UX"],
    tier: 2,
  },
  {
    id: "PRJ029",
    title: "HDR主题文件管理系统",
    // Produce a web application that maintains an overview and history of research interests andpublished documents for HDR students at CSE.
    description:
      "制作一个网页应用，维护一个关于研究兴趣和已发表文档的概览和历史记录，供CSE的博士生使用。（虽然是管理系统，但是有踩雷de）",
    tags: ["开发", "数据库"],
    tier: 1,
  },
  {
    id: "PRJ031",
    title: "自动化团队评估系统",
    description:
      "一个帮助Course Admin和 Lecturer 管理小组内成员冲突并公平地调整个人贡献的系统。",
    tags: ["开发", "数据库", "Github接入", "Jira接入", "Outlook接入", "UI/UX"],
    tier: 0,
  },
  {
    id: "PRJ036",
    title: "UNSW Igive | 50周年后的更新",
    description:
      "帮助新南CSE重新制作一个Igive系统 来取代目前的Give系统，帮助老师和学生自动化的提交作业和批改作业。（意义非凡，青史留名）",
    tags: ["开发", "数据库", "脚本"],
    tier: 0,
  },
  {
    id: "PRJ040",
    title: "转换数据集为知识图谱 (Knowledge Graph)",
    description:
      "一个允许用户录入数据集，定义关系，然后转换为知识图谱的系统。（有可能踩雷）",
    tags: ["开发", "数据库", "Neo4j", "数据可视化"],
    tier: 1,
  },
  {
    id: "PRJ041",
    title: "CO2 排量查询",
    description:
      "一个允许用户查询CO2排量的系统。原本的系统是一个Excel表格，现在需要一个现代化的系统来取代它。允许用户输入材料的种类和数量来计算CO2的排放量。新的系统需要包含图表和表格。",
    tags: ["开发", "数据库", "数据可视化", "UI/UX"],
    tier: 1,
  },
  {
    id: "PRJ046",
    title: "项目竞赛平台",
    description:
      "开发一个支持项目竞赛管理的网络应用程序，帮助组织者成功举办活动并让参与者有效参与。（工作量较大，而且对开发流程和质量比较严格）",
    tags: ["开发", "数据库", "微服务", "CI/CD", "实时聊天", "UI/UX"],
    tier: 1,
  },
  {
    id: "PRJ047",
    title: "项目-专家 匹配系统",
    description:
      "开发一个网页平台，匹配公司发布的项目，和有意愿参与项目的个人。（难度简单，意义不明，感觉像凑数发福利的）",
    tags: ["开发", "数据库", "CI/CD", "UI/UX"],
    tier: 0,
  },
  {
    id: "PRJ072",
    // Crowd-Sourced Online Data Annotation Platform
    title: "众包在线数据标注平台",
    description:
      "开发一个众包在线数据标注平台，允许用户上传数据集，而free lancer可以通过完成标注任务来赚取报酬。",
    tags: ["开发", "数据库", "UI/UX", "付款"],
    tier: 1,
  },
];

export function ProjectRankings() {
  const { theme, setTheme } = useTheme();
  const getTierColor = (tier: number) => {
    switch (tier) {
      case 0:
        return "bg-tier0-gradient text-white hover:opacity-90 transition-opacity";
      case 1:
        return "bg-tier1 text-white hover:bg-tier1/90 transition-colors";
      case 2:
        return "bg-tier2 text-black hover:bg-tier2/90 transition-colors";
      default:
        return "bg-gray-500 text-white hover:bg-gray-500/90 transition-colors";
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="sticky top-0 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 pb-6">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold">Project Rankings</h1>
          </div>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </header>
      <Card className="w-full bg-[url('/cover.jpg')] dark:bg-[url('/cover-dark.jpg')] bg-cover bg-center mb-[10px] transition-opacity text-center animate-bg-size border-none py-12 md:py-24">
        <CardHeader>
          <CardTitle className="text-[max(28px,min(4vw,60px))] font-bold">
            Atlassian Forge Apps
          </CardTitle>
          <CardDescription>伟大无需多言</CardDescription>
        </CardHeader>
      </Card>
      <ResponsiveMasonry columnsCountBreakPoints={{ 500: 1, 840: 2, 1024: 3 }}>
        <Masonry gutter="10px">
          {projects
            .sort((a, b) => a.tier - b.tier)
            .map((project) => (
              <Card
                key={project.id}
                className="flex flex-col break-inside-avoid"
                // style={{ gridRowEnd: getSpanValue(project) }}
              >
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <Badge variant="outline">{project.id}</Badge>
                    <Badge
                      className={`${getTierColor(
                        project.tier
                      )} border-none select-none`}
                    >
                      Tier {project.tier}
                    </Badge>
                  </div>
                  <CardTitle className="mt-2">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
}
