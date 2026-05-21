# P07 · 90 天毕业 · 个人自动化业务系统

**阶段**：Phase 3 结束 | **Day 89–90**

## 系统定义
一条 **真实业务** 端到端流水线，至少集成：

1. 文件触发或定时 ingest  
2. 队列 + retry + logging  
3. Playwright **或** ComfyUI（最好两者都有）  
4. Agent 编排 **或** 明确 handoff JSON  
5. 部署/监控文档  

## 推荐场景：跨境图片 + 上架

```
供应商图 → inbox watcher → 去重 → ComfyUI 白底 
    → 人工 CSV 审核 → Playwright 上传 → 飞书日报
```

## 验收清单

### 功能
- [ ] 端到端演示 15 分钟无人工改代码
- [ ] pipeline.yaml 单配置
- [ ] 失败 webhook 或邮件告警
- [ ] healthcheck 脚本

### 工程
- [ ] Queue + Retry + Structured log
- [ ] .env / config 分离
- [ ] 无密钥 in git

### 文档
- [ ] README（用户视角）
- [ ] RUNBOOK（运维：重启、清队列、备份）
- [ ] ARCHITECTURE.md（mermaid 图）
- [ ] lessons_learned 合集 ≥ 30 条

### 业务
- [ ] 写清「每周省 X 小时」或「可处理 Y SKU/天」
- [ ] ToS/合规自述 1 段

## 演示脚本（Day 90）

1. 展示 pipeline.yaml（2 min）
2. 投入 3 张新图触发（5 min）
3. 展示 queue status + trace_id log（3 min）
4. 展示 Comfy output + 审核 CSV（3 min）
5. 展示上传结果/report（2 min）

## 毕业后维护
每月 1 次：依赖更新、审查 AI 新改代码、 prune lessons_learned。
