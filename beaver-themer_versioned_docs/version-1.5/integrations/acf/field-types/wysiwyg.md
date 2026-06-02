---
id: wysiwyg
title: WYSIWYG field
sidebar_label: WYSIWYG
---

The Advanced Custom Fields (ACF) WYSIWYG field is supported in Beaver Themer via a field connection shortcode.

## Getting started

To get started, create your WYSIWYG field in ACF and use the shortcode to display the WYSIWYG field on your pages or posts. You can use the shortcode inside any module that supports HTML such as a Text or HTML module.

## Shortcode

Here is an example of the Beaver Themer WYSIWYG field connection shortcode.

```markup
[wpbb post:acf type='wysiwyg' name='']
```

The `name=''` attribute is where you enter your WYSIWYG field name.

## Options Page

The Beaver Themer WYSIWYG field connection shortcode also supports WYSIWYG fields added to the ACF [Options page](../options-page.md) by adding `site:acf_option` to the field connection shortcode.

```markup
[wpbb site:acf_option type='wysiwyg' name='']
```
