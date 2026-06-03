# SEO/GEO 规则 (SEO_GEO_RULES)

## 每个页面必须包含

### 1. Meta 标签
- 唯一 title
- 唯一 meta description (80-150 中文字符)
- canonical 绝对 URL

### 2. 结构化数据
- WebSite schema
- Organization schema
- Article 或 FAQPage schema
- BreadcrumbList schema

### 3. 内容要求
- 唯一 H1
- 清晰更新时间
- 内链
- FAQ
- AI Summary / GEO summary

### 4. sitemap.xml
- 包含首页 + 3 个完整页 + 19 个 scaffold 页
- URL 使用 https://aiapiprice.com/
- trailing slash 统一
- lastmod 使用页面 updatedAt

### 5. llms.txt
- 包含站点说明
- 包含所有公开页面
- 清楚说明本站关注领域
- 不包含 /tools/*

## Meta Description 规则

- 中文自然表达
- 约 80–150 中文字符
- 不堆砌关键词
- 不写最便宜/保证/官方替代

## 内链规则

优先级：
1. aiapiprice.com 内部价格/成本/扣费相关页
2. AI API 雷达配置扩展链接
3. AI API Doctor 检测 CTA
4. LinkAI 注册转化 CTA

## JSON-LD 规则

- URL 必须绝对 URL
- 不要输出相对 URL 的 @id、url、item
- WebSite、Organization、Article/FAQPage、BreadcrumbList 可用

## robots.txt

```
User-agent: *
Allow: /
Sitemap: https://aiapiprice.com/sitemap.xml
```
