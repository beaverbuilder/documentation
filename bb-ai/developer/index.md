---
title: Developer reference
description: Technical reference for developers extending Beaver Builder AI, including the REST API, WordPress hooks, field types, and design kit format.
---

Technical reference for developers extending Beaver Builder AI, including the REST API, WordPress hooks, field types, and design kit format.

## Architecture overview

Beaver Builder AI is a WordPress plugin composed from a monorepo of packages: the AI engine (chat, generation, MCP abilities), a core kit (settings, forms, media), the design system runtime (tokens, rendering, field types), the management admin, and the Beaver Builder integration. They ship as one plugin and share a single PHP namespace and REST namespace.

The backend is PHP 8.2 with Composer PSR-4 autoloading under `FL\DesignSystem`. The frontend is React 18 bundled with webpack 5, with state in Zustand stores and code editing via CodeMirror 6. Block templates render through a Mustache engine on both sides: the `mustache` npm package in the editor and a minimal PHP engine on the server.

**Key identifiers:**

| Type | Value |
|------|-------|
| PHP namespace | `FL\DesignSystem` |
| REST namespace | `fl-design-system/v1` |
| Design system post type | `fl-design-system` |
| Block editor block type | `fl-ds/custom` |
| Beaver Builder module type | `ds-block` |
| Text domain | `fl-design-system` |
| Plugin UI CSS prefix | `fl-ds-` classes, `--fl-ds-*` custom properties |
| User design token namespace | `--ds-*` custom properties |

The plugin creates three database tables: `{prefix}fl_ds_chat` for conversation history, `{prefix}fl_ds_token_usage` for AI usage tracking, and `{prefix}fl_ds_throttle` for generation rate limiting.

## Developer references

Four references cover the extension surfaces in detail.

- **[REST API](rest-api.md)** — Reference for the `fl-design-system/v1` REST API endpoints, permissions, and response shapes.
- **[Hooks](hooks.md)** — WordPress action and filter hooks for form actions, capabilities, and generation control.
- **[Field types](field-types.md)** — Reference for the field types available in block settings form definitions.
- **[Design kit format](design-kit-format.md)** — Specification for the design kit directory format used for import and export.

## Plugin constants

The plugin defines one PHP constant at load time:

```php
FL_DESIGN_SYSTEM_FILE  // Absolute path to the plugin main file
```

It is a presence flag for integrations that need to detect the plugin (`defined( 'FL_DESIGN_SYSTEM_FILE' )`). There is no directory constant; the plugin's packages locate their own assets internally.

## Requirements for extensions

Code extending the plugin targets the same baseline as the plugin itself:

- PHP 8.2 or later.
- WordPress 6.7 or later.

Beaver Builder AI is beta software, and internal APIs may change between releases. The most stable extension points are the [hooks](hooks.md), which include the form action registry and the capability filters. Extensions that target the PHP layer follow standard WordPress plugin development practices.
