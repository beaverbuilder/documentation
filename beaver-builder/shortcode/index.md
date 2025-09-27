---
id: index
title: Shortcode
sidebar_label: Shortcode
description: The Beaver Builder shortcode is a simple shortcode that allows you to add saved content to your layouts such as templates, rows, columns, and modules.
---

The Beaver Builder shortcode allows you to add saved content to your layouts such as templates, rows, columns, and modules.

:::warning

Any saved templates, rows, columns, or modules that are deleted and being used in shortcodes will no longer display. After removing a template, row, column, or module from your site, check your site carefully for any shortcodes.

:::

:::caution

Shortcodes used too frequently on the same page or post may affect [performance](../advanced/performance.md).

:::

## Why use Beaver Builder shortcodes?

The two most common uses for Beaver Builder shortcode are:

- Insert [Saved Content](layouts/saved-content.md) such as rows, columns, or modules into other Beaver Builder modules where normally only text can occur.

- Inserting a Beaver Builder layout, such as a saved row, into a post that does not use Beaver Builder but rather the WordPress editor. For example, you could insert a Subscribe Form module into the middle of a post that is using the WordPress editor.

## What content can be turned into shortcodes?

You can create shortcodes for any Beaver Builder content that has an [ID](syntax.md#using-an-id) or a [slug](syntax.md#using-a-slug):

- Posts, pages, or custom post types with Beaver Builder layouts.
- [Saved Content](layouts/saved-content.md) (rows, columns, modules).
- Saved Templates.

## Changes automatically reflected

When you update the saved content, the changes are automatically reflected on every page or post that uses the shortcode. In other words, you don't need to republish pages or posts or purge cache.

## In this section

import DocCardList from '@theme/DocCardList';

<DocCardList />
