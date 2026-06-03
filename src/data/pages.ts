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
    title: 'Claude Code Token 成本：为什么 Coding Agent 容易烧余额',
    metaDescription: '解释 Claude Code 和 Coding Agent 的 Token 成本来源，包括长上下文、文件读取、tool calls、多轮循环、usage 对账和小额测试方法。',
    h1: 'Claude Code Token 成本：为什么 Coding Agent 容易烧余额',
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
    updatedAt: '2026-06-03',
    internalLinks: ['/openrouter-yue/', '/api-koufei-yichang/', '/small-budget-api-test/', '/claude-api-price/'],
    externalConfigLink: { label: '进一步了解接入配置', url: 'https://aiapiradar.com/' },
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
    externalConfigLink: { label: '进一步了解接入配置', url: 'https://aiapiradar.com/' },
    ctaEnabled: true,
    status: 'full'
  },
  // Full Page 3: Video Generation API Price
  {
    slug: 'shipin-shengcheng-api-jiage',
    title: '视频生成 API 价格：文生视频、图生视频与失败扣费怎么判断',
    metaDescription: '解释视频生成 API 常见计费单位，包括秒、credit、任务、分辨率、音频、重试、超时和失败生成扣费判断方法。',
    h1: '视频生成 API 价格：文生视频、图生视频与失败扣费怎么判断',
    category: 'video-api',
    targetKeywords: ['视频生成 api 价格', '视频生成 api 成本', '视频生成扣费', '视频生成失败扣费', '图生视频 api 价格', '可灵 api 价格', '即梦 api 价格'],
    summary: '解释视频生成 API 为什么比文本 API 更复杂：可能按秒、credit、分辨率、视频长度、音频、任务、重试计费；视频任务可能是异步提交、轮询、回调、超时；失败是否扣费要看服务商规则和后台记录。',
    aiSummary: '视频生成 API 价格页面解释文生视频和图生视频的计费逻辑。视频生成 API 通常比文本 API 复杂，可能按秒、credit、任务、分辨率、音频、重试等不同维度计费。视频任务通常是异步的，涉及提交、轮询、回调或超时机制。失败是否扣费取决于服务商规则：部分对失败任务不收费，部分可能有最低消费或超时费用。判断扣费需要结合 request_id、task_id、usage、后台任务状态和账单记录综合分析，不能仅凭请求成功/失败状态判断。',
    faq: [
      { q: '视频生成 API 按什么单位计费？', a: '不同服务商计费单位不同。常见计费维度包括：按秒（视频时长）、按 credit（消耗额度）、按任务（每个生成任务）、按分辨率（高清/4K 等）、按音频（是否含音乐）。具体计费标准请以官方文档为准。' },
      { q: '文生视频和图生视频价格一样吗？', a: '通常不一样。图生视频（image-to-video）需要额外处理输入图像，技术成本更高，所以价格一般高于纯文生视频（text-to-video）。具体价格差异请参考各服务商的价目表。' },
      { q: '视频生成失败会扣费吗？', a: '不同服务商的规则不同。部分服务商对失败的生成任务不收费，部分可能有最低消费或超时费用。判断依据包括：request_id、task_id、usage 记录、后台任务状态。建议保留失败任务的完整记录以便对账。' },
      { q: '异步任务超时了怎么办？', a: '视频生成是异步任务，有超时限制。如果任务超时未完成，可能需要重试。超时是否扣费取决于服务商规则，建议查看官方文档的超时处理说明，并保留超时记录进行对账。' },
    ],
    updatedAt: '2026-06-03',
    internalLinks: ['/image-generation-api-price/', '/keling-api-jiage/', '/jimeng-api-price/', '/video-generation-failed-billing/'],
    externalConfigLink: { label: '进一步了解接入配置', url: 'https://aiapiradar.com/' },
    ctaEnabled: true,
    status: 'full'
  },
  // Scaffold Pages
  {
    slug: 'deepseek-api-price',
    title: 'DeepSeek API 价格：DeepSeek V3/R1 模型 API 费用结构',
    metaDescription: '整理 DeepSeek V3、DeepSeek R1 等模型的 API 价格结构、计费单位和成本优化建议。',
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
    metaDescription: '整理 Kimi 长上下文模型的 API 价格结构、Token 计费单位和成本优化建议。',
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
    metaDescription: '整理通义千问 Qwen 系列模型的 API 价格结构、Token 计费单位和成本优化建议。',
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
    metaDescription: '整理字节豆包模型的 API 价格结构、Token 计费单位和成本优化建议。',
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
    metaDescription: '整理阿里云通义千问模型的 API 价格结构、Token 计费单位和成本优化建议。',
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
    metaDescription: '解释 OpenAI API 账单的结构、扣费逻辑、计费周期和对账方法。',
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
    metaDescription: '解释 API 请求失败时是否扣费的判断方法，包括 401、403、404、500 等错误码的处理。',
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
    title: 'Tool Call 扣费：工具调用如何影响 API 成本',
    metaDescription: '解释 tool calls 对 API 成本的影响，包括 input/output token 消耗和成本优化建议。',
    h1: 'Tool Call 扣费：工具调用如何影响 API 成本',
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
    metaDescription: '解释流式 API（streaming）在连接中断、超时情况下的扣费判断和解决建议。',
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
    title: 'GPT Image API 价格：DALL-E 3 图片生成 API 费用',
    metaDescription: '解释 OpenAI DALL-E 3 图片生成 API 的价格结构、计费单位和扣费判断。',
    h1: 'GPT Image API 价格：DALL-E 3 图片生成 API 费用',
    category: 'image-api',
    targetKeywords: ['DALL-E API 价格', 'GPT Image API', 'dalle 3 price', 'OpenAI 图片生成 API'],
    summary: 'DALL-E 3 图片生成 API 价格说明。',
    aiSummary: 'GPT Image API 价格页面整理 DALL-E 3 图片生成 API 的价格信息。价格和模型可用性可能变化，请以官方文档与后台记录为准。',
    faq: [
      { q: 'DALL-E 3 按什么计费？', a: 'DALL-E 3 通常按生成的图片数量和分辨率计费。具体费率请以官方定价为准。' },
      { q: '生成失败会扣费吗？', a: '具体扣费规则请以官方文档为准，建议查看 usage 记录确认。' },
    ],
    updatedAt: '2026-06-03',
    internalLinks: ['/image-generation-api-price/', '/jimeng-api-price/', '/openai-api-usage/', '/shipin-shengcheng-api-jiage/'],
    ctaEnabled: true,
    status: 'scaffold'
  },
  {
    slug: 'image-generation-api-price',
    title: '图片生成 API 价格：主流图像生成 API 费用结构',
    metaDescription: '整理主流图片生成 API（DALL-E、Midjourney、Stable Diffusion、即梦等）的价格结构和计费单位。',
    h1: '图片生成 API 价格：主流图像生成 API 费用结构',
    category: 'image-api',
    targetKeywords: ['图片生成 API 价格', 'image generation api price', '图像生成 API', 'AI 画图 API'],
    summary: '主流图片生成 API 价格结构说明。',
    aiSummary: '图片生成 API 价格页面整理主流图像生成 API 的价格信息。价格和模型可用性可能变化，请以官方文档与后台记录为准。',
    faq: [
      { q: '图片生成 API 按什么计费？', a: '不同服务商计费单位不同，常见有按 token、按图片、按分辨率等。具体费率请以官方文档为准。' },
      { q: '图生视频比文生图贵吗？', a: '通常图生视频技术成本更高，价格也更高。具体差异请以各服务商定价为准。' },
    ],
    updatedAt: '2026-06-03',
    internalLinks: ['/jimeng-api-price/', '/gpt-image-api-price/', '/shipin-shengcheng-api-jiage/', '/keling-api-jiage/'],
    ctaEnabled: true,
    status: 'scaffold'
  },
  {
    slug: 'jimeng-api-price',
    title: '即梦 API 价格：字节即梦图片/视频生成 API 费用',
    metaDescription: '整理字节即梦（Dreamina）图片和视频生成 API 的价格结构、计费单位和成本优化建议。',
    h1: '即梦 API 价格：字节即梦图片/视频生成 API 费用',
    category: 'image-api',
    targetKeywords: ['即梦 API 价格', 'jimeng api price', 'Dreamina API', '字节即梦'],
    summary: '字节即梦 API 价格结构说明。',
    aiSummary: '即梦 API 价格页面整理字节即梦（Dreamina）图片和视频生成 API 的价格信息。价格和模型可用性可能变化，请以官方文档与后台记录为准。',
    faq: [
      { q: '即梦 API 价格是多少？', a: '价格和模型可用性可能变化，请以官方文档、后台模型列表和最新价格更新为准。' },
      { q: '即梦支持哪些生成类型？', a: '具体支持的生成类型和可用性请以官方文档为准。' },
    ],
    updatedAt: '2026-06-03',
    internalLinks: ['/image-generation-api-price/', '/keling-api-jiage/', '/shipin-shengcheng-api-jiage/', '/gpt-image-api-price/'],
    ctaEnabled: true,
    status: 'scaffold'
  },
  {
    slug: 'keling-api-jiage',
    title: '可灵 API 价格：快手可灵视频生成 API 费用结构',
    metaDescription: '整理快手可灵（Kling）视频生成 API 的价格结构、计费单位和失败扣费判断方法。',
    h1: '可灵 API 价格：快手可灵视频生成 API 费用结构',
    category: 'video-api',
    targetKeywords: ['可灵 API 价格', 'keling api price', 'kling api', '快手可灵'],
    summary: '快手可灵视频生成 API 价格结构说明。',
    aiSummary: '可灵 API 价格页面整理快手可灵（Kling）视频生成 API 的价格信息。价格和模型可用性可能变化，请以官方文档与后台记录为准。',
    faq: [
      { q: '可灵 API 价格是多少？', a: '价格和模型可用性可能变化，请以官方文档、后台模型列表和最新价格更新为准。' },
      { q: '可灵视频生成失败扣费吗？', a: '具体扣费规则请以官方文档为准，建议查看 usage 记录确认。' },
    ],
    updatedAt: '2026-06-03',
    internalLinks: ['/shipin-shengcheng-api-jiage/', '/video-generation-failed-billing/', '/image-generation-api-price/', '/jimeng-api-price/'],
    ctaEnabled: true,
    status: 'scaffold'
  },
  {
    slug: 'video-generation-failed-billing',
    title: '视频生成失败扣费：异步任务失败、超时、重试扣费判断',
    metaDescription: '解释视频生成 API 异步任务失败、超时、重试时的扣费判断方法和解决建议。',
    h1: '视频生成失败扣费：异步任务失败、超时、重试扣费判断',
    category: 'video-api',
    targetKeywords: ['视频生成失败扣费', '视频 API 超时', '异步任务扣费', '视频重试扣费'],
    summary: '视频生成失败扣费判断说明。',
    aiSummary: '视频生成失败扣费页面解释异步任务失败时的扣费规则。价格和模型可用性可能变化，请以官方文档与后台记录为准。',
    faq: [
      { q: '视频生成任务超时了怎么办？', a: '建议：1. 查看任务状态；2. 确认是否已部分完成；3. 检查 usage 记录；4. 如需重试，注意重试可能产生额外费用。' },
      { q: '视频生成失败会收费吗？', a: '不同服务商规则不同。建议保留完整的任务记录、request_id、task_id 和 usage 信息以便对账。' },
    ],
    updatedAt: '2026-06-03',
    internalLinks: ['/shipin-shengcheng-api-jiage/', '/keling-api-jiage/', '/request-failed-billing/', '/streaming-interrupted-billing/'],
    ctaEnabled: true,
    status: 'scaffold'
  },
  {
    slug: 'small-budget-api-test',
    title: '小额测试 API：如何用最小预算测试模型 API',
    metaDescription: '提供小额测试 API 的完整流程，包括查模型、查价格、发小请求、对照余额和扩大调用。',
    h1: '小额测试 API：如何用最小预算测试模型 API',
    category: 'billing',
    targetKeywords: ['小额测试 API', 'API 测试预算', 'API 最小调用', 'API 对账测试'],
    summary: '小额测试 API 的完整流程指南。',
    aiSummary: '小额测试 API 页面提供完整的测试流程建议：1. 查模型是否可见和可用；2. 查价格单位和计费标准；3. 发小额请求，记录 request_id；4. 查看 usage 返回；5. 对照后台余额变化；6. 确认无误后再扩大调用规模。建议每次测试都保留完整记录以便对账分析。',
    faq: [
      { q: '小额测试需要多少钱？', a: '不同服务商和模型价格不同。建议先查看官方定价，计算最小请求的大致成本，再决定测试预算。' },
      { q: '测试时需要注意什么？', a: '建议：1. 记录每次请求的 request_id；2. 查看 usage 返回；3. 对照余额变化；4. 确认模型权限和可用性。' },
    ],
    updatedAt: '2026-06-03',
    internalLinks: ['/claude-code-token-cost/', '/openrouter-yue/', '/api-koufei-yichang/', '/request-failed-billing/'],
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
