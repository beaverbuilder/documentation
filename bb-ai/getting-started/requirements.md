---
title: System Requirements
sidebar_label: Requirements
description: "Review the WordPress, PHP, editor, and AI provider requirements for Beaver Builder AI."
---

Review the WordPress, PHP, editor, and AI provider requirements for Beaver Builder AI.

## Prerequisites

Before installing Beaver Builder AI, make sure you have the following:

- A WordPress site running **WordPress 6.7** or later.
- Connecting an AI agent over MCP requires **WordPress 6.9** or later, as described in [MCP](#mcp).
- **PHP 8.2** or later.
- Beaver Builder for the page builder integration, or the WordPress block editor on its own.

## AI Provider

The built-in AI chat and generation features require an API key from at least one supported AI provider:

- [Anthropic](https://console.anthropic.com/)
- [OpenAI](https://platform.openai.com/)
- [OpenRouter](https://openrouter.ai/)

You only need to connect one provider to get started. After connecting it, you can select the provider and model that the assistant should use.

:::warning
Before entering an API key, set a monthly spending limit in the provider's billing dashboard. Beaver Builder AI does not cap usage on your behalf.
:::

## Editor

Beaver Builder AI works with either of the following editors:

- **Beaver Builder** – Use the AI chat from the Beaver Builder toolbar to generate pages and content in the page builder.
- **WordPress block editor** – Use Beaver Builder AI from its sidebar panel without installing Beaver Builder.

:::info
Beaver Builder is only required for the page builder integration. You can use Beaver Builder AI with the WordPress block editor on its own.
:::

## MCP

Connecting an external AI agent, such as Claude Code, or Cursor, to your site over MCP adds two requirements beyond the ones above.

- **WordPress 6.9** or later. The **MCP Connection** tab disables authorization on earlier versions.
- The [MCP Adapter plugin](https://github.com/WordPress/mcp-adapter/releases) installed and active. This plugin publishes your site's MCP endpoint, and it requires WordPress 6.9, which is where the higher version floor comes from.

See [MCP connection](../configuration/mcp-connection.md) for the full list and setup steps.

:::info
  MCP is optional. The built-in AI chat and generation features work on WordPress 6.7 without the MCP Adapter plugin.
:::
