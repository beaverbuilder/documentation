---
id: oembed
title: oEmbed field
sidebar_label: oEmbed
---

The Advanced Custom Fields (ACF) oEmbed field is supported in Beaver Themer via a field connection shortcode.

## Getting started

To get started, create your oEmbed field in ACF and use the shortcode to display the oEmbed field on your pages or posts. You can use the shortcode inside any module that supports HTML such as a Text or HTML module.

## Shortcode

Here is an example of the Beaver Themer oEmbed field connection shortcode.

```markup
[wpbb post:acf type='oembed' name='']
```

The `name=''` attribute is where you enter your oEmbed field name.

## Options Page

The Beaver Themer oEmbed field connection shortcode also supports oEmbed fields added to the ACF [Options page](../options-page.md) by adding `site:acf_option` to the field connection shortcode.

```markup
[wpbb site:acf_option type='oembed' name='']
```
