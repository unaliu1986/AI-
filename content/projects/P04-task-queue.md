# P04 · 可靠任务队列

**阶段**：Phase 2 | **模块**：M14–M16 | **Day 53**

## 背景
100+ 网页任务 / 上传任务不能「跑一半全丢」。

## 目标
文件队列 + retry + JSON log + 断点续跑 + daily report。

## 任务类型（至少 2 种）

- `scrape`：调用 P03 逻辑
- `noop`：sleep 模拟（测试用）

## 验收清单

- [ ] enqueue 100 任务
- [ ] kill worker  midway，重启后续跑完
- [ ] dead_letter 含不可重试错误
- [ ] daily_report 成功/失败/平均耗时正确
- [ ] 无任务被处理两次（检查 done 日志）

## 性能目标（课程级）
100 noop 任务 < 10 min（可调并发）
