# Prompt 08 · Agent 编排

```
设计 AI Agent 自动化编排（Cursor/Hermes 均可）：

## 目标
自然语言触发已有 Python CLI，不重写业务逻辑。

## Tools
{{TOOL_LIST}} 例如 start_watcher, run_queue, tail_log

## Rules
- 只读写 {{PROJECT_ROOT}} 下文件
- 删除/上传前必须 ask 确认
- 改代码前输出 plan

## 交付
1. AGENTS.md
2. tools/registry.py 包装 subprocess
3. 3 条示例用户指令与预期 tool 调用链

不要生成新的 watcher 实现，复用 scripts/ 已有入口。
```
