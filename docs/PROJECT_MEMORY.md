# AI API 价格指南 (aiapiprice.com)

## 项目定位

**aiapiprice.com** 是 LinkAI 的中文价格/成本/扣费透明副引流站。

### 核心定位

帮助国内开发者在接入模型 API 前，先理解：
- 价格单位（Token、Credits、图片、视频）
- Token 成本（输入/输出/缓存/tool calls）
- OpenRouter 余额（credits/usage 对账）
- 图片/视频生成扣费
- 失败请求扣费
- 小额测试方法

### 必须严格区分

| 站点 | 解决的问题 |
|------|-----------|
| AI API 雷达 | API 怎么接、Base URL 怎么填、API Key 怎么配、MCP / Agent / 视频 API 怎么排错 |
| AI API 价格指南 | 多少钱、怎么扣、怎么对账、余额为什么消耗快、失败是否扣费、如何小额测试 |
| AI API Doctor | 检测 Base URL、API Key、模型权限、usage/扣费风险 |
| LinkAI 注册页 | 最终转化入口 |

### 禁止写成

- LinkAI 官方站
- 泛 API 配置站
- AI API 雷达复制站
- AI API Doctor 工具站
- 实时价格榜
- 最低价排行站

## 技术栈

- **框架**: Astro 静态站
- **语言**: TypeScript
- **输出**: 纯静态 HTML
- **不包含**: 后端、数据库、登录、支付、实时价格抓取

## 目录结构

```
src/
  data/
    site.ts         # 站点配置
    pages.ts        # 页面数据
  layouts/
    BaseLayout.astro
    ArticleLayout.astro
  components/
    Header.astro
    Footer.astro
    Hero.astro
    FAQ.astro
    AISummary.astro
    CTABox.astro
    Breadcrumbs.astro
    RelatedLinks.astro
    FourQuestions.astro
    PageDirectory.astro
    CostTypeGrid.astro
    SmallTestFlow.astro
    ModelGrid.astro
  pages/
    index.astro
    [23 个内容页面]
  styles/
    global.css
public/
  robots.txt
scripts/
  build-sitemap.mjs
  build-llms.mjs
  validate-*.mjs (11 个验证脚本)
  verify-live.mjs
docs/
  PROJECT_MEMORY.md
  RELEASE_GATE.md
  HISTORICAL_INCIDENTS.md
  SEO_GEO_RULES.md
  CONTENT_ROADMAP.md
  OPERATIONS.md
.cursor/rules/
  always.mdc
  content.mdc
  claims.mdc
  release-gate.mdc
```

## 页面清单

### 首页
- `/` - AI API 价格指南首页

### 完整页面
- `/claude-code-token-cost/` - Claude Code Token 成本
- `/openrouter-yue/` - OpenRouter 余额
- `/shipin-shengcheng-api-jiage/` - 视频生成 API 价格

### Scaffold 页面 (19个)
- `/deepseek-api-price/`
- `/kimi-api-price/`
- `/qwen-api-price/`
- `/doubao-api-price/`
- `/tongyi-qianwen-api-price/`
- `/claude-api-price/`
- `/gemini-api-price/`
- `/openai-api-usage/`
- `/openai-api-billing/`
- `/api-koufei-yichang/`
- `/request-failed-billing/`
- `/tool-call-koufei/`
- `/streaming-interrupted-billing/`
- `/gpt-image-api-price/`
- `/image-generation-api-price/`
- `/jimeng-api-price/`
- `/keling-api-jiage/`
- `/video-generation-failed-billing/`
- `/small-budget-api-test/`

## CTA 规则

### 固定 CTA

所有页面必须包含两个固定 CTA：

1. **AI API Doctor 检测**
   - URL: `https://aiapidoctor.com/`
   - 文案: "先用 AI API Doctor 检测 Base URL、API Key、模型权限和 usage 返回情况"

2. **LinkAI 注册**
   - URL: `https://api1.link-ai.cc/register`
   - 文案: "注册 LinkAI，领取 $2 免费福利"

### 禁止指向

- `/tools/*`
- `api1.link-ai.cc/#/register`
- `docs.link-ai.cc/tools`
- `rutaapi`
- `aicostplanner`
- `aiapiops`
- `sellerfixhub`
- `extensionfixes`

## 写作禁区

禁止出现以下词语或等价表达：

- 最便宜
- 保证最低价
- 保证稳定
- 官方替代
- 官方合作
- 所有模型都可用
- 永久免费
- 不会扣费
- 失败一定不扣费
- 100% 准确对账
- AI API Doctor 能发现所有风险
- LinkAI 保证解决所有扣费异常
- 视频生成失败一定不收费

## 价格说明

每个页面必须包含价格说明文案：

> 价格和模型可用性可能变化。开发者应定期查看官方文档、后台模型列表和最新价格更新，以服务商官方信息为准。扣费判断需要结合 request_id、usage、raw quota、completion_tokens、stream 状态和后台账单记录综合分析。

## 构建命令

```bash
npm run dev          # 开发服务器
npm run build        # 构建
npm run preview      # 预览
npm run verify       # 运行所有验证
npm run verify:live  # 验证生产环境
```
