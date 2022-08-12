---
id: accordion
title: Accordion
sidebar_label: Accordion
description: The Accordio module adds expandable and collapsible title-content pairs. This module works well for content such as FAQs, Q&A, feature lists.
---

An accordion displays a list of items as title-content pairs, as shown in the
screenshot below. When the accordion is collapsed, only the titles are
displayed. When one or more items in the accordion are expanded, usually by
clicking an icon, the paired content is displayed.

![](/img/accordion-1.png)

In the Beaver Builder Accordion module, the first row of each item contains
the button label (the title) and button icon, and the expanded portion
contains the content. Currently active items in the Accordion are marked in
the rendered HTML output to improve accessibility by screen readers.

## Uses of this module

An accordion is great for whenever you have a list of items with details that
you don't want to clutter the main page with but want the information easily
accessible. Here are some good uses for the Accordion module:

* FAQs
* Q&A
* Feature lists

<div className="embed-responsive">
<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/W8PkT4fMoNs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
</div>

##  Properties of the Accordion module

  * The Accordion module contains a set of items that you construct, as shown in this screenshot.  
![](/img/accordion-2.png)  
Each item has

  * The module has a **Style** tab, which you can use to style all of the items the same way. See the section below on the **Style** tab.
  * Each item includes a **Label** field and a Text Editor box for the content field. The **Label** field can include HTML tags, such as heading tags, for individual styling, images, and. The Text Editor box for content has the usual style options.

:::note **Tip:**
You can make the layout in Accordion items more interesting by
inserting the shortcode for a saved row or module into the text editor portion
of an item. See the [article on shortcodes](/beaver-builder/advanced-builder-techniques/shortcodes/use-shortcodes-in-your-layouts.md) for more information.
:::

## Example of expanding a text excerpt

Here's an example to show how the Accordion module can be used to display a
text excerpt, with a Read More link that expands into a longer description.
The default plus sign has been replaced by the three dots that indicate an
ellipsis.

![](/img/accordion-3.gif)

This technique works best when you have static content (not updated on a
regular basis) because it requires manual setup.

The trick is to put the first part into the **Label** field including the
'read more" text, and the expanded portion into the Text Editor, as shown in
the following screenshot. The "read more" text is set off with `<em>` tags in
the **Label** field. In this example, the default plus icon to expand the
content was changed to Font Awesome ellipsis icon in the **Icon** section of
the **Style** tab.

![](/img/accordion-4.png)

## Module details

### Items tab

The Items tab contains the following sections and fields.

#### Items section

The Items section is shown in the following screenshot.

![](/img/accordion-5.png)

This section contains the items you have created, with a button to add each
new item. Use the icons at the top of each item to do the following:

  * Move the item up or down in the list
  * Duplicate the item
  * Delete the item

#### Display section

This section contains the following fields:

  * Collapse inactive  
By default set to **Yes**, which allows only one item to be expanded at a
time. Change to **No** to allow more than one item to be expanded,

  * Expand first item  
By default set to **No**. If set to **Yes**, the first item will be expanded
on the first view, before the user clicks to expand anything.

:::note **Note**
After you save a label and text in the first item of the Accordion
module, it remains open in the editing screen even when the **Expand first
item** field is set to **No**. This is so that you can see the style settings
while editing. The published page correctly follows the **Expand first item**
setting.
:::

### Style tab

The **Style** tab is divided into four sections, shown in the following
screenshot and described below.

![](/img/accordion-6.png)

#### 1 Top section

The top section has settings that style the item layout, with settings for
item size, item spacing (the vertical space between items), and item border.
The border settings use the new responsive **Border** section common to other
modules.

The **Item size** field has the choices **Small**, **Medium**, and
**Large**. This setting functions like a preset and controls padding of the
item and in some cases font size, as shown in the following table. When the
font size is the default (in other words the font size set by the theme), then
font size is controlled by this preset. If you set a specific font size for
the label or content in the **Typography** section on this tab, then that
custom size overrules the preset.

Settings  |  Small  |  Medium  |  Large  
---|---|---|---  
Label padding  |  Top 10px Right 15px Bottom 10px Left 15px  |  Top 15px Right 20px Bottom 15px Left 20px  |  Top 20px Right 25px Bottom 20px Left 25px  
Content padding  |  Top 0px Right 30px Bottom 10px Left 15px  |  Top 0px Right 40px Bottom 15px Left 20px  |  Top 0px Right 50px Bottom 25px Left 25px  
Font size (when font size is default set by theme)  |  Default  |  20px  | 26px  

#### **2 Label** section

Controls the styling of the item labels, which appear when the item is
collapsed.

:::note **Note**
Accordion labels are not marked as headings in the rendered output
and without any custom settings use the default text font and size. You can
customize text font and size in the **Text > Text typography** section.
:::

####  **3 Icon** section

Customize the icon that appears to expand and collapse the items.

####  **4 Content** section

Controls the text that appears when the item is expanded.

### Advanced tab

There are all the usual [**Advanced** tab settings](/beaver-builder/layouts/advanced-tab-rows-columns-modules.md) for margins, visibility, animations, and advanced HTML settings.

## Related modules

  * The [Tabs module](/beaver-builder/layouts/modules/tabs/tabs.md), which would display the labels as horizontal or vertical tabs.
  * The [Menu module](/beaver-builder/layouts/modules/menu/menu.md), in which each item could link to details on a different page.
