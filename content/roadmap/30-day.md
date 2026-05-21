# 30 天路线图 · Phase 1：AI 协作与基础自动化

**阶段目标**：能独立用 AI 交付「文件 + API」类自动化小工具，并具备基础代码审查与 Debug 能力。

**每日上限**：2 小时

---

## 总览

| 周 | 主题 | 模块 | 综合项目 |
|----|------|------|----------|
| W1 | AI 工作台 + 读代码 | M01–M02 | — |
| W2 | 文件自动化 | M03–M04 | P01 文件夹管家 |
| W3 | API + 配置 + 日志 | M05–M07 | — |
| W4 | 审查/Debug + 毕业 | M08–M10 | P02 30天毕业项目 |

---

## 按天排期

### Week 1：建立 AI 协作习惯

| 天 | 模块 | 今日任务 | 时间 |
|----|------|----------|------|
| D1 | [M01](../modules/phase-1/M01-ai-workbench.md) | 安装 Cursor/Python，完成第一个 Hello 自动化 | 2h |
| D2 | M01 | 配置 .cursor/rules，写个人「AI 协作规则」 | 2h |
| D3 | [M02](../modules/phase-1/M02-read-ai-code.md) | 让 AI 写脚本，你逐行标注「懂/不懂」 | 2h |
| D4 | M02 | 完成代码审查清单练习（3 个小脚本） | 2h |
| D5 | [M03](../modules/phase-1/M03-file-watcher.md) | 监听 Downloads，新文件自动分类 | 2h |
| D6 | M03 | 加重命名规则 + 日志输出 | 2h |
| D7 | M03 | **验收 P01 里程碑 1**：文件夹自动整理跑通 | 2h |

### Week 2：文件与数据

| 天 | 模块 | 今日任务 | 时间 |
|----|------|----------|------|
| D8 | [M04](../modules/phase-1/M04-api-basics.md) | 调用公开 API（汇率/天气），保存 JSON | 2h |
| D9 | M04 | 解析 JSON，导出 CSV | 2h |
| D10 | M04 | 加错误处理：网络失败时不崩溃 | 2h |
| D11 | [M05](../modules/phase-1/M05-config-env.md) | 把 API Key 移出代码，用 .env | 2h |
| D12 | M05 | 多环境配置（dev/prod 路径） | 2h |
| D13 | [M06](../modules/phase-1/M06-logging-basics.md) | 统一 logging 格式 | 2h |
| D14 | M06 | **验收 P01 完整版**：整理 + API 报表合并 | 2h |

### Week 3：批处理与定时

| 天 | 模块 | 今日任务 | 时间 |
|----|------|----------|------|
| D15 | [M07](../modules/phase-1/M07-schedule-batch.md) | 批量重命名 100 个 SKU 图片 | 2h |
| D16 | M07 | Windows 任务计划 / cron 定时运行 | 2h |
| D17 | M07 | 干跑模式（dry-run）+ 操作前备份 | 2h |
| D18 | [M08](../modules/phase-1/M08-code-review.md) | 用审查模板审 AI 生成的 M03–M07 代码 | 2h |
| D19 | M08 | 故意引入 3 个 bug，练习定位 | 2h |
| D20 | M08 | 写 5 条 lessons_learned | 2h |
| D21 | 复盘 | 整理个人 Prompt 库（至少 10 条） | 2h |

### Week 4：Debug 与毕业项目

| 天 | 模块 | 今日任务 | 时间 |
|----|------|----------|------|
| D22 | [M09](../modules/phase-1/M09-debug-playbook.md) | 读 traceback，用 AI 辅助定位 | 2h |
| D23 | M09 | 最小复现 + 二分排查 | 2h |
| D24 | M09 | 修复一个「AI 写错路径」的真实 bug | 2h |
| D25 | [M10](../modules/phase-1/M10-capstone-30d.md) | 选定毕业项目场景，写需求文档 | 2h |
| D26 | M10 | AI 生成 v0.1，你审查架构 | 2h |
| D27 | M10 | 迭代 v0.2：加日志 + 配置 | 2h |
| D28 | M10 | 迭代 v0.3：加 dry-run + 验收测试 | 2h |
| D29 | M10 | 文档化：README + 使用说明 | 2h |
| D30 | 毕业 | **P02 答辩式自测**：按验收清单全部通过 | 2h |

---

## Phase 1 毕业标准

- [ ] 至少 1 个可重复运行的自动化脚本（非一次性）
- [ ] 能向 AI 描述需求并产出可审查的 diff
- [ ] 能独立读懂：import、函数、if/for、try/except、文件读写
- [ ] 有 10+ 条个人 lessons_learned
- [ ] 完成 [P02 30天毕业项目](../projects/P02-capstone-30d.md)

---

## 下一阶段

完成 Phase 1 后进入 [`60-day.md`](60-day.md)（Day 31 起：Playwright + 工程化流水线）。
