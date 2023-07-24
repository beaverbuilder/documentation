---
id: password
title: Password field
sidebar_label: Password
---

The Advanced Custom Fields (ACF) Password field is supported in Beaver Themer via a field connection shortcode.

## Getting started

To get started, create your Password field in ACF and use the shortcode to display the Password field on your pages or posts. You can use the shortcode inside any module that supports HTML such as a Text or HTML module.

## Shortcode

Here is an example of the Beaver Themer Password field connection shortcode.

```markup
[wpbb post:acf type='password' name='']
```

The `name=''` attribute is where you enter your Password field name.

## Options Page

The Beaver Themer Password field connection shortcode also supports Password fields added to the ACF [Options page](../options-page.md) by adding `site:acf_option` to the field connection shortcode.

```markup
[wpbb site:acf_option type='password' name='']
```
