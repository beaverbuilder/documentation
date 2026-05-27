---
id: group
title: Group
sidebar_label: Group
---

The Advanced Custom Fields (ACF) Group field is supported in Beaver Themer via a field connection shortcode.

## Getting started

To get started, create your [Group field](https://www.advancedcustomfields.com/resources/group/) in ACF and add your subfields. In the shortcode, use the group name as a prefix for each subfield, separated by an underscore. For example, suppose you created a Group field with a name of `mygroup` and a Text subfield named `mytext`. Then the field name would be `mgroup_mytext`.

## Shortcode

Here is an example of the Beaver Themer Group field connection shortcode to display an Image subfield.

```markup
[wpbb post:acf type='image' name='group_subfieldimage' image_size='large' display='tag']
```

The `name=''` attribute is where you enter your Group field name as a prefix for each subfield, separated by an underscore followed by your subfield name.

## Repeater

This example demonstrates how you can use a Repeater field inside a Group field.

```markup
[wpbb-acf-repeater name='my_group_repeater']

	<p>[wpbb post:acf type='text' name='repeater_text']</p>
	<img src="[wpbb post:acf type='image' name='repeater_img' image_size='large' display='url']">

[/wpbb-acf-repeater]
```

* `my_group` is the name of the Group field which is used as a prefix for your subfield. In this example, the subfield is the Repeater field with a name of `repeater`.
* `repeater_text` and `repeater_img` are the names of your Repeater field sub-fields.

## Flexible Content

This example demonstrates how you can use a Flexible Content field inside a Group field.

```markup
[wpbb-acf-flex name='my_group_flexible']

	[wpbb-acf-layout name='layout_1']

		<p>[wpbb post:acf type='text' name='layout_1_text']</p>
		<img src="[wpbb post:acf type='image' name='layout_1_img' image_size='large' display='url']">

	[/wpbb-acf-layout]

[/wpbb-acf-flex]
```

* `my_group` is the name of the Group field which is used as a prefix for your subfield. In this example, the subfield is the Flexible Content field with a name of `flexible`.
* `layout_1` is the name of your Flexible Content layout.
* `layout_1_text` and `layout_1_img` are the names of your flexible content sub-fields.

## Options Page

The Beaver Themer Group field connection shortcode also supports Group fields added to the ACF [Options page](../options-page.md) by adding `site:acf_option` to the field connection shortcode.

```markup
[wpbb site:acf_option type='image' name='group_subfieldimage' image_size='large' display='tag']
```
