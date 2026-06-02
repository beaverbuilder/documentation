---
id: image
title: Image field
sidebar_label: Image
---

The Advanced Custom Fields (ACF) Image field is supported in Beaver Themer via a field connection shortcode.

## Getting started

To get started, create your [Image fields](https://www.advancedcustomfields.com/resources/image/) in ACF and use the shortcode to display the image field on your pages or posts. You can use the shortcode inside any module that supports HTML such as a Text or HTML module.

## Shortcode

Here is an example of the Beaver Themer Image field connection shortcode.

```markup
[wpbb post:acf type='image' name='' image_size='large' display='tag' linked='yes']
```

The `name=''` attribute is where you enter your Image field name.

* Options

	* **Image Size** - Thumbnail, Medium, Large, Full Size and any custom sizes you have.
	* **Display** - Image Tag ([`<img>`](https://www.w3schools.com/tags/tag_img.asp)), URL, Title, Caption, Description or Alt.
	* **Linked** - Enable or disable the link on the featured image (if Display is set to Image Tag).

## Options Page

The Beaver Themer Image field connection shortcode also supports image fields added to the ACF [Options page](../options-page.md) by adding `site:acf_option` to the field connection shortcode.

```markup
[wpbb site:acf_option type='image' name='' image_size='large' display='tag']
```
