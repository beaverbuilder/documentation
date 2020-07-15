---
id: use-acf-repeater-and-flexible-content-fields-together
title: Use ACF Repeater and Flexible Content fields together
sidebar_label: ACF Repeater and Flexible Content fields together
---

The Advanced Custom Fields (ACF) Repeater field and Flexible Content field are supported via field connection shortcodes.

You can combine the two shortcodes if you use a Repeater field inside a Flexible Content field or a Flexible Content field inside a Repeater field. You can use the shortcode inside any module that supports HTML such as a Text Editor or HTML module.

### Repeater inside Flexible Content example

Here's an example of the Repeater field shortcode, with a description below.

```markup
[wpbb-acf-flex name='my_flexible_content']

  [wpbb-acf-layout name='layout_1']

    <p>[wpbb post:acf type='text' name='layout_1_text']</p>
    <img src="[wpbb post:acf type='text' name='layout_1_img']">

    [wpbb-acf-repeater name='repeater']

      <p>[wpbb post:acf type='text' name='text-repeat']</p>
      <img src="[wpbb post:acf type='text' name='image-repeat']">

    [/wpbb-acf-repeater]

  [/wpbb-acf-layout]

[/wpbb-acf-flex]
```

  * `my_flexible_content` is the name of your Flexible Content field.
  * `layout_1` is the name of your Flexible Content layout.
  * `layout_1_text` and `layout_1_img` are the names of your flexible content fields.
  * `repeater` is the name of your Repeater field.
  * `text-repeat` and `image-repeat` are the names of your repeater field sub-fields.

### Flexible Content inside Repeater example

```markup
[wpbb-acf-repeater name='repeater']

  <p>[wpbb post:acf type='text' name='text-repeat']</p>
  <img src="[wpbb post:acf type='text' name='image-repeat']">

  [wpbb-acf-flex name='my_flexible_content']

    [wpbb-acf-layout name='layout_1']

      <p>[wpbb post:acf type='text' name='layout_1_text']</p>
      <img src="[wpbb post:acf type='text' name='layout_1_img']">

    [/wpbb-acf-layout]

    [wpbb-acf-layout name='layout_2']

      <p>[wpbb post:acf type='text' name='layout_2_text']</p>
      <img src="[wpbb post:acf type='text' name='layout_2_img']">

    [/wpbb-acf-layout]

  [/wpbb-acf-flex]

[/wpbb-acf-repeater]
```

  * `repeater` is the name of your Repeater field.
  * `text-repeat` and `image-repeat` are the names of your repeater field sub-fields.
  * `my_flexible_content` is the name of your Flexible Content field.
  * `layout_1` is the name of your Flexible Content layout.
  * `layout_1_text` and `layout_1_img` are the names of your flexible content sub-fields.
