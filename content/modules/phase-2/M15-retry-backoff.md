# M15 · Retry 与指数退避

**Day 47–49 | Phase 2**

## 1. 项目目标
失败任务自动 retry 3 次，指数退避（1s, 2s, 4s）；不可重试错误进 dead letter。

## 2. 会学到什么
- 可重试 vs 不可重试异常分类
- backoff 算法
- dead_letter/ 目录

## 3. AI 负责什么
- `@retry` 装饰器或队列层 retry
- 错误分类表 RETRYABLE_ERRORS

## 4. 人需要理解什么
网络抖动该重试；密码错误不该重试 100 次。

## 5. 代码理解点
- [ ] `time.sleep(2 ** attempt)`
- [ ] `attempts` 字段递增

## 6. 工程思维
- **快速失败**：4xx 业务错误别 retry
- **留证据**：dead letter 含完整 payload

## 7. 推荐提问
```
在 M14 worker 加 retry：
- max_attempts=3, backoff=exponential base 2
- TimeoutError, ConnectionError 可重试
- ValueError, AuthenticationError 不可重试 → dead_letter/
```

## 8. 常见 AI 错误
| 错误 | 表现 | 你怎么发现 |
|------|------|------------|
| 无限 retry | 卡死 | Ctrl+C 都停不下来，同一个错误刷了 50 次 |
| 所有错误都 retry | 浪费资源 | 403 权限错误也在重试，永远过不去 |

## 9. 验收标准
- [ ] 模拟网络错误第 2 次成功
- [ ] 模拟 auth 错误直接 dead letter

## 10. 作业
dead letter 日报 CSV。

---
