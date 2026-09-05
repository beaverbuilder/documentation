---
title: Build Your First Page
sidebar_label: Build Your First Page
description: "Create your first page with the Beaver Builder AI assistant or start from a professionally designed kit."
---

Create your first page with the Beaver Builder AI assistant or start from a professionally designed kit.

## Use MCP or BB AI Chat

Beaver Builder AI can be driven from two places, and they work independently. Both build the same kind of editable content, so the choice is about reach and setup rather than quality, and you can use both on the same site.

### BB AI Chat

BB AI Chat is a panel inside Beaver Builder or the WordPress block editor. You describe what you want and watch the result appear on the canvas, using the API key you add on the Settings tab.

- **Pros**. The only setup is [connecting an AI provider](../getting-started/connect-ai-provider.md). Sections stream onto the canvas as they are built, you can click a section to point your next request at it, you can attach screenshots and reference images, and wider changes such as token updates wait for your approval. It is available to editors, not only administrators.
- **Cons**. It works on the page you have open, so it cannot create a page or reach other pages, and it cannot create Themer layouts or Builder templates. Generation bills to your provider account and counts against per-user credit allowances.

### MCP

MCP lets an AI agent outside WordPress work on your site. An agent such as Claude Desktop, Claude Code, Cursor, or Windsurf connects to the tools your site publishes and builds from its own interface, using its own model and subscription.

- **Pros**. Scope is site-wide, so one request can touch several pages, a design system, and a Themer layout. An agent can create pages and posts, Themer layouts, and Builder templates, edits to a published page are staged until you publish them, no site API key or plugin credit limit applies, and your agent can bring in outside context such as a design file or a code repository.
- **Cons**. Setup is heavier, needing the MCP Adapter plugin, WordPress 6.9 or later, and either cloud authorization or an application password. It is administrators only, there is no live canvas to watch, and the results depend on the agent and model you connect.

If you are designing and refining a single page, start with BB AI Chat. If the work spans the site, or the source material lives outside WordPress, start with MCP.

- **[Build with MCP](build-with-mcp.md)** — Connect an AI agent to your site and build pages, design systems, and Themer layouts from your own AI app.
- **[Build with BB AI Chat](build-with-chat.md)** — Generate and refine pages through conversation in the editor, with every change visible on the canvas.

The rest of this page uses BB AI Chat. Design systems are created as you build, so the quickest way to get started is to create a page. You can generate one with the AI assistant or begin with a professionally designed kit.

## Generate a Page With AI

Use the assistant to design a page from scratch.

1. **Create or open a page.** Create a new page or open an existing page in Beaver Builder or the WordPress block editor.

2. **Open the AI chat.** In Beaver Builder, click the **AI Chat** button in the toolbar. In the WordPress block editor, open the **Beaver Builder AI** sidebar panel.

3. **Describe the page.** Tell the assistant what you want to create. Include the purpose of the page and the sections it should contain.

   For example:

   > Create a landing page for a local coffee roaster with a hero, story section, and contact form.

4. **Review the result.** The assistant proposes a design direction, creates a design system from it, and streams the page onto the canvas.

:::note
The first design system created on your site becomes the site default.
:::

## Start From a Design Kit

Use a bundled design kit when you want to begin with a professionally designed foundation.

1. **Open Design Systems.** From your WordPress admin dashboard, go to **Beaver Builder > Design Systems**.

2. **Open the Design Kits tab.** Select the **Design Kits** tab.

3. **Choose a kit.** Click a kit to preview the pages included with it.

4. **Create a page.** Click **New Page** on the page preview that you want to use.

   The kit's design system is added to your site and assigned to the new page.

See [Design kits](../design-foundations/design-kits.md) for more information about the bundled kits.

## Keep Building

After a design system is in place, the assistant uses its tokens, styles, and creative guidance for everything it generates. Try prompts such as:

- "Create a hero section with a heading, subheading, and call-to-action button."
- "Build a three-column features section using the primary color."
- "Generate a contact form with name, email, and message."

You can edit everything the assistant creates. Change values in the block settings panel, edit text and images directly on the canvas, or continue refining the page in the AI chat.
