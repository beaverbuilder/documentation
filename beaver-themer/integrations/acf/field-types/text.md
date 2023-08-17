---
id: text
title: Text field
sidebar_label: Text
---

The Advanced Custom Fields (ACF) Text field is supported in Beaver Themer via a field connection shortcode.

## Getting started

To get started, create your [Text fields](https://www.advancedcustomfields.com/resources/text/) in ACF and use the shortcode to display the text field on your pages or posts. You can use the shortcode inside any module that supports HTML such as a Text or HTML module.

## Shortcode

Here is an example of the Beaver Themer Text field connection shortcode.

```markup
[wpbb post:acf type='text' name='']
```

The `name=''` attribute is where you enter your Text field name.

## Options Page

The Beaver Themer Text field connection shortcode also supports text fields added to the ACF [Options page](../options-page.md) by adding `site:acf_option` to the field connection shortcode.

```markup
[wpbb site:acf_option type='text' name='']
```
