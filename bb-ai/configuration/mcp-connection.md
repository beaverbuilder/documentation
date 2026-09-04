---
title: MCP connection
description: Learn what MCP is and connect AI agents like Claude Desktop, Claude Code, or Cursor directly to your WordPress site using the Model Context Protocol (MCP).
---

Learn what MCP is and connect AI agents like Claude Desktop, Claude Code, or Cursor directly to your WordPress site using the Model Context Protocol (MCP).

## What is an MCP?

MCP stands for Model Context Protocol, an open standard that gives AI applications a common way to connect to other software and take actions in it. When people talk about "an MCP", they usually mean an MCP server: a connection point that a service, in this case your WordPress site, makes available for AI agents to plug into.

A useful way to think about it: MCP is like a universal adapter for AI. Instead of every AI app needing a custom integration for every service, any MCP-compatible agent can connect to any MCP server and immediately see what it can do there.

A few terms help when reading this page:

- **AI model**: the engine that understands and generates content, such as Claude or GPT. On its own, a model can only read and write text.
- **AI agent**: an application built around a model that can take actions, such as Claude Desktop, Claude Code, Cursor, or Windsurf. Agents are what you actually chat with, and they are the side that connects to MCP servers.
- **MCP server**: the connection point your WordPress site publishes. It presents a menu of actions, called tools, that a connected agent can use, such as creating a page or updating a design system.
- **Tools**: the individual actions an MCP server offers. An agent can only act on your site through its tools, which keeps what it can and cannot do predictable.

Your site's MCP server exposes only the tools listed in [Available tools](#available-tools), and an agent must authenticate before it can use any of them.

## What MCP enables

Once connected, an AI agent can work on your site directly: create and edit pages, build native Beaver Builder layouts, and create and manage design systems. You describe what you want in the agent's chat, and the agent does the work on your site, without you copying content between tools.

Some examples of what a connected agent can do:

- Generate a complete landing page from a short description.
- Create a design system and apply it across pages.
- Update one section of an existing page while leaving the rest untouched.
- Create Beaver Themer layouts and set where they apply.

A connected agent runs on its own AI model and billing, for example your Claude or Cursor subscription. The API keys in your site's [Settings](settings.md) are used only by the built-in chat.

## Connection methods

To set up a connection, go to **Settings > Beaver Builder AI** in the WordPress admin and select the **MCP Connection** tab. The page is available to administrators only. Two methods are available depending on your site's environment, and the tab opens on the method that fits your site.

### Site requirements

Both methods check the same three things, and the tab shows a warning with a fix for anything that needs attention:

