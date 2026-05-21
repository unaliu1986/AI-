# M13 · 表单与文件上传自动化

**Day 39–42 | Phase 2 | 项目 P03**

## 1. 项目目标
CSV 驱动批量填表；自动上传文件；采集 10 条商品数据到 CSV（P03 里程碑）。

## 2. 会学到什么
- `set_input_files` 上传
- CSV → dict 驱动循环
- 列表页分页抓取模式

## 3. AI 负责什么
- 批量填表 runner
- 采集 parser + 去重
- 限速（每页间隔 1–2s）

## 4. 人需要理解什么
批量 = 循环 + 错误隔离（一条失败不中断全部）。

## 5. 代码理解点
- [ ] `page.locator(...).all()` 多元素
- [ ] `writer.writerow` 追加模式

## 6. 工程思维
- **礼貌爬取**：rate limit + robots 意识
- **结构化输出**：固定 CSV 列名

## 7. 推荐提问
```
读 data/products_to_upload.csv，对卖家后台 mock 页批量填 title/price/image。
上传图片用 set_input_files。
每行结果写入 logs/upload_results.csv（sku, status, error）。
```

## 8. 常见 AI 错误
| 错误 | 表现 | 你怎么发现 |
|------|------|------------|
| 无限速 | IP 被封 | 连续跑 50 个后返回 `403` / `429` |
| 上传路径 Windows 反斜杠 | 找不到文件 | 报 `FileNotFoundError` 但文件确实存在 |

## 9. 验收标准
- [ ] P03：10 条数据采集成功
- [ ] 上传失败有 per-row 错误记录

## 10. 作业
加「从第 N 行续跑」CLI 参数。

---
