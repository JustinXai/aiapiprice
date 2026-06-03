export const siteConfig = {
  name: 'AI API 价格指南',
  title: 'AI API 价格指南：模型 API 价格、Token 成本与扣费透明',
  description: 'AI API 价格指南帮助国内开发者在接入模型 API 前，先理解价格单位、Token 成本、OpenRouter 余额、视频/图片生成扣费、失败请求扣费和小额测试方法。',
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
    { label: '首页', href: '/' },
    { label: 'Claude Code 成本', href: '/claude-code-token-cost/' },
    { label: 'OpenRouter 余额', href: '/openrouter-yue/' },
    { label: '视频生成 API', href: '/shipin-shengcheng-api-jiage/' },
    { label: '模型价格', href: '/deepseek-api-price/' },
  ],
  
  categories: [
    {
      id: 'claude-code',
      name: 'Claude Code 与 Coding Agent 成本',
      slug: 'claude-code-cost',
      description: 'Claude Code、GitHub Copilot、Cursor 等 coding agent 的 token 消耗、上下文管理和成本优化',
      pages: ['/claude-code-token-cost/']
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
      name: '图像 API 价格',
      slug: 'image-api-price',
      description: '图片生成 API、图像识别 API 的价格结构和计费单位',
      pages: ['/image-generation-api-price/', '/jimeng-api-price/', '/gpt-image-api-price/']
    },
    {
      id: 'video-api',
      name: '视频 API 价格',
      slug: 'video-api-price',
      description: '视频生成 API、可灵、即梦、Seedance 等视频 API 的计费逻辑和扣费判断',
      pages: ['/shipin-shengcheng-api-jiage/', '/keling-api-jiage/', '/video-generation-failed-billing/']
    },
    {
      id: 'billing',
      name: '扣费异常与小额测试',
      slug: 'billing-troubleshooting',
      description: '请求失败、stream 中断、tool call、失败请求扣费的判断方法和小额测试流程',
      pages: ['/api-koufei-yichang/', '/request-failed-billing/', '/tool-call-koufei/', '/streaming-interrupted-billing/', '/small-budget-api-test/']
    }
  ],
  
  costTypes: [
    {
      id: 'token',
      name: 'Token 成本',
      description: '输入 token、输出 token、缓存 token、tool call token 的计费逻辑',
      href: '/claude-code-token-cost/'
    },
    {
      id: 'credits',
      name: 'Credits / 余额',
      description: '预存余额、credits 扣除、usage 记录和 API Key 余额对账',
      href: '/openrouter-yue/'
    },
    {
      id: 'image',
      name: '图片生成成本',
      description: '按 token、按图片、按分辨率计费的区别和扣费判断',
      href: '/image-generation-api-price/'
    },
    {
      id: 'video',
      name: '视频生成成本',
      description: '按秒、按 credit、按任务、按分辨率计费和失败扣费判断',
      href: '/shipin-shengcheng-api-jiage/'
    },
    {
      id: 'failed',
      name: '失败请求扣费',
      description: '请求失败、401/403、超时、重试、流式中断的扣费判断',
      href: '/request-failed-billing/'
    }
  ],
  
  models: [
    { name: 'DeepSeek', href: '/deepseek-api-price/', description: 'DeepSeek V3/R1 系列 API 价格' },
    { name: 'Kimi', href: '/kimi-api-price/', description: 'Kimi 长上下文 API 价格' },
    { name: 'Qwen', href: '/qwen-api-price/', description: '通义千问 Qwen 系列 API 价格' },
    { name: '通义千问', href: '/tongyi-qianwen-api-price/', description: '阿里云通义千问 API 价格' },
    { name: '豆包', href: '/doubao-api-price/', description: '字节豆包 API 价格' },
    { name: 'Claude', href: '/claude-api-price/', description: 'Claude 3.5/4 系列 API 价格' },
    { name: 'Gemini', href: '/gemini-api-price/', description: 'Google Gemini API 价格' },
    { name: 'OpenAI', href: '/openai-api-usage/', description: 'OpenAI GPT-4o/DALL-E API 价格' },
  ],
  
  faq: [
    {
      q: 'AI API 价格会变化吗？',
      a: '是的。模型 API 价格和可用性可能随时变化。开发者应定期查看官方文档、后台模型列表和最新价格更新，以服务商官方信息为准。'
    },
    {
      q: '为什么 Claude Code 比聊天更费 token？',
      a: 'Claude Code 等 coding agent 会进行长上下文交互、文件读取、工具调用、多轮循环等操作，这些都会消耗额外 token。上下文越大、文件越多、工具调用越频繁，token 消耗越高。'
    },
    {
      q: 'OpenRouter credits 和 usage 是一回事吗？',
      a: '不完全一样。credits 是预存余额，usage 记录实际消耗。credits 可能因服务商定价、折扣、失败请求处理等因素与预期扣除有差异。建议小额测试后对照 credits 余额变化和 usage 记录进行对账。'
    },
    {
      q: '视频生成失败会扣费吗？',
      a: '不同服务商的规则不同。视频生成任务通常是异步提交，涉及轮询、回调或超时机制。失败是否扣费需要结合 request_id、task_id、usage 和后台记录综合判断，不能一概而论。'
    },
    {
      q: '如何先小额测试？',
      a: '建议流程：1. 查模型是否可见和可用；2. 查价格单位和计费标准；3. 发小额请求；4. 查看 usage 返回；5. 对照后台余额变化；6. 确认无误后再扩大调用。'
    }
  ],
  
  hero: {
    h1: 'AI API 价格指南：模型 API 价格、Token 成本与扣费透明',
    subtitle: '整理 Claude Code、OpenRouter、DeepSeek、通义千问、Kimi、Qwen、豆包、GPT Image、可灵、即梦、Seedance 等 API 的价格结构、Token 成本、credits、视频生成扣费、失败请求扣费和小额测试方法。',
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
      q: 'Claude Code 为什么烧 token？',
      href: '/claude-code-token-cost/',
      description: '长上下文、文件读取、工具调用、多轮循环'
    },
    {
      q: 'OpenRouter credits / 余额怎么扣？',
      href: '/openrouter-yue/',
      description: '预存余额、usage 记录、API Key 对账'
    },
    {
      q: '视频生成 API 为什么比文本 API 更贵？',
      href: '/shipin-shengcheng-api-jiage/',
      description: '按秒/credit/任务计费、异步任务、失败扣费判断'
    },
    {
      q: '请求失败、stream 中断、tool call 时怎么判断扣费？',
      href: '/api-koufei-yichang/',
      description: '401/403/超时、重试、流式中断的扣费逻辑'
    }
  ]
};
