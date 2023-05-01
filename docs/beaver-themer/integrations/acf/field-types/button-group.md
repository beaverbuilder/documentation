---
id: button-group
title: Button Group field
sidebar_label: Button Group
---

The Advanced Custom Fields (ACF) Button Group field is supported in Beaver Themer via a field connection shortcode.

## Getting started

To get started, create your Button Group field in ACF and use the shortcode to display the Button Group field on your pages or posts. You can use the shortcode inside any module that supports HTML such as a HTML or Text Editor module.

:::info
The Button Group field connection can output either the **Value** or **Label** from the Button Group field **Return Format** setting.

![](/img/beaver-themer/integrations--acf--button-group-field--1.jpg)
:::

## Shortcode

Here is an example of the Beaver Themer Button Group field connection shortcode.
```markup
[wpbb post:acf type='button_group' name='']
```

The `name=''` attribute is where you enter your Button Group field name.

## Options Page

The Beaver Themer Button Group field connection shortcode also supports Button Group fields added to the ACF [Options page](../options-page.md) by adding `site:acf_option` to the field connection shortcode.

```markup
[wpbb site:acf_option type='button_group' name='']
```
