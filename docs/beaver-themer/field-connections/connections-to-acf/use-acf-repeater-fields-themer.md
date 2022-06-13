---
id: use-acf-repeater-fields-themer
title: Use ACF Repeater fields
sidebar_label: Repeater field
description: Learn how to use the ACF Repeater field in Beaver Themer using a field connection shortcode.
---

The Advanced Custom Fields (ACF) Repeater field is supported in Beaver Themer via a field connection shortcode.

## Getting started

To get started, create your [repeater fields](https://www.advancedcustomfields.com/resources/repeater/) in ACF and use the shortcode to display the repeater field on your pages or posts. You can use the shortcode inside any module that supports HTML such as a [Text](/beaver-builder/layouts/modules/text) or [HTML](/beaver-builder/layouts/modules/html) module.

## Shortcode

Here is an example of the Beaver Themer Repeater field connection shortcode, with a description below.

```markup
[wpbb-acf-repeater name='my_repeater']

  <p>[wpbb post:acf type='text' name='sub_field_text']</p>
  <img src="[wpbb post:acf type='text' name='sub_field_img']">

[/wpbb-acf-repeater]
```

* `my_repeater` is the name of your repeater field.
* `sub_field_text` and `sub_field_img` are the names given to your sub fields.

## Nested Repeater

This example demonstrates how to use a nested Repeater field using the repeater field connection shortcode.

```markup
[wpbb-acf-repeater name='my_repeater']

  <p>[wpbb post:acf type='text' name='sub_field_text']</p>
  <img src="[wpbb post:acf type='text' name='sub_field_img']">

  [wpbb-acf-nested-repeater name='nested_repeater']

    <p>[wpbb post:acf type='text' name='nested_sub_field_text']</p>
    <img src="[wpbb post:acf type='text' name='nested_sub_field_img']">

  [/wpbb-acf-nested-repeater]

[/wpbb-acf-repeater]
```

Both the `nested_sub_field_text` and `nested_sub_field_img` are the names of your fields inside a nested repeated field.

:::note **Limitation**
The Repeater field shortcode supports only one nested Repeater field.
:::

## Group 

This example demonstrates how you can combine a Group field inside a Repeater field.

```markup
[wpbb-acf-repeater name='repeater']
  
  [wpbb post:acf type='text' name='my_group_text']

[/wpbb-acf-repeater]
```

* `repeater` is the name of your Repeater field.
* `my_group` is the name of the Group field which is used as a prefix for your subfield. In this example, the subfield is the Text field with a name of `text`.

## Taxonomy

The Repeater field connection shortcode supports repeater fields assigned to the ACF Taxonomy [location rule](https://www.advancedcustomfields.com/resources/custom-location-rules/) by adding `type='archive'` to the field connection shortcode.

```markup
[wpbb-acf-repeater type='archive' name='repeat']

  <p>[wpbb archive:acf type='text' name='firstname']</p>
  
  <p>[wpbb archive:acf type='text' name='lastname']</p>

[/wpbb-acf-repeater]
```

## ACF Options page

The Beaver Themer Repeater field connection shortcode also supports repeater fields added to the ACF [Options page](https://www.advancedcustomfields.com/resources/options-page/) by adding `type='option'` and `:acf_option` to the field connection shortcode.

```markup
[wpbb-acf-repeater type='option' name='repeat']
  
  <p>[wpbb site:acf_option type='text' name='firstname']</p>
  
  <p>[wpbb site:acf_option type='text' name='lastname']</p>
  
[/wpbb-acf-repeater]
```
