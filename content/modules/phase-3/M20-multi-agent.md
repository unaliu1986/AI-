# M20 · 多 Agent 协作

**Day 71–75 | Phase 3**

## 1. 项目目标
拆分：Collector Agent（Playwright 采集）→ Processor Agent（ComfyUI）→ Uploader Agent（上传）；JSON handoff。

## 2. 会学到什么
- 角色边界与 handoff 格式
- Human-in-the-loop 审核 CSV
- Cursor vs Hermes 分工

## 3. AI 负责什么
- handoff schema：`{batch_id, items[], stage, status}`
- 各 Agent 的 system prompt
- 主编排 shell / Python

## 4. 人需要理解什么
多 Agent = 流水线上的不同工位，通过「工单 JSON」交接。

## 5. 代码理解点
- [ ] `stage: collected | processed | uploaded`
- [ ] 审核：`await human_approve(batch_id)`

## 6. 工程思维
- **接口稳定**：改 Collector 不影响 Uploader
- **可单测**：每个 Agent 可独立 dry-run

## 7. 推荐提问
```
设计三 Agent 流水线：
1. collector 输出 data/batches/{id}/raw.csv
2. processor 读 raw，调 ComfyUI，写 processed/
3. uploader 读 processed，Playwright 上传
handoff 用 batch_manifest.json。
加 human_review 门禁 before upload。
```

## 8. 常见 AI 错误
| 错误 | 表现 | 你怎么发现 |
|------|------|------------|
| 共享可变状态 | 竞态 | 同一任务被两个 Agent 各做一遍 |
| 无 batch_id | 无法追溯 | log 里分不出这是第几批跑的 |

## 9. 验收标准
- [ ] 两 Agent 串联 PoC 跑通 5 SKU
- [ ] manifest 可追溯全程

## 10. 作业
画 mermaid 序列图贴 README。

---
