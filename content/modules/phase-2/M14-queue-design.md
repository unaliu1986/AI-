# M14 · 队列系统设计

**Day 43–46 | Phase 2 | 项目 P04**

## 1. 项目目标
JSON 文件队列：pending → running → done/failed；支持断点续跑与并发上限。

## 2. 会学到什么
- 状态机设计
- 文件锁或 sqlite 简易队列
- worker 进程模型

## 3. AI 负责什么
- queue.json / queue.db schema
- worker 主循环
- CLI：`enqueue`, `run-worker`, `status`

## 4. 人需要理解什么
队列 = 餐厅取号机：先来先服务，做完划掉。

## 5. 代码理解点
- [ ] 任务 JSON：`{id, type, payload, status, attempts}`
- [ ] 原子更新 status 防双跑

## 6. 工程思维
- **幂等 task id**：重复 enqueue 不重复做
- **可恢复**：crash 后 running 改回 pending

## 7. 推荐提问
```
实现 file-based task queue：
- queue/tasks/*.json 每任务一文件
- worker 扫描 pending，改 running，执行 handler，改 done
- max_concurrency=2
- 重启后 running 超过 30min 的 reset 为 pending
```

## 8. 常见 AI 错误
| 错误 | 表现 | 你怎么发现 |
|------|------|------------|
| 双 worker 抢同一任务 | 同一 SKU 处理两次 | output 里有重复文件，status 两个 worker 都标 done |
| 全放内存 | 重启丢任务 | kill worker 后 queue status 全部消失 |

## 9. 验收标准
- [ ] 100 任务跑完，可 status 汇总
- [ ] 中途 kill worker 可续跑

## 10. 作业
对接 M13 采集任务入队。

---
