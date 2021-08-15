---
id: icon-and-icon-group
title: Icon and Icon Group
sidebar_label: Icon and Icon Group
description: The Icon and Icon Group modules displaya single icon plus optional text or a group of icons
---

The Icon and Icon Group modules display one or a group of icons plus optional text.

## Differences between the Icon and Icon Group modules

Besides the obvious difference that the Icon module adds a single module whereas the Icon Group module lets you add several modules in a group, here are some other differences.

* Text layout with respect to the icon  
If you add text to an Icon module, the text appears to the right of the icon. If you add text to any module in an Icon group, the text appears below the icon.
* Style settings  
For the Icon Group module icons, only colors can be set differently for individual icons in the group. Other style settings apply to all of the icons and text. 
* Multiple icon spacing and responsive behavior  
You can use the Icon module in adjacent columns to simulate a group, and in some cases this is preferable. The Icon Group module gives you more control over the exact spacing between the icons and behaves somewhat differently as the screen size decreases.

:::tip **Tips**
* You can [change Beaver Builder settings to control which icon sets are available for selection](/beaver-builder/styles/icons/enable-disable-or-delete-icon-sets.md). 
* Beaver Builder loads the stylesheet and font files for every icon set you use on a page. For example, if you use one icon from Font Awesome and one icon from Foundation on your page, both icon sets are loaded, which can slow load time for your page. If page load time is a concern, try to limit your icons to one set, or [create a custom icon set](/beaver-builder/styles/icons/create-and-import-a-custom-icon-set.md) using only the icons you need on the page.
:::

## Icon module

The Icon Module lets you insert a single icon into your layout from your available icon sets and add optional text. Here's one example.

![](/img/icon-module-1.jpg)

Another example is the use of a large Arrow icon as a pointer to the content below the fold in a hero image, as shown in the following screenshot example. It alerts people to keep scrolling, but the icon can also contain a link to the following content that will result in [smooth scrolling](/beaver-builder/advanced-builder-techniques/smooth-scrolling-links.md) to the linked section if clicked.

![](/img/icon-module-2.jpg)

Here are the ways that you can add and configure the icon and text.

### General tab

This tab has the following settings.

* **Icon**  
Select an icon from one of your available icon sets.
* **Link**  
Optional. Add a link to make the icon clickable.
* **Screen reader text**  
To improve accessibility, enter text explaining the icon to help screen readers. The text appears only in the HTML output. For example, if you use the Font Awesome guitar amp icon and enter **guitar amp icon** in the **Screen reader text** setting, the HTML output appears as follows:  
  
  ```html
<i class="fas fa-amp-guitar" aria-hidden="true"></i>
<span class="sr-only">guitar amp icon</span>
  ```
* **Text**  
There's a WYSIWYG text editor box where you can format the text, plus additional color and typography formatting on the **Style** tab.  
In the output, the text appears to the right of the icon.

### Style tab

The Style tab consists of three sections: **Icon**, **Icon Colors**, and **Text**.

#### Icon section

* **Size**  (responsive)
Sets the size of the icon. You can set different measurement units or set different sizes for large, medium, and small devices.
* **Alignment** (responsive)  
Sets horizontal alignment: left, right, or center. You can set different alignments depending on device size.

#### Icon colors section

You can set the icon color in various states.

* **Color**  
Sets the color for the icon.
* **Hover color**  
Sets the color of the icon when the mouse hovers over it.
* **Background color**  
If a color is specified, sets a circular background behind the icon.
* **Background hover color**
Sets the circular background color when the mouse hovers over the icon.
* **Gradient**  
Applies a linear gradient to the circular background.

#### Text section

* **Text spacing**  
Controls the distance between the text and the icon by moving the text further right as the value increases. 
* **Text color**  
Sets the color of the text.
* **Text typography**  
See [this article](/beaver-builder/styles/typography/typography.md) about the **Typography** section settings.

