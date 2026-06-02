---
id: date-time-picker
title: Date Time Picker field
sidebar_label: Date Time Picker
---

The Advanced Custom Fields (ACF) Date Time Picker field is supported in Beaver Themer via a field connection shortcode.

## Getting started

To get started, create your Date Time Picker field in ACF and use the shortcode to display the Date Time Picker field on your pages or posts. You can use the shortcode inside any module that supports HTML such as a Header, HTML, Button or Text module.

## Shortcode

Here is an example of the Beaver Themer Date Time Picker field connection shortcode.

```markup
[wpbb post:acf type='date_time_picker' name='']
```

The `name=''` attribute is where you enter your Date Time Picker field name.

## Options Page

The Beaver Themer Date Time Picker field connection shortcode also supports Date Time Picker fields added to the ACF [Options page](../options-page.md) by adding `site:acf_option` to the field connection shortcode.

```markup
[wpbb site:acf_option type='date_time_picker' name='']
```
