# 发布门禁 (RELEASE_GATE)

## 发布前必须完成

### 1. 读规则
- [x] AGENTS.md
- [x] docs/PROJECT_MEMORY.md
- [x] docs/RELEASE_GATE.md
- [x] docs/HISTORICAL_INCIDENTS.md
- [x] docs/SEO_GEO_RULES.md
- [x] docs/CONTENT_ROADMAP.md
- [x] docs/OPERATIONS.md
- [x] .cursor/rules/*

### 2. Baseline 检查
```bash
pwd
git status
git log --oneline -5
```

### 3. 本地构建通过
```bash
npm run build
```

### 4. Validators 通过
```bash
npm run verify
```

必须通过的验证：
- validate:title-meta-h1
- validate:canonical
- validate:placeholders
- validate:claims
- validate:cta
- validate:sitemap-llms
- validate:pricing-freshness
- validate:official-wording
- validate:prompt-residue
- validate:cross-project
- validate:jsonld

### 5. 生产部署完成
根据实际托管方式完成部署。

### 6. Cache-busted Live Check
```bash
SITE_URL=https://aiapiprice.com npm run verify:live
```

检查项：
- 首页 200
- 3 个完整页 200
- sitemap.xml 200
- robots.txt 200
- llms.txt 200
- title/H1/meta/canonical 存在
- CTA href 正确
- banned claims 0
- prompt residue 0
- required phrases 存在
- sitemap/llms 包含公开页面
- 无跨项目污染

### 7. GSC/Bing 提交

**只有** production live checks PASS 后，才允许提交 GSC/Bing。

## 不允许

- 只凭本地报告说 "Done"
- 跳过 validators
- 跳过 live check
- 未完成就报告完成

## 验证失败处理

1. 修复问题
2. 重新构建
3. 重新运行验证
4. 重新检查生产环境
5. 只有全部通过才能报告完成
