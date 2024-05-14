---
id: select
title: Select field
sidebar_label: Select
---

The Advanced Custom Fields (ACF) Select field is supported in Beaver Themer via a field connection shortcode.

## Getting started

To get started, create your Select field in ACF and use the shortcode to display the Select field on your pages or posts. You can use the shortcode inside any module that supports HTML such as a HTML or Text Editor module.

:::info
The Select field connection can output either the **Value** or **Label** from the Select field **Return Format** setting.

![](/img/beaver-themer/integrations--acf--select-field--1.jpg)
:::

## Shortcode

Here is an example of the Beaver Themer Select field connection shortcode. The Select shortcode can output your choices in three formats text, unordered list, ordered list and this example uses the ordered list format.

```markup
[wpbb post:acf type='select' name='' select_format='ol']
```

The `name=''` attribute is where you enter your Select field name.

* Options

	* **Format** (`select_format=''`) - Choices are Text (default), Ordered List and Unordered List.
	
		* **Text** - Displays the Select field choices inline inside a `<p>` tag and comma separated.
		* **Ordered List** - Displays the Select field choices in an ordered list (`<ol>`).
		* **Unordered List** - Displays the Select field choices in an unordered list (`<ul>`).

## Options Page

The Beaver Themer Select field connection shortcode also supports Select fields added to the ACF [Options page](../options-page.md) by adding `site:acf_option` to the field connection shortcode.

```markup
[wpbb site:acf_option type='select' name='' select_format='ol']
```
