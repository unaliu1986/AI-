# M04 · API 调用与数据导出

**对应天数**：Day 8–10  
**阶段**：Phase 1

---

## 1. 项目目标

调用公开 REST API（如 exchangerate-api 或 Open-Meteo），解析 JSON，导出 CSV 报表。

---

## 2. 会学到什么

- HTTP GET 请求与 status code
- JSON 结构阅读与字段提取
- CSV 写入与编码（UTF-8-sig 给 Excel）

---

## 3. AI 负责什么

- `requests.get` + timeout + headers
- JSON → Python dict → CSV rows
- 重试与错误消息

---

## 4. 人需要理解什么

| 概念 | 通俗解释 |
|------|----------|
| **API** | 网站提供的「机器专用窗口」，返回结构化数据 |
| **JSON** | 像嵌套表格的文本格式 |
| **status 200** | 成功；404 找不到；429 请求太频繁 |

---

## 5. 必须掌握的代码理解点

- [ ] `response.json()` 与 `response.status_code`
- [ ] `response.raise_for_status()` 作用
- [ ] CSV `writerow` / `DictWriter`

---

## 6. 必须掌握的工程思维

- **契约先行**：先打印原始 JSON 样本再写解析
- **失败可恢复**：网络错误不丢已抓数据
- **频率限制**：尊重 API rate limit

---

## 7. 推荐提问方式

```
调用 https://api.exchangerate-api.com/v4/latest/USD
提取 rates 里 EUR, JPY, CNY，写入 reports/rates_YYYYMMDD.csv。
要求：timeout=10，失败重试 3 次，日志记录每次请求。
API Key 从环境变量 EXCHANGE_API_KEY 读取（即使此 API 免费也练习 .env）。
附：请给出一条 curl 命令让我先手动验证 API 可用。
```

---

## 8. 常见 AI 错误

| 错误 | 表现 | 你怎么发现 |
|------|------|------|
| 幻觉 API 字段 | KeyError | 对照 curl 原始 JSON |
| 编造 endpoint | 404 | 要求附官方文档 URL |
| Excel 乱码 | CSV 无 BOM | 用 utf-8-sig |

---

## 9. 验收标准

- [ ] 手动 curl 与脚本结果一致
- [ ] 断网时脚本不崩溃，有清晰错误 log
- [ ] CSV 用 Excel 打开中文/符号正常

---

## 10. 今日作业与延伸

**作业**：合并 M03 日志统计 + M04 汇率，生成「每日 inbox 报告」。

**延伸**：跨境场景——抓 Amazon 竞品公开页需登录时，记录为 Phase 2 Playwright 需求。

---

## 关联

- 下一模块：[M05-config-env.md](M05-config-env.md)
