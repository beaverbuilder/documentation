---
id: use-acf-flexible-content-field-themer
title: Use the ACF Flexible Content field
sidebar_label: Flexible Content field
---

The Advanced Custom Fields (ACF) Flexible Content field is supported in Beaver Themer via a field connection shortcode.

To use this feature, create your flexible content field in ACF and use the shortcode to display the flexible content field on your page or posts. You can use the shortcode inside any module that supports HTML such as a Text Editor or HTML module. Below is an example of the Flexible Content field shortcode, with a description below.

```markup
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
```

* `my_flexible_content` is the name of your flexible content field.
* `layout_1` and `layout_2` are the names of your layouts.
* `layout_1_text`, `layout_2_text` and `layout_1_img`, `layout_2_img` are the names of your nested fields inside your layout.
