# M06 · 日志与错误处理入门

**对应天数**：Day 13–14 | **阶段**：Phase 1

## 1. 项目目标
统一项目 logging：格式、级别、文件轮转；所有脚本共用 `setup_logging()`。

## 2. 会学到什么
- logging 级别 DEBUG/INFO/WARNING/ERROR
- RotatingFileHandler 防 log 撑爆磁盘
- 异常捕获与「可行动」错误信息

## 3. AI 负责什么
- `utils/logging_setup.py`
- 把 print 替换为 logger 调用
- 异常时写 stack trace 到 log

## 4. 人需要理解什么
| 概念 | 解释 |
|------|------|
| 日志级别 | 噪音分级：调试细节 vs 生产必看 |
| traceback | 出错时的「案发现场照片」 |

## 5. 必须掌握的代码理解点
- [ ] `logger.info("moved %s -> %s", src, dst)`
- [ ] `except Exception as e: logger.exception(...)`

## 6. 必须掌握的工程思维
- **生产靠 log 破案**：没 log = 盲人运维
- **用户看得懂的错误**：「inbox 不存在: D:\xxx」而非 Exception

## 7. 推荐提问方式
```
创建 utils/logging_setup.py：
- 控制台 INFO，文件 DEBUG
- logs/app.log 单文件最大 5MB，保留 3 个备份
- 提供 get_logger(name) 
重构 M03/M04 使用此 logger。
```

## 8. 常见 AI 错误
| 错误 | 表现 | 你怎么发现 |
|------|------|------------|
| 只 print | 无法过滤级别 | 看不到 `[INFO]` / `[ERROR]` 前缀区分 |
| 吞掉异常 | except: pass | 出错后程序静默继续，没有任何报错输出 |

## 9. 验收标准
- [ ] 故意触发错误，log 含时间戳与 traceback
- [ ] 无散落 print（除 CLI 帮助）

## 10. 今日作业与延伸
**作业**：**P01 完整验收**。**延伸**：错误时发桌面通知（可选）。

---
