---
title: Working with native modules
sidebar_label: Native Modules
description: Connect an AI agent over MCP to build pages and Beaver Themer layouts from real Beaver Builder rows, columns, and modules, and choose between native modules and generated Custom modules.
---

Connect an AI agent over MCP to build pages and Beaver Themer layouts from real Beaver Builder rows, columns, and modules, and choose between native modules and generated Custom modules.

## Native modules need an MCP connection

Native modules are the one part of Beaver Builder AI that only an MCP-connected agent can build.

To use them, connect an AI agent such as Claude Desktop, Claude Code, or Cursor to your site and ask for native modules in your prompt. See [MCP connection](../configuration/mcp-connection.md) for the setup steps. The built-in AI chat inside the editor cannot build native modules, it generates Custom modules instead.

:::note
Everything on this page assumes an agent connected over MCP. If you are working in the AI chat panel inside Beaver Builder or the block editor, see [Modules and blocks](../developer/modules-and-blocks.md).
:::

An agent connected over MCP builds with Beaver Builder's own rows, columns, and modules directly, so a page the agent creates is made of the same pieces a page you built yourself would be. That same agent can also generate [Custom modules](custom-module.md), sections it writes as HTML and CSS with their own settings form. Which one you get comes down to what you ask for:

- Ask for native modules and the page contains no generated code at all, only standard Beaver Builder content.
- Ask for a generated section and the agent writes a Custom module for it.
- Say nothing either way and the agent decides section by section, based on what each section needs.

## Native modules vs generated Custom modules

Neither option is better in every situation, so it helps to know what each one is good at.

### Native modules

Native modules cover a fixed set of content and features, and they behave exactly like the modules your team already uses.

- **Familiar to everyone.** Every element opens in the standard Beaver Builder settings panels. A client you built the site for already knows how to edit a Heading, Button, or Photo module, so they can maintain the page without learning anything new.
- **No code to maintain.** Content lives in module settings rather than in HTML and CSS, so there is no generated code to read or debug.
- **Fully adjustable in the builder.** Padding, margins, column widths, and responsive stacking are all handled by Beaver Builder's own controls.
- **Design system styling built in.** The agent binds module colors to your design system's tokens and applies your brand typography. Design system colors also appear in Beaver Builder's native color picker for your own edits.
- **Works with your existing content.** The agent can add native sections to pages you built by hand, restyle existing modules, and reuse your saved templates.

The trade-off is range. Native modules can only do what they were built to do, so a section whose design or behavior falls outside the module set cannot be expressed natively.

### Generated Custom modules

A generated Custom module is written for one purpose, following the design and direction you gave the agent.

- **Unique to your brief.** The markup and CSS are produced for the design you described, so the result is not limited to what an existing module happens to support.
- **Any feature or layout.** Interactive sections, unusual grids, animations, and custom form layouts are all possible because the agent writes the HTML, CSS, and JavaScript.
- **Still editable by content editors.** Every placeholder in the template becomes a field, so the settings form gives your team safe text, image, and link editing.

The trade-off is code. A generated module is code that someone owns from then on, and it is styled through the module's own Design and Code tabs rather than the standard module settings panels. Both of those tabs require code access. See [Modules and blocks](../developer/modules-and-blocks.md#editing-modules-and-blocks).

### Choosing between them

You do not have to commit to one approach for a whole site, or even for a whole page.

Reach for native modules when the section is standard content and the site will be handed to a client or an editor who works in Beaver Builder every day. Reach for a generated Custom module when the design matters more than the editing surface, such as a distinctive hero or a section no native module can express. Most projects want both, which is what the next section covers.

## Mixing native modules and generated Custom modules

A page can be entirely native, entirely generated Custom modules, or a mix of the two, decided section by section.

A common pattern is a distinctive generated hero followed by native content sections your team maintains in the standard panels. If you care which approach the agent uses, say so in your prompt:

> Build a pricing page on my-site.com using native Beaver Builder modules only.

> Rebuild the hero on the Services page as a generated section, but keep the rest of the page native.

Left to decide on its own, the agent reads your site's format specifications and chooses based on what each section needs.

## Building Beaver Themer layouts

An MCP-connected agent can build [Beaver Themer](/beaver-themer/) layouts as well as pages.

The agent creates the layout, sets where it applies, and builds its content the same way it builds a page, so native modules and generated Custom modules are both available inside a Themer layout. It can create header, footer, singular, archive, 404, part, and popup layouts, and it can list your existing layouts and change their location rules. See [Themer layout locations](/beaver-themer/locations/themer-locations-reference).

Inside a Themer layout, extra native modules become relevant because they bind to the current post automatically, so one layout works for every post it applies to.

| Module | What it is for |
| --- | --- |
| Post Title | The current post's title, for singular layouts, headers, and footers. |
| Featured Image | The current post's featured image. |
| Post Content | The current post's body content. |
| Post Info | The post meta line: date, author, terms, and comments. |
| Author Bio | The current post author's bio. |
| Post Navigation | Previous and next post links. |
| Menu | A responsive WordPress navigation menu, built from an existing menu on your site. |

Describe the layout and where it should apply in one prompt:

> Create a singular Themer layout on my-site.com for blog posts using native modules: featured image, post title, post info, then the post content.

Three things are worth knowing before you ask:

- **Beaver Themer must be active.** The agent's Themer tools only appear on sites where Themer is installed, and the account the agent connects with needs Themer editing permission.
- **New layouts start as drafts.** A draft layout does not display on your site, so the agent can build the content and let you publish when you are happy with it.
- **Headers, footers, and parts need theme support.** If your active theme does not declare support for them, the layout will not render, and the agent reports that when it creates the layout.

## Editing the result

Open the page or layout in Beaver Builder and work as you always do.

Native modules open in their regular settings panels, rows and columns drag and resize normally, and nothing about a native section depends on the plugin's generated-code features. Generated Custom modules open in their own settings form, with the Design and Code tabs available to users with code access.

The same safeguards apply as with any agent edit. New pages start as drafts, and edits to a published page are staged until you review and publish them. See [MCP connection](../configuration/mcp-connection.md#frequently-asked-questions).
