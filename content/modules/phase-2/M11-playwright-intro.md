# M11 · Playwright 网页自动化入门

**Day 31–35 | Phase 2**

## 1. 项目目标
用 Playwright 打开网页、截图、填写表单并提交（测试站 https://the-internet.herokuapp.com/login）。

## 2. 会学到什么
- 浏览器自动化 vs API
- locator 策略：get_by_role / get_by_text / css
- 等待：page.wait_for_selector

## 3. AI 负责什么
- 安装 playwright + chromium
- Page Object 基础结构
- 失败自动截图到 artifacts/

## 4. 人需要理解什么
| 概念 | 解释 |
|------|------|
| headless | 无界面运行，适合服务器 |
| locator | 页面上「点哪里」的地址 |

## 5. 代码理解点
- [ ] `page.goto(url)`、`page.fill()`、`page.click()`
- [ ] `with sync_playwright()` 上下文

## 6. 工程思维
- **慢就是稳**：每步操作后等元素可见
- **取证**：失败必截图+保存 HTML

## 7. 推荐提问
```
Playwright Python 同步 API：
登录 the-internet.herokuapp.com（user tomsmith / pwd SuperSecretPassword!）
验证出现 "You logged into a secure area!"
失败时截图到 artifacts/{timestamp}.png
headless 可配置。
```

## 8. 常见 AI 错误
| 错误 | 表现 | 你怎么发现 |
|------|------|------------|
| 固定 sleep | flaky（时好时坏） | 网络慢时成功率波动大，有时行有时不行 |
| 选择器过脆 | 改 UI 就挂 | 网站小改版后脚本全挂 |

## 9. 验收标准
- [ ] 连续运行 5 次全成功
- [ ] 失败有截图

## 10. 作业
录屏一次完整登录流程。

---
