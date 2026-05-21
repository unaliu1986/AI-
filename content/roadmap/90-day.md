# 90 天完整路线图 · Phase 3：Agent 协作与业务级系统

**前置**：完成 Phase 1（30天）+ Phase 2 前半（至 Day 60）。

**阶段目标**：搭建可运行的「AI Agent + ComfyUI + 跨境自动化」个人业务系统。

**每日上限**：2 小时

---

## 三阶段全景

```
Day 1────30────60────90
  │ Phase 1 │ Phase 2 │ Phase 3 │
  │ 基础自动化 │ 网页+工程化 │ Agent+系统 │
```

| 阶段 | 天数 | 核心能力 | 毕业产出 |
|------|------|----------|----------|
| Phase 1 | 1–30 | AI协作、文件、API、Debug | 小工具 |
| Phase 2 | 31–60 | Playwright、Queue、Retry、Log | 可靠流水线 |
| Phase 3 | 61–90 | ComfyUI、Agent、系统集成 | 业务级系统 |

---

## Day 61–90 排期

### Week 11：ComfyUI 工作流

| 天 | 模块 | 今日任务 |
|----|------|----------|
| D61 | [M18](../modules/phase-2/M18-comfyui-api.md) | ComfyUI API 提交 workflow |
| D62 | M18 | 轮询任务状态，下载 output |
| D63 | M18 | workflow JSON 参数化（换输入图） |
| D64 | M18 | 本地/云端 ComfyUI 双环境配置 |
| D65 | M18 | **里程碑**：批量 10 张图白底处理 |

### Week 12：AI Agent 基础

| 天 | 模块 | 今日任务 |
|----|------|----------|
| D66 | [M19](../modules/phase-3/M19-agent-architecture.md) | Agent 四件套：Goal/Tools/Memory/Rules |
| D67 | M19 | 用 Cursor Agent 完成多文件改动 |
| D68 | M19 | 定义 Tool：调用你的 Python 脚本 |
| D69 | M19 | 限制 Agent 权限与 scope |
| D70 | M19 | **验收**：Agent 自动跑通 file watcher |

### Week 13：多 Agent 协作

| 天 | 模块 | 今日任务 |
|----|------|----------|
| D71 | [M20](../modules/phase-3/M20-multi-agent.md) | 角色拆分：采集 Agent / 处理 Agent / 上传 Agent |
| D72 | M20 | 消息格式：Agent 间 JSON  handoff |
| D73 | M20 | 人工审核节点（Human-in-the-loop） |
| D74 | M20 | Hermes / Cursor 协作选型 |
| D75 | M20 | **里程碑**：两 Agent 串联 PoC |

### Week 14：ComfyUI 批处理流水线

| 天 | 模块 | 今日任务 |
|----|------|----------|
| D76 | [M21](../modules/phase-3/M21-comfy-pipeline.md) | 注册表驱动：SKU → job_id 映射 |
| D77 | M21 | 去重（hash）再进 GPU 队列 |
| D78 | M21 | output 对名与归档 |
| D79 | M21 | run_report 失败汇总 |
| D80 | M21 | **验收 P06**：50 SKU 批处理闭环 |

### Week 15：系统集成

| 天 | 模块 | 今日任务 |
|----|------|----------|
| D81 | [M22](../modules/phase-3/M22-image-automation.md) | 文件监听 → ComfyUI → 上传 串联 |
| D82 | M22 | Playwright 上传 + ComfyUI 出图 并行 |
| D83 | [M23](../modules/phase-3/M23-orchestration.md) | 主编排器：一个入口启动全流程 |
| D84 | M23 | 配置中心：一个 YAML 管全部 |
| D85 | M23 | 异常告警（邮件/钉钉/飞书 webhook） |

### Week 16：部署与毕业

| 天 | 模块 | 今日任务 |
|----|------|----------|
| D86 | [M24](../modules/phase-3/M24-deploy-monitor.md) | 开机自启 / 定时 / 健康检查 |
| D87 | M24 | 日志轮转与磁盘清理 |
| D88 | M24 | 备份与回滚策略 |
| D89 | [M25](../modules/phase-3/M25-capstone-90d.md) | 90天毕业系统最终联调 |
| D90 | 毕业 | **P07 答辩**：演示 + 文档 + 运维手册 |

---

## 90 天毕业标准

- [ ] 1 条端到端业务流水线（输入 → 处理 → 输出 → 报告）
- [ ] 含 Queue + Retry + Logging + 配置分离
- [ ] 至少集成 2 种能力：网页自动化 / ComfyUI / Agent
- [ ] 有 README、运维说明、lessons_learned 合集
- [ ] 能在 15 分钟内向他人演示全流程

---

## 全部模块索引

### Phase 1（M01–M10）
见 [30-day.md](30-day.md)

### Phase 2（M11–M18）
见 [60-day.md](60-day.md)

### Phase 3（M19–M25）
| 模块 | 主题 |
|------|------|
| M19 | Agent 架构 |
| M20 | 多 Agent 协作 |
| M21 | ComfyUI 批处理流水线 |
| M22 | 图片自动化串联 |
| M23 | 系统集成与编排 |
| M24 | 部署与监控 |
| M25 | 90天毕业项目 |

---

## 项目索引

| 项目 | 阶段 | 说明 |
|------|------|------|
| [P01](../projects/P01-folder-butler.md) | Phase 1 | 文件夹管家 |
| [P02](../projects/P02-capstone-30d.md) | Phase 1 | 30天毕业 |
| [P03](../projects/P03-web-scraper.md) | Phase 2 | 网页数据采集 |
| [P04](../projects/P04-task-queue.md) | Phase 2 | 任务队列 |
| [P05](../projects/P05-listing-assistant.md) | Phase 2 | 上架辅助 |
| [P06](../projects/P06-comfy-batch.md) | Phase 3 | ComfyUI 批处理 |
| [P07](../projects/P07-capstone-90d.md) | Phase 3 | 90天毕业系统 |
