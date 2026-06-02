---
id: smart-slider
title: Smart Slider
sidebar_label: Smart Slider (3rd party)
---

The Advanced Custom Fields (ACF) Smart Slider field is supported in Beaver Themer via a field connection shortcode.

## Getting started

To get started, install the [Smart Slider plugin](https://smartslider3.com/pricing/) (free or pro), create your [Smart Slider field](https://smartslider.helpscoutdocs.com/article/1798-acf-publishing) in ACF and use the shortcode to display the Smart Slider field on your pages or posts. You can use the shortcode inside any module that supports HTML such as a Text or HTML module.

## Shortcode

Here is an example of the Beaver Themer Smart Slider field connection shortcode.

```markup
[wpbb post:acf type='acf_smartslider3' name='']
```

The `name=''` attribute is where you enter your Smart Slider field name.

## Options Page

The Beaver Themer Smart Slider field connection shortcode also supports Smart Slider fields added to the ACF [Options page](../options-page.md) by adding `site:acf_option` to the field connection shortcode.

```markup
[wpbb site:acf_option type='acf_smartslider3' name='']
```
