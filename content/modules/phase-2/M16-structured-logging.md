# M16 · 结构化 Logging

**Day 50–52 | Phase 2**

## 1. 项目目标
JSON 行日志 + trace_id 贯穿单任务；每日汇总 success/fail/duration。

## 2. 会学到什么
- structlog 或 json logger
- trace_id 上下文
- 日报脚本 aggregate_logs.py

## 3. AI 负责什么
- logging 中间件注入 trace_id
- 汇总脚本

## 4. 人需要理解什么
trace_id = 快递单号，一次任务全程同一个号。

## 5. 代码理解点
- [ ] `{"event":"task_done","trace_id":"...","duration_ms":123}`

## 6. 工程思维
- **机器可读 log**：方便以后接 Grafana/脚本分析

## 7. 推荐提问
```
改用 JSON logging，每条含 timestamp, level, trace_id, event, **fields。
worker 开始任务时 uuid trace_id。
aggregate_logs.py 读 logs/*.jsonl 输出 daily_report.md。
```

## 8. 常见 AI 错误
| 错误 | 表现 | 你怎么发现 |
|------|------|------------|
| 混用 print | 无法 parse | 用 `grep` 搜不到 `trace_id`，日志混成一团 |

## 9. 验收标准
- [ ] 同一 task 所有 log 同 trace_id
- [ ] daily_report 数字与 manual 计数一致

## 10. 作业
**P04 完整验收**：100 任务 + retry + log。

---
