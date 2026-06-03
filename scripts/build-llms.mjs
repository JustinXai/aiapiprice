import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');

const SITE_URL = 'https://aiapiprice.com';
const BUILD_DIR = path.join(rootDir, 'dist');

const pages = [
  { url: '/', title: 'AI API 价格指南：模型 API 价格、Token 成本与扣费透明' },
  { url: '/claude-code-token-cost/', title: 'Claude Code Token 成本：为什么 Coding Agent 容易烧余额' },
  { url: '/openrouter-yue/', title: 'OpenRouter 余额怎么扣：credits、usage 与 API Key 对账' },
  { url: '/shipin-shengcheng-api-jiage/', title: '视频生成 API 价格：文生视频、图生视频与失败扣费怎么判断' },
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
  { url: '/tool-call-koufei/', title: 'Tool Call 扣费：工具调用如何影响 API 成本' },
  { url: '/streaming-interrupted-billing/', title: '流式中断扣费：stream 中断、超时是否扣费' },
  { url: '/gpt-image-api-price/', title: 'GPT Image API 价格：DALL-E 3 图片生成 API 费用' },
  { url: '/image-generation-api-price/', title: '图片生成 API 价格：主流图像生成 API 费用结构' },
  { url: '/jimeng-api-price/', title: '即梦 API 价格：字节即梦图片/视频生成 API 费用' },
  { url: '/keling-api-jiage/', title: '可灵 API 价格：快手可灵视频生成 API 费用结构' },
  { url: '/video-generation-failed-billing/', title: '视频生成失败扣费：异步任务失败、超时、重试扣费判断' },
  { url: '/small-budget-api-test/', title: '小额测试 API：如何用最小预算测试模型 API' },
];

function generateLLMS() {
  let content = '# AI API 价格指南\n\n';
  content += '## 站点说明\n\n';
  content += 'AI API 价格指南（aiapiprice.com）是一个中文静态内容站，聚焦模型 API 价格结构、Token 成本、OpenRouter credits、usage 对账、图片和视频生成 API 扣费、失败请求扣费与小额测试方法。\n\n';
  content += '**关注领域：**\n';
  content += '- 模型 API 价格结构\n';
  content += '- Token 成本计算\n';
  content += '- OpenRouter credits 和 usage\n';
  content += '- 图片生成 API 扣费\n';
  content += '- 视频生成 API 扣费\n';
  content += '- 失败请求扣费判断\n';
  content += '- 小额测试流程\n\n';
  content += '**不承诺最低价，也不替代官方文档。**开发者应结合官方价格页、后台模型列表、request_id、usage、raw quota、completion_tokens、stream 状态和后台账单记录综合判断。\n\n';
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
