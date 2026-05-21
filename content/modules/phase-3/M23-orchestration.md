# M23 · 系统集成与编排

**Day 83–85 | Phase 3**

## 1. 项目目标
单一入口 `python run_pipeline.py --config pipeline.yaml` 启动全流程；异常 webhook 告警。

## 2. 会学到什么
- 配置中心 pipeline.yaml
- 飞书/钉钉 webhook
- 健康检查 endpoint（可选简易 HTTP）

## 3. AI 负责什么
- run_pipeline.py 主编排
- notify.py
- config schema 文档

## 4. 人需要理解什么
编排器 = 总开关，不是把所有逻辑塞一个文件。

## 5. 代码理解点
- [ ] yaml：`stages: [watcher, queue, comfy, upload]`

## 6. 工程思维
- **配置即文档**
- **告警要可行动**：含 batch_id + 错误摘要

## 7. 推荐提问
```
run_pipeline.py 读 pipeline.yaml 按序启动各 worker subprocess。
失败发 FEISHU_WEBHOOK 消息。
提供 --dry-run 只打印将执行的 stages。
```

## 8. 常见 AI 错误
| 错误 | 表现 | 你怎么发现 |
|------|------|------------|
| monolith | 一个 2000 行文件 | 改一个功能要翻半天找不到位置 |

## 9. 验收标准
- [ ] 一条命令启动
- [ ] 模拟失败收到 webhook（或 log 模拟）

## 10. 作业
写运维 runbook 1 页。

---
