---
title: Design systems
description: A design system is the tokens, base CSS, and optional JavaScript that style the pages using it. Create, edit, and manage design systems in Beaver Builder AI.
---

A design system is the tokens, base CSS, and optional JavaScript that style the pages using it. Create, edit, and manage design systems in Beaver Builder AI.

## What is a design system?

A design system is the shared styling for the pages that use it.

It is a named collection of design tokens, base CSS, optional base JavaScript, font selections, and creative guidance. Tokens are CSS variables for things like typography, colors, and spacing, so elements stay consistent across every page the system covers. The AI assistant reads the system's tokens, base styles, and guidance before generating or modifying content, so its output matches your design rather than generic styling.

A design system applies only to the pages assigned to it, and each page is styled by exactly one system. Different pages on the same site can use different design systems, so a single site can run more than one look.

## Design system vs Global Styles

Both features control how your site looks from one central place. The difference is how far each one reaches.

| | [Global Styles](/beaver-builder/user-interface/global-styles) | Design system |
|---|---|---|
| How many can exist | One per site. | As many as you like. |
| What it affects | Every Beaver Builder layout on the site. | Only the pages assigned to it. |
| How a page gets it | Automatically. | You assign one per page. |
| Can a page use a different one | No. | Yes. |

Use Global Styles when you want one consistent look everywhere. Use a design system when different parts of your site need different design languages, or when you are working with AI-generated pages.

:::tip
Both features can be active at once, so set your typography in one place or the other rather than both. If a heading looks wrong, check whether Global Styles and your design system are both trying to style it.
:::

## Where to find your design systems

Go to **Beaver Builder > Design Systems** in the WordPress admin. (If Beaver Builder is not active, look for a top-level **Design Systems** menu.) From there you can rename a system, set the site default, review every page using it, download it as a kit, or delete it. See [Design Systems page](../configuration/design-systems.md).

## Creating a design system

There is no blank "new design system" form and no Add New button. Instead, Beaver Builder AI builds a design system for you automatically the first time you ask it to build a page. As it works, the assistant creates a design system based on your request, assigns it to the current page, and generates the page you asked for.

You can also ask the assistant to create a new design system.

### With the AI assistant

1. Create a new page and launch Beaver Builder on it.
2. Click AI Chat in the Beaver Builder toolbar.
3. Ask the assistant to create a new design system, and say clearly that it should not use the current or default one. For example:  
  
  > Create a brand-new design system for a modern architecture studio. Do not use the current default design system. Use warm neutral colors, strong editorial typography, generous spacing, and minimal rounded corners. Generate a style-guide page so I can review the design.

4. Answer any questions about the brand, audience, colors, typography, or creative direction, then confirm the proposed direction.

Beaver Builder AI creates the design system, assigns it to the current page, and generates the requested page or style guide.

:::note
The first design system created on a site automatically becomes the site default.
:::

### From a starter kit

1. Go to **Beaver Builder > Design Systems** and open the **Design Kits** tab.
2. Select a starter kit to preview its pages.
3. Click **New Page** on the design you want.

Beaver Builder imports the kit's design system and assigns it to the new page. See [Design kits](design-kits.md).

### With an MCP-connected agent

An AI agent connected through MCP, such as Claude Desktop, Claude Code, Cursor, or Windsurf, can create a design system directly on your site. Connect the agent under **Settings > Beaver Builder AI > MCP Connection**, then describe the visual direction you want. For example:

> Create a new design system on my-site.com for a creative agency. Use a dark editorial style, bold typography, high-contrast colors, sharp corners, and generous spacing. Generate a style-guide page so I can review the system.

The agent can define the tokens, add shared CSS, JavaScript, fonts, and guidance, generate a style guide, and assign the system to pages. See [MCP connection](../configuration/mcp-connection.md).

:::note
An MCP-connected agent uses its own AI model and billing. The AI provider configured for Beaver Builder AI's built-in chat is not used for MCP requests.
:::

You can also [import a design kit](design-kits.md#import-a-kit) built with an AI coding agent.

## Editing a design system

Design systems are edited from within the page editor, where changes preview live. Open a page that uses the system, then open the design system panel:

- **In Beaver Builder**, choose **Design System** from the Tools menu or press **Shift+D**. With the AI chat enabled this opens the chat panel's **Design** tab (also reachable through the palette icon in the chat); with the chat disabled, a standalone Design System panel opens with the same editors.
- **In the block editor**, open the Beaver Builder AI panel and click the palette icon to switch to the **Design** tab.

The panel contains four sub-tabs:

- **Tokens**. Edit token names and values. Changes apply to every page using the design system.
- **CSS**. Edit the shared base CSS.
- **JS**. Edit the shared base JavaScript.
- **Brief**. Review the design system's business brief and creative direction, which the AI maintains as you work with it.

You can also change any of these by asking the AI in the chat: "update the primary color to a deeper blue" or "add a utility class for section dividers."

Page-specific CSS and JavaScript is edited separately from the design system's shared assets. In Beaver Builder, the CSS and JS tabs link to the page's **Layout Settings**, where page code follows the layout's draft and publish cycle. In the block editor, the CSS and JS tabs have a scope toggle between **All Pages** and **This Page**.

## Assigning a design system to a page

Assign or switch a page's design system from the chat panel's **Design** tab:

1. Open the page in Beaver Builder or the block editor and open the AI chat panel.
2. Click the palette icon to open the **Design** tab. The active design system appears under **Active Design**.
3. If no system is assigned, choose one from the selector and click **Select**. If one is assigned, click the pencil icon next to its name to choose a different system.

Switching an assigned page to a different design system reloads the editor after you confirm, because the page's tokens, base CSS, and fonts all change.

## Setting the site default

The default design system is the one applied when you start designing a page that does not have a system assigned yet. In Beaver Builder, a page with no layout yet shows the default as its active design, and the assignment is saved to the page the first time you save.

Only one system is the default at a time, and the first design system created on a site becomes the default automatically. Pages with a design system already assigned always keep their assigned system. To change the default, use **Make default** on the [Design Systems page](../configuration/design-systems.md#more-actions).

## Downloading a design system as a kit

Export a design system as a design kit zip file to use it as the starting point for AI coding agents such as Claude Code or Cursor.

The kit contains the token set, shared CSS and JavaScript, creative guidance, and the kit format specification files an agent needs to build pages against your design. Use **Download Kit** on the [Design Systems page](../configuration/design-systems.md#download-kit). See [Design kits](design-kits.md) for the workflow and [Design kit format](../developer/design-kit-format.md) for the file specification.

## Deleting a design system

Deleting a design system removes its tokens, shared assets, fonts, and guidance, and cannot be undone.

A design system can only be deleted while nothing uses it, so reassign or delete its pages, posts, and templates first. Delete from the [Design Systems page](../configuration/design-systems.md#more-actions).
