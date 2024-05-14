---
id: checkbox
title: Checkbox field
sidebar_label: Checkbox
---

The Advanced Custom Fields (ACF) Checkbox field is supported in Beaver Themer via a field connection shortcode.

## Getting started

To get started, create your Checkbox field in ACF and use the shortcode to display the Checkbox field on your pages or posts. You can use the shortcode inside any module that supports HTML such as a HTML or Text Editor module.

:::info
The Checkbox field connection can output either the **Value** or **Label** from the Checkbox field **Return Format** setting.

![](/img/beaver-themer/integrations--acf--checkbox-field--1.jpg)
:::

## Shortcode

Here is an example of the Beaver Themer Checkbox field connection shortcode. The Checkbox shortcode can output your choices in three formats text, unordered list, ordered list and this example uses the ordered list format.

```markup
[wpbb post:acf type='checkbox' name='' checkbox_format='ol']
```

The `name=''` attribute is where you enter your Checkbox field name.

* Options

	* **Format** (`select_format=''`) - Choices are Text (default), Ordered List and Unordered List.
	
		* **Text** - Displays the Select field choices inline inside a `<p>` tag and comma separated.
		* **Ordered List** - Displays the Select field choices in an ordered list (`<ol>`).
		* **Unordered List** - Displays the Select field choices in an unordered list (`<ul>`).

## Options Page

The Beaver Themer Checkbox field connection shortcode also supports Checkbox fields added to the ACF [Options page](../options-page.md) by adding `site:acf_option` to the field connection shortcode.

```markup
[wpbb site:acf_option type='checkbox' name='' checkbox_format='ol']
```
