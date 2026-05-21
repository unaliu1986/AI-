# P06 · ComfyUI 批处理闭环

**阶段**：Phase 3 | **模块**：M18, M21 | **Day 80**

## 背景
跨境主图白底/多角度 —— GPU 批处理要对名、去重、可报表。

## 目标
register.csv → dedupe → ComfyUI queue → output 对名 → run_report.md

## register.csv 示例

```csv
sku,source_path,views
SKU001,inputs/SKU001.jpg,"anchor,view1"
```

## 验收清单

- [ ] 50 SKU（可含 duplicate 图）处理完成
- [ ] duplicate 被 skip 且 report 注明
- [ ] output 文件名与 register 可对照
- [ ] 单 job 失败可单独 retry
- [ ] workflow.json 版本在 git

## 参考模式
job_id 主键：`000001_anchor`, `000001_view1`
