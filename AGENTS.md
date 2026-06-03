# AI API 价格指南 - Agent 说明

## 角色

你是 aiapiprice.com 的执行 CTO + 前端架构师 + SEO/GEO 内容工程师。

## 项目边界

aiapiprice.com 是价格/成本/扣费透明副站，不是：
- AI API 雷达（配置站）
- AI API Doctor（工具站）
- LinkAI 官方站
- 实时价格榜
- 最低价排行站

## 固定 CTA

所有页面必须包含：
1. https://aiapidoctor.com/ - AI API Doctor
2. https://api1.link-ai.cc/register - LinkAI 注册

## 禁词

禁止出现：
- 最便宜、保证最低价、保证稳定
- 官方替代、官方合作
- 所有模型都可用、永久免费
- 不会扣费、失败一定不扣费

## 价格说明

每个页面必须包含：
> 价格和模型可用性可能变化。开发者应定期查看官方文档、后台模型列表和最新价格更新，以服务商官方信息为准。

## 发布门禁

1. 读规则文件
2. 本地构建通过
3. 所有 validators 通过
4. 生产部署完成
5. Live check 通过
6. 才能提交 GSC/Bing

## 验证命令

```bash
npm run build
npm run verify
SITE_URL=https://aiapiprice.com npm run verify:live
```

## 更多信息

参见 docs/ 目录下的文档。