- The [MCP Adapter plugin](https://github.com/WordPress/mcp-adapter/releases) installed and active. Installing without activating is a common miss.
- Permalinks set to a structure that does not include `index.php`, such as Post name. Other structures break the REST URL that agents use to reach your site.
- WordPress 6.9 or later, which the MCP Adapter requires.

When all checks pass, the tab collapses them into a single confirmation with a **Show details** link.

### Connect via Beaver Builder AI

This is the quickest method for live sites with a public HTTPS URL. Your site is authorized through Beaver Builder AI's cloud service, with no terminal or manual configuration required.

This method adds two requirements to the site requirements above, both checked on the page:

- A publicly accessible site served over HTTPS. Local hosts such as `localhost`, `.local`, or `.test` domains cannot be reached by the authorization server.
- A valid Beaver Builder license key, entered in [Settings](settings.md).

To authorize:

1. **Resolve any warnings.** The page checks each requirement above and shows a warning for anything that needs attention. Resolve those first.
2. **Authorize your site.** Click **Authorize** and complete the authorization flow. The page returns showing a green **Authorized** badge next to your site's domain.
3. **Copy the MCP Endpoint URL.** After authorization, copy the **MCP Endpoint URL** shown on the page.
4. **Add the URL to your AI agent.** Paste the URL into your agent's MCP configuration. See [Agent setup](#agent-setup) for where this lives in each agent.

To revoke access, click **Deauthorize**. Only administrators can authorize or deauthorize the site.

If authorization fails, the page reports the specific reason, such as a missing license or the authorization service not responding in time, with a **Try Again** button. A timeout is usually temporary, so trying again is the right first move.

### Connect manually

This method works for local development sites, staging environments, and any site without a public HTTPS URL. It authenticates with a WordPress application password through a small Node.js bridge that runs on the computer where your agent is installed.

#### What is an application password?

An application password is a special password that WordPress generates so an application can connect to your site without using your main login password. It works only for API requests, so it cannot be used to sign in to your WordPress dashboard. You can create as many as you need, give each one a name so you remember what it is for, and revoke any of them at any time from your profile without changing your real password.

#### Before you begin

This method needs no license and no public URL. Alongside the [site requirements](#site-requirements), you need two things on your own computer:

- An AI coding agent such as Claude Desktop, Claude Code, Cursor, or Windsurf.
- Node.js installed on the computer where your agent runs. If you are not sure whether you have it, that is fine. The setup prompt checks for it and helps you install it if it is missing.

#### Steps to connect

1. **Create an application password.** Click **Go to Application Passwords** on the MCP Connection tab, or go to **Users > Profile** in your WordPress admin and scroll to the **Application Passwords** section.

   Enter a name you will recognize later, such as `MCP connection`, and click **Add New Application Password**. Copy the generated password and save it. WordPress shows it only once.

2. **Paste the password into the MCP Connection tab.** Back on the MCP Connection tab, paste the application password into the field under **Connect Your AI Agent**. This fills your password into the setup prompt so the prompt is ready to use.

3. **Copy the setup prompt into your AI agent.** Click **Copy to Clipboard** and paste the prompt into a new chat with your AI agent. The prompt walks the agent through the rest of the setup:

   1. Checks that Node.js is installed, and points you to the installer if it is not.
   2. Installs the MCP connector package, `@automattic/mcp-wordpress-remote`, which relays messages between your agent and your site.
   3. Asks which agent you use, then adds your site to that agent's MCP configuration file.

   The prompt instructs the agent to explain each step in simple terms and to ask for your confirmation before installing anything or changing any files.

4. **Restart your agent.** Quit and relaunch the agent so it picks up the new configuration. Your site then appears as a connected MCP server.

:::note
Prefer to configure the connection yourself instead of using the prompt? See the [MCP Adapter documentation](https://github.com/WordPress/mcp-adapter/) on GitHub.
:::

#### The setup prompt

The setup prompt is a set of instructions the MCP Connection tab generates for you, pre-filled with your site's endpoint URL, your username, and the application password you pasted.

It tells your AI agent how to check for Node.js, install the MCP connector package, locate the paths it needs, and add your site to the right MCP configuration file for your agent, while explaining each step in plain language and asking for your confirmation before installing anything or changing any files.

Copy it from your own settings page, since it contains details specific to your site.

## Agent setup

After cloud authorization, add the MCP endpoint URL wherever your agent accepts MCP servers:

- **Claude Desktop and claude.ai**: go to **Settings > Connectors > Add custom connector** and paste the endpoint URL.
- **Claude Code**: run `claude mcp add` with the endpoint URL, or add it to your MCP configuration file.
- **Cursor**: open **Settings > MCP** and add a new server with the endpoint URL.
- **Windsurf**: open the MCP configuration panel and add the endpoint URL as a new server.

Different AI applications name MCP connections differently. Some call them servers, others call them connectors or apps, as ChatGPT does. If your agent is not listed above, look for an MCP or server configuration section in its settings and add the endpoint URL there.

Each connected site announces itself to the agent under its own site title, so when you connect more than one site the agent can tell them apart and keeps its work pointed at the right one.

For the manual method, the setup prompt configures the agent for you.

## Getting Started

This section covers what you need to know to start working with your site through an MCP-connected agent.

## Frequently asked questions

This section answers the questions that come up most often when connecting an AI agent to your site.

## Troubleshooting

Some hosting platforms run firewalls that block the incoming connection from an AI agent's service, even after your site is authorized. When that happens, the connection has to be opened on the host's side.

### Claude can't connect on WP Engine hosting

On WP Engine, authorization in the WordPress admin succeeds and the page shows **Authorized**, but Claude then fails to connect when it tries to use the MCP endpoint. WP Engine's platform firewall currently blocks the incoming connection from Anthropic, and only WP Engine can open it.

Contact WP Engine support and ask them to apply an exception for Anthropic's published IP range, `160.79.104.0/21`, across the installs on your account.

The exception is applied per install, so a new install where you want to use Beaver Builder AI needs another support request. Name every install you want covered in your first ticket to save the extra round trip.

## Available tools

These tools are automatically available to any AI agent connected to your site. The agent can only act on your site through them, and the MCP Connection tab lists most of them in the same groups used below.

Which tools an agent sees depends on what else is active on your site:

- Get Module Spec, Get Hybrid Spec, and every tool under Content except Get Page Content and Update Page Content require Beaver Builder 2.11 or later.
- List Field Connections and the Themer tools require Beaver Themer to be active.

### Discovery

Tools that help an agent understand your site before making changes.

| Tool | Description |
| --- | --- |
| List Post Types | Returns available post types for content creation. |
| List Pages | Searches for existing pages and posts. |
| List Field Connections | Lists the post and site connections a page can bind. Requires Beaver Themer. |

### Design systems

Tools for creating and managing design systems, the shared colors, typography, and styling that keep pages consistent.

| Tool | Description |
| --- | --- |
| List Design Systems | Lists available design systems on the site. |
| Get Design System | Loads a design system's tokens, CSS, and creative direction. |
| Get Design Tokens | Returns the page's active design-system token values. |
| Create Design System | Creates a design system from a full HTML document. |
| Generate Style Guide | Creates a style guide page showcasing a design system. |
| Generate Design Guidance | Returns CSS context and art direction for a page you built. |
| Update Design Guidance | Saves creative guidance and business brief on a design system. |
| Update Design Tokens | Updates token values on a design system (affects all pages). |
| Update Design System Assets | Updates shared CSS, JS, and fonts on a design system (affects all pages). |
| Assign Design System | Attaches an existing design system to an existing page. |

### Specs

Format specifications the agent reads before building, so its output matches what Beaver Builder expects.

| Tool | Description |
| --- | --- |
| Get Format Spec | Returns the HTML format specification for new pages. |
| Get Module Spec | Returns the module format specification for new pages. |
| Get Hybrid Spec | Returns the hybrid HTML and module format specification for new pages. |

### Pages

Tools for creating, reading, updating, and publishing pages.

| Tool | Description |
| --- | --- |
| Get Page Outline | Returns a lightweight layout outline for a page. |
| Build Page | Builds a page from editable native sections, HTML sections, or both. |
| Generate Page HTML | Creates a standalone HTML page, which is not editable through native builder settings afterward. |
| Get Page HTML | Reads a page's content as HTML for editing. |
| Update Page HTML | Saves changes to a page using updated HTML. |
| Update Page Assets | Updates a page's CSS and JavaScript assets. |
| Publish Staged Page | Publishes a staged draft to the live page. |
| Discard Staged Page | Discards a staged draft without publishing. |
| Publish Page | Publishes a draft page or merges a staged edit live. |
| Set Page Status | Changes a page status (excludes publish). |
| Get Page Debug Data | Returns raw model output and the generation brief for debugging. Registered only when `WP_DEBUG` or `FL_DS_DEBUG` is enabled. |

### Content

Tools for working with the individual rows, columns, and modules inside a layout, plus reusable Builder templates.

| Tool | Description |
| --- | --- |
| Get Page Content | Reads one or more nodes in the layout by id. |
| Update Page Content | Applies update, add, remove, and move operations in a batch. |
| List Modules | Returns the curated list of available modules. |
| List Menus | Returns the site's registered nav menus. |
| Get Module Settings | Returns one module's typed settings. |
| Get Container Settings | Returns typed row and column settings. |
| Get Node Settings | Reads committed visual settings of one or more nodes by id. |
| List Builder Templates | Lists existing Builder templates and their global and component flags. |
| Create Builder Template | Creates a Builder template (static, global, or component) and returns its `post_id`. |

### Media

One tool for getting images into your site. It is available to agents but is not shown in the tab's tool list.

| Tool | Description |
| --- | --- |
| Sideload Image | Sideloads a remote image URL into the media library. |

An agent cannot browse or search your media library, so it supplies an image by URL and this tool downloads it. Only `http` and `https` URLs are accepted, private and internal hosts are blocked, and SVG files are refused. Repeat calls with the same URL reuse the existing attachment instead of creating a duplicate. The connected user needs the `upload_files` capability.

### Themer

Tools for creating Beaver Themer layouts and controlling where they apply. They require Beaver Themer to be active.

| Tool | Description |
| --- | --- |
| List Themer Locations | Lists Themer location ids, part hooks, and theme-support flags. |
| Create Themer Layout | Creates a Themer layout and returns its `post_id`. |
| Set Themer Location Rules | Replaces the location rules on an existing Themer layout. |
| List Themer Layouts | Lists existing Themer layouts and their location rules. |
