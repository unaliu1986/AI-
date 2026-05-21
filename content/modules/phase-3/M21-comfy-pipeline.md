# M21 · ComfyUI 批处理流水线

**Day 76–80 | Phase 3 | 项目 P06**

## 1. 项目目标
注册表驱动 50 SKU：ingest → hash 去重 → job_id 队列 → ComfyUI → output 对名 → run_report。

## 2. 会学到什么
- register.csv / ingest_register 模式
- 文件 hash 去重（省 GPU）
- output 与 SKU 对名规则

## 3. AI 负责什么
- pipeline 各 stage 脚本
- run_report.md 失败汇总
- 与 M14 队列集成

## 4. 人需要理解什么
批处理 = 工厂流水线，每站只做一件事，报表告诉厂长哪站堵了。

## 5. 代码理解点
- [ ] `job_id = f"{seq:06d}_{view}"`
- [ ] sha256 去重 skip

## 6. 工程思维
- **对名规则文档化**：000001_anchor.jpg 含义写清
- **失败可重跑单 job**

## 7. 推荐提问
```
ComfyUI 批处理 pipeline：
- register.csv: sku, source_path, views
- dedupe by sha256 → jobs/part4/*.json
- submit comfy → download → rename by register order
- run_report: success/fail/skip counts
参考 xiangongyun part4 模式，单 repo 实现。
```

## 8. 常见 AI 错误
| 错误 | 表现 | 你怎么发现 |
|------|------|------------|
| output 乱序 | 对名失败 | 打开 `000001_anchor.jpg` 内容是另一个 SKU 的图 |
| 不去重 | GPU 浪费 | 同一张图提交了 3 次 ComfyUI job |

## 9. 验收标准
- [ ] **P06**：50 SKU 闭环
- [ ] run_report 与 manual 一致

## 10. 作业
加 skip_reason 字段（duplicate/gpu_error）。

---
