# M01 · AI 协作工作台搭建

**对应天数**：Day 1–2  
**阶段**：Phase 1

---

## 👉 开始之前：你今天要完成什么

> 在 Cursor 里让 AI 帮你写出人生第一个 Python 脚本 —— 扫描文件夹，生成文件清单日志。

全程你只做两件事：**复制粘贴 + 验收**。AI 负责写代码。

---

## 📺 第1屏：环境自查（10分钟）

### 你的电脑有 Python 吗？

打开终端（黑窗口）：

| 你的系统 | 怎么打开终端 |
|----------|------------|
| Windows | 按 `Win + R`，输入 `powershell`，回车 |
| Mac | 按 `Cmd + 空格`，输入 `终端`，回车 |

在黑窗口里输入这行，回车：

```bash
python --version
```

<details>
<summary>✅ 如果显示类似 <code>Python 3.11.x</code></summary>

恭喜，Python 已安装。跳到第2屏。
</details>

<details>
<summary>❌ 如果显示"不是内部命令"或"command not found"</summary>

需要安装 Python：

1. 打开浏览器，访问 https://www.python.org/downloads/
2. 点黄色大按钮下载
3. 双击安装，**务必勾选 "Add Python to PATH"**（这一步最关键！）
4. 安装完重新打开终端，再输入 `python --version` 验证
</details>

---

## 📺 第2屏：安装 Cursor（10分钟）

Cursor 是你和 AI 协作的"办公室"。

1. 打开 https://cursor.com 下载安装
2. 安装后打开 Cursor
3. 看到欢迎界面 → 选择 "Open Folder" → 创建一个新文件夹叫 `my-first-project`

> **完成后你应该看到**：Cursor 窗口左侧出现你的 `my-first-project` 文件夹（现在是空的）。

<details>
<summary>❓ Cursor 和 VS Code 有什么区别？</summary>

Cursor 本质是 VS Code + 内置 AI。界面长得一样，但按 `Ctrl+L`（Mac: `Cmd+L`）会弹出 AI 对话窗口。
</details>

---

## 📺 第3屏：创建 Python 虚拟环境（10分钟）

在 Cursor 里按 `Ctrl+``（Mac: `Cmd+``）打开终端，输入：

**Windows：**
```bash
python -m venv venv
venv\Scripts\activate
```

**Mac：**
```bash
python3 -m venv venv
source venv/bin/activate
```

> **完成后你应该看到**：终端最左边出现 `(venv)`，这说明你进入了项目的"独立小房间"。

<details>
<summary>❓ 什么是 venv？为什么要建？</summary>

venv（虚拟环境）= 给这个项目一个**独立的 Python 小房间**。你在房间里装什么包，不会影响电脑上其他项目。就像你家每个房间可以有不同的装修风格。

不建 venv = 把所有项目的包混在一起，迟早出问题。
</details>

<details>
<summary>❌ Windows 上 activate 报错</summary>

如果 PowerShell 报"无法加载文件"，输入：
```bash
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```
然后重新激活。
</details>

---

## 📺 第4屏：让 AI 帮你写第一个脚本（20分钟）

在 Cursor 里按 `Ctrl+L`（Mac: `Cmd+L`）打开 AI 对话，**把下面的 Prompt 完整复制进去**：

```
我要做第一个自动化项目：扫描 C:\Users\我\Downloads 下的文件，
把文件名和修改时间写入 logs/scan.log。

环境：Windows 11，Python 3.11，使用 Cursor。
请：
1. 创建 logs 文件夹（如果不存在）
2. 写单文件脚本 list_files.py
3. 加 .gitignore（排除 venv/、.env、__pycache__）
4. 每行关键代码用中文注释

不要：硬编码密钥；不要引入第三方库（只用 Python 自带的 os/pathlib）。
```

AI 会生成代码。你点 "Apply" 让它写入文件。

> **完成后你应该看到**：左侧文件列表出现 `list_files.py`、`.gitignore`，以及 `logs/` 文件夹。

<details>
<summary>❓ 我该改 Prompt 里的路径吗？</summary>

对！把 `C:\Users\我\Downloads` 换成你电脑上的真实路径，比如 `D:\图片` 或 `C:\Users\你的用户名\Desktop`。
</details>

<details>
<summary>❌ AI 生成的代码有红波浪线</summary>

不用担心。先运行看看——很多时候只是 Cursor 的检查太严格，不影响运行。
</details>

---

## 📺 第5屏：运行脚本，看结果（10分钟）

