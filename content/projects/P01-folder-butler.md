# P01 · 文件夹管家（Folder Butler）

**阶段**：Phase 1 | **模块**：M03, M06, M07 | **里程碑**：D7, D14

## 背景
Downloads / 微信保存 / 供应商 zip 堆在一起，人工整理耗时间。

## 目标
自动监听 inbox → 按规则分类 → 可选 SKU 重命名 → 每日 log 报告。

## 架构（你要能画出来）

```
inbox/ ──watcher──► sorted/{docs,images,other}/
                         │
                         └──► logs/watcher.log + daily_report
```

## 里程碑

| # | 交付 | 截止 |
|---|------|------|
| M1 | watcher 分类跑通 | D7 |
| M2 | + logging + config | D12 |
| M3 | + 批量重命名 + 日报 | D14 |

## 验收清单

- [ ] 5 种扩展名分类正确
- [ ] config.yaml 改规则无需改代码
- [ ] dry-run 模式可用
- [ ] README：安装、配置、运行、排错

## 推荐 AI 启动 Prompt

见 [`prompts/03-file-automation.md`](../prompts/03-file-automation.md)

## 跨境延伸
- 供应商图片按 SKU 进 `sorted/by_sku/{SKU}/`
- 与后续 ComfyUI inbox 共用目录结构
