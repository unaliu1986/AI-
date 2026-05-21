# M18 · ComfyUI API 入门

**Day 61–65 | Phase 2→3**

## 1. 项目目标
通过 HTTP API 提交 ComfyUI workflow，轮询完成，下载 output 到本地。

## 2. 会学到什么
- ComfyUI `/prompt` `/history` API
- workflow JSON 参数替换（输入图路径）
- 本地 vs 云端 base_url 配置

## 3. AI 负责什么
- ComfyClient 类
- 最小 workflow 模板（如 rembg/白底）
- 批量提交脚本

## 4. 人需要理解什么
ComfyUI = 可视化拼出来的「图片处理流水线」，API 是远程按按钮。

## 5. 代码理解点
- [ ] `client_id` + `prompt_id`
- [ ] 轮询 history 直到 outputs 出现

## 6. 工程思维
- **workflow 版本化**：workflow_v1.json 进 git
- **GPU 排队**：提交≠立刻完成

## 7. 推荐提问
```
ComfyUI API Python client：
- POST /prompt 提交 workflow.json
- 轮询 /history/{prompt_id}
- 下载 output images 到 outputs/{job_id}/
- 支持 COMFYUI_BASE_URL 环境变量
参考官方 API 文档，不要编造 endpoint。
```

## 8. 常见 AI 错误
| 错误 | 表现 | 你怎么发现 |
|------|------|------------|
| 幻觉 node name | prompt 返回 400 | API 返回 `"invalid node title"` 错误信息 |
| 不 poll | 以为同步完成 | 脚本立即退出了但 output 文件夹是空的 |

## 9. 验收标准
- [ ] 10 张图批量白底成功
- [ ] 失败有 prompt_id 可查

## 10. 作业
workflow 换你的真实节点 ID（从 ComfyUI 导出）。

---
