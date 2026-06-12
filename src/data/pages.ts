export interface PageData {
  slug: string;
  title: string;
  metaDescription: string;
  h1: string;
  category: string;
  targetKeywords: string[];
  summary: string;
  aiSummary: string;
  faq: { q: string; a: string }[];
  updatedAt: string;
  internalLinks: string[];
  externalConfigLink?: { label: string; url: string };
  ctaEnabled: boolean;
  status: 'full' | 'scaffold';
}

export const pages: PageData[] = [
  // Homepage is handled separately
  {
    slug: '',
    title: 'AI API 价格指南：模型 API 价格、Token 成本与扣费透明',
    metaDescription: 'AI API 价格指南帮助国内开发者在接入模型 API 前，先理解价格单位、Token 成本、OpenRouter 余额、视频/图片生成扣费、失败请求扣费和小额测试方法。',
    h1: 'AI API 价格指南：模型 API 价格、Token 成本与扣费透明',
    category: 'home',
    targetKeywords: ['AI API 价格指南', '模型 API 价格', 'Token 成本', '扣费透明'],
    summary: '首页，整理 Claude Code、OpenRouter、DeepSeek、通义千问、Kimi、Qwen、豆包、GPT Image、可灵、即梦、Seedance 等 API 的价格结构和计费逻辑。',
    aiSummary: 'AI API 价格指南是一个中文静态内容站，聚焦模型 API 价格结构、Token 成本、OpenRouter credits、usage 对账、图片和视频生成 API 扣费、失败请求扣费与小额测试方法。本站不承诺最低价，也不替代官方文档；开发者应结合官方价格页、后台模型列表、request_id、usage、raw quota、completion_tokens、stream 状态和后台账单记录综合判断。',
    faq: [
      { q: 'AI API 价格会变化吗？', a: '是的。模型 API 价格和可用性可能随时变化。开发者应定期查看官方文档、后台模型列表和最新价格更新，以服务商官方信息为准。' },
      { q: '如何先小额测试？', a: '建议流程：1. 查模型是否可见和可用；2. 查价格单位和计费标准；3. 发小额请求；4. 查看 usage 返回；5. 对照后台余额变化；6. 确认无误后再扩大调用。' },
    ],
    updatedAt: '2026-06-03',
    internalLinks: ['/claude-code-token-cost/', '/openrouter-yue/', '/shipin-shengcheng-api-jiage/', '/deepseek-api-price/'],
    ctaEnabled: true,
    status: 'full'
  },
  // Full Page 1: Claude Code Token Cost
  {
    slug: 'claude-code-token-cost',
    title: 'Claude Code Token 成本：Coding Agent 为什么容易烧余额',
    metaDescription: '解释 Claude Code 与 Coding Agent 的 Token 成本来源，包括长上下文、文件读取、tool calls、多轮循环和小额测试。',
    h1: 'Claude Code Token 成本：Coding Agent 为什么容易烧余额',
    category: 'claude-code',
    targetKeywords: ['Claude Code Token 成本', 'claude code token cost', 'claude code cost', 'claude code pricing', 'Claude Code API 余额消耗', 'coding agent 成本'],
    summary: '解释 Claude Code / coding agent 为什么容易烧 token：长上下文、文件读取、工具调用、多轮循环、自动化、多实例、模型选择。给出小额测试和 usage 对账流程。',
    aiSummary: 'Claude Code Token 成本页面解释 Coding Agent 为何容易消耗余额。成本来源包括：输入 token（用户 prompt、文件内容、上下文历史）、输出 token（模型回复）、缓存 token（cached context）、tool calls（工具调用消耗）。Claude Code 等 coding agent 的 token 消耗通常比普通聊天高出数倍到数十倍，因为涉及长上下文交互、代码库文件读取、多轮循环编辑、自动化执行和重试。小额测试建议从最小上下文开始，逐步扩大调用规模，同时记录 usage 和余额变化。',
    faq: [
      { q: 'Claude Code 比普通聊天贵多少？', a: 'Claude Code 等 coding agent 的 token 消耗通常是普通聊天的数倍到数十倍。具体倍数取决于代码库大小、上下文长度、工具调用频率和模型选择。建议先用小额请求测试，记录 usage 再估算成本。' },
      { q: 'tool calls 会额外扣费吗？', a: '是的。tool calls 会消耗额外的 input token（传给工具的参数）和 output token（工具返回结果的总结）。频繁的 tool calls 会显著增加 token 消耗。' },
      { q: '如何降低 Claude Code 成本？', a: '可以尝试：1. 使用更小的上下文窗口；2. 减少每次交互的文件数量；3. 选择性价比更高的模型；4. 设置合理的 max_tokens 限制；5. 使用流式输出减少不必要的重试。' },
      { q: 'cached tokens 能省钱吗？', a: '部分服务商提供 cached tokens 折扣。Claude Code 会自动利用上下文缓存，但具体折扣政策请以官方文档为准。' },
    ],
    updatedAt: '2026-06-05',
    internalLinks: ['/ai-agent-token-cost/', '/tool-call-koufei/', '/openrouter-yue/', '/small-budget-api-test/', '/claude-api-price/'],
    ctaEnabled: true,
    status: 'full'
  },
  // Full Page 2: OpenRouter Credits
  {
    slug: 'openrouter-yue',
    title: 'OpenRouter 余额怎么扣：credits、usage 与 API Key 对账',
    metaDescription: '解释 OpenRouter credits、usage、API Key 余额和模型调用扣费逻辑，帮助开发者用小额请求核对 usage 与余额变化。',
    h1: 'OpenRouter 余额怎么扣：credits、usage 与 API Key 对账',
    category: 'openrouter',
    targetKeywords: ['OpenRouter 余额', 'openrouter credits', 'openrouter usage', 'OpenRouter credits', 'OpenRouter 余额怎么扣', 'OpenRouter API Key'],
    summary: '解释 OpenRouter credits / usage / API key / 余额扣除逻辑，以及为什么不同模型、不同 provider、不同重试会让用户感觉余额变化不直观。',
    aiSummary: 'OpenRouter 余额页面解释 credits、usage、API Key 余额的扣除逻辑。credits 是预存余额，用于支付 API 调用；usage 记录实际消耗。不同模型定价不同，同一请求因 provider 路由、重试、失败处理等因素可能导致 credits 扣除与预期有差异。开发者应通过 credits 查询 API 和 usage 记录进行对账，核对每次请求的 request_id、模型名称、消耗量与余额变化。常见问题包括 no credits（余额不足）、401/403（认证/权限问题）、model not found（模型不可用）。建议先用小额请求测试，确认对账逻辑后再扩大规模。',
    faq: [
      { q: 'OpenRouter credits 和 usage 有什么区别？', a: 'credits 是账户预存余额，用于支付 API 调用费用；usage 是实际消耗记录。credits 扣除可能因服务商定价、折扣、失败请求处理等因素与 usage 有细微差异。建议对账时对比两者变化。' },
      { q: '为什么余额消耗和预期不一致？', a: '可能原因：1. 不同模型定价不同；2. provider 路由导致价格波动；3. 重试请求会额外扣费；4. 失败请求处理规则不同；5. 缓存和压缩导致实际消耗与估算不同。' },
      { q: 'no credits 是什么意思？', a: 'no credits 表示账户余额不足以支付请求费用。需要充值后再发起请求。注意：部分服务商对失败请求也可能有最低消费。' },
      { q: '如何查询 OpenRouter credits 和 usage？', a: '可以通过 OpenRouter 的 API 端点查询 credits 余额和 usage 记录。建议保留每次请求的 request_id，结合后台记录进行对账。' },
    ],
    updatedAt: '2026-06-03',
    internalLinks: ['/claude-code-token-cost/', '/request-failed-billing/', '/small-budget-api-test/', '/openai-api-usage/'],
    ctaEnabled: true,
    status: 'full'
  },
  // Full Page 3: Video Generation API Price
  {
    slug: 'shipin-shengcheng-api-jiage',
    title: '视频生成 API 价格：AI 视频生成、图生视频与失败扣费怎么判断',
    metaDescription: '解释 AI 视频生成 API 常见计费单位，包括秒、credit、任务、分辨率、音频、重试、超时、回调和小额测试方法。',
    h1: '视频生成 API 价格：AI 视频生成、图生视频与失败扣费怎么判断',
    category: 'video-api',
    targetKeywords: ['视频生成 api 价格', 'AI 视频生成 API', '视频生成 api 成本', '视频生成扣费', '图生视频 api 价格', '可灵 api 价格', '即梦 api 价格'],
    summary: '解释 AI 视频生成 API 为什么比文本 API 更复杂：可能按秒、credit、分辨率、视频长度、音频、任务、重试和回调计费；视频任务可能是异步提交、轮询、回调、超时；失败是否扣费要看服务商规则和后台记录。',
    aiSummary: '视频生成 API 价格页面解释 AI 视频生成、文生视频和图生视频的计费逻辑。视频生成 API 通常比文本 API 复杂，可能按秒、credit、任务、分辨率、音频、重试和回调等维度计费。视频任务通常是异步的，涉及提交、轮询、回调或超时机制。失败是否扣费取决于服务商规则：部分对失败任务不收费，部分可能有最低消费或超时费用。判断扣费需要结合 request_id、task_id、usage、raw quota、后台任务状态和账单记录综合分析。',
    faq: [
      { q: '视频生成 API 按什么单位计费？', a: '不同服务商计费单位不同。常见计费维度包括：按秒（视频时长）、按 credit（消耗额度）、按任务（每个生成任务）、按分辨率（高清/4K 等）、按音频（是否含音乐）。具体计费标准请以官方文档为准。' },
      { q: '文生视频和图生视频价格一样吗？', a: '通常不一样。图生视频（image-to-video）需要额外处理输入图像，技术成本更高，所以价格一般高于纯文生视频（text-to-video）。具体价格差异请参考各服务商的价目表。' },
      { q: '视频生成失败会扣费吗？', a: '不同服务商的规则不同。部分服务商对失败的生成任务不收费，部分可能有最低消费或超时费用。判断依据包括：request_id、task_id、usage 记录、后台任务状态。建议保留失败任务的完整记录以便对账。' },
      { q: '异步任务超时了怎么办？', a: '视频生成是异步任务，有超时限制。如果任务超时未完成，可能需要重试。超时是否扣费取决于服务商规则，建议查看官方文档的超时处理说明，并保留超时记录进行对账。' },
    ],
    updatedAt: '2026-06-05',
    internalLinks: ['/ai-video-api-price/', '/video-generation-api-cost/', '/image-to-video-api-cost/', '/keling-api-jiage/', '/jimeng-api-price/', '/video-generation-failed-billing/'],
    ctaEnabled: true,
    status: 'full'
  },
  // Scaffold Pages
  {
    slug: 'deepseek-api-price',
    title: 'DeepSeek API 价格：DeepSeek V3/R1 模型 API 费用结构',
    metaDescription: '整理 DeepSeek V3、DeepSeek R1 等模型的 API 价格结构、计费单位和成本优化建议。建议小额测试。',
    h1: 'DeepSeek API 价格：DeepSeek V3/R1 模型 API 费用结构',
    category: 'model-price',
    targetKeywords: ['DeepSeek API 价格', 'deepseek api price', 'DeepSeek V3 API', 'DeepSeek R1 API'],
    summary: 'DeepSeek V3/R1 模型 API 价格结构说明。',
    aiSummary: 'DeepSeek API 价格页面整理 DeepSeek V3 和 DeepSeek R1 等模型的 API 价格信息。价格和模型可用性可能变化，请以官方文档与后台记录为准。',
    faq: [
      { q: 'DeepSeek API 价格是多少？', a: '价格和模型可用性可能变化，请以官方文档、后台模型列表和最新价格更新为准。' },
      { q: 'DeepSeek 支持哪些模型？', a: '具体支持的模型列表和可用性请以官方文档和后台显示为准。' },
    ],
    updatedAt: '2026-06-03',
    internalLinks: ['/qwen-api-price/', '/kimi-api-price/', '/doubao-api-price/', '/claude-code-token-cost/'],
    ctaEnabled: true,
    status: 'scaffold'
  },
  {
    slug: 'kimi-api-price',
    title: 'Kimi API 价格：Kimi 长上下文模型 API 费用',
    metaDescription: '整理 Kimi 长上下文模型的 API 价格结构、Token 计费单位、成本优化建议和可用模型列表。',
    h1: 'Kimi API 价格：Kimi 长上下文模型 API 费用',
    category: 'model-price',
    targetKeywords: ['Kimi API 价格', 'kimi api price', 'Kimi 长上下文'],
    summary: 'Kimi 长上下文模型 API 价格结构说明。',
    aiSummary: 'Kimi API 价格页面整理 Kimi 长上下文模型的 API 价格信息。价格和模型可用性可能变化，请以官方文档与后台记录为准。',
    faq: [
      { q: 'Kimi API 价格是多少？', a: '价格和模型可用性可能变化，请以官方文档、后台模型列表和最新价格更新为准。' },
      { q: 'Kimi 的上下文窗口有多大？', a: '具体上下文窗口大小和可用性请以官方文档为准。' },
    ],
    updatedAt: '2026-06-03',
    internalLinks: ['/deepseek-api-price/', '/qwen-api-price/', '/doubao-api-price/', '/claude-code-token-cost/'],
    ctaEnabled: true,
    status: 'scaffold'
  },
  {
    slug: 'qwen-api-price',
    title: 'Qwen API 价格：通义千问 Qwen 系列模型 API 费用',
  metaDescription: '整理通义千问 Qwen 系列模型的 API 价格结构、Token 计费单位、成本优化建议和可用模型列表。',
    h1: 'Qwen API 价格：通义千问 Qwen 系列模型 API 费用',
    category: 'model-price',
    targetKeywords: ['Qwen API 价格', 'qwen api price', '通义千问 API'],
    summary: '通义千问 Qwen 系列模型 API 价格结构说明。',
    aiSummary: 'Qwen API 价格页面整理通义千问 Qwen 系列模型的 API 价格信息。价格和模型可用性可能变化，请以官方文档与后台记录为准。',
    faq: [
      { q: 'Qwen API 价格是多少？', a: '价格和模型可用性可能变化，请以官方文档、后台模型列表和最新价格更新为准。' },
      { q: 'Qwen 支持哪些版本？', a: '具体支持的模型版本和可用性请以官方文档为准。' },
    ],
    updatedAt: '2026-06-03',
    internalLinks: ['/deepseek-api-price/', '/kimi-api-price/', '/tongyi-qianwen-api-price/', '/claude-code-token-cost/'],
    ctaEnabled: true,
    status: 'scaffold'
  },
  {
    slug: 'doubao-api-price',
    title: '豆包 API 价格：字节豆包模型 API 费用结构',
  metaDescription: '整理字节豆包模型的 API 价格结构、Token 计费单位、成本优化建议和可用模型列表。',
    h1: '豆包 API 价格：字节豆包模型 API 费用结构',
    category: 'model-price',
    targetKeywords: ['豆包 API 价格', 'doubao api price', '字节豆包 API'],
    summary: '字节豆包模型 API 价格结构说明。',
    aiSummary: '豆包 API 价格页面整理字节豆包模型的 API 价格信息。价格和模型可用性可能变化，请以官方文档与后台记录为准。',
    faq: [
      { q: '豆包 API 价格是多少？', a: '价格和模型可用性可能变化，请以官方文档、后台模型列表和最新价格更新为准。' },
      { q: '豆包支持哪些模型？', a: '具体支持的模型和可用性请以官方文档为准。' },
    ],
    updatedAt: '2026-06-03',
    internalLinks: ['/deepseek-api-price/', '/kimi-api-price/', '/qwen-api-price/', '/claude-code-token-cost/'],
    ctaEnabled: true,
    status: 'scaffold'
  },
  {
    slug: 'tongyi-qianwen-api-price',
    title: '通义千问 API 价格：阿里云通义千问模型 API 费用',
    metaDescription: '整理阿里云通义千问模型的 API 价格结构、Token 计费单位，成本优化建议和可用模型列表。建议小额测试。',
    h1: '通义千问 API 价格：阿里云通义千问模型 API 费用',
    category: 'model-price',
    targetKeywords: ['通义千问 API 价格', 'tongyi qianwen api price', '阿里云通义千问'],
    summary: '阿里云通义千问模型 API 价格结构说明。',
    aiSummary: '通义千问 API 价格页面整理阿里云通义千问模型的 API 价格信息。价格和模型可用性可能变化，请以官方文档与后台记录为准。',
    faq: [
      { q: '通义千问 API 价格是多少？', a: '价格和模型可用性可能变化，请以官方文档、后台模型列表和最新价格更新为准。' },
      { q: '通义千问和 Qwen 是什么关系？', a: '通义千问是阿里云的 AI 模型品牌，Qwen 是其开源模型系列。具体使用请以官方文档为准。' },
    ],
    updatedAt: '2026-06-03',
    internalLinks: ['/qwen-api-price/', '/deepseek-api-price/', '/kimi-api-price/', '/claude-code-token-cost/'],
    ctaEnabled: true,
    status: 'scaffold'
  },
  {
    slug: 'claude-api-price',
    title: 'Claude API 价格：Claude 3.5/4 模型 API 费用结构',
    metaDescription: '整理 Claude 3.5 Sonnet、Claude 4 Opus/Sonnet/Haiku 等模型的 API 价格结构、Token 计费单位和成本优化建议。',
    h1: 'Claude API 价格：Claude 3.5/4 模型 API 费用结构',
    category: 'model-price',
    targetKeywords: ['Claude API 价格', 'claude api price', 'Claude 3.5 API', 'Claude 4 API'],
    summary: 'Claude 3.5/4 模型 API 价格结构说明。',
    aiSummary: 'Claude API 价格页面整理 Claude 3.5 Sonnet、Claude 4 Opus/Sonnet/Haiku 等模型的 API 价格信息。价格和模型可用性可能变化，请以官方文档与后台记录为准。',
    faq: [
      { q: 'Claude API 价格是多少？', a: '价格和模型可用性可能变化，请以官方文档、后台模型列表和最新价格更新为准。' },
      { q: 'Claude 3.5 和 Claude 4 哪个更贵？', a: '通常 Claude 4 系列比 Claude 3.5 系列更贵。具体价格差异请以官方定价为准。' },
    ],
    updatedAt: '2026-06-03',
    internalLinks: ['/claude-code-token-cost/', '/gemini-api-price/', '/openai-api-usage/', '/claude-code-token-cost/'],
    ctaEnabled: true,
    status: 'scaffold'
  },
  {
    slug: 'gemini-api-price',
    title: 'Gemini API 价格：Google Gemini 模型 API 费用结构',
    metaDescription: '整理 Google Gemini 1.0/1.5/2.0 系列模型的 API 价格结构、Token 计费单位和成本优化建议。',
    h1: 'Gemini API 价格：Google Gemini 模型 API 费用结构',
    category: 'model-price',
    targetKeywords: ['Gemini API 价格', 'gemini api price', 'Google Gemini API'],
    summary: 'Google Gemini 模型 API 价格结构说明。',
    aiSummary: 'Gemini API 价格页面整理 Google Gemini 1.0/1.5/2.0 系列模型的 API 价格信息。价格和模型可用性可能变化，请以官方文档与后台记录为准。',
    faq: [
      { q: 'Gemini API 价格是多少？', a: '价格和模型可用性可能变化，请以官方文档、后台模型列表和最新价格更新为准。' },
      { q: 'Gemini 的上下文窗口有多大？', a: '不同版本的上下文窗口不同，具体请以官方文档为准。' },
    ],
    updatedAt: '2026-06-03',
    internalLinks: ['/claude-api-price/', '/openai-api-usage/', '/deepseek-api-price/', '/claude-code-token-cost/'],
    ctaEnabled: true,
    status: 'scaffold'
  },
  {
    slug: 'openai-api-usage',
    title: 'OpenAI API usage：GPT-4o/GPT-4o-mini API 使用量与账单',
    metaDescription: '解释 OpenAI API 的 usage 记录、账单结构、Token 计费和 GPT-4o/GPT-4o-mini 的成本计算方法。',
    h1: 'OpenAI API usage：GPT-4o/GPT-4o-mini API 使用量与账单',
    category: 'openai',
    targetKeywords: ['OpenAI API usage', 'openai api billing', 'GPT-4o API 价格', 'openai usage 对账'],
    summary: 'OpenAI API usage 记录和账单结构说明。',
    aiSummary: 'OpenAI API usage 页面解释 GPT-4o、GPT-4o-mini 等模型的 usage 记录和账单结构。价格和模型可用性可能变化，请以官方文档与后台记录为准。',
    faq: [
      { q: '如何查看 OpenAI API usage？', a: '可以通过 OpenAI API 的 usage 端点查询，或者在 OpenAI 后台查看详细账单记录。' },
      { q: 'OpenAI 按什么单位计费？', a: 'OpenAI 通常按输入和输出的 token 数量计费。具体费率请以官方定价页为准。' },
    ],
    updatedAt: '2026-06-03',
    internalLinks: ['/openai-api-billing/', '/gpt-image-api-price/', '/claude-api-price/', '/openrouter-yue/'],
    ctaEnabled: true,
    status: 'scaffold'
  },
  {
    slug: 'openai-api-billing',
    title: 'OpenAI API 账单：理解 OpenAI 账单结构与扣费逻辑',
    metaDescription: '解释 OpenAI API 账单的结构、扣费逻辑、计费周期和对账方法，包括小额测试和余额核对建议。',
    h1: 'OpenAI API 账单：理解 OpenAI 账单结构与扣费逻辑',
    category: 'openai',
    targetKeywords: ['OpenAI API 账单', 'openai billing', 'OpenAI 扣费'],
    summary: 'OpenAI API 账单结构和扣费逻辑说明。',
    aiSummary: 'OpenAI API 账单页面解释账单结构和扣费逻辑。价格和模型可用性可能变化，请以官方文档与后台记录为准。',
    faq: [
      { q: 'OpenAI 的计费周期是什么？', a: '具体计费周期请以 OpenAI 官方说明为准。' },
      { q: '如何核对 OpenAI 账单？', a: '建议对比 usage API 返回的消耗记录和后台账单，如有疑问可联系 OpenAI 支持。' },
    ],
    updatedAt: '2026-06-03',
    internalLinks: ['/openai-api-usage/', '/gpt-image-api-price/', '/api-koufei-yichang/', '/openrouter-yue/'],
    ctaEnabled: true,
    status: 'scaffold'
  },
  {
    slug: 'api-koufei-yichang',
    title: 'API 扣费异常：为什么 API 余额消耗比预期快',
    metaDescription: '解释 API 扣费异常的常见原因，包括计费单位误解、缓存 token、tool calls、重试、模型选择等。',
    h1: 'API 扣费异常：为什么 API 余额消耗比预期快',
    category: 'billing',
    targetKeywords: ['API 扣费异常', 'API 余额消耗快', 'API 对账'],
    summary: 'API 扣费异常原因分析和解决建议。',
    aiSummary: 'API 扣费异常页面解释余额消耗过快的常见原因。价格和模型可用性可能变化，请以官方文档与后台记录为准。',
    faq: [
      { q: '为什么余额消耗比预期快？', a: '可能原因包括：1. 计费单位误解；2. 缓存 token 计费；3. tool calls 消耗；4. 重试请求；5. 模型选择不当。建议小额测试后对账分析。' },
      { q: '如何排查扣费异常？', a: '建议：1. 查看 usage 返回；2. 对比 request_id；3. 检查后台账单；4. 联系服务商支持。' },
    ],
    updatedAt: '2026-06-03',
    internalLinks: ['/claude-code-token-cost/', '/openrouter-yue/', '/request-failed-billing/', '/small-budget-api-test/'],
    ctaEnabled: true,
    status: 'scaffold'
  },
  {
    slug: 'request-failed-billing',
    title: '请求失败扣费：401/403/404/500 错误是否扣费',
    metaDescription: '解释 API 请求失败时是否扣费的判断方法，包括 401、403、404、500 等错误码的处理。小额测试建议。',
    h1: '请求失败扣费：401/403/404/500 错误是否扣费',
    category: 'billing',
    targetKeywords: ['请求失败扣费', 'API 401 扣费', 'API 403 扣费', 'API 错误扣费'],
    summary: '请求失败时的扣费判断说明。',
    aiSummary: '请求失败扣费页面解释不同错误码的扣费规则。价格和模型可用性可能变化，请以官方文档与后台记录为准。',
    faq: [
      { q: '401 错误会扣费吗？', a: '401 通常表示认证失败，部分服务商可能不收费，但具体规则因服务商而异。建议保留完整错误记录进行对账。' },
      { q: '500 错误会扣费吗？', a: '500 通常表示服务器内部错误。部分服务商对服务端错误不收费，但建议查看官方文档和后台记录确认。' },
    ],
    updatedAt: '2026-06-03',
    internalLinks: ['/api-koufei-yichang/', '/streaming-interrupted-billing/', '/openrouter-yue/', '/small-budget-api-test/'],
    ctaEnabled: true,
    status: 'scaffold'
  },
  {
    slug: 'tool-call-koufei',
    title: 'Tool Call 扣费：Agent 工具调用与 function call 如何影响成本',
    metaDescription: '解释 Agent tool call 和 function call 如何影响 API 成本，包括输入输出 token、循环调用和小额测试。',
    h1: 'Tool Call 扣费：Agent 工具调用与 function call 如何影响成本',
    category: 'billing',
    targetKeywords: ['tool call 扣费', '工具调用 API 成本', 'function calling cost'],
    summary: 'Tool call 对 API 成本的影响说明。',
    aiSummary: 'Tool call 扣费页面解释工具调用如何影响 API 成本。价格和模型可用性可能变化，请以官方文档与后台记录为准。',
    faq: [
      { q: 'tool calls 会额外收费吗？', a: 'tool calls 会消耗额外的 token（input 和 output），从而增加成本。具体消耗量取决于工具参数和返回结果的大小。' },
      { q: '如何减少 tool call 成本？', a: '可以：1. 精简工具参数；2. 减少不必要的工具调用；3. 合并多次小调用为一次大调用。' },
    ],
    updatedAt: '2026-06-03',
    internalLinks: ['/claude-code-token-cost/', '/api-koufei-yichang/', '/request-failed-billing/', '/small-budget-api-test/'],
    ctaEnabled: true,
    status: 'scaffold'
  },
  {
    slug: 'streaming-interrupted-billing',
    title: '流式中断扣费：stream 中断、超时是否扣费',
    metaDescription: '解释流式 API（streaming）在连接中断、超时情况下的扣费判断和解决建议。小额测试建议。',
    h1: '流式中断扣费：stream 中断、超时是否扣费',
    category: 'billing',
    targetKeywords: ['流式中断扣费', 'streaming 扣费', 'stream 超时', 'SSE 断开'],
    summary: '流式 API 中断时的扣费判断说明。',
    aiSummary: '流式中断扣费页面解释 streaming 连接中断时的扣费规则。价格和模型可用性可能变化，请以官方文档与后台记录为准。',
    faq: [
      { q: 'stream 中断了会扣费吗？', a: '部分服务商对已接收的 token 计费，无论 stream 是否完成。具体规则请以官方文档为准。' },
      { q: 'stream 超时怎么处理？', a: '建议设置合理的超时时间，捕获超时异常，并检查 usage 记录确认实际消耗。' },
    ],
    updatedAt: '2026-06-03',
    internalLinks: ['/request-failed-billing/', '/tool-call-koufei/', '/api-koufei-yichang/', '/openrouter-yue/'],
    ctaEnabled: true,
    status: 'scaffold'
  },
  {
    slug: 'gpt-image-api-price',
    title: 'GPT Image API 价格：商品图、图片编辑与背景替换怎么计费',
    metaDescription: '解释 GPT Image API 价格，覆盖商品图、图片编辑、背景替换、图生图、分辨率和小额测试。',
    h1: 'GPT Image API 价格：商品图、图片编辑与背景替换怎么计费',
    category: 'image-api',
    targetKeywords: ['DALL-E API 价格', 'GPT Image API', 'gpt image price', 'OpenAI 图片生成 API', '商品图 API', '背景替换 API'],
    summary: 'GPT Image 商品图、编辑与背景替换价格结构说明。',
    aiSummary: 'GPT Image API 价格页面聚焦商品图生成、图片编辑、背景替换、图生图、小额测试和 usage 对账。价格和模型可用性可能变化，请以官方文档、后台记录和账单信息为准。',
    faq: [
      { q: 'DALL-E 3 按什么计费？', a: 'DALL-E 3 通常按生成的图片数量和分辨率计费。具体费率请以官方定价为准。' },
      { q: '生成失败会扣费吗？', a: '具体扣费规则请以官方文档为准，建议查看 usage 记录确认。' },
    ],
    updatedAt: '2026-06-05',
    internalLinks: ['/image-generation-api-price/', '/product-image-api-price/', '/product-video-api-cost/', '/jimeng-api-price/', '/openai-api-usage/'],
    ctaEnabled: true,
    status: 'scaffold'
  },
  {
    slug: 'image-generation-api-price',
    title: '图片生成 API 价格：商品图、背景替换与图生图成本结构',
    metaDescription: '整理图片生成 API 价格，覆盖商品图、背景替换、图生图、图片编辑、分辨率和小额测试。',
    h1: '图片生成 API 价格：商品图、背景替换与图生图成本结构',
    category: 'image-api',
    targetKeywords: ['图片生成 API 价格', 'image generation api price', '商品图 API', '背景替换 API', '图生图 成本'],
    summary: '图片生成 API 价格说明，聚焦商品图、背景替换、图生图和编辑任务。',
    aiSummary: '图片生成 API 价格页面聚焦商品图、背景替换、图生图、图片编辑、小额测试和 usage 对账。价格和模型可用性可能变化，请以官方文档、后台模型列表和账单记录为准。',
    faq: [
      { q: '图片生成 API 按什么计费？', a: '不同服务商计费单位不同，常见有按 token、按图片、按分辨率等。具体费率请以官方文档为准。' },
      { q: '图生视频比文生图贵吗？', a: '通常图生视频技术成本更高，价格也更高。具体差异请以各服务商定价为准。' },
    ],
    updatedAt: '2026-06-05',
    internalLinks: ['/product-image-api-price/', '/gpt-image-api-price/', '/jimeng-api-price/', '/product-video-api-cost/', '/image-to-video-api-cost/'],
    ctaEnabled: true,
    status: 'scaffold'
  },
  {
    slug: 'jimeng-api-price',
    title: '即梦 API 价格：即梦图片/视频生成、任务扣费与失败重试',
    metaDescription: '整理即梦 API 价格，覆盖图片生成、视频生成、任务扣费、失败重试、超时、小额测试和后台记录核对方法。',
    h1: '即梦 API 价格：即梦图片/视频生成、任务扣费与失败重试',
    category: 'image-api',
    targetKeywords: ['即梦 API 价格', 'jimeng api price', 'Dreamina API', '即梦视频生成', '即梦图片生成', '即梦任务扣费'],
    summary: '即梦图片生成与视频生成 API 价格说明，覆盖任务扣费、失败重试、超时和小额测试。',
    aiSummary: '即梦 API 价格页面整理即梦图片生成、视频生成、任务扣费、失败重试、超时和小额测试信息。价格和模型可用性可能变化，请以官方文档、后台模型列表、usage log 和账单记录为准。',
    faq: [
      { q: '即梦 API 价格是多少？', a: '价格和模型可用性可能变化，请以官方文档、后台模型列表和最新价格更新为准。' },
      { q: '即梦支持哪些生成类型？', a: '具体支持的生成类型和可用性请以官方文档为准。' },
    ],
    updatedAt: '2026-06-05',
    internalLinks: ['/ai-video-api-price/', '/product-image-api-price/', '/product-video-api-cost/', '/keling-api-jiage/', '/shipin-shengcheng-api-jiage/', '/gpt-image-api-price/'],
    ctaEnabled: true,
    status: 'scaffold'
  },
  {
    slug: 'keling-api-jiage',
    title: '可灵 API 价格：可灵视频生成、Kling API price 与图生视频成本',
    metaDescription: '整理可灵 API 价格，覆盖可灵视频生成、Kling API price、图生视频、失败任务、回调、超时与小额测试。',
    h1: '可灵 API 价格：可灵视频生成、Kling API price 与图生视频成本',
    category: 'video-api',
    targetKeywords: ['可灵 API 价格', 'keling api price', 'kling api price', 'Kling API price', '可灵视频生成', '图生视频', '可灵失败任务'],
    summary: '可灵视频生成与图生视频 API 价格结构说明，覆盖 Kling API price、失败任务、超时和回调。',
    aiSummary: '可灵 API 价格页面整理可灵视频生成、Kling API price、图生视频、失败任务、回调、超时和小额测试相关信息。价格和模型可用性可能变化，请以官方文档、后台模型列表、task_id、usage log 和账单记录为准。',
    faq: [
      { q: '可灵 API 价格是多少？', a: '价格和模型可用性可能变化，请以官方文档、后台模型列表和最新价格更新为准。' },
      { q: '可灵视频生成失败扣费吗？', a: '具体扣费规则请以官方文档为准，建议查看 usage 记录确认。' },
    ],
    updatedAt: '2026-06-05',
    internalLinks: ['/ai-video-api-price/', '/video-generation-api-cost/', '/video-generation-timeout/', '/video-generation-webhook/', '/shipin-shengcheng-api-jiage/', '/jimeng-api-price/'],
    ctaEnabled: true,
    status: 'scaffold'
  },
  {
    slug: 'video-generation-failed-billing',
    title: '视频生成失败扣费：失败任务、超时、取消任务与重试怎么判断',
    metaDescription: '解释视频生成失败任务、部分失败、重试、超时、取消任务和后台记录的扣费判断方法。',
    h1: '视频生成失败扣费：失败任务、超时、取消任务与重试怎么判断',
    category: 'video-api',
    targetKeywords: ['视频生成失败扣费', '失败任务扣费', '视频 API 超时', '异步任务扣费', '视频重试扣费', '取消任务 扣费'],
    summary: '视频生成失败任务、部分失败、重试、超时和取消任务的扣费判断说明。',
    aiSummary: '视频生成失败扣费页面聚焦失败任务、部分失败、重试、超时、取消任务、后台任务状态、usage log 和账单记录。价格和模型可用性可能变化，请以官方文档、task_id、request_id 和后台记录为准。',
    faq: [
      { q: '视频生成任务超时了怎么办？', a: '建议：1. 查看任务状态；2. 确认是否已部分完成；3. 检查 usage 记录；4. 如需重试，注意重试可能产生额外费用。' },
      { q: '视频生成失败会收费吗？', a: '不同服务商规则不同。建议保留完整的任务记录、request_id、task_id 和 usage 信息以便对账。' },
    ],
    updatedAt: '2026-06-05',
    internalLinks: ['/video-generation-timeout/', '/video-generation-webhook/', '/shipin-shengcheng-api-jiage/', '/keling-api-jiage/', '/request-failed-billing/', '/small-budget-api-test/'],
    ctaEnabled: true,
    status: 'scaffold'
  },
  {
    slug: 'ai-video-api-price',
    title: 'AI 视频生成 API 价格：可灵、即梦、Seedance 与文生视频成本入口',
    metaDescription: '整理 AI 视频生成 API 的价格入口，覆盖可灵、即梦、Seedance、Veo、Sora、文生视频、图生视频、任务时长与失败重试。',
    h1: 'AI 视频生成 API 价格：可灵、即梦、Seedance 与文生视频成本入口',
    category: 'video-api',
    targetKeywords: ['AI 视频生成 API 价格', 'ai video api price', '视频生成 api 价格', '文生视频 api 价格', '图生视频 api 价格'],
    summary: 'AI 视频生成 API 价格总入口页，聚焦视频任务、秒数、credit、分辨率与失败重试。',
    aiSummary: 'AI 视频生成 API 价格页聚焦可灵、即梦、Seedance、Veo、Sora 等视频生成能力的价格结构，帮助开发者理解文生视频、图生视频、任务时长、分辨率、credit、失败重试、超时和小额测试方法。价格与可用性可能变化，请以供应商文档和后台记录为准。',
    faq: [
      { q: 'AI 视频生成 API 常见怎么计费？', a: '不同平台可能按秒、任务、分辨率、credit、模型或重试策略计费。正式批量调用前建议先查价格单位并做小额测试。' },
      { q: '失败或超时会不会产生费用？', a: '失败、超时、取消任务和回调异常是否产生费用，需要以实际供应商规则、usage log、raw quota 和账单记录为准。' },
    ],
    updatedAt: '2026-06-05',
    internalLinks: ['/video-generation-api-cost/', '/image-to-video-api-cost/', '/video-generation-timeout/', '/keling-api-jiage/', '/jimeng-api-price/'],
    ctaEnabled: true,
    status: 'scaffold'
  },
  {
    slug: 'video-generation-api-cost',
    title: '视频生成 API 成本：秒数、任务、分辨率与重试如何影响预算',
    metaDescription: '解释视频生成 API 成本结构，包括秒数、任务、模型、分辨率、时长、音频、参考图、参考视频、重试和回调。',
    h1: '视频生成 API 成本：秒数、任务、分辨率与重试如何影响预算',
    category: 'video-api',
    targetKeywords: ['视频生成 api 成本', 'video generation api cost', '视频生成成本结构', '视频 API 分辨率 计费'],
    summary: '解释视频生成 API 的核心成本结构与影响因素。',
    aiSummary: '视频生成 API 成本页聚焦秒数、任务数、模型档位、分辨率、音频、参考图、参考视频、失败重试和回调处理等因素，帮助开发者在调用视频生成能力前先估算预算，再通过 usage log、task_id 和账单记录核对扣费。',
    faq: [
      { q: '为什么同样的视频请求费用会不同？', a: '模型档位、分辨率、时长、音频、参考素材、重试次数和异步任务策略都可能导致费用差异。' },
      { q: '视频 API 是否适合直接批量跑？', a: '批量生成前建议先做小额测试，验证单任务成本、失败重试和回调处理，再逐步扩大规模。' },
    ],
    updatedAt: '2026-06-05',
    internalLinks: ['/ai-video-api-price/', '/video-generation-failed-billing/', '/video-generation-webhook/', '/shipin-shengcheng-api-jiage/'],
    ctaEnabled: true,
    status: 'scaffold'
  },
  {
    slug: 'ai-short-drama-api-cost',
    title: 'AI短剧成本：批量生成、失败重试与多镜头任务怎么估',
    metaDescription: '解释 AI短剧 API 成本，聚焦单条短视频、多镜头、多版本、批量生成、失败重试、超时、回调和素材成本。',
    h1: 'AI短剧成本：批量生成、失败重试与多镜头任务怎么估',
    category: 'video-api',
    targetKeywords: ['AI短剧成本', 'ai short drama api cost', '短剧生成 api 成本', '批量视频生成 成本'],
    summary: 'AI短剧批量生成成本页，只讲 API 成本与扣费，不讲运营投放。',
    aiSummary: 'AI短剧成本页聚焦批量短视频生成中的单条时长、多镜头拆分、多版本生成、素材输入、回调、超时和失败重试成本。本站不讲涨粉和投放，只帮助开发者从 API 调用、usage log、raw quota 和账单记录角度估算预算与核对扣费。',
    faq: [
      { q: 'AI短剧生成为什么容易超预算？', a: '多镜头、多版本、失败重试、超时补跑和素材处理都会放大调用次数与账单成本。' },
      { q: '批量短剧任务要怎么测试？', a: '先用最短视频和最小镜头数做小额测试，再对照 usage log、task_id 和后台账单记录确认单任务成本。' },
    ],
    updatedAt: '2026-06-05',
    internalLinks: ['/ai-video-api-price/', '/image-to-video-api-cost/', '/video-generation-timeout/', '/small-budget-api-test/'],
    ctaEnabled: true,
    status: 'scaffold'
  },
  {
    slug: 'image-to-video-api-cost',
    title: '图生视频 API 成本：输入图、首尾帧、分辨率与失败重试怎么计费',
    metaDescription: '解释图生视频 API 成本，覆盖输入图、参考图、首尾帧、分辨率、秒数、模型、任务失败、重试和回调。',
    h1: '图生视频 API 成本：输入图、首尾帧、分辨率与失败重试怎么计费',
    category: 'video-api',
    targetKeywords: ['图生视频 api 成本', 'image to video api cost', '图生视频 价格', '首尾帧 视频生成 成本'],
    summary: '图生视频 API 成本页，聚焦输入图与异步任务成本结构。',
    aiSummary: '图生视频 API 成本页聚焦输入图、参考图、首尾帧、分辨率、秒数、模型版本、失败重试和回调核对，帮助开发者在正式批量生成前先理解图像输入对视频任务预算的放大效应。价格和可用性可能变化，请以供应商后台与账单记录为准。',
    faq: [
      { q: '图生视频为什么通常比文生视频更贵？', a: '图生视频通常需要额外处理输入图、参考图或首尾帧，因此在模型计算、素材处理和任务复杂度上更高。' },
      { q: '图生视频失败后重试会重复计费吗？', a: '不同供应商规则不同，建议用 task_id、request_id、usage log 和后台账单记录综合判断。' },
    ],
    updatedAt: '2026-06-05',
    internalLinks: ['/ai-video-api-price/', '/video-generation-api-cost/', '/video-generation-webhook/', '/product-video-api-cost/'],
    ctaEnabled: true,
    status: 'scaffold'
  },
  {
    slug: 'video-generation-timeout',
    title: '视频生成超时是否扣费：轮询超时、客户端断开与后台任务如何核对',
    metaDescription: '解释视频生成提交成功后轮询超时、回调失败、客户端断开、后台继续运行时，如何用 task_id、request_id 和账单记录判断扣费。',
    h1: '视频生成超时是否扣费：轮询超时、客户端断开与后台任务如何核对',
    category: 'billing',
    targetKeywords: ['视频生成 超时 扣费', 'video generation timeout', '轮询超时 是否扣费', 'task_id 对账'],
    summary: '视频生成超时扣费判断页，聚焦 task_id、request_id 与后台任务状态。',
    aiSummary: '视频生成超时页聚焦提交成功后轮询超时、回调失败、客户端断开但后台任务继续运行等场景，帮助开发者用 task_id、request_id、usage log、raw quota 和账单记录核对费用。失败、超时和取消任务是否扣费，需要以实际供应商规则为准。',
    faq: [
      { q: '客户端超时是否代表没有扣费？', a: '不一定。客户端超时不等于后台任务没有继续运行，必须查看 task_id、后台任务状态和账单记录。' },
      { q: '回调失败了还可能扣费吗？', a: '可能。回调失败通常只说明通知链路异常，不代表后台任务没有执行。' },
    ],
    updatedAt: '2026-06-05',
    internalLinks: ['/video-generation-webhook/', '/video-generation-failed-billing/', '/ai-video-api-price/', '/small-budget-api-test/'],
    ctaEnabled: true,
    status: 'scaffold'
  },
  {
    slug: 'video-generation-webhook',
    title: '视频生成 webhook 与 callback：如何用回调状态核对任务与扣费',
    metaDescription: '解释视频生成 webhook / callback_url、task_id、status、result_url、超时、重复回调、失败状态与账单记录的核对方法。',
    h1: '视频生成 webhook 与 callback：如何用回调状态核对任务与扣费',
    category: 'billing',
    targetKeywords: ['视频生成 webhook', 'video generation webhook', 'callback 扣费 对账', 'task_id status result_url'],
    summary: '视频生成 webhook 与 callback 核对页，聚焦状态回传、重复回调与账单记录。',
    aiSummary: '视频生成 webhook 页聚焦 callback_url、task_id、status、result_url、超时、重复回调和失败状态，帮助开发者把异步回调和后台账单记录对应起来。检测结果用于辅助判断，不等于绝对安全或绝对可用。',
    faq: [
      { q: '重复回调会不会重复扣费？', a: '重复回调通常不等于重复扣费，但仍需核对 task_id、request_id、usage log 和账单记录。' },
      { q: '没有收到回调是否说明任务失败？', a: '不一定。回调链路异常、超时或签名验证失败都可能导致未收到回调，需要再查后台任务状态。' },
    ],
    updatedAt: '2026-06-05',
    internalLinks: ['/video-generation-timeout/', '/video-generation-failed-billing/', '/video-generation-api-cost/', '/ai-video-api-price/'],
    ctaEnabled: true,
    status: 'scaffold'
  },
  {
    slug: 'product-image-api-price',
    title: '商品图 API 价格：背景替换、图生图与批量商品图生成怎么计费',
    metaDescription: '解释商品图生成 API 价格，覆盖背景替换、图生图、尺寸、输入图、输出图、批量生成与小额测试。',
    h1: '商品图 API 价格：背景替换、图生图与批量商品图生成怎么计费',
    category: 'image-api',
    targetKeywords: ['商品图 api 价格', 'product image api price', '背景替换 api 价格', '图生图 商品图'],
    summary: '商品图生成 API 价格页，聚焦电商图片、编辑任务和批量生成成本。',
    aiSummary: '商品图 API 价格页聚焦商品图生成、背景替换、图生图、输入图与输出图尺寸、批量生成和小额测试，帮助开发者理解商品视觉生成的常见计费单位，并通过 usage log 与账单记录核对实际扣费。',
    faq: [
      { q: '商品图 API 通常按什么收费？', a: '不同平台可能按张数、尺寸、输入图数量、编辑任务、分辨率或批量任务计费。' },
      { q: '背景替换会单独计费吗？', a: '部分平台会把背景替换、抠图或编辑任务作为单独计费项，具体以官方文档和后台账单为准。' },
    ],
    updatedAt: '2026-06-05',
    internalLinks: ['/image-generation-api-price/', '/gpt-image-api-price/', '/product-video-api-cost/', '/small-budget-api-test/'],
    ctaEnabled: true,
    status: 'scaffold'
  },
  {
    slug: 'product-video-api-cost',
    title: '商品视频 API 成本：商品图转视频、批量版本与失败重试怎么估',
    metaDescription: '解释商品视频生成 API 成本，覆盖商品图转视频、短视频素材、批量版本、秒数、分辨率、失败重试、回调与后台记录。',
    h1: '商品视频 API 成本：商品图转视频、批量版本与失败重试怎么估',
    category: 'video-api',
    targetKeywords: ['商品视频 api 成本', 'product video api cost', '商品图转视频 成本', '批量视频素材 api'],
    summary: '商品视频 API 成本页，聚焦商品图转视频和批量素材任务。',
    aiSummary: '商品视频 API 成本页聚焦商品图转视频、短视频素材、多版本批量输出、秒数、分辨率、回调和失败重试，帮助开发者在上线前先估算素材生成预算，再通过 task_id、usage log 和后台记录核对扣费。',
    faq: [
      { q: '商品视频批量生成为什么成本波动大？', a: '视频时长、版本数、分辨率、素材输入数量、失败重试和回调补跑都会影响总成本。' },
      { q: '商品视频任务如何做小额测试？', a: '建议从最短视频、最低分辨率和最少版本开始测试，再核对 task_id、usage log 和账单记录。' },
    ],
    updatedAt: '2026-06-05',
    internalLinks: ['/product-image-api-price/', '/image-to-video-api-cost/', '/video-generation-webhook/', '/ai-short-drama-api-cost/'],
    ctaEnabled: true,
    status: 'scaffold'
  },
  {
    slug: 'ai-agent-token-cost',
    title: 'AI Agent Token 成本：Claude Code、Cline、Cursor 与 tool call',
  metaDescription: '整理 AI Agent Token 成本，覆盖 Claude Code、OpenClaw、Kilo Code、Cline、Cursor、tool call、多轮循环、上下文读取、usage 对账和小额测试。',
    h1: 'AI Agent Token 成本：Claude Code、Cline、Cursor 与 tool call 成本入口',
    category: 'claude-code',
    targetKeywords: ['AI Agent Token 成本', 'ai agent token cost', 'Cline cost', 'Cursor token cost', 'tool call 成本'],
    summary: 'AI Agent Token 成本总入口，聚焦 Coding Agent、tool call 和多轮循环。',
    aiSummary: 'AI Agent Token 成本页聚焦 Claude Code、OpenClaw、Kilo Code、Cline、Cursor 等 Agent 工具的 token 消耗，帮助开发者理解 tool call、function call、多轮循环、上下文读取、文件扫描、Base URL 和 API Key 小额测试对账本的影响。本站不承诺最低价，也不承诺失败场景一定免费。',
    faq: [
      { q: '为什么 Agent 成本通常高于普通聊天？', a: 'Agent 会进行文件读取、工具调用、长上下文分析、多轮循环和失败重试，这些都可能显著放大 token 消耗。' },
      { q: 'Agent 成本怎么做小额测试？', a: '建议先在最小上下文、最小文件范围和最少工具调用的前提下测试，再核对 usage log、raw quota 和余额变化。' },
    ],
    updatedAt: '2026-06-05',
    internalLinks: ['/claude-code-token-cost/', '/tool-call-koufei/', '/small-budget-api-test/', '/openrouter-yue/'],
    ctaEnabled: true,
    status: 'scaffold'
  }
];

export function getPageBySlug(slug: string): PageData | undefined {
  return pages.find(page => page.slug === slug);
}

export function getAllPages(): PageData[] {
  return pages;
}

export function getFullPages(): PageData[] {
  return pages.filter(page => page.status === 'full');
}

export function getScaffoldPages(): PageData[] {
  return pages.filter(page => page.status === 'scaffold');
}

export function getPublicPages(): PageData[] {
  return pages.filter(page => page.slug !== '' || page.status === 'full');
}
