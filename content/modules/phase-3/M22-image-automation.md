# M22 · 图片自动化串联

**Day 81–82 | Phase 3**

## 1. 项目目标
file watcher 新图 → 自动 enqueue ComfyUI job → 完成后 move 到 ready_for_upload/。

## 2. 会学到什么
- 事件驱动 + 队列衔接
- Playwright 上传与 ComfyUI 并行 worker

## 3. AI 负责什么
- orchestrator 监听并 enqueue
- 两 worker 类型：comfy / upload

## 4. 人需要理解什么
串联 = M03 watcher + M14 queue + M18 comfy 合体。

## 5. 代码理解点
- [ ] handler 根据 ext 决定 task type

## 6. 工程思维
- **背压**：队列太长要 pause watcher

## 7. 推荐提问
```
watcher 见 .jpg 创建 comfy_task；
comfy done 创建 upload_task；
queue depth > 100 时 watcher 只 log 不 enqueue。
```

## 8. 常见 AI 错误
| 错误 | 表现 | 你怎么发现 |
|------|------|------------|
| 同步阻塞 watcher | 漏文件 | inbox 放了 10 张图只处理了 5 张 |

## 9. 验收标准
- [ ] 拖入 3 张图全自动到 ready 目录

## 10. 作业
并行度配置化。

---
