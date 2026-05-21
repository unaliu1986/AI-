# P05 · 上架辅助流水线（PoC）

**阶段**：Phase 2 | **模块**：M17 | **Day 60**

## 背景
多 SKU 上架：主图、标题、价格 —— 半自动减少重复点击。

## 目标
CSV 驱动 → Playwright 填表 + 上传 → 结果 report；**人工审核 CSV 后再 execute**。

## 输入 CSV 列（示例）

`sku, title, price, image_path, category`

## 验收清单

- [ ] dry-run 输出 upload_plan.csv
- [ ] execute 3 SKU 成功（mock 或测试店）
- [ ] 多店铺 shops/*.yaml 隔离
- [ ] 风险说明文档：2FA/CAPTCHA 怎么办

## 非目标（Scope 控制）
不做全自动绕过验证码；不做违反平台规则的功能。
