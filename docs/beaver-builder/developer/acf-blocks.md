---
id: acf-blocks
title: ACF Blocks
sidebar_label: ACF Blocks
description:
---

The purpose of this article is to explain what the responsive iframe UI is, how it works, and how it can be extended and integrated.

## What are ACF Blocks?

ACF blocks allow you to create configurable content (e.g. blocks or modules) that work in both Beaver Builder and Gutenberg. If you use Beaver Builder for site building and page layout and Gutenberg for post content, ACF blocks are for you.

## Finding ACF Blocks in Beaver Builder

Blocks created with ACF can be found in Beaver Builder's content panel under Group > ACF Blocks. Any block categories or icons used to organize and display your blocks in Gutenberg will show there as well.

## Creating an ACF Block For Beaver Builder

Most of what you need to know about creating an ACF block for Beaver Builder can be found in ACF’s documentation and WordPress’ handbook. However, there are a couple of gotchas you should be aware of…

* **JSX Support** – Blocks that declare JSX support aren’t currently supported in Beaver Builder and won’t be available. When using block.json, you need to explicitly set this to false as shown in the examples.

* **Block Features** – Beaver Builder doesn’t currently support additional block features that can be configured in block.json including things like alignment, colors, and variations. We only support the basics shown in the examples.

Other than that, ACF blocks should work just fine in Beaver Builder 2.7 and above. Don't hesitate to open an issue if anything comes up!
