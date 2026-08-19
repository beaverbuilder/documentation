---
title: MCP vs. Built-in chat
sidebar_label: MCP vs. Chat
description: "Compare the built-in AI chat with an MCP-connected AI agent, including what each one can do and when to use it."
---

Compare the built-in AI chat with an MCP-connected AI agent, including what each one can do and when to use it.

## Two ways to use AI

Beaver Builder AI works from two places, and you can use either one on its own or both on the same site.

- **The built-in chat** is an AI panel inside your editor. Open it in Beaver Builder or the WordPress block editor, describe what you want, and watch the result appear on the canvas. It runs on the API key you enter on the Settings tab.  

- **An MCP connection** lets an AI agent outside WordPress work on your site. An agent such as Claude Desktop, Claude Code, Cursor, or Windsurf connects to your site and acts on it from its own interface, using its own model and subscription.

## Comparison

| Area | Built-in chat | MCP connection |
| --- | --- | --- |
| Where you work | The AI chat panel in your editor. | Your own AI app. |
| Setup | Paste an API key on the Settings tab. | Install the MCP Adapter plugin, then authorize the connection or create an application password. |
| Who can use it | Administrators and editors, depending on capabilities. | Administrators only. |
| Scope of work | The page you have open. | Any page, post, design system, Themer layout, or Builder template on the site. |
| Creating new pages | No. Create the page first, then generate into it. | Yes. |
| Live preview | Yes. Sections stream onto the canvas as they are built. | No. Open the page afterward to review the result. |

## What each one can do

Both surfaces produce the same kind of output, so the real difference is reach.

**Both can:**

- Generate complete multi-section pages, or individual sections including forms.
- Build native Beaver Builder rows, columns, and modules, HTML sections, or a mix.
- Read and rewrite existing sections, their settings, and their CSS and JavaScript.
- Create design systems, update their tokens and assets, and assign them to a page.

**Only the built-in chat can:**

- Show generation live on the canvas, and let you stop it partway through.
- Scope a request to a section you click on the canvas.
- Use screenshots, reference images, or an `.html` file as a source.
- Insert images from your WordPress media library.
- Infer a design system from your existing site or theme styles.

**Only an MCP connection can:**

- Create new pages and posts, and work across several pages in one request.
- Create Beaver Themer layouts and Builder templates.
- Stage edits to a published page, then publish or discard them.
- Bring in outside context, such as local design files or a code repository.

:::note
An MCP-connected agent never uses your site's AI API keys. The two surfaces are billed separately.
:::

## Which one should you use?

Pick based on the scope of the job.

Use the **built-in chat** when you are designing and refining a single page, when you want to see changes as they happen, or when the person doing the work is an editor rather than an administrator.

Use an **MCP connection** when the work spans the site, such as building several pages against one design system or setting up Themer layouts. It also helps when your source material lives outside WordPress, or when you would rather work in an agent you already pay for.

:::tip
Many sites use both. Build broadly with an agent over MCP, then open a page in the editor and refine it in the chat.
:::

Nothing needs to be turned off to run both. They read and write the same pages and design systems, so a page an agent creates opens in the editor like any other.
