# P03 · 网页数据采集器

**阶段**：Phase 2 | **模块**：M11–M13 | **Day 42**

## 背景
竞品价格、榜单、后台导出 —— 需要稳定抓取结构化数据。

## 目标
Playwright 登录（或 mock 页）→ 采集 N 条 → CSV；失败截图。

## 输入 / 输出

| 输入 | 输出 |
|------|------|
| targets.csv (url 或 asin) | data/scrape_YYYYMMDD.csv |
| storage/auth.json（可选） | artifacts/*.png on fail |

## 验收清单

- [ ] 10 条数据字段完整
- [ ] 单条失败不中断批次
- [ ] 每条有 scraped_at 时间戳
- [ ] 连续 3 次运行结果可 diff

## 合规提醒
仅抓你有权访问的数据；遵守 robots 与平台 ToS；课程用 mock 站练习。
