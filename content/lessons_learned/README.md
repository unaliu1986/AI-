# 经验沉淀（Lessons Learned）

> 每次 Debug 成功、审查发现 AI 坑、Prompt 迭代有效后，在此追加一条。  
> 用户规则：回复「沉淀」后才写入 `.cursor/rules/lessons-learned.mdc`。

## 记录格式

```markdown
### YYYY-MM-DD · 简短标题

- **场景**：哪个模块/项目
- **现象**：发生了什么
- **根因**：为什么（通俗话）
- **解法**：怎么修的
- **规则**：以后给 AI 的一句话约束
- **标签**：#file-watcher #playwright #comfyui ...
```

---

## 种子条目（课程内置，可直接用）

### 2026-01-01 · AI 编造 API 字段

- **场景**：M04 API 模块
- **现象**：脚本 KeyError，curl 里没有该字段
- **根因**：AI 按「常见 API」猜字段名
- **解法**：要求 AI 先给 curl + 贴真实 JSON 再写解析
- **规则**：「附官方文档 URL；无法验证就说无法验证」
- **标签**：#api #ai-hallucination

### 2026-01-02 · 下载未完成就移动文件

- **场景**：P01 watcher
- **现象**：图片损坏，大小为 0
- **根因**：浏览器下载中触发 on_created
- **解法**：移动前 wait 直到 size 连续 2 次采样不变
- **规则**：「监听下载目录必须检查文件稳定」
- **标签**：#file-watcher

### 2026-01-03 · Playwright 固定 sleep  flaky

- **场景**：M11
- **现象**：有时成功有时超时
- **根因**：`time.sleep(5)` 网络慢不够
- **解法**：`wait_for_selector` / `expect(locator).to_be_visible()`
- **规则**：「禁止固定 sleep 作为唯一等待」
- **标签**：#playwright

### 2026-01-04 · 队列双 worker 抢任务

- **场景**：P04
- **现象**：同一 SKU 处理两次
- **根因**：读-改-写 status 非原子
- **解法**：原子 rename pending→running 或 sqlite transaction
- **规则**：「多 worker 必须原子认领任务」
- **标签**：#queue

### 2026-01-05 · ComfyUI output 对名乱序

- **场景**：P06
- **现象**：SKU 与 output 文件名对不上
- **根因**：异步完成顺序 ≠ 提交顺序
- **解法**：prompt 带 client_id/job_id，history 按 id 归档
- **规则**：「异步 GPU 禁止按完成顺序对名」
- **标签**：#comfyui

---

## 你的条目

（从第一条实战开始写在下文）

---

## 索引标签

`#ai-hallucination` `#security` `#file-watcher` `#api` `#playwright`  
`#queue` `#retry` `#logging` `#comfyui` `#agent` `#ecommerce`
