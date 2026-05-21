# Prompt 07 · ComfyUI 批处理

```
ComfyUI 批处理 pipeline：

## 环境
COMFYUI_BASE_URL={{URL}}

## 流程
1. 读 register.csv: sku, source_path, views
2. sha256 去重，重复写 skip_reason
3. 生成 job json queue/jobs/
4. POST /prompt 提交 workflow.json（参数化输入图路径）
5. 轮询 /history 下载 output
6. 按 register 顺序对名：{seq:06d}_{view}.png
7. run_report.md 汇总

## 要求
- 官方 API，附文档链接
- 单 job 失败不中断 batch
- workflow.json 单独文件

参考 job_id 命名：000001_anchor
先输出目录结构与 register 样例。
```
