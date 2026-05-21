# M07 · 定时任务与批处理

**对应天数**：Day 15–17 | **阶段**：Phase 1

## 1. 项目目标
批量重命名 100+ SKU 图片（`SKU001_main.jpg`）；支持 dry-run；配置 Windows 任务计划每日执行。

## 2. 会学到什么
- 批量文件操作与预览
- argparse CLI：`--dry-run`, `--input-dir`
- 任务计划 / cron 触发

## 3. AI 负责什么
- 重命名规则引擎（regex + 映射表）
- dry-run 输出计划到 CSV
- 生成 schtasks / crontab 示例

## 4. 人需要理解什么
| 概念 | 解释 |
|------|------|
| dry-run | 演习模式：只显示将要做什么 |
| 批处理 | 一次处理很多文件，要有进度与回滚 |

## 5. 必须掌握的代码理解点
- [ ] `argparse` 基本用法
- [ ] `Path.glob("*.jpg")` 遍历
- [ ] 操作前备份到 `backup/YYYYMMDD/`

## 6. 必须掌握的工程思维
- **先备份再批量改**：不可逆操作必须可回滚
- **预览确认**：dry-run CSV 人工扫一眼再真跑

## 7. 推荐提问方式
```
批量重命名工具 rename_skus.py：
- 读 mapping.csv：old_name,new_name
- --dry-run 输出 rename_plan.csv
- --execute 真改，前先复制到 backup/
- 记录 logger
跨境场景：文件名含 ASIN。
```

## 8. 常见 AI 错误
| 错误 | 表现 | 你怎么发现 |
|------|------|------------|
| 无 dry-run | 一次改错 100 文件 | dry-run 时看到 `would rename X→Y`，不符合预期 |
| 覆盖无备份 | 原图丢失 | 运行后原文件消失，没有 `.bak` 文件 |

## 9. 验收标准
- [ ] dry-run 与 execute 结果一致
- [ ] backup 可手动还原
- [ ] 任务计划可触发（或文档说明如何设）

## 10. 今日作业与延伸
**作业**：对接 P01 的 inbox 输出目录。**延伸**：定时 + watcher 串联。

---
