# AI API 价格指南

[aiapiprice.com](https://aiapiprice.com) - 中文静态内容站，帮助开发者理解 AI API 价格结构、Token 成本、扣费逻辑和小额测试方法。

## 项目定位

**aiapiprice.com** 是 LinkAI 的中文价格/成本/扣费透明副引流站，帮助开发者在接入模型 API 前理解：
- 价格单位（Token、Credits、图片、视频）
- Token 成本（输入/输出/缓存/tool calls）
- OpenRouter 余额对账
- 图片/视频生成扣费
- 失败请求扣费
- 小额测试方法

## 技术栈

- **框架**: Astro 静态站
- **语言**: TypeScript
- **输出**: 纯静态 HTML
- **不包含**: 后端、数据库、登录、支付、实时价格抓取

## 快速开始

```bash
# 安装依赖
npm install

# 开发服务器
npm run dev

# 构建
npm run build

# 预览
npm run preview
```

## 验证

```bash
# 运行所有验证
npm run verify

# 验证生产环境
SITE_URL=https://aiapiprice.com npm run verify:live
```

## 页面结构

- **首页**: `/` - AI API 价格指南首页
- **完整页**: 
  - `/claude-code-token-cost/` - Claude Code Token 成本
  - `/openrouter-yue/` - OpenRouter 余额
  - `/shipin-shengcheng-api-jiage/` - 视频生成 API 价格
- **Scaffold 页**: 19 个价格结构说明页

## CTA

所有页面包含两个固定 CTA：
1. [AI API Doctor 检测](https://aiapidoctor.com/)
2. [注册 LinkAI](https://api1.link-ai.cc/register)

## 写作原则

- 不承诺最低价
- 不声称官方替代
- 价格以官方文档为准
- 扣费判断需综合分析

## 文档

- [项目记忆](docs/PROJECT_MEMORY.md)
- [发布门禁](docs/RELEASE_GATE.md)
- [历史事件](docs/HISTORICAL_INCIDENTS.md)
- [SEO/GEO 规则](docs/SEO_GEO_RULES.md)
- [内容路线图](docs/CONTENT_ROADMAP.md)
- [运营指南](docs/OPERATIONS.md)