在 Cursor 终端输入：

```bash
python list_files.py
```

> **完成后你应该看到**：终端刷刷刷打印出文件名列表。打开 `logs/scan.log` 文件，里面也是同样的内容。

<details>
<summary>❌ 报错 FileNotFoundError</summary>

说明你 Prompt 里的路径不存在。两种解决方法：

**方法一**：把 Prompt 里的路径改成一个确实存在的文件夹，让 AI 重新生成。

**方法二**：手动改 `list_files.py` 里的路径变量，改成真实路径。
</details>

<details>
<summary>❌ 报错 "No such file or directory: logs/"</summary>

脚本忘了先创建 logs 文件夹。把报错贴给 Cursor AI，让它修复。这是常见 AI 错误，详见下方"常见 AI 错误"表。
</details>

---

## 📺 第6屏：验收 + 作业（10分钟）

对着以下清单打勾 ✅：

- [ ] Cursor 已安装，能打开 `my-first-project` 文件夹
- [ ] 终端输入 `python list_files.py` 无报错运行
- [ ] `logs/scan.log` 存在且内容正确（不是空文件）
- [ ] 存在 `.gitignore`，里面写了 `venv/`、`.env`
- [ ] 终端最左边能看到 `(venv)`（说明在虚拟环境里）

### 今日作业

**作业**：把扫描范围改成「只列出 .jpg 和 .png 文件」。提示：把 Prompt 贴给 AI：

```
修改 list_files.py：只列出 .jpg 和 .png 文件，其他跳过。
```

**延伸**：让 AI 帮你生成 `README.md`：

```
帮我写 README.md，三行就够了：
1. 这个项目做什么
2. 怎么运行
3. 输出在哪
```

---

## 📚 知识参考（学完后回来看）

### 今天你学会的概念

| 概念 | 通俗解释 | 你第一次用到的地方 |
|------|----------|-------------------|
| **终端 (Terminal)** | 黑窗口，输入命令让电脑执行 | 检查 Python 版本 |
| **venv** | 项目的独立 Python "小房间" | 创建虚拟环境 |
| **pip** | Python 的"应用商店"，用来装工具包 | （Day 2 会用到） |
| **IDE** | 写代码和运行代码的工具 | 打开 Cursor |
| **Agent** | Cursor 里能自动写多个文件的 AI | 第4屏让 AI 写代码 |
| **Prompt** | 你给 AI 下的指令 | 复制那段长文字给 AI |

### 代码理解（能指出就行，不用背）

- `import os` / `from pathlib import Path` —— 处理文件路径的"工具包"
- `if __name__ == "__main__":` —— "如果直接运行这个脚本，就执行下面代码"
- `open(..., "w")` —— "打开一个文件，准备往里写东西"
- 脚本的**输入**：你指定的文件夹路径；**输出**：`logs/scan.log`

### 工程思维（比代码更重要）

1. **项目文件夹先行**：所有东西放一个文件夹里，不散落桌面
2. **先跑通再美化**：第一版能运行 > 代码漂亮
3. **密钥永不进代码**：token、密码永远放 `.env` 文件，不写进 `.py`

---

## 🤖 常见 AI 错误（收藏这张表）

| 错误 | 表现 | 你怎么发现 | 怎么办 |
|------|------|------------|--------|
| 路径分隔符 | Windows 用 `/` 有时不行 | 报 `FileNotFoundError` | 把报错贴给 AI，让它用 `Path()` 替代 |
| 忘记创建目录 | 写文件失败 | 报 `No such file or directory` | 让 AI 在写文件前加 `os.makedirs(logs, exist_ok=True)` |
| 没建 venv | 全局 Python 被污染 | `pip list` 看到一堆无关包 | 回到第3屏建 venv |
| Mac 命令给 Windows | `source venv/bin/activate` 在 PowerShell 失败 | 激活报错 | 用 Windows 版本命令 |
| AI 过度设计 | 10 行能搞定写了 100 行 | 看代码觉得复杂 | 告诉 AI："用最简单的方式，不要引入新库" |

---

## 🔜 Day 2 预告：配置 AI 协作规则

明天你会创建 `.cursor/rules` 文件，给 AI 立"家规"——比如"始终用中文注释"、"改代码前先说明改了什么"。

---

## 关联

- Prompt：[`prompts/01-project-kickoff.md`](../prompts/01-project-kickoff.md)
- 下一模块：[M02-read-ai-code.md](M02-read-ai-code.md)
