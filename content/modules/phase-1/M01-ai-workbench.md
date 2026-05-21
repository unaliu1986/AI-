# M01 · AI 协作工作台搭建

**对应天数**：Day 1–2  
**阶段**：Phase 1

---

## 1. 项目目标

在 Cursor 中完成环境搭建，运行第一个「AI 生成、你验收」的 Python 自动化脚本（打印目录文件列表并保存到 log）。

---

## 2. 会学到什么

- Cursor 基本工作流：Chat / Agent / Terminal
- Python 虚拟环境与依赖安装（`venv` + `pip`）
- 如何用 `.cursor/rules` 约束 AI 行为
- 第一个自动化：读文件夹 → 写日志

---

## 3. AI 负责什么

| AI 做 | 说明 |
|-------|------|
| 生成安装命令 | 根据你的 OS（Windows/Mac）给出一键命令 |
| 写 `list_files.py` | 扫描指定目录，输出到 `logs/` |
| 写 `.gitignore` | 排除 `.env`、`venv`、`__pycache__` |
| 解释报错 | 你把终端报错贴给 AI |

---

## 4. 人需要理解什么

| 概念 | 通俗解释 |
|------|----------|
| **IDE** | 写代码和运行代码的工具，这里用 Cursor |
| **Terminal / 终端** | 黑窗口，输入命令让电脑执行 |
| **venv** | 给这个项目单独的 Python「小房间」，不污染全局 |
| **Agent** | Cursor 里能自动改多个文件的 AI 模式 |
| **rules** | 给 AI 的「家规」，比如「始终用中文注释」 |

---

## 5. 必须掌握的代码理解点

- [ ] `import os` / `from pathlib import Path` —— 处理文件路径
- [ ] `if __name__ == "__main__":` —— 脚本入口，直接运行时才执行
- [ ] `open(..., "w")` —— 写文件
- [ ] 能指出脚本里「输入是什么、输出是什么」

---

## 6. 必须掌握的工程思维

- **项目文件夹先行**：所有东西放在一个 repo 里，不散落桌面
- **先跑通再美化**：第一版能运行 > 代码漂亮
- **密钥永不进代码**：今天就要养成习惯

---

## 7. 推荐提问方式

```
我要做第一个自动化项目：扫描 C:\Users\我\Downloads 下的文件，
把文件名和修改时间写入 logs/scan.log。

环境：Windows 11，Python 3.11，使用 Cursor。
请：
1. 给出 venv 创建与激活命令
2. 写单文件脚本 list_files.py
3. 加 .gitignore
4. 每行关键代码用中文注释

不要：硬编码敏感路径以外的密钥；不要引入不必要的库。
```

---

## 8. 常见 AI 错误

| 错误 | 表现 | 你怎么发现 |
|------|------|------------|
| 路径分隔符 | Windows 用 `/` 有时可以，有时不行 | 运行报 FileNotFoundError |
| 忘记创建 logs 目录 | 写文件失败 | 报错 No such file |
| 全局 Python 污染 | 没建 venv | `pip list` 看到一堆无关包 |
| Mac 命令套 Windows | `source venv/bin/activate` 在 PowerShell 失败 | 激活报错 |

---

## 9. 验收标准

- [ ] Cursor 已安装，能打开本项目文件夹
- [ ] `python list_files.py` 无报错运行
- [ ] `logs/scan.log` 存在且内容正确
- [ ] 存在 `.gitignore`，含 `venv/`、`.env`
- [ ] 已创建至少 3 条 `.cursor/rules`（中文注释、不用全局路径、改前先说明）

---

## 10. 今日作业与延伸

**作业**：把扫描目录改成「只列出 .jpg / .png」，运行并检查 log。

**延伸**：让 AI 帮你写 `README.md` 三行：项目是什么、怎么运行、输出在哪。

---

## 关联

- Prompt：[`prompts/01-project-kickoff.md`](../prompts/01-project-kickoff.md)
- 下一模块：[M02-read-ai-code.md](M02-read-ai-code.md)
