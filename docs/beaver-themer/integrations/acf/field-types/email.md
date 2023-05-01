---
id: email
title: Email field
sidebar_label: Email
---

The Advanced Custom Fields (ACF) Email field is supported in Beaver Themer via a field connection shortcode.

## Getting started

To get started, create your Email field in ACF and use the shortcode to display the email field on your pages or posts. You can use the shortcode inside any module that supports HTML such as a Header, HTML, Button or Text module.

## Shortcode

Here is an example of the Beaver Themer Email field connection shortcode.

```markup
[wpbb post:acf type='email' name='']
```

The `name=''` attribute is where you enter your Email field name.

## Options Page

The Beaver Themer Email field connection shortcode also supports Email fields added to the ACF [Options page](../options-page.md) by adding `site:acf_option` to the field connection shortcode.

```markup
[wpbb site:acf_option type='email' name='']
```
