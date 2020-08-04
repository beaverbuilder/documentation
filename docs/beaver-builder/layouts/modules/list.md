---
id: list
title: List module
sidebar_label: List
---

While it's easy to add bulleted and numbered lists in a text editor, the List module offers you an easy way to shape them into beautiful designs. 

The List module is based on the Bootstrap concept of a [List Group](https://getbootstrap.com/docs/4.0/components/list-group/#custom-content), with optional headings, content, and list marker icons. If you choose to display list markers, they can be to the right or the left of either the headings or the content.

## List group examples

### Unordered lists  
This is the typical bulleted list, but you can choose your list marker and adjust its size. You can choose from the standard circle and square icons that are available as list item markers for standard unordered lists.  

![](/img/list-800a64f4.png)

The advantage of the List module is that you can style the markers by easily changing the size, adding padding to change their position, and placing them to the right or left of the list.

Here's an example of an unordered list with both headings and content and list markers displayed to the left of headings.

![](/img/list-07ce218b.png)

Here's the same list with list markers displayed to the left of the content instead.

![](/img/list-d17bcba2.png)

Unordered lists are represented by the standard `<ul>` tag in the HTML output. 

### Ordered lists

This is the typical numbered list with an `<ol>` tag in the HTML output, but you can choose from various ordering notations for the list item marker, such as numeric, alphabetic, or Roman, Hebrew, Armenian, or Greek numerals.

![](/img/list-eb77e45b.png) 
 
Here's an example of an ordered list with just headings and markers, no content.

![](/img/list-44ced35e.png)

In this example, the  icon size was increased. By default, the icon is vertically centered with the heading, but you can change the position by adjusting the icon padding setting.

:::note **Note** 
Ordered list item markers do not include a period after the number.
:::

Here's an example with just content and no headings, plus a separator between items.

![](/img/list-9ed3d8ae.png)

:::tip **Tip**
There's no setting to increase space between list items, but you can add a CSS rule by [creating a custom class name for your List module](/beaver-builder/advanced-builder-techniques/add-a-css-id-or-class-name-to-a-module.md) (we'll call the custom class name `my-list-padding`) and then [adding the following CSS rule](/beaver-builder/styles/code/custom-css.md):

```css
.my-list-padding li {
    padding: 20px 0 20px 0;
}
```

The four padding numbers are for top, right, bottom, and left respectively. 

Here's how the output changed with this rule:

![](/img/list-a98dedfc.png)
:::

### **Generic**

Generic lists let you select from your [regular icon set](/beaver-builder/styles/icons/enable-disable-or-delete-icon-sets.md) instead of using standard list markers. They are represented by the `<div>` tag in the HTML output, with the option to choose an icon from your regular icon set as the marker.

Here's an example of a generic list with a Font Awesome icon, set at 20px, and icon padding-right adjusted for more room between the icon and the heading.

![](/img/list-02c09849.png)
  
Here's another example that shows two List modules, one for the list of advantages and one for the list of disadvantages, both with content and icons but no headings. The arrow icons are from the Font Awesome set and are displayed to the right of the content. The headings for each list are Heading modules.

![](/img/list-7eab1ed5.png)

:::tip **Tip**
When you select markers or icons to the right of the headings or content, they are right-aligned. You can adjust their position by using icon padding.
:::

Here's another example of a Generic-type list with heading, content, and icons, in which the icons are set to the right of the headings.

![](/img/list-8afff47e.png)

And here's an example with headings and content but no icons:

![](/img/list-63d28cc4.png)

See the settings below for more information about how to control the placement and style of the headings, content, and markers of items.

## Settings for the entire list

### General tab

#### Top section

* **List type**  
  **Generic**, **Unordered**, or **Ordered**, as described above.
* **List item heading tag**  
  Choose the HTML tag that will be used for the list item's heading. You can choose from `<h1>` - `<h6>` or the `<span>` or `<div>` tag.
* **List item content tag**  
  Choose the HTML tag that will be used for the list item's content. You can choose the `<div>`, `<aside>`, or `<section>` tag.
* **List icon**  
  Chose the icon for the list item marker. The choices depend on which type of list you choose, as described in the first section of this article.
* **List icon placement**  
  Choose where the list item marker will appear. The choices are to the left or the right of the heading or the content. Choosing **Right of heading** or **Right of content** places the list item markers flush with the right margin of the list container. In either case, you can adjust the distance of the list item marker from the edge of the container and from the text on the same line by changing the left or right **Icon padding** in the **Icon style** section of the **Style** tab. See the screenshots in the **Icon padding** section below.

#### List items section

This is where you add the content and style for individual list items. Click **Edit list item** to add the first item, after you save click **Add list item** for additional items. See [the section on individual list item settings](#settings-for-each-list-item) for details of editing list items.

### Style tab

#### Top section

* **List background color**  
  Puts a background color around the entire list.
* **List padding**  
  Adds padding between the list border and the list items. This is especially useful when you've set a background color or border, as shown in this screenshot.  
  ![](/img/list-2c8bcc7e.png)
* **Border around list**  
  Adds a border, radius, or shadow around the list, using [standard Beaver Builder border settings](/beaver-builder/styles/effects/borders.md).

#### Icon style section

This section sets style properties for the list item markers selected on the **General** tab.

* **Icon color**  
* **Icon size**  
* **Icon margin**  
  Increases margins around the icon. Has the same effect as **Icon padding** in nearly all cases.
* **Icon padding**  
  Increases padding around the icon. If you have icons on the left, increasing the left icon padding indents the line and increasing the right icon padding increases the space between the icon and the text, as shown in this screenshot.  
  ![](/img/list-db5b4afd.png)  
  To adjust the vertical position of the icon, tweak the icon's top padding or bottom padding. Here's an example of a numbered list in which the icon size of the numbers was increased and then more icon padding on the bottom was added to move the numbers higher.  
  ![](/img/list-86a3d88a.png)  
  If icons are to the right, you can also adjust their horizontal and vertical positions using **Icon padding** settings.  
  ![](/img/list-99fa8c20.png)

:::tip **Tip**
There's no setting to align the heading with content when there's a list item marker to the left of the heading, like this:

![](/img/list-ce393451.png)

As a workaround, you can use some inline CSS in the text editor to increase the indent for the content.

* For the content text of each list item, go to the **Text** tab of the text editor and wrap the content with an HTML tag such as `<p>`, then add a **style** attribute and adjust the number of pixels of padding to indent the content to what you want, as in this example:  
```html
<p style="padding-left:20px;">This is the content text under the heading, indented by 20px.</p>
```
:::

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

There are all the usual [**Advanced** tab settings](/beaver-builder/layouts/advanced-tab-rows-columns-modules.md) for margins, visibility, animations, and advanced HTML settings.

## Settings for each list item

When you edit individual list items, there are additional settings that override the general settings for that specific list item.

### General tab (specific list item)

* **Heading text**  
  Enter the text for the heading of the list item.
* **List item content**  
  Enter the item content. This field is the same as the Text Editor module, where you can set typical WordPress styles on the text that you enter.

### Style tab (specific list item)

There are two settings, which override the general settings for a single list item.

* **Background color**
* **Icon color**