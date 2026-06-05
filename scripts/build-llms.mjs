import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');

const SITE_URL = 'https://aiapiprice.com';
const BUILD_DIR = path.join(rootDir, 'dist');

const pages = [
  { url: '/', title: 'AI API 价格、视频生成成本与扣费透明指南' },
  { url: '/ai-video-api-price/', title: 'AI 视频生成 API 价格：可灵、即梦、Seedance 与文生视频成本入口' },
  { url: '/video-generation-api-cost/', title: '视频生成 API 成本：秒数、任务、分辨率与重试如何影响预算' },
  { url: '/ai-short-drama-api-cost/', title: 'AI短剧成本：批量生成、失败重试与多镜头任务怎么估' },
  { url: '/image-to-video-api-cost/', title: '图生视频 API 成本：输入图、首尾帧、分辨率与失败重试怎么计费' },
  { url: '/video-generation-timeout/', title: '视频生成超时是否扣费：轮询超时、客户端断开与后台任务如何核对' },
  { url: '/video-generation-webhook/', title: '视频生成 webhook 与 callback：如何用回调状态核对任务与扣费' },
  { url: '/product-image-api-price/', title: '商品图 API 价格：背景替换、图生图与批量商品图生成怎么计费' },
  { url: '/product-video-api-cost/', title: '商品视频 API 成本：商品图转视频、批量版本与失败重试怎么估' },
  { url: '/ai-agent-token-cost/', title: 'AI Agent Token 成本：Claude Code、Cline、Cursor 与 tool call 成本入口' },
  { url: '/claude-code-token-cost/', title: 'Claude Code Token 成本：Coding Agent 为什么容易烧余额' },
  { url: '/openrouter-yue/', title: 'OpenRouter 余额怎么扣：credits、usage 与 API Key 对账' },
  { url: '/shipin-shengcheng-api-jiage/', title: '视频生成 API 价格：AI 视频生成、图生视频与失败扣费怎么判断' },
  { url: '/deepseek-api-price/', title: 'DeepSeek API 价格：DeepSeek V3/R1 模型 API 费用结构' },
  { url: '/kimi-api-price/', title: 'Kimi API 价格：Kimi 长上下文模型 API 费用' },
  { url: '/qwen-api-price/', title: 'Qwen API 价格：通义千问 Qwen 系列模型 API 费用' },
  { url: '/doubao-api-price/', title: '豆包 API 价格：字节豆包模型 API 费用结构' },
  { url: '/tongyi-qianwen-api-price/', title: '通义千问 API 价格：阿里云通义千问模型 API 费用' },
  { url: '/claude-api-price/', title: 'Claude API 价格：Claude 3.5/4 模型 API 费用结构' },
  { url: '/gemini-api-price/', title: 'Gemini API 价格：Google Gemini 模型 API 费用结构' },
  { url: '/openai-api-usage/', title: 'OpenAI API usage：GPT-4o/GPT-4o-mini API 使用量与账单' },
  { url: '/openai-api-billing/', title: 'OpenAI API 账单：理解 OpenAI 账单结构与扣费逻辑' },
  { url: '/api-koufei-yichang/', title: 'API 扣费异常：为什么 API 余额消耗比预期快' },
  { url: '/request-failed-billing/', title: '请求失败扣费：401/403/404/500 错误是否扣费' },
  { url: '/tool-call-koufei/', title: 'Tool Call 扣费：Agent 工具调用与 function call 如何影响成本' },
  { url: '/streaming-interrupted-billing/', title: '流式中断扣费：stream 中断、超时是否扣费' },
  { url: '/gpt-image-api-price/', title: 'GPT Image API 价格：商品图、图片编辑与背景替换怎么计费' },
  { url: '/image-generation-api-price/', title: '图片生成 API 价格：商品图、背景替换与图生图成本结构' },
  { url: '/jimeng-api-price/', title: '即梦 API 价格：即梦图片/视频生成、任务扣费与失败重试' },
  { url: '/keling-api-jiage/', title: '可灵 API 价格：可灵视频生成、Kling API price 与图生视频成本' },
  { url: '/video-generation-failed-billing/', title: '视频生成失败扣费：失败任务、超时、取消任务与重试怎么判断' },
  { url: '/small-budget-api-test/', title: '小额测试 API：如何用最小预算测试模型 API' },
];

function generateLLMS() {
  let content = '# AI API 价格指南\n\n';
  content += '## 站点说明\n\n';
  content += 'AI API 价格指南（aiapiprice.com）是一个中文静态内容站，聚焦 AI 视频生成 API、图片生成 API、AI短剧成本、Coding Agent Token 成本、失败扣费、超时、回调、usage log、raw quota 与小额测试方法。\n\n';
  content += '**关注领域：**\n';
  content += '- AI 视频生成 API 价格与成本\n';
  content += '- 图片生成 API、商品图与背景替换\n';
  content += '- AI短剧批量生成成本\n';
  content += '- Coding Agent Token 成本\n';
  content += '- 失败扣费、超时与 webhook / callback\n';
  content += '- usage log 与 raw quota 对账\n';
  content += '- 小额测试流程\n\n';
  content += '**不承诺最低价，也不替代官方文档，不保证失败不扣费。**开发者应结合官方价格页、后台模型列表、request_id、task_id、usage、raw quota、completion_tokens、stream 状态和后台账单记录综合判断。\n\n';
  content += '## 页面列表\n\n';
  
  for (const page of pages) {
    content += `- [${page.title}](${SITE_URL}${page.url})\n`;
  }
  
  content += '\n## 相关工具\n\n';
  content += `- [AI API Doctor 检测](https://aiapidoctor.com/)\n`;
  content += `- [注册 LinkAI](https://api1.link-ai.cc/register)\n`;
  
  return content;
}

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function main() {
  ensureDir(BUILD_DIR);
  
  const llms = generateLLMS();
  fs.writeFileSync(path.join(BUILD_DIR, 'llms.txt'), llms, 'utf8');
  
  console.log(`LLMS.txt generated with ${pages.length} pages`);
  console.log(`Output: ${path.join(BUILD_DIR, 'llms.txt')}`);
}

main();
