---
title: BB AI FAQ
sidebar_label: FAQ
description: An AI-powered design plugin for WordPress that generates fully editable layouts in both Beaver Builder and the Block Editor.
---

These answers cover the questions that come up most when connecting agents.

## Can AI accidentally overwrite my live pages?

No. When an AI agent edits a published page, changes are automatically saved to a separate draft. Your live page stays exactly as it is until you explicitly ask to publish, and the agent cannot bypass this. You can always review, publish, or discard a staged edit yourself.

## What happens if I edit a page while the AI is working on it?

Every edit is tracked with a content hash. If you change a page outside of the AI, the agent is notified and must get your confirmation before continuing. If the live page changes while a staged draft exists, publishing is blocked until you review the differences. This prevents the agent from silently overwriting manual edits.

## Does Beaver Builder AI see my content?

No. Beaver Builder AI handles authorization only, verifying that an agent is allowed to access your site. Once authorized, all communication between the agent and your site is direct. Beaver Builder AI does not see your content or sit between the agent and your site.

## Does the connected agent use my site's AI API keys?

No. An MCP-connected agent runs on its own model and billing, for example your Claude or Cursor subscription. The API keys in your site's Settings are only used by the built-in chat.

## Does this work on a local development site?

Cloud authorization requires a publicly accessible HTTPS site, so it does not work on `localhost` or `.test` domains. Use the **Connect Manually** method for local development.

## My site is authorized but the agent still cannot connect. What now?

Open **Having trouble connecting** on the MCP Connection tab and click **Test connection**. It checks each Beaver Builder host your site needs to reach and gives you a copyable report of the hosts to allow, which you can send to your hosting support. If the tab reports that your host blocks or strips the agent's credential, it shows advice for that host. See [Troubleshooting](../configuration/mcp-connection.md#troubleshooting).

## What is the MCP Adapter plugin?

The [MCP Adapter](https://github.com/WordPress/mcp-adapter/releases) is a separate WordPress plugin that bridges MCP-compatible AI agents and the WordPress REST API. It is maintained by the WordPress project and required for both connection methods. Install it like any other WordPress plugin.

## Does my content get sent to Beaver Builder?

No. When you use the AI, your site connects directly to your chosen AI provider using your own API key. Your prompts, content, and images are sent to that provider to generate your design. They are not routed through or stored by Beaver Builder, and the plugin contains no analytics or tracking.

## Who pays for the AI usage?

You do, through your own provider API keys. Usage bills to your Anthropic, OpenAI, OpenRouter, or Google account, and your keys are stored encrypted in your site's database. Beaver Builder does not meter or resell AI usage. A Custom Endpoint pointed at a server you run, such as Ollama, has no per-request cost beyond the server itself.

## Can the AI generate images?

Yes, with a Google Gemini API key connected on the Settings tab. Generation runs through Gemini whichever provider you chat with, so you can keep Claude or GPT for chat and still generate images. A **Generate with AI** option appears on image fields and in the canvas image toolbar, and an **Image fill during page generation** setting has the assistant generate the images for a whole page. See [Images](../build/images.md#generating-images-with-ai).

## Can a connected agent run code on my site?

Only if you turn that on. The PHP and WP-CLI tools are off by default, are enabled with a constant in `wp-config.php`, and are available to administrators only. Everything else an agent does goes through tools that act within the connected user's WordPress permissions. See [PHP and WP-CLI](../configuration/mcp-connection.md#php-and-wp-cli).

## Can the AI add harmful code to my site?

Generating blocks with custom code requires the `unfiltered_html` capability, the same trust WordPress already requires for raw HTML in posts, held by administrators and, on single-site installs, editors. The AI operates with your permissions and can never exceed them. It also never publishes on its own: everything it creates appears in the editor for you to review. Users without that capability cannot inject code.

## What about connecting my site to the cloud service?

The cloud connection is optional and off by default. It only activates when an administrator explicitly connects the site, and it requires an active license. It uses standard OAuth 2.1, your site stores no long-lived access tokens, and disconnecting removes the connection entirely.

## Are forms built by the AI secure?

Yes. Webhook destinations are validated so they can't reach internal or private servers, email headers are protected against injection, and submissions are rate limited and spam protected with a honeypot and a signed time-trap token.

## Is there anything I should watch out for?

As with any AI tool, review what the AI generates before saving, especially if you've pasted in content or screenshots from outside sources. The AI can only ever act within your own permissions, so it can't do anything you couldn't do yourself, but reviewing output before publishing is good practice.
