# M12 · 登录态与 Cookie 管理

**Day 36–38 | Phase 2**

## 1. 项目目标
首次登录保存 `storage_state.json`，后续加载免登录；检测会话过期并重新登录。

## 2. 会学到什么
- context.storage_state 持久化
- iframe / 新标签页处理
- 会话探针（访问需登录页是否跳转）

## 3. AI 负责什么
- AuthManager 类封装
- 过期检测与 refresh 流程

## 4. 人需要理解什么
Cookie = 浏览器「会员卡」，自动化也要会存卡。

## 5. 代码理解点
- [ ] `browser.new_context(storage_state=path)`
- [ ] `context.storage_state(path=...)`

## 6. 工程思维
- **state 文件当秘密**：进 .gitignore
- **过期要优雅降级**：自动 re-login 而非崩溃

## 7. 推荐提问
```
封装 AuthManager：
- login() 保存 storage/auth.json
- get_context() 加载或 login
- is_session_valid() 访问 /secure 不跳转 login
```

## 8. 常见 AI 错误
| 错误 | 表现 | 你怎么发现 |
|------|------|------------|
| state 提交 git | 会话泄露 | `git log` 看到 `auth.json` / `state.json` |
| 忽略 2FA | 真站登录失败需人工节点 | headless 跑时卡在验证码页面超时 |

## 9. 验收标准
- [ ] 第二次运行跳过登录表单
- [ ] 删除 state 后自动重新登录

## 10. 作业
文档记录「哪些站点不适合纯 Cookie」（CAPTCHA/2FA）。

---
