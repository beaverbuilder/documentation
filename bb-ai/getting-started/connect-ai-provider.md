---
title: Connect an AI provider
sidebar_label: Connect an AI provider
description: "Connect Anthropic, OpenAI, or OpenRouter and choose the model Beaver Builder AI should use."
---

Connect Anthropic, OpenAI, or OpenRouter and choose the model Beaver Builder AI should use.

## Before you begin

An API key from at least one supported AI provider is required for the built-in AI chat and generation features.

You can get an API key from any of the following providers:

- [Anthropic](https://console.anthropic.com/) for Claude models.
- [OpenAI](https://platform.openai.com/) for GPT models.
- [OpenRouter](https://openrouter.ai/) for models from multiple vendors, including Anthropic, OpenAI, and Google, with a single key.

AI usage is billed directly to your provider account, not through Beaver Builder.

:::warning
Before entering an API key, set a monthly spending limit in the provider's billing dashboard. Beaver Builder AI does not cap usage on your behalf.
:::

## Connect a provider

1. From your WordPress admin dashboard, go to **Settings > Beaver Builder AI**.

2. Select the **Settings** tab. This tab is available to administrators only.

3. Under **AI Providers**, paste your API key into the field for Anthropic, OpenAI, or OpenRouter.

   Beaver Builder AI validates the key when you paste it or click away from the field. A green **Connected** badge appears when the connection is successful. If validation fails, the error message from the provider appears below the field.

   API keys are stored encrypted on the server.

4. On **Active AI Provider**, select the connected provider that the assistant should use. Providers without a connected API key are disabled.

   When you select a provider, Beaver Builder AI chooses a recommended model automatically.

5. To use a different model, select one from the list available for your active provider.

:::tip
You can connect more than one provider, but only the provider and model selected under **Active AI Provider** are used for new conversations. Each conversation keeps the provider it started with, so switching providers affects only conversations you start afterward.
:::
