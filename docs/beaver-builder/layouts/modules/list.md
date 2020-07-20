---
id: list
title: List module
sidebar_label: List
---

This List module offers an easy way to get more style into your lists than what is normally available in the Text Editor module. 

There are three types of lists:

* **Unordered**  
  Unordered lists are represented by the standard `<ul>` tag in the HTML output. You can choose from standard circle and square icons that are available as list item markers for standard unordered lists.
* **Ordered**  
  Ordered lists are represented by the standard `<ol>` tag in the HTML output. You can choose from a number of standard ordering notations for the list item marker, such as numeric, alphabetic, or Roman, Hebrew, Armenian, or Greek numerals.
* **Generic**  
  Generic lists are represented by the `<div>` tag in the HTML output. You can choose a custom icon for the list item marker.
  
## Settings for the entire list

### General tab

#### Top section

* **List type**  
  **Generic**, **Unordered**, or **Ordered**, as desribed above.
* **List item heading tag**  
  Choose the HTML tag that will be used for the list item's heading. You can choose from `<h1>` - `<h6>` or the `<span>` or `<div>` tag.
* **List item content tag**  
  Choose the HTML tag that will be used for the list item's content. You can choose the `<div>`, `<aside>`, or `<section>` tag.
* **List icon**  
  Chose the icon for the list item marker. The choices depend on which type of list you choose, as described in the first section of this article.
* **List icon placement**  
  Choose where the list item marker will appear. The choice are to the left or the right of the heading or the content.

#### List items section

This is where you add each individual list item. Click **Edit list item** to add the first item, after you save click **Add list item** for additional items. See [the section on individual list item settings](#settings-for-each-list-item) for details of editing list items.

### Style tab

#### Top section

* List background color  
  Puts a background color around the entire list.
* List padding  
  Adds padding between the list border and the list items. This is especially useful when you've set a background color.
* Border around list
  Adds a border, radius, or shadow around the list, using [standard Beaver Builder border settings](/beaver-builder/styles/effects/borders.md).

#### Icon style section

This section sets style properties for the list item markers selected on the **General** tab.

* **Icon color**  
* **Icon size**  
* **Icon margin**
* **Icon padding**

#### Heading style section

* **Heading color**  
  The color of the heading text in every list item.
* **Typography**  
  The standard Beaver Builder [Typography section](/beaver-builder/styles/typography/typography.md) for setting font family, weight, spacing, and so on.

#### Content style section

* **Content color**  
  The color of the content in every list item.
* **Typography**  
    The standard Beaver Builder [Typography section](/beaver-builder/styles/typography/typography.md).

#### Item separator section

* **Line separator style**  
  Choices are the same as for borders: **None**, **Solid**, **Dashed**, **Dotted**, **Double**.
* **Line color**  
  The color of the separator line.
* **Separator size**  
  The height in pixels of the separator line.  
  **Tip:** This item is responsive. Click the icon to toggle the setting for desktop, tablet, and mobile displays.

### Advanced tab

There are all the usual [**Advanced** tab settings](/beaver-builder/layouts/advanced-tab-for-rows-columns-modules.md) for margins, visibility, animations, and advanced HTML settings.

## Settings for each list item

When you edit individual list items, there are additional settings that override the general settings for that specific list item.

### General tab (specific list item)

* **Heading text**  
  Enter the text for the heading of the list item.
* **List item content**  
  Enter the item content. This field is the same as the Text Editor module, where you can set typical WordPress style on the text that you enter.

### Style tab (specific list item)

* **Background color**
* **Icon color**