---
id: page-link
title: Page Link field
sidebar_label: Page Link
---

The Advanced Custom Fields (ACF) Page Link field is supported in Beaver Themer via a field connection shortcode and can be used to output a page or post link.

## Getting started

To get started, create your [Page Link field](https://www.advancedcustomfields.com/resources/page-link/) in ACF and use the shortcode to display the Page Link field on your pages or posts. You can use the shortcode inside any module that supports HTML such as a HTML or Text Editor module.

## Shortcode

Here is an example of the Beaver Themer Page Link field connection shortcode.

```markup
[wpbb post:acf type='page_link' name='']
```

The `name=''` attribute is where you enter your Page Link field name.

## Options Page

The Beaver Themer Page Link field connection shortcode also supports Page Link fields added to the ACF [Options page](../options-page.md) by adding `site:acf_option` to the field connection shortcode.

```markup
[wpbb site:acf_option type='page_link' name='']
```
