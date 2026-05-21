# Prompt 06 · 队列 / Retry / Log

```
实现可靠任务队列（file-based 或 sqlite，选一种并说明理由）：

## 任务 schema
id, type, payload, status, attempts, created_at, updated_at

## 状态
pending → running → done | failed → dead_letter

## Retry
- max_attempts=3
- exponential backoff
- 仅 {{RETRYABLE}} 可重试

## Logging
JSON lines，含 trace_id

## CLI
enqueue --file tasks.jsonl
worker --concurrency 2
status
retry-dead --id xxx

集成现有 handler：{{HANDLER_MODULE}}

不要 monolith；单文件 <200 行，多模块。
```
