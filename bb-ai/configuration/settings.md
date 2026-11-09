---
title: Settings
description: Configure your Beaver Builder license, AI provider API keys, active model, image generation, Unsplash media integration, layout structure, and chat access in Beaver Builder AI.
---

Configure your Beaver Builder license, AI provider API keys, active model, image generation, Unsplash media integration, layout structure, and chat access in Beaver Builder AI.

## Opening the Settings tab

To open the Beaver Builder AI settings:

1. Log in to your WordPress admin as an administrator. Beaver Builder AI's settings live in the WordPress Settings menu and are visible to administrators only.
2. Go to **Settings > Beaver Builder AI**.
3. Select the **Settings** tab.

## License

Enter your Beaver Builder license key to enable automatic plugin updates and to authorize your site for the cloud MCP connection.

### License Key

Your Beaver Builder license key. Paste the key into the field and it is validated automatically.

When connected, a green **Connected** badge and a **Disconnect** button appear in place of the input. Click **Disconnect** to remove the key.

If the Beaver Builder plugin is active and manages its own license, this section shows "Your license is managed by Beaver Builder" with a **Manage License** link to the Beaver Builder license settings instead of an input field.

## AI providers

An API key for at least one AI provider is required to use the AI chat assistant and generation features. You can connect Anthropic, OpenAI, OpenRouter, and Google Gemini, or point the experimental Custom Endpoint provider at an OpenAI compatible server you run yourself, then choose which one the assistant uses in the [Active AI provider](#active-ai-provider) section. Usage is billed directly to your account with each provider.

:::tip
Set a monthly spending limit in each provider's billing dashboard before entering an API key. Beaver Builder AI does not cap usage on your behalf.
:::

:::warning
If you provide API access for client projects, we recommend creating a separate API key for each client. This makes it easier to manage access, monitor usage, and revoke access when needed.

When a client is no longer using your service, remove or revoke the API key associated with that client. This helps prevent continued access, unexpected usage, or API costs after the client relationship has ended.
:::

### Anthropic API Key

Your Anthropic API key, starting with `sk-ant-`. The key validates automatically when you paste it or leave the field, by sending a small test request to the provider.

When connected, a green **Connected** badge and a **Disconnect** button appear. If validation fails, the error message returned by the provider appears below the field.

Get an API key at [console.anthropic.com](https://console.anthropic.com/).

### OpenAI API Key

Your OpenAI API key, starting with `sk-`. Validation and connection behavior match the Anthropic field.

Get an API key at [platform.openai.com](https://platform.openai.com/).

### OpenRouter API Key

Your OpenRouter API key, starting with `sk-or-`. OpenRouter provides access to models from many vendors through a single key.

Get an API key at [openrouter.ai](https://openrouter.ai/).

### Google Gemini API Key

Your Google Gemini API key. Validation and connection behavior match the Anthropic field.

A Gemini key does two jobs. It makes Gemini models available as a chat provider, and it powers [image generation](#image-generation), which runs through Gemini no matter which chat provider is active. If you only want generated images, connect a Gemini key and leave your active chat provider as it is.

Get an API key at [aistudio.google.com](https://aistudio.google.com/).

### Custom Endpoint

An experimental provider for OpenAI compatible servers, such as [Ollama](https://ollama.com/) and [LM Studio](https://lmstudio.ai/), including ones running on your own machine or network. Enter the server's URL, and an API key if the server requires one, then select the provider and one of its models under **Active AI provider**.

:::note
The Custom Endpoint provider is experimental. Results depend on the server and model you connect, and smaller local models may not follow the assistant's instructions as reliably as the hosted providers.
:::

## Active AI provider

Choose which connected provider and model the AI assistant uses. Each provider becomes selectable once its API key is connected. Providers without a key are disabled and show "Configure the API key above to enable."

Select a provider, then pick a model from that provider's list:

- **Anthropic** offers Claude models, including Claude Fable 5, Claude Opus, Claude Sonnet 5, and Claude Haiku.
- **OpenAI** offers GPT models, including the GPT-5.6 family.
- **OpenRouter** loads its model catalog from the OpenRouter API and refreshes it daily, giving access to models from many vendors.
- **Google Gemini** offers Gemini models.
- **Custom Endpoint** lists the models served by the OpenAI compatible server you connected.

## Image generation

Beaver Builder AI can generate on-brand images with Google's Nano Banana image model. Image generation needs a connected [Google Gemini API key](#google-gemini-api-key) and runs through Gemini whichever chat provider is active, so it also works while you chat with Claude or another provider.

Once a Gemini key is saved, a **Generate with AI** option appears on image and background image fields, in the canvas image toolbar, and during page generation. Generated images are saved to your Media Library and come out in the requested shape, such as wide for a hero.

**Image fill during page generation**

Turn this on to have the assistant generate images for the image spots in a page it builds, instead of filling them with stock photos. It is off by default, since each generated image is billed to your Google account. The model information popover in the chat shows how many images a conversation has generated and what they cost.

See [Images](../build/images.md#generating-images-with-ai) for how to use image generation in the editor.

## Media providers

Connecting a media provider gives the AI assistant access to higher-quality stock photography when generating page content. This is optional. The assistant uses Openverse images when no media provider is connected.

:::warning
If you provide Unsplash API access for client projects, we recommend creating a separate API key for each client. This makes it easier to manage access, monitor usage, and revoke access when needed.
:::

**Unsplash API Key**

Your Unsplash access key. Paste the key into the field and it validates the connection automatically.

When connected, a green **Connected** badge and a **Disconnect** button appear. Click **Disconnect** to remove the key.

Get a free API key at [unsplash.com/developers](https://unsplash.com/developers).

## Layout structure

Choose whether pages built by a connected AI client use rows and columns or boxes. Without this setting the model would choose per section, so a site could end up with a mix of both.

This setting applies to AI clients connected over [MCP](mcp-connection.md). The built-in chat generates [Custom modules](../build/custom-module.md), which do not use either structure. See [Native modules](../build/native-modules.md#rows-and-columns-or-boxes) for how the two structures differ.

## Chat access

Control where the Beaver Builder AI chat panel appears. Two toggles enable or disable the chat independently for each editor:

- **Enable in Beaver Builder**. Shows or hides the AI chat panel inside the Beaver Builder editor.
- **Enable in the Block Editor**. Shows or hides the AI chat panel in the WordPress block editor.

Chat is enabled in Beaver Builder by default. Chat in the block editor is enabled by default only when Beaver Builder is not active at the time the plugin is activated.

When enabled, the chat is available to users with the `unfiltered_html` capability, which typically includes administrators and editors on single-site installs.
