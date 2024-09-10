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
    tags: ["开发", "全文搜索引擎", "数据库", "Outlook接入", "UI/UX"],
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
      <header className="flex justify-between items-center mb-6">
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
      </header>
      {/* <h1 className="text-3xl font-bold mb-6 text-center">Project Rankings</h1> */}
      <ResponsiveMasonry columnsCountBreakPoints={{ 500: 1, 840: 2, 1024: 3 }}>
        <Masonry gutter="10px">
          {projects.map((project) => (
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
