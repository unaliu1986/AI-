# M19 · AI Agent 架构基础

**Day 66–70 | Phase 3**

## 1. 项目目标
定义单 Agent 系统：Goal + Tools + Memory + Rules；用 Cursor Agent 调用你的 Python 工具完成 file watcher 启停。

## 2. 会学到什么
- Agent 四件套
- Tool 接口：Python 函数 → Agent 可调用
- Rules 限制 scope（只改 automation/ 目录）

## 3. AI 负责什么
- tools/registry.py 注册 CLI
- AGENTS.md 或 .cursor/rules 写 Agent 行为
- 示例对话脚本

## 4. 人需要理解什么
Agent = 会自己决定「先调哪个工具」的 AI；你是定规矩的人。

## 5. 代码理解点
- [ ] Tool schema：name, description, parameters
- [ ] Agent 循环：observe → plan → act

## 6. 工程思维
- **最小权限**：Agent 只能动指定目录
- **Human approval**：删文件/上传前确认

## 7. 推荐提问
```
设计单 Agent 自动化助手：
Tools: start_watcher, stop_watcher, tail_log, run_batch_rename
每个 tool 是 Python subprocess 包装。
写 AGENTS.md 描述何时用哪个 tool。
不要 Agent 直接写业务逻辑，只编排已有脚本。
```

## 8. 常见 AI 错误
| 错误 | 表现 | 你怎么发现 |
|------|------|------------|
| Agent 重写全部 | 绕过已有 tested 脚本 | diff 显示删了之前通过验收的脚本 |
| 无边界 | 删系统文件 | 看到 `rm -rf` 或 `os.remove` 操作了 `automation/` 外的文件 |

## 9. 验收标准
- [ ] 自然语言「启动 inbox 监听」能跑通
- [ ] 越权请求被拒绝（文档说明）

## 10. 作业
记录 3 条 Agent 失败 case。

---
