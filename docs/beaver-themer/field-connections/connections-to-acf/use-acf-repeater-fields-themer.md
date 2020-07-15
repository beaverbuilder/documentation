---
id: use-acf-repeater-fields-themer
title: Use ACF Repeater fields
sidebar_label: Repeater field
---

The Advanced Custom Fields (ACF) Repeater field is supported in Beaver Themer via a field connection shortcode.

To use this feature, create your repeater fields in ACF and use the shortcode to display the repeater field on your pages or posts. You can use the shortcode inside any module that supports HTML such as a Text Editor or HTML module. Below is an example of the Repeater field shortcode, with a description below.

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

  * `my_repeater` is the name of your repeater field.
  * `sub_field_text` and `sub_field_img` are the names given to your sub fields.
  * `nested_sub_field_text` and `nested_sub_field_img` are the names of your fields inside a nested repeated field.

:::note **Notes**

  * You can only nest one Repeater field.
  * The `[wpbb-acf-repeater]` shortcode only works if the Repeater field is attached to a post type, as opposed to the Options page.
:::
