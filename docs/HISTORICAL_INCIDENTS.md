# 历史事件 (HISTORICAL_INCIDENTS)

## 记录规则

本文件记录 aiapiprice.com 项目中发现的问题和解决方案，以便未来避免类似问题。

## 问题记录

### 2026-06-03: 项目初始化

**问题**: 初始创建时可能混淆项目定位

**解决方案**: 
- 严格区分 aiapiprice.com 与 AI API 雷达、AI API Doctor
- 明确是价格/成本/扣费透明副站，不是配置站
- 所有页面必须包含价格说明文案

### 2026-06-03: CTA URL 错误

**问题**: CTA 可能指向错误 URL

**解决方案**:
- 使用固定的两个 CTA URL
- https://aiapidoctor.com/
- https://api1.link-ai.cc/register
- 在 validators 中检查 CTA URL

### 2026-06-03: 禁词检查

**问题**: 内容中可能出现禁词

**解决方案**:
- 使用 validate:claims 检查
- 禁止出现：最便宜、保证最低价、官方替代等
- 每个 validator 脚本独立运行

### 2026-06-03: Scaffold 页面状态

**问题**: Scaffold 页面不能有未完成的工程痕迹

**解决方案**:
- 使用受控文案："完整内容正在补充"
- 不能出现 TODO、TBD、placeholder
- 页面必须能访问，有完整 SEO 框架
