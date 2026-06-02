---
id: taxonomy
title: Taxonomy field
sidebar_label: Taxonomy
---

The Advanced Custom Fields (ACF) Taxonomy field is supported in Beaver Themer via a field connection shortcode.

## Getting started

To get started, create your [Taxonomy field](https://www.advancedcustomfields.com/resources/taxonomy/) in ACF and use the shortcode to display the Taxonomy field on your pages or posts. You can use the shortcode inside any module that supports HTML such as a HTML or Text modules.

## Field Connection List Panel

To use the Taxonomy field in a page or post, after you click the plus **(+)** icon to add the field connection or shortcode, select **ACF Relational** in the [Field Connection list panel](../../../field-connections/getting-started#field-connection-menu).

![](/img/beaver-themer/integrations--acf--taxonomy-field--1.jpg)

## Shortcode

Here is an example of the Beaver Themer Taxonomy field connection shortcode.

```markup
[wpbb post:acf_relational type='taxonomy' name='' list_type='ul' term_archive_link='yes' term_post_count='yes' hide_empty='yes']
```

The `name=''` attribute is where you enter your Taxonomy field name.

* Options

	* **List Type** - Choices are Regular (`<div>`), Ordered List (`<ol>`) and Unordered List (`<ul>`).
	
	* **Add Term Archive Link** - Adds a link to the taxonomies archive page. For example: `https://my-website.com/category/uncategorized/`.
	
	* **Show Post Counts** - Displays the number of posts assigned to the taxonomy in parentheses `()`. For example: `Uncategorized (15)`.
	
	* **Hide Term If No Posts** - Removes the taxonomy from the list if the selected taxonomy has no posts assigned.


:::info
The Taxonomy field connection **does not** work on **ACF Option Pages**.
:::

