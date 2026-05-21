# Prompt 05 · Playwright 自动化

```
Playwright Python 同步 API 自动化：

## 场景
{{SCENARIO}} 例如：登录后台、批量填表、采集列表

## 要求
- storage_state 复用登录：{{AUTH_PATH}}
- 失败：截图 artifacts/{timestamp}.png + 保存 page.content()
- headless 由环境变量 HEADLESS=1 控制
- 每步 wait_for 而非固定 sleep
- CSV 驱动：{{CSV_PATH}}

## 结构
- pages/  Page Object
- runners/  CLI 入口

先列出 locator 策略与风险（iframe/captcha），再写代码。
```