:::note **Notes**
* If there is no font size specified in the **Typography** section, the default text font size (usually set in the theme's Customizer settings) is used. As screen size grows smaller. The text font size decreases as well.
* If a custom text size is set in the **Typography** section for large devices, it propagates to smaller devices and the font size stays the same as screen size grows smaller.  The text line wraps to the right of the icon when necessary, but if the font size is too big the right side of the text can be cut off on small devices.
* For maximum responsive control, set a custom text size for each device size, using the [responsive settings icon](/beaver-builder/layouts/responsive-design/responsive-settings-icon.md) for the **Typography** section.
:::

### Advanced tab

There are all the usual [**Advanced** tab settings](/beaver-builder/layouts/advanced-tab-rows-columns-modules.md) for margins, visibility, animations, and advanced HTML settings.

### Alternatives to the Icon module

You can also use single icons with text and a link in the Callout module, where you have more control over whether the text appears to the left or right of the icon. 

## Icon Group

The Icon Group Module inserts a group of icons with optional text underneath and uniformly spaces them. You can add a link to each icon and adjust the spacing between the icons. 


![](/img/icon-module-3.jpg)

### Icons tab 

This tab displays the list of existing icons in the icon group and lets you open them for editing or add more.

### Style tab (global) 

This tab has the following style settings, which apply to all of the icons and text.

The global **Style** tab has the following sections: **Icon**, **Icon colors**, and **Text format**.

#### Icon section

* **Size**  (responsive)  
Sets the size of the icon. You can set a different measurement unit or set a different size for large, medium, and small devices.
*  **Spacing**  
Sets the horizontal spacing between icon/text items in the group. 
* **Alignment** (responsive)  
Sets horizontal alignment of the entire icon group: left, right, or center. You can set different alignments depending on device size.

#### Icon colors section

[Color settings for individual icons](#individual-icons-style-tab) take precedence when there is a conflict. 

* **Icons color**  
Sets the color for the icons in the group.
* **Hover color**  
Sets the color of the icons when the mouse hovers over each one.
* **Background color**  
If a color is specified, sets a circular background behind each icon in the group.
* **Background hover color**
Sets the circular background color when the mouse hovers over it.
* **Gradient**  
Applies a linear gradient to the circular background of each icon.

#### Text format section

* **Text color**  
Sets the color of the text.
* **Text typography**  
See [this article](/beaver-builder/styles/typography/typography.md) about the **Typography** section settings.

:::note **Notes**
* If there is no font size specified in the **Typography** section, the default text font size (usually set in the theme's Customizer settings) is used. As screen size grows smaller, the text font size decreases.
* If a custom font size is set in the **Typography** section for large devices, it propagates to smaller devices and the size stays the same as screen size grows smaller.  This can cause the icon/text items in the group to wrap with an uneven vertical alignment. 
* For maximum responsive control, set a custom text size for each device size, using the [responsive settings icon](/beaver-builder/layouts/responsive-design/responsive-settings-icon.md) for the **Typography** section.
:::

#### Individual icons: General tab

* **Icon**  
Select an icon from one of your available icon sets.
* **Link**  
Optional. Add a link to make the icon clickable.
* **Icon text**  
Enter the text that will appear under the icon.
* **Screen reader text**  
To improve accessibility, enter text explaining the icon to help screen readers. The text appears only in the HTML output. For example, if you use the Font Awesome guitar amp icon and enter **guitar amp icon** in the **Screen reader text** setting, the HTML output appears as follows:  
  
  ```html
<i class="fas fa-amp-guitar" aria-hidden="true"></i>
<span class="sr-only">guitar amp icon</span>
  ```

#### Individual icons: Style tab

Colors you assign to individual icons on this tab override any colors you set on the global **Style** tab for the Icon Groups module.  The colors affect icons only, not text.

* **Color**  
Sets the base color for this icon.
* **Hover color**  
Sets the color of this icon when the mouse hovers over it.
* **Background color**  
If a color is specified, sets a circular background behind this icon. If a global background color was set, it overrides that color for this icon.
* **Background hover color**
Sets the circular background color when the mouse hovers over the circular background.

:::tip **Tip**
Although there are no border settings for icon background colors, you can create a transparent background with a circular border this way:

1. On the global **Style** tab in the Icon Group module, set any background color and set **Gradient** to **Yes**. This produces an outline around the color.
2. Open an individual icon for editing and on the **Style** tab, set **Background color** to any  color but set the opacity for that color to 0. The result is that the background color disappears but the outline remains. 
3. Repeat for the other icons in the group if you want all of them to have a transparent color with a background border.

![Create a transparent icon background with a  border](/img/icon-icon-group-4.png)
:::

## Advanced tab

There are all the usual [**Advanced** tab settings](/beaver-builder/layouts/advanced-tab-rows-columns-modules.md) for margins, visibility, animations, and advanced HTML settings.

### Related layouts

Another way to group icons in a layout is to use several Icon modules in
separate columns. Icons in separate columns in most cases stack
differently from an Icon Group, so you can see which method works best for
you.

