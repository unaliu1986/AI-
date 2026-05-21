# Prompt 03 · 文件自动化

```
用 Python 实现文件自动化：

## 行为
- 监听目录：{{INBOX_PATH}}
- 规则：{{RULES}} 例如 .pdf→docs, .jpg→images
- 重名：追加 _1, _2
- 日志：logging 到 logs/watcher.log
- 配置：config.yaml + .env

## CLI
--dry-run  只打印计划
--once     扫描现有文件后退出（不监听）

## 要求
- pathlib 处理路径
- 移动前检查文件大小稳定（避免下载未完成）
- 中文注释

先给 3 句架构，我确认后写代码。
Windows。
```

## 场景变量
| 变量 | 跨境示例 |
|------|----------|
| INBOX | `D:/cross-border/inbox` |
| RULES | 含 SKU 前缀路由 |
