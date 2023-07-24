---
id: text-area
title: Text Area field
sidebar_label: Text Area
---

The Advanced Custom Fields (ACF) Text Area field is supported in Beaver Themer via a field connection shortcode.

## Getting started

To get started, create your [Textarea fields](https://www.advancedcustomfields.com/resources/textarea/) in ACF and use the shortcode to display the text area field on your pages or posts. You can use the shortcode inside any module that supports HTML such as a Text or HTML module.

## Shortcode

Here is an example of the Beaver Themer Text Area field connection shortcode.

```markup
[wpbb post:acf type='textarea' name='']
```

The `name=''` attribute is where you enter your Text Area field name.

## Options Page

The Beaver Themer Text Area field connection shortcode also supports text area fields added to the ACF [Options page](../options-page.md) by adding `site:acf_option` to the field connection shortcode.

```markup
[wpbb site:acf_option type='textarea' name='']
```
