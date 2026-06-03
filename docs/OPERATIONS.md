# 运营指南 (OPERATIONS)

## 日常运营

### 内容更新

1. 更新页面 `updatedAt` 日期
2. 重新构建：`npm run build`
3. 运行验证：`npm run verify`
4. 检查生产环境
5. 提交 GSC

### Validator 说明

| 脚本 | 检查内容 |
|------|---------|
| validate:title-meta-h1 | 标题、描述、H1 唯一性和禁词 |
| validate:canonical | canonical URL 绝对性和匹配 |
| validate:placeholders | 无占位符文本 |
| validate:claims | 无禁词 |
| validate:cta | CTA URL 正确性 |
| validate:sitemap-llms | sitemap 和 llms 覆盖 |
| validate:pricing-freshness | 价格说明文案存在 |
| validate:official-wording | 官方口径正确 |
| validate:prompt-residue | 无 Cursor/prompt 残留 |
| validate:cross-project | 无跨项目污染 |
| validate:jsonld | JSON-LD 格式正确 |

### 生产验证

```bash
SITE_URL=https://aiapiprice.com npm run verify:live
```

## 页面创建流程

1. 在 `src/data/pages.ts` 添加页面数据
2. 创建 `src/pages/[slug].astro`
3. 使用 ArticleLayout 组件
4. 添加完整内容或 scaffold 内容
5. 更新 sitemap 和 llms

## CTA 更新

如需更新 CTA：
1. 修改 `src/data/site.ts` 中的 CTA 配置
2. 修改 `src/components/CTABox.astro`
3. 确保 validator 通过
