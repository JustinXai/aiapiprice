export const siteConfig = {
  name: 'AI API 价格指南',
  title: 'AI API 价格、视频生成成本与扣费透明指南',
  description: '比较 AI 视频生成、图片生成、AI短剧、Coding Agent 与多模型 API 的成本、失败扣费、超时、回调、usage 对账和小额测试方法。',
  url: 'https://aiapiprice.com',
  lang: 'zh-CN',
  author: 'AI API 价格指南',
  copyright: '© 2026 AI API 价格指南. 价格和模型可用性可能变化，请以官方文档与后台记录为准。',
  
  cta: {
    doctor: {
      label: 'AI API Doctor 检测',
      description: '先用 AI API Doctor 检测 Base URL、API Key、模型权限和 usage 返回情况',
      href: 'https://aiapidoctor.com/'
    },
    register: {
      label: '注册 LinkAI 小额测试',
      description: '注册 LinkAI，领取 $2 免费福利，用小额余额测试模型、usage 和扣费记录',
      href: 'https://api1.link-ai.cc/register'
    }
  },
  
  navigation: [
    { label: '视频生成价格', href: '/ai-video-api-price/' },
    { label: 'AI短剧成本', href: '/ai-short-drama-api-cost/' },
    { label: '图片生成价格', href: '/image-generation-api-price/' },
    { label: 'Agent 成本', href: '/ai-agent-token-cost/' },
    { label: '扣费透明', href: '/video-generation-failed-billing/' },
    { label: '小额测试', href: '/small-budget-api-test/' },
  ],
  
  categories: [
    {
      id: 'claude-code',
      name: 'Coding Agent Token 成本',
      slug: 'agent-token-cost',
      description: 'Claude Code、OpenClaw、Kilo Code、Cline 和 Cursor 的 token 消耗、tool call 与多轮循环成本',
      pages: ['/ai-agent-token-cost/', '/claude-code-token-cost/', '/tool-call-koufei/']
    },
    {
      id: 'openrouter',
      name: 'OpenRouter 与 API credits',
      slug: 'openrouter-credits',
      description: 'OpenRouter credits、usage、API Key 余额和对账逻辑',
      pages: ['/openrouter-yue/']
    },
    {
      id: 'openai',
      name: 'OpenAI API 账单与 usage',
      slug: 'openai-usage',
      description: 'OpenAI API 的 usage 记录、账单结构和图片生成扣费',
      pages: ['/openai-api-usage/', '/openai-api-billing/', '/gpt-image-api-price/']
    },
    {
      id: 'model-price',
      name: '模型 API 价格',
      slug: 'model-api-price',
      description: 'DeepSeek、Kimi、Qwen、通义千问、豆包、Claude、OpenAI 等模型 API 价格',
      pages: ['/deepseek-api-price/', '/kimi-api-price/', '/qwen-api-price/', '/doubao-api-price/', '/tongyi-qianwen-api-price/', '/claude-api-price/', '/gemini-api-price/']
    },
    {
      id: 'image-api',
      name: '图片生成 API 价格',
      slug: 'image-api-price',
      description: '图片生成、商品图、背景替换、图生图和编辑任务的价格结构与扣费方式',
      pages: ['/image-generation-api-price/', '/gpt-image-api-price/', '/product-image-api-price/', '/jimeng-api-price/']
    },
    {
      id: 'video-api',
      name: 'AI 视频生成 API 价格',
      slug: 'video-api-price',
      description: '可灵、即梦、Seedance、文生视频、图生视频、超时、回调和失败重试的价格与成本结构',
      pages: ['/ai-video-api-price/', '/video-generation-api-cost/', '/shipin-shengcheng-api-jiage/', '/keling-api-jiage/', '/video-generation-timeout/']
    },
    {
      id: 'billing',
      name: '扣费透明',
      slug: 'billing-troubleshooting',
      description: '失败任务、超时、取消任务、回调异常、tool call 与 usage / raw quota 对账',
      pages: ['/video-generation-failed-billing/', '/video-generation-timeout/', '/video-generation-webhook/', '/api-koufei-yichang/', '/request-failed-billing/']
    }
  ],
  
  costTypes: [
    {
      id: 'video',
      name: '视频生成成本',
      description: '按秒、按任务、按分辨率、按 credit 的视频生成成本结构与失败扣费判断',
      href: '/video-generation-api-cost/'
    },
    {
      id: 'short-drama',
      name: 'AI短剧成本',
      description: '批量短视频、失败重试、回调、素材与多版本生成的成本估算',
      href: '/ai-short-drama-api-cost/'
    },
    {
      id: 'image',
      name: '图片生成成本',
      description: '商品图、背景替换、图生图、编辑和批量生成的计费方式',
      href: '/product-image-api-price/'
    },
    {
      id: 'agent',
      name: 'Coding Agent Token 成本',
      description: 'Claude Code、OpenClaw、Kilo Code、Cline 与 Cursor 的 token 消耗结构',
      href: '/ai-agent-token-cost/'
    },
    {
      id: 'timeout-failed',
      name: '失败/超时扣费',
      description: '失败任务、超时、取消任务、回调异常和重试是否可能产生费用',
      href: '/video-generation-timeout/'
    },
    {
      id: 'usage-raw-quota',
      name: 'usage / raw quota 对账',
      description: '通过 usage log、raw quota、task_id 和账单记录核对扣费',
      href: '/openrouter-yue/'
    }
  ],
  
  models: [
    { name: '可灵', href: '/keling-api-jiage/', description: '可灵视频生成、图生视频和失败任务扣费' },
    { name: '即梦', href: '/jimeng-api-price/', description: '即梦图片/视频生成与任务扣费' },
    { name: 'Seedance', href: '/ai-video-api-price/', description: '视频生成平台价格入口与任务结构' },
    { name: 'GPT Image', href: '/gpt-image-api-price/', description: '图片生成、编辑、背景替换与小额测试' },
    { name: 'OpenAI', href: '/openai-api-usage/', description: 'OpenAI usage、图片生成与账单核对' },
    { name: 'Claude Code', href: '/claude-code-token-cost/', description: 'Claude Code 与 Coding Agent token 成本' },
    { name: 'OpenClaw', href: '/ai-agent-token-cost/', description: 'Agent token 成本与工具调用结构' },
    { name: 'Kilo Code', href: '/ai-agent-token-cost/', description: 'Coding Agent 成本入口与小额测试' },
    { name: 'Cline / Cursor', href: '/ai-agent-token-cost/', description: '多轮循环、读取上下文和工具调用成本' },
    { name: 'DeepSeek', href: '/deepseek-api-price/', description: 'DeepSeek V3/R1 系列 API 价格' },
    { name: 'Qwen', href: '/qwen-api-price/', description: '通义千问 Qwen 系列 API 价格' },
    { name: '豆包', href: '/doubao-api-price/', description: '豆包 API 价格与可用模型' },
  ],
  
  faq: [
    {
      q: '视频生成 API 为什么通常更贵？',
      a: '视频生成通常会同时受秒数、分辨率、模型、任务次数、参考图、音频和失败重试影响，成本结构往往比文本 API 更复杂。'
    },
    {
      q: 'AI短剧批量生成前为什么要先小额测试？',
      a: '批量任务会放大失败重试、超时、回调异常和多版本生成带来的成本。先做小额测试，可以先核对 usage log、raw quota 和后台账单记录。'
    },
    {
      q: '图片生成和商品图 API 怎么计费？',
      a: '不同平台可能按张数、分辨率、输入图、输出图、背景替换、图生图或编辑任务计费。正式批量生成前建议先用小额请求验证。'
    },
    {
      q: '失败、超时、取消任务时如何判断是否产生费用？',
      a: '不同供应商规则不同。失败、超时、取消任务和回调异常是否产生费用，需要结合 task_id、request_id、usage log、raw quota 和账单记录综合判断。'
    },
    {
      q: 'Coding Agent 为什么也容易烧余额？',
      a: 'Claude Code、OpenClaw、Kilo Code、Cline 和 Cursor 等 Agent 工具会涉及长上下文读取、工具调用、多轮循环和重试，token 成本可能显著放大。'
    }
  ],
  
  hero: {
    h1: 'AI API 价格、视频生成成本与扣费透明指南',
    subtitle: '比较 AI 视频生成、图片生成、AI短剧、Coding Agent 与多模型 API 的成本、失败扣费、超时、回调和小额测试方法。',
    tags: ['价格结构', '扣费透明', '小额测试'],
    ledgerTitle: '价格账本说明',
    ledgerContent: '本指南整理 API 价格结构和计费逻辑，帮助开发者在接入前理解：多少钱、怎么扣、怎么对账、余额为什么消耗快、失败是否扣费、如何小额测试。'
  },
  
  smallTestFlow: [
    { step: 1, title: '查模型是否可见', description: '确认模型在服务商后台可见且有可用额度' },
    { step: 2, title: '查价格单位', description: '确认计费单位（token/credit/图片/视频/任务）' },
    { step: 3, title: '发小请求', description: '发送最小化测试请求，记录 request_id' },
    { step: 4, title: '看 usage', description: '查看 API 返回的 usage、credits_used 等字段' },
    { step: 5, title: '对照后台余额', description: '对比请求前后余额变化，核对扣除金额' },
    { step: 6, title: '再扩大调用', description: '确认小额测试无误后再逐步扩大调用量' },
  ],
  
  fourQuestions: [
    {
      q: '视频生成 API 为什么更贵？',
      href: '/video-generation-api-cost/',
      description: '秒数、任务、分辨率、音频、参考图和失败重试都会影响成本'
    },
    {
      q: 'AI短剧批量生成成本怎么估？',
      href: '/ai-short-drama-api-cost/',
      description: '多镜头、多版本、批量任务、失败重试与回调都会放大预算'
    },
    {
      q: '图片生成和商品图 API 怎么计费？',
      href: '/product-image-api-price/',
      description: '按张数、分辨率、输入图、输出图和编辑任务计费'
    },
    {
      q: '失败、超时、回调异常时怎么判断扣费？',
      href: '/video-generation-timeout/',
      description: '结合 task_id、request_id、usage log、raw quota 与后台账单综合判断'
    }
  ]
};
