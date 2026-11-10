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
- **Beaver Builder 2.11** or later for the page builder integration, or the WordPress block editor on its own.
- A user role with the `unfiltered_html` capability, as described in [User permissions](#user-permissions).

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

- **Beaver Builder** version **2.11** or later – Use the AI chat from the Beaver Builder toolbar to generate pages and content in the page builder.
- **WordPress block editor** – Use Beaver Builder AI from its sidebar panel without installing Beaver Builder.

:::info
Beaver Builder is only required for the page builder integration. You can use Beaver Builder AI with the WordPress block editor on its own.
:::

## User permissions

The chat and generation features go to users who can create design system content, which by default means users with the WordPress `unfiltered_html` capability. On a typical single-site install that covers administrators and editors; on a multisite network, only super admins have it by default.

:::warning
If your `wp-config.php` contains `define( 'DISALLOW_UNFILTERED_HTML', true );`, WordPress removes the `unfiltered_html` capability from every user, including administrators. Beaver Builder AI's chat and generation features are then unavailable to everyone, regardless of role.
:::

To restore chat access for administrators without removing the constant, add the [`fl_ds_user_can_create_content` filter](../developer/hooks.md#fl_ds_user_can_create_content-filter) to a small plugin or your theme's `functions.php`:

```php
add_filter( 'fl_ds_user_can_create_content', function( $can ) {
	return $can || current_user_can( 'manage_options' );
} );
```

This bypass restores the built-in chat and generation features only. It does not work for MCP, so while `DISALLOW_UNFILTERED_HTML` is defined, an AI agent connected over [MCP](#mcp) cannot work on the site.

## MCP

Connecting an external AI agent, such as Claude Code, or Cursor, to your site over MCP adds two requirements beyond the ones above.

- **WordPress 6.9** or later. The **MCP Connection** tab disables authorization on earlier versions.
- The [MCP Adapter plugin](https://github.com/WordPress/mcp-adapter/releases) installed and active. This plugin publishes your site's MCP endpoint, and it requires WordPress 6.9, which is where the higher version floor comes from.

See [MCP connection](../configuration/mcp-connection.md) for the full list and setup steps.

:::info
  MCP is optional. The built-in AI chat and generation features work on WordPress 6.7 without the MCP Adapter plugin.
:::
