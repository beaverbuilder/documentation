---
id: icon
title: Icon field
sidebar_label: Icon
---

The Advanced Custom Fields (ACF) Icon Picker field is supported in Beaver Themer via a field connection shortcode.

## Getting started

To get started, create your Icon Picker field in ACF and use the shortcode to display the selected icon on your pages or posts. The shortcode outputs a Dashicons CSS class, so it's typically used to populate the icon setting of a module such as an Icon or Icon Group module.

## Shortcode

Here is an example of the Beaver Themer Icon field connection shortcode.

```markup
[wpbb post:acf type='icon_picker' name='']
```

The `name=''` attribute is where you enter your Icon Picker field name.

## Supported icons

Only icons chosen from the **Dashicons** tab in the ACF Icon Picker are supported. Icons selected from the Media Library or added by URL will not be displayed.

## Options Page

The Beaver Themer Icon field connection shortcode also supports Icon Picker fields added to the ACF [Options page](../options-page.md) by adding `site:acf_option` to the field connection shortcode.

```markup
[wpbb site:acf_option type='icon_picker' name='']
```
