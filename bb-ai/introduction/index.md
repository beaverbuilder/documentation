---
title: Introduction to Beaver Builder AI
sidebar_label: Introduction
description: An AI-powered design plugin for WordPress that generates fully editable layouts in both Beaver Builder and the Block Editor.
slug: /
---

:::warning

These docs are a work in progress. You may encounter errors, missing information, or content that changes frequently.

:::

An AI-powered design plugin for WordPress that generates fully editable layouts in both Beaver Builder and the Block Editor.

## What is Beaver Builder AI?

Beaver Builder AI is an AI-powered design plugin for WordPress that generates fully editable layouts in both Beaver Builder and the WordPress block editor. It adds an AI chat to both editors, connects AI coding agents to your site over MCP, and keeps everything visually consistent through design systems. You bring your own API key from an AI provider (Anthropic, OpenAI, or OpenRouter), and the plugin builds real, editable content on your site.

## Three ways to build

The plugin supports three workflows, and you can mix them freely.

- **Built-in AI chat**. A chat panel inside Beaver Builder and the block editor. Describe what you want and the AI generates pages, blocks, and forms using your active design system, streaming the result onto the canvas where you can keep editing it.

- **MCP-connected agents**. Connect an AI coding agent (Claude Code, Claude Desktop, Cursor, Windsurf) directly to your site using the Model Context Protocol. The agent can create and edit pages, build native Beaver Builder layouts, and manage design systems from your coding tool, running on its own model and billing.

- **Design kit import**. Have an AI coding agent build a complete site kit locally as HTML and CSS files, then import it through the admin. The kit format ships with its own agent instructions, and the workflow is provider-agnostic.

## How it works

AI-generated layouts become editable WordPress content, not a static export.

- **Real code, not template picks**. Sections built through chat come back as blocks with real HTML, scoped CSS, and optional JavaScript, so you get the layout you asked for instead of a template approximation. The AI gives you a starting point, and you have full access to the code from there.

- **Native modules over MCP**. Agents connected over MCP can also build with real Beaver Builder rows, columns, and modules, including headings, rich text, buttons, photos, icons, and boxes. A page can be all native, all generated HTML, or a mix of both, section by section.

- **Generated settings fields**. Every AI-generated block comes with an automatically generated settings panel. The plugin parses the generated HTML into content fields such as text, images, and links, and into repeaters for repeating content.

- **Editing on the canvas**. Click any element to select, drag, duplicate, or delete it, and use the styling panel to restyle without touching code. Everything you generate is a fully native part of your layout.

## Core concepts

These are the ideas the rest of the documentation builds on.

- **[AI assistant](../build/build-with-chat.md)** — Generate pages, blocks, and forms by describing what you want, then refine through conversation.
- **[MCP](../build/build-with-mcp.md)** — Connect agents like Claude Code or Cursor directly to your WordPress site.
- **[Design systems](../design-foundations/design-systems.md)** — Tokens, shared styles, fonts, and creative guidance that keep every page consistent, and give the AI its context.
- **[Design tokens](../design-foundations/design-tokens.md)** — Named CSS custom properties for colors, fonts, spacing, and more that the AI reads and applies consistently.
- **[Design kits](../design-foundations/design-kits.md)** — Start from a bundled starter kit or import a kit built by an AI coding agent.
- **[Custom module](../build/custom-module.md)** — Build sections from your own HTML, CSS, and JavaScript in Beaver Builder, and save them as reusable Components.
- **[Forms](../build/forms.md)** — AI-generated forms with email, webhook, redirect, and custom submission actions, plus built-in spam protection.
- **[Settings](../configuration/settings.md)** — Connect your AI providers, license, and Unsplash, choose the active model, and control chat access.
- **[Modules and blocks](../developer/modules-and-blocks.md)** — Portable sections built from templates, scoped CSS, optional JavaScript, and auto-generated settings forms.
