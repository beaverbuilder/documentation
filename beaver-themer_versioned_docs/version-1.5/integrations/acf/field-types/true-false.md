---
id: true-false
title: True / False field
sidebar_label: True / Field
---

The Advanced Custom Fields (ACF) True / False field is supported in Beaver Themer via a field connection shortcode.

## Getting started

To get started, create your [True / False field](https://www.advancedcustomfields.com/resources/true-false/) in ACF and use the shortcode to display the True / False field on your pages or posts. You can use the shortcode inside any module that supports HTML such as a HTML or Text modules.

The True / False field connection shortcode supports the **Stylized UI** and will output the **On Text** (True) and **Off Text** (False) content.

:::note
If you don’t enable **Stylized UI** the True / False field connection will not output anything if the field is set to `False` and if `True`, the output will be `1`.
:::

## Shortcode

Here is an example of the Beaver Themer True / False field connection shortcode.

```markup
[wpbb post:acf type='true_false' name='']
```

The `name=''` attribute is where you enter your True / False field name.

## Options Page

The Beaver Themer True / False field connection shortcode also supports True / False fields added to the ACF [Options page](../options-page.md) by adding `site:acf_option` to the field connection shortcode.

```markup
[wpbb site:acf_option type='true_false' name='']
```
