---
id: date-picker
title: Date Picker field
sidebar_label: Date Picker
---

The Advanced Custom Fields (ACF) Date Picker field is supported in Beaver Themer via a field connection shortcode.

## Getting started

To get started, create your Date Picker field in ACF and use the shortcode to display the Date Picker field on your pages or posts. You can use the shortcode inside any module that supports HTML such as a Header, HTML, Button or Text module.

## Shortcode

Here is an example of the Beaver Themer Date Picker field connection shortcode.

```markup
[wpbb post:acf type='date_picker' name='']
```

The `name=''` attribute is where you enter your Date Picker field name.

## Options Page

The Beaver Themer Date Picker field connection shortcode also supports Date Picker fields added to the ACF [Options page](../options-page.md) by adding `site:acf_option` to the field connection shortcode.

```markup
[wpbb site:acf_option type='date_picker' name='']
```
