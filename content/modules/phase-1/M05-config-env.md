# M05 · 配置文件与环境变量

**对应天数**：Day 11–12 | **阶段**：Phase 1

## 1. 项目目标
把 M03/M04 的硬编码路径和 API 配置抽到 `.env` + `config.yaml`，支持 dev/prod 两套环境。

## 2. 会学到什么
- `python-dotenv` 加载环境变量
- YAML 配置与 pydantic/简单 dict 校验
- `.env.example` 团队协作惯例

## 3. AI 负责什么
- 重构现有脚本读配置
- 写 `config_loader.py` 统一入口
- 更新 `.gitignore` 与 README

## 4. 人需要理解什么
| 概念 | 解释 |
|------|------|
| 环境变量 | 操作系统级的「秘密抽屉」，不进代码库 |
| config.yaml | 非敏感的业务配置（路径规则、文件夹映射） |

## 5. 必须掌握的代码理解点
- [ ] `os.getenv("KEY", default)`
- [ ] 启动时检查必填项，缺则报错退出

## 6. 必须掌握的工程思维
- **秘密与配置分离**：Key 在 .env，规则在 yaml
- **.example 文件**：新人知道要填什么

## 7. 推荐提问方式
```
重构 M03 watcher：路径规则在 config.yaml，敏感项在 .env。
提供 config_loader.py，启动时校验 INBOX_PATH 存在。
给出 .env.example 和 config.example.yaml。
```

## 8. 常见 AI 错误
| 错误 | 表现 | 你怎么发现 |
|------|------|------------|
| .env 提交进 git | 泄露密钥 | `git status` 看到 `.env` 不在 `.gitignore` |
| 默认值掩盖缺失 | 静默用错路径 | 加 `--verbose` 打印实际使用的路径 |

## 9. 验收标准
- [ ] 删除 .env 后启动有明确报错
- [ ] 切换 ENV=prod 使用不同 inbox 路径
- [ ] git status 不含 .env

## 10. 今日作业与延伸
**作业**：为 P01 写完整配置文档。**延伸**：多店铺 `shops/amazon_us.yaml`。

---
