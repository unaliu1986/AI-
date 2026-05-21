# M24 · 部署与监控

**Day 86–88 | Phase 3**

## 1. 项目目标
Windows 开机自启 / Linux systemd；日志轮转；磁盘清理；备份策略。

## 2. 会学到什么
- nssm / Task Scheduler 常驻
- logrotate 或按大小切割
- backup/ 与 config 备份

## 3. AI 负责什么
- deploy/ 脚本与文档
- healthcheck.py（进程+队列深度）
- cleanup_old_logs.py

## 4. 人需要理解什么
部署 = 让脚本「不在你盯着时也活着」。

## 5. 代码理解点
- [ ] 退出码 0/1 供监控脚本用

## 6. 工程思维
- **可恢复**：config + register 每日备份

## 7. 推荐提问
```
Windows：用 nssm 或 schtasks 注册 run_pipeline.py 开机启动。
healthcheck：队列 pending>500 或 worker 无 heartbeat 10min 返回 1。
cleanup：删除 30 天前 logs 与 artifacts。
```

## 8. 常见 AI 错误
| 错误 | 表现 | 你怎么发现 |
|------|------|------------|
| 相对路径 cwd 错 | 开机找不到 config | 开机自启时报 `FileNotFoundError` |

## 9. 验收标准
- [ ] 重启电脑后 pipeline 自动起来（或文档可复现）
- [ ] healthcheck 脚本可手动跑

## 10. 作业
列出「生产前 10 项检查」。

---
