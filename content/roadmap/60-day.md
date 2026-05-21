# 60 天路线图 · Phase 2：网页自动化与工程化流水线

**前置**：完成 [30-day.md](30-day.md) Phase 1。

**阶段目标**：交付带 Queue / Retry / Logging 的网页自动化流水线，覆盖跨境电商常见场景。

**每日上限**：2 小时

---

## 总览

| 周 | 主题 | 模块 | 综合项目 |
|----|------|------|----------|
| W5–W6 | Playwright 网页自动化 | M11–M13 | P03 后台数据采集 |
| W7–W8 | Queue / Retry / Log | M14–M16 | P04 可靠任务队列 |
| W9–W10 | 跨境电商场景 | M17–M18 | P05 上架辅助流水线 |

---

## Day 31–60 排期

### Week 5：Playwright 入门

| 天 | 模块 | 今日任务 |
|----|------|----------|
| D31 | [M11](../modules/phase-2/M11-playwright-intro.md) | 安装 Playwright，打开页面截图 |
| D32 | M11 | 定位元素：文本/角色/CSS |
| D33 | M11 | 填写表单 + 点击提交 |
| D34 | M11 | 等待策略：networkidle vs selector |
| D35 | M11 | **里程碑**：自动登录测试站（mock） |

### Week 6：登录态与上传

| 天 | 模块 | 今日任务 |
|----|------|----------|
| D36 | [M12](../modules/phase-2/M12-session-cookies.md) | 保存/加载 Cookie 复用登录 |
| D37 | M12 | 处理弹窗、iframe、新标签页 |
| D38 | M12 | 会话过期检测与重新登录 |
| D39 | [M13](../modules/phase-2/M13-upload-forms.md) | 文件上传自动化 |
| D40 | M13 | 批量填表（CSV 驱动） |
| D41 | M13 | 截图取证 + 失败 HTML 快照 |
| D42 | M13 | **验收 P03**：采集 10 条商品数据到 CSV |

### Week 7：队列系统

| 天 | 模块 | 今日任务 |
|----|------|----------|
| D43 | [M14](../modules/phase-2/M14-queue-design.md) | 设计任务队列 JSON 格式 |
| D44 | M14 | 实现 pending → running → done 状态机 |
| D45 | M14 | 并发控制：一次只跑 N 个浏览器 |
| D46 | M14 | 断点续跑：重启后跳过已完成 |
| D47 | [M15](../modules/phase-2/M15-retry-backoff.md) | 指数退避重试 3 次 |
| D48 | M15 | 区分可重试/不可重试错误 |
| D49 | M15 | 死信队列：失败任务单独存放 |

### Week 8：日志与可观测

| 天 | 模块 | 今日任务 |
|----|------|----------|
| D50 | [M16](../modules/phase-2/M16-structured-logging.md) | JSON 结构化日志 |
| D51 | M16 | 关联 trace_id 追踪单次任务 |
| D52 | M16 | 每日汇总报告（成功/失败/耗时） |
| D53 | M14–M16 | **验收 P04**：100 任务队列稳定跑完 |
| D54 | 复盘 | 审查 Phase 2 前半程代码 |
| D55 | 复盘 | 更新 prompts/ 与 lessons_learned/ |
| D56 | 缓冲 | 补完未通过验收的模块 |

### Week 9：跨境电商自动化

| 天 | 模块 | 今日任务 |
|----|------|----------|
| D57 | [M17](../modules/phase-2/M17-ecommerce-scenarios.md) | 场景选型：库存同步 / 竞品监控 / 报表 |
| D58 | M17 | SKU 映射表设计与维护 |
| D59 | M17 | 多店铺配置隔离 |
| D60 | M17 | **Phase 2 中期检查**：P03+P04 合并演示 |

---

## 下一步

Day 61–90（ComfyUI + Agent + 系统集成）进入 **Phase 3**，详细排期见 [90-day.md](90-day.md)。

---

## Phase 2（至 Day 60）毕业标准

- [ ] Playwright 脚本可 headless 稳定运行
- [ ] 任务队列支持断点续跑
- [ ] 失败任务有 retry + 死信 + 日志
- [ ] 完成 P03、P04 验收
- [ ] 至少 1 个跨境电商真实场景 PoC

---

## 模块索引（Phase 2）

- M11 Playwright 入门
- M12 登录态与 Cookie
- M13 表单与上传
- M14 队列设计
- M15 重试与退避
- M16 结构化日志
- M17 跨境电商场景
- M18 ComfyUI API（Day 61 起，见 90-day）
