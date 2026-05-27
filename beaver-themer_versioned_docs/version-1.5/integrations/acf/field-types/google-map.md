---
id: google-map
title: Google Map field
sidebar_label: Google Map
---

The Advanced Custom Fields (ACF) Google Map field is supported in Beaver Themer via a field connection shortcode.

## Getting started

To get started, create your Google Map field in ACF and use the shortcode to display the Google Map field on your pages or posts. You can use the shortcode inside any module that supports HTML such as a HTML or Text Editor module.

:::info
In order use of the ACF Google Maps field, you must first register a valid API key. To obtain an API key, follow Advanced Custom Fields [instructions](https://www.advancedcustomfields.com/resources/google-map/#requirements).
:::

## Shortcode

Here is an example of the Beaver Themer Google Map field connection shortcode.

```markup
[wpbb post:acf type='google_map' name='']
```

The `name=''` attribute is where you enter your Google Map field name.

## Options Page

The Beaver Themer Google Map field connection shortcode also supports Google Map fields added to the ACF [Options page](../options-page.md) by adding `site:acf_option` to the field connection shortcode.

```markup
[wpbb site:acf_option type='google_map' name='']
```










