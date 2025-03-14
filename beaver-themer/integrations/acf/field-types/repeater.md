---
id: repeater
title: Repeater
sidebar_label: Repeater
description: Learn how to use the ACF Repeater field in Beaver Themer using a field connection shortcode.
---

Beaver Themer provides support for the Advanced Custom Fields (ACF) Repeater field through the usage of a field connection shortcode.

## Getting Started

To get started, create your [Repeater fields](https://www.advancedcustomfields.com/resources/repeater/) in ACF and use the shortcode to display the repeater field on your pages or posts. You can use the shortcode inside any module that supports HTML such as a Text or HTML module.

## Shortcode

Here is an example of the Beaver Themer Repeater field connection shortcode.

```markup
[wpbb-acf-repeater name='my_repeater']

  <p>[wpbb post:acf type='text' name='sub_field_text']</p>
  <img src="[wpbb post:acf type='image' name='sub_field_img' image_size='large' display='url']">

[/wpbb-acf-repeater]
```

- `my_repeater` is the name of your repeater field.
- `sub_field_text` and `sub_field_img` are the names given to your sub fields.

### Output Specific Row Field

By utilizing the Repeater field name and row index number, it's possible to display the field from a particular Repeater row without requiring the ACF Repeater field connection shortcode wrapper.

```markup
<p>[wpbb post:acf name='repeater_0_fieldname']</p>

<img src="[wpbb post:acf name='repeat_1_fieldname']">
```

- `repeater` is the name of your Repeater field.
- `_0_` and `_1_` in the code example above are the Repeater row index numbers. Indexes start from `0` for the first row. For example, the first Repeater row is `0`, the second item is `1`, and so on.
- `fieldname` is the name of the field in the Repeater row.

:::info
Due to the shortcode not accepting attributes, outputting specific Repeater row fields works best with text fields.
:::

## Nested Repeater

This example demonstrates how to use a nested Repeater field using the repeater field connection shortcode.

```markup
[wpbb-acf-repeater name='my_repeater']

  [wpbb-acf-nested-repeater name='nested_repeater']

    <p>[wpbb post:acf type='text' name='nested_sub_field_text']</p>
    <img src="[wpbb post:acf type='image' name='nested_sub_field_img' image_size='large' display='url']">

  [/wpbb-acf-nested-repeater]

[/wpbb-acf-repeater]
```

- `my_repeater` is the name of your Repeater field.
- `nested_repeater` is the name of your nested Repeater field.
- `nested_sub_field_text` and `nested_sub_field_img` are the names of your fields inside a nested repeated field.

:::caution
The Repeater field shortcode supports only one nested Repeater field.
:::

### Output Specific Nested Field

By utilizing the Repeater field name, row index number, Nested Repeater field name, and Nested row index number, it's possible to display the field from a particular Nested Repeater row without requiring the ACF Repeater field connection shortcode wrapper.

```markup
<p>[wpbb post:acf name='repeater_0_nested_0_nested_fieldname']</p>
```

- `repeater` is the name of your Repeater field.
- `_0_` is the Repeater row index number. Indexes start from `0` for the first row. For example, the first Repeater row is `0`, the second item is `1`, and so on.
- `nested` is the name of your Nested Repeater field.
- `_0_` is the Nested Repeater row index number.
- `nested_fieldname` is the name of the field in the Nested Repeater.

:::info
Due to the shortcode not accepting attributes, outputting specific Repeater row fields works best with text fields.
:::

## `repeater_index`

The `repeater_index` shortcode allows you to output the current row index number of the repeater field.

```markup
[wpbb post:acf type='repeater_index']
```

This can be useful in helping you style specific rows, such as using the `repeater_index` shortcode to apply the row index number as a class name.

```markup
<div class="my-repeater">
    [wpbb-acf-repeater name='repeat']

    <p class="my-repeater-row-[wpbb post:acf type='repeater_index']">
      [wpbb post:acf type='text' name='repeat_text']
    </p>

    [/wpbb-acf-repeater]
</div>
```

**HTML Output**

```html
<div class="my-repeater">
  <p class="my-repeater-row-1">This is Row 1 of my Repeater field</p>
  <p class="my-repeater-row-2">This is Row 2 of my Repeater field</p>
  <p class="my-repeater-row-3">This is Row 3 of my Repeater field</p>
  <p class="my-repeater-row-4">This is Row 4 of my Repeater field</p>
</div>
```

You can also use the `repeater_index` shortcode with conditionals and expressions to output specific fields based on the row index number.

## Conditional Fields

This example demonstrates how to use Beaver Themer conditional shortcodes with a Repeater field to handle cases when one of the fields is empty. The example code works in the case where the repeater has a text field and image field.

```markup
[wpbb-acf-repeater name='my_repeater']

  [wpbb-if post:acf type='text' name='sub_field_text']

    <p>[wpbb post:acf type='text' name='sub_field_text']</p>

  [/wpbb-if]

  [wpbb-if post:acf type='image' name='sub_field_img']

    <img src="[wpbb post:acf type='image' name='sub_field_img' image_size='large' display='url']">

  [/wpbb-if]

[/wpbb-acf-repeater]
```

## Flexible Content

This example demonstrates how you can combine a Flexible Content field inside a Repeater field.

```markup
[wpbb-acf-repeater name='repeater']

  <p>[wpbb post:acf type='text' name='text-repeat']</p>
  <img src="[wpbb post:acf type='image' name='image-repeat' image_size='large' display='url']">

  [wpbb-acf-flex name='my_flexible_content']

    [wpbb-acf-layout name='layout_1']

      <p>[wpbb post:acf type='text' name='layout_1_text']</p>
      <img src="[wpbb post:acf type='image' name='layout_1_img' image_size='large' display='url']">

    [/wpbb-acf-layout]

  [/wpbb-acf-flex]

[/wpbb-acf-repeater]
```

- `repeater` is the name of your Repeater field.
- `text-repeat` and `image-repeat` are the names of your repeater field sub-fields.
- `my_flexible_content` is the name of your Flexible Content field.
- `layout_1` is the name of your Flexible Content layout.
- `layout_1_text` and `layout_1_img` are the names of your flexible content sub-fields.

## Group

This example demonstrates how you can combine a [Group](group.md) field inside a Repeater field.

```markup
[wpbb-acf-repeater name='repeater']

  [wpbb post:acf type='text' name='my_group_text']

[/wpbb-acf-repeater]
```

- `repeater` is the name of your Repeater field.
- `my_group` is the name of the Group field which is used as a prefix for your subfield. In this example, the subfield is the Text field with a name of `text`.

## Taxonomy

The Repeater field connection shortcode supports repeater fields assigned to the ACF Taxonomy [location rule](https://www.advancedcustomfields.com/resources/custom-location-rules/) by adding `type='archive'` to the field connection shortcode.

```markup
[wpbb-acf-repeater type='archive' name='repeat']

  <p>[wpbb archive:acf type='text' name='firstname']</p>

  <p>[wpbb archive:acf type='text' name='lastname']</p>

[/wpbb-acf-repeater]
```

## ACF Options page

The Beaver Themer Repeater field connection shortcode also supports repeater fields added to the ACF [Options page](../options-page.md) by adding `type='option'` and `site:acf_option` to the field connection shortcode.

### Repeater

```markup
[wpbb-acf-repeater type='option' name='repeat']

  <p>[wpbb site:acf_option type='text' name='firstname']</p>

  <p>[wpbb site:acf_option type='text' name='lastname']</p>

[/wpbb-acf-repeater]
```

### Nested Repeater

```markup
[wpbb-acf-repeater type='option' name='my_repeater']

  [wpbb-acf-nested-repeater type='option' name='nested_repeater']

    <p>[wpbb post:acf type='text' name='nested_sub_field_text']</p>
    <img src="[wpbb post:acf type='image' name='nested_sub_field_img' image_size='large' display='url']">

  [/wpbb-acf-nested-repeater]

[/wpbb-acf-repeater]
```

- `my_repeater` is the name of your Repeater field.
- `nested_repeater` is the name of your nested Repeater field.
- `nested_sub_field_text` and `nested_sub_field_img` are the names of your fields inside a nested repeated field.

:::caution
The Repeater field shortcode supports only one nested Repeater field.
:::

## ACF User Forms

The Beaver Themer Repeater field connection shortcode also supports repeater fields added to User Forms by adding `type='user'` to the repeater shortcode and `site:acf_user` to the fields inside the repeater.

### Repeater

```markup
[wpbb-acf-repeater type='user' name='repeat']

  <p>[wpbb site:acf_user type='text' name='firstname']</p>

  <p>[wpbb site:acf_user type='text' name='lastname']</p>

[/wpbb-acf-repeater]
```
