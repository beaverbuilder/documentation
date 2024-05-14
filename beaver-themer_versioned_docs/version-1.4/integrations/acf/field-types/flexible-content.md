---
id: flexible-content
title: Flexible Content
sidebar_label: Flexible Content
---

The Advanced Custom Fields (ACF) Flexible Content field is supported in Beaver Themer via a field connection shortcode.

## Getting started

To get started, create your [Flexible Content field](https://www.advancedcustomfields.com/resources/flexible-content/) in ACF and use the shortcode to display the flexible content field on your page or posts. You can use the shortcode inside any module that supports HTML such as a Text or HTML module.

## Shortcode

Here is an example of the Beaver Themer Flexible Content field connection shortcode, with a description below.

```markup
[wpbb-acf-flex name='my_flexible_content']

  [wpbb-acf-layout name='layout']

    <h3>[wpbb post:acf type='text' name='flexible_content_text']</h3>
  
    <img src="[wpbb post:acf type='image' name='flexible_content_img' image_size='large' display='url']">

  [/wpbb-acf-layout]

[/wpbb-acf-flex]
```

* `my_flexible_content` is the name of your flexible content field.
* `layout` is the name of your layout.
* `flexible_content_text`, and `flexible_content_img` are the names of your nested fields inside your layout.

## Multiple Layouts

The Flexible Content field supports multiple layouts which allow you to use different field types. The flexible content field connection shortcode supports multiple layouts using `[wpbb-acf-layout name='']` with the `name=''` attribute being where you enter the layouts name.

### Adding Layouts

To add a new layout to the ACF Flexible Content field, click the **Add New** link on the flexible content settings located in the **layout** section, see image below.

![](/img/beaver-themer/integrations--acf--flex-content-1.jpg)

### Shortcode

This example demonstrates how to use Beaver Themer conditional shortcodes with multiple layouts in your Flexible Content field.

```markup
[wpbb-acf-flex name='my_flexible_content']

  [wpbb-acf-layout name='layout_1']

    <h3>[wpbb post:acf type='text' name='flexible_content_text']</h3>
  
    <img src="[wpbb post:acf type='image' name='flexible_content_img' image_size='large' display='url']">

  [/wpbb-acf-layout]
  
  [wpbb-acf-layout name='layout_2']

    <h3>[wpbb post:acf type='text' name='flexible_content_text']</h3>
  
    <img src="[wpbb post:acf type='image' name='flexible_content_img' image_size='large' display='url']">
  
  [/wpbb-acf-layout]

[/wpbb-acf-flex]
```

* `my_flexible_content` is the name of your flexible content field.
* `layout_1` and `layout_2` are the names of your layouts.
* `flexible_content_text`, and `flexible_content_img` are the names of your nested fields inside your layout.

## Conditional Fields

This example demonstrates how to use Beaver Themer conditional shortcodes with Flexible Content to handle cases when one of the fields is empty. The example code works in the case where the flexible content has a text field and image field.

```markup
[wpbb-acf-flex name='my_flexible_content']

  [wpbb-acf-layout name='layout']
  
    [wpbb-if post:acf type='text' name='flexible_content_text']
  
      <h3>[wpbb post:acf type='text' name='flexible_content_text']</h3>
      
    [/wpbb-if]
      
    [wpbb-if post:acf type='image' name='flexible_content_img' image_size='large' display='url']
  
      <img src="[wpbb post:acf type='image' name='flexible_content_img' image_size='large' display='url']">
      
    [/wpbb-if]
  
  [/wpbb-acf-layout]

[/wpbb-acf-flex]
```

## Repeater

This example demonstrates how you can combine a Repeater field inside a Flexible Content field.

```markup
[wpbb-acf-flex name='my_flexible_content']

  [wpbb-acf-layout name='layout']

    <p>[wpbb post:acf type='text' name='flexible_content_text']</p>
    <img src="[wpbb post:acf type='text' name='flexible_content_img']">

    [wpbb-acf-repeater name='my_repeater']

      <p>[wpbb post:acf type='text' name='repeater_text']</p>
      <img src="[wpbb post:acf type='image' name='repeater_img' image_size='large' display='url']">

    [/wpbb-acf-repeater]

  [/wpbb-acf-layout]

[/wpbb-acf-flex]
```

* `my_flexible_content` is the name of your Flexible Content field.
* `layout` is the name of your Flexible Content layout.
* `flexible_content_text` and `flexible_content_img` are the names of your flexible content fields.
* `my-repeater` is the name of your Repeater field.
* `repeater_text` and `repeater_img` are the names of your repeater field sub-fields.

## Taxonomy

The Flexible Content field connection shortcode supports flexible content fields assigned to the ACF Taxonomy [location rule](https://www.advancedcustomfields.com/resources/custom-location-rules/) by adding `type='archive'` to the field connection shortcode.

```markup
[wpbb-acf-flex type='archive' name='my_flexible_content']

  [wpbb-acf-layout name='layout']
  
    <h3>[wpbb archive:acf type='text' name='flexible_content_text']</h3>
  
    <img src="[wpbb archive:acf type='image' name='flexible_content_img' image_size='large' display='url']">
  
  [/wpbb-acf-layout]

[/wpbb-acf-flex]
```

## ACF Options page

The Beaver Themer Repeater field connection shortcode also supports flexible content fields added to the ACF [Options page](../options-page.md) by adding `type='option'` and `site:acf_option` to the field connection shortcode.

```markup
[wpbb-acf-flex type='option' name='my_flexible_content']

  <p>[wpbb site:acf_option type='text' name='flexible_content_text']</p>
  <img src="[wpbb post:acf type='image' name='flexible_content_img' image_size='large' display='url']">

[/wpbb-acf-flex]
```
