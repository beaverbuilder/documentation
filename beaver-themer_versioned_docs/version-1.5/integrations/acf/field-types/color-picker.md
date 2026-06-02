---
id: color-picker
title: Color Picker field
sidebar_label: Color Picker
---

The Advanced Custom Fields (ACF) Color Picker field is supported in Beaver Themer via a field connection shortcode.

## Getting started

To get started, create your [Color Picker](https://www.advancedcustomfields.com/resources/color-picker/) field in ACF and use the shortcode to display the email field on your pages or posts. You can use the shortcode inside any module that supports HTML such as a Header, HTML, Button or Text module.

## Shortcode

Here is an example of the Beaver Themer Color Picker field connection shortcode.

```markup
[wpbb post:acf_color name='FIELD_NAME']
```

The `name=''` attribute is where you enter your Color Picker field name.

## Options Page

The Beaver Themer Color Picker field connection shortcode also supports Color Picker fields added to the ACF [Options page](../options-page.md) by adding `site:acf_color` to the field connection shortcode.

```markup
[wpbb site:acf_color name='FIELD_NAME']
```

## Using with CSS

Color Picker field connections can be used with HTML to add color values to inline CSS.

```markup
<div style="background-color: #[wpbb post:acf_color name='FIELD_NAME'];">
	<h1 style="color: #[wpbb post:acf_color name='FIELD_NAME'];">Hello World</h1>
</div>
```

:::info
To use Color Picker fields added to the ACF [Options page](../options-page.md), replace `post:acf_color` in the example code above with `site:acf_color`.
:::
