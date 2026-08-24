---
title: Build with MCP
sidebar_label: Build with MCP
description: Connect an AI agent over MCP to build and edit pages, native Beaver Builder layouts, design systems, and Themer layouts from your own AI app.
---

Connect an AI agent over MCP to build and edit pages, native Beaver Builder layouts, design systems, and Themer layouts from your own AI app.

## Connecting an agent

MCP is how an AI agent that lives outside WordPress works on your site.

Your site publishes a set of tools through the Model Context Protocol, and an agent such as Claude Desktop, Claude Code, Cursor, or Windsurf connects to those tools and acts on your site from its own interface. You keep working in the AI app you already use, and the results land on your site directly.

Connections are set up on the **MCP Connection** tab at **Settings > Beaver Builder AI**, and two methods are available:

- **Connect via Beaver Builder AI** authorizes a live site through Beaver Builder AI's cloud service. It needs a public HTTPS URL and a valid license key.
- **Connect manually** authenticates with a WordPress application password through a small Node.js bridge, which is the method for local and staging sites.

Both methods need the MCP Adapter plugin, WordPress 6.9 or later, and a permalink structure that does not include `index.php`. See [MCP connection](../configuration/mcp-connection.md) for the setup steps and the setup prompt that configures your agent for you.

## Who can use MCP

Access is decided by who can reach the settings tab and whose credentials the connection uses.

Only administrators can set up a connection, because the whole Beaver Builder AI settings page requires the `manage_options` capability. There is no per-editor toggle to hand MCP to someone else, so if the person doing the work is an editor rather than an administrator, use the [built-in chat](build-with-chat.md) instead.

Once connected, the agent acts as the WordPress user whose credentials the connection was made with, and it is bound by that user's permissions. The design system tools apply the same access check as the chat, which by default means the `unfiltered_html` capability.

## What an agent can do

An agent works through a fixed set of tools, and those tools reach the whole site rather than a single open page.

- **Create pages and posts**. Make a page from scratch and set its status, so nothing has to exist before you start.
- **Build pages**. Compose a complete multi-section page from a description, as editable native sections, generated HTML sections, or a mix of both.
- **Build native Beaver Builder layouts**. Produce real rows, columns, and modules instead of generated code; see [Native modules](native-modules.md).
- **Generate forms**. Forms are part of blocks, so an agent can build a contact or signup form with its submission settings; see [Forms](forms.md).
- **Generate a style guide**. Produce a page that showcases a design system's colors, typography, and components.
- **Edit existing pages**. Read a layout outline, rewrite content and code, change settings, add, move, and remove nodes in a batch, and update page CSS and JavaScript.
- **Manage design systems**. Create a design system, update its tokens, shared CSS, JavaScript, and fonts, edit its creative guidance, and assign it to a page.
- **Create Builder templates**. Save static, global, and component templates for reuse.
- **Create Themer layouts**. Build a Themer layout and set the location rules that decide where it applies, when Beaver Themer is active.
- **Bind dynamic field connections**. Connect post and site data to a layout, when Beaver Themer is active.
- **Work across several pages at once**. One request can touch a set of pages, their design system, and a Themer layout.

Which tools an agent sees depends on your site. Most of the content tools and the module and hybrid specs need Beaver Builder 2.11 or later, and the Themer tools and field connections need Beaver Themer to be active. The complete list is in [Available tools](../configuration/mcp-connection.md#available-tools).

## What an agent cannot do

A few things depend on being inside the editor, so they belong to the chat rather than to an agent.

- No live canvas. You review the result after the agent finishes rather than watching it build.
- No canvas selection. You describe the page and section you mean instead of clicking it.
- No screenshot or reference image as the source for a page, and no `.html` file upload.
- No browsing or searching your media library.
- No inferring a design system from your existing site or theme styles.

## Writing effective prompts

An agent has no view of the page you are looking at, so a good prompt names the target and describes the outcome.

Mention your site by name or URL in the request. If you have several MCP servers connected, this is how the agent knows which one to use. Then describe the page, the section, and the result you want, the same way you would in the chat, without explaining HTML structure or CSS properties.

Effective prompts cover:

- **Site and page**: "On my-site.com, open the About page"
- **Purpose**: "Add a team section with a photo, name, and role for each person"
- **Layout**: "Three columns on desktop, stacked on mobile"
- **Style**: "Use the primary color and heading font from the active design system"
- **Format**: "Build it with native Beaver Builder modules"

These prompts are starting points for the three most common ways to begin:

> I want to create a new design system on my-site.com. Dark, editorial feel with strong typography.

> Build a landing page on my-site.com with a hero, services overview, testimonials, and a contact section.

> Open the About page on my-site.com and update the team section with two new bios.

## Pointing an agent at part of a page

Without a canvas to click, the agent works out what you mean by reading the page first. Name the page by title or URL and describe the section in words, for example "the pricing table on the Plans page".

The agent searches your pages, reads a lightweight outline of the layout, then reads only the nodes it needs. Edits are applied to those nodes, so the rest of the page is left alone. The more specific your description, the less the agent has to guess.

:::tip
Labeling your rows, columns, and modules in the builder gives the agent clearer landmarks to work with. A column labeled "Pricing table" or a module labeled "Hero CTA button" shows up in the layout outline the agent reads, so a request like "update the Hero CTA button" lands on the right node the first time.
:::

## Working with images

An agent cannot see your media library, so images come in by URL.

Give the agent a direct image URL and it downloads the file into your media library, then uses it in the layout. Only `http` and `https` URLs are accepted, private and internal hosts are blocked, and SVG files are refused. Asking for the same URL twice reuses the existing attachment instead of creating a duplicate, and the connected user needs the `upload_files` capability.

To use an image that is already in your media library, open the page in the editor afterward and swap the image on the canvas, or use the built-in chat, which can insert from the library directly.

## How changes are applied

Nothing an agent does reaches your visitors without a deliberate step, and the plugin enforces that rather than trusting the agent.

- **New pages start as drafts.** The agent can set a status, and a draft is not visible on your site.
- **Edits to a published page are staged.** Changes are saved to a separate draft, and the live page is untouched until you publish. The agent cannot bypass this.
- **Staged edits are published or discarded explicitly.** You ask the agent to publish the staged draft or to discard it, and you can review the difference first.
- **Outside edits are detected.** Every edit is tracked with a content hash, so if you change a page outside the AI, the agent must get your confirmation before continuing. If the live page changes while a staged draft exists, publishing is blocked until you review the differences.

Approval prompts come from your agent rather than from the plugin. There are no Accept and Reject buttons as there are in the chat, so how much an agent confirms before acting depends on the agent and the permissions you have given it. Token and asset updates affect every page using that design system, which is worth keeping in mind when you approve one.

## Conversation history

Your agent keeps the conversation, not your site.

There is no per-page history stored on your site as there is for the chat, and clearing the chat on a page has no effect on an agent. Context lives in whatever session your agent is running, so starting a new session means the agent reads your site again rather than remembering the last one.
