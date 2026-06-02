---
id: number
title: Number field
sidebar_label: Number
---

The Advanced Custom Fields (ACF) Number field is supported in Beaver Themer via a field connection shortcode.

## Getting started

To get started, create your Number field in ACF and use the shortcode to display the number field on your pages or posts. You can use the shortcode inside any module that supports HTML such as a Text or HTML module.

## Shortcode

Here is an example of the Beaver Themer Number field connection shortcode.

```markup
[wpbb post:acf type='number' name='']
```

The `name=''` attribute is where you enter your Number field name.

## Options Page

The Beaver Themer Number field connection shortcode also supports Number fields added to the ACF [Options page](../options-page.md) by adding `site:acf_option` to the field connection shortcode.

```markup
[wpbb site:acf_option type='number' name='']
```
