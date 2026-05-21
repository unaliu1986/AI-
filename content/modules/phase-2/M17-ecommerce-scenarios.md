# M17 · 跨境电商自动化场景

**Day 57–60 | Phase 2 | 项目 P05**

## 1. 项目目标
选一个真实场景 PoC：竞品 ASIN 监控 / 库存 CSV 同步 / 多店铺报表合并。

## 2. 会学到什么
- SKU/ASIN 映射表设计
- 多店铺 config 隔离
- 业务字段标准化

## 3. AI 负责什么
- 场景脚手架
- 映射表 loader
- 报表模板

## 4. 人需要理解什么
自动化服务于 **业务对象**（SKU），不是服务于「脚本」。

## 5. 代码理解点
- [ ] `shops/{shop_id}.yaml`
- [ ] `mapping.csv`: sku, asin, title

## 6. 工程思维
- **数据字典先行**：列名全项目统一
- **人工审核点**：价格/上架前 CSV 预览

## 7. 推荐提问
```
场景：每日抓取 20 个 ASIN 的 title/price/rank（mock HTML 或公开页）。
输出 reports/competitors_YYYYMMDD.csv。
shops 配置含 marketplace, currency。
遵守 2s 间隔。
```

## 8. 常见 AI 错误
| 错误 | 表现 | 你怎么发现 |
|------|------|------------|
| 混淆站点币种 | 价格单位错 | 导出 CSV 金额相差约 7 倍（美元 vs 人民币）|
| 无 SKU 映射 | 下游用不了 | 导出数据只有标题，没有系统内 SKU 编号 |

## 9. 验收标准
- [ ] 映射表驱动，换 SKU 不改代码
- [ ] 报表 Excel 可开

## 10. 作业
写 P05 需求与风险（CAPTCHA/ToS）。

---
