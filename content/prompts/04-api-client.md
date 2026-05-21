# Prompt 04 · API 调用

```
实现 API 客户端脚本：

## API
- URL: {{API_URL}}
- 方法: GET
- 文档: {{DOCS_URL}}（请先给 curl 验证命令）

## 输出
- 解析字段：{{FIELDS}}
- 写入 reports/{{NAME}}_YYYYMMDD.csv
- Excel 友好：utf-8-sig

## 可靠性
- timeout=10
- 失败重试 3 次，间隔 2s
- API key 从 os.getenv("{{ENV_KEY}}")

## 输出顺序
1. curl 命令
2. 样例 JSON 结构说明
3. Python 代码

若文档无法访问，明确说「无法验证」，不要编造字段。
```
