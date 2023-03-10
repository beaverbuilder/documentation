---
id: toggle
title: Responsive Device Toggle
sidebar_label: Responsive Device Toggle
description: With the Responsive Device Toggle, you can configure row, column, and module options according to the size of the device.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The purpose of this article is to explain what the responsive device toggle is and how it helps you optimize your Beaver Builder layouts for specific devices.

![Responsive device toggle](/img/beaver-builder/responsive-design--responsive-toggle--1.jpg)

## Introduction

Responsive Device Toggle allows you to customize the layout and appearance of your layout's rows, columns, and modules on a per-device basis, using Beaver Builder breakpoints. Options that support the Responsive Device Toggle will display a device icon. Every device size is represented by a different icon in order to make it easy to distinguish the device size you're currently using. 

<ul className="dashicons-list">
  <li><span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="currentColor" d="M3 2h14c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1h-5v2h2c.55 0 1 .45 1 1v1H5v-1c0-.55.45-1 1-1h2v-2H3c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1zm13 9V4H4v7h12zM5 5h9L5 9V5z"/></svg></span> <span>Extra Large</span></li>
  <li><span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="currentColor" d="M3 3h14c.6 0 1 .4 1 1v10c0 .6-.4 1-1 1H3c-.6 0-1-.4-1-1V4c0-.6.4-1 1-1zm13 2H4v8h12V5zm-3 1H5v4zm6 11v-1H1v1c0 .6.5 1 1.1 1h15.8c.6 0 1.1-.4 1.1-1z"/></svg></span> <span>Large</span></li>
  <li><span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="currentColor" d="M4 2h12c.55 0 1 .45 1 1v14c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1zm11 14V4H5v12h10zM6 5h6l-6 5V5z"/></svg></span> <span>Medium</span></li>
  <li><span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="currentColor" d="M6 2h8c.55 0 1 .45 1 1v14c0 .55-.45 1-1 1H6c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1zm7 12V4H7v10h6zM8 5h4l-4 5V5z"/></svg></span> <span>Small</span></li>
</ul>

You can cycle between different device sizes by repeatedly clicking the icon, starting with Extra Large (default), then Large, Medium, and finally Small. You will be redirected to the Extra Large device size if you click the device icon while on Small.

Any time you configure an option for a specific device size in a row, column, or module, Beaver Builder generates CSS code that applies those settings specifically to that device size. The following is an example of what Beaver Builder CSS might look like if you used the responsive device toggle for the Heading module to set the font-size for each device.

<details><summary>Responsive Device Toggle CSS Example</summary>

```css
/* Extra Large (default) */
.fl-module-heading .fl-heading { 
 font-size: 60px;
}

/* Large device breakpoint */
@media(max-width: 1200px) { 
 .fl-module-heading .fl-heading {
  font-size: 50px;
 }
}

/* Medium device breakpoint */
@media(max-width: 992px) { 
 .fl-module-heading .fl-heading {
  font-size: 40px;
 }
}

/* Small device breakpoint */
@media(max-width: 768px) { 
 .fl-module-heading .fl-heading {
  font-size: 30px;
 }
}
```

</details>

## Usage

To use the responsive device toggle icon in Beaver Builder, open the Settings Window and configure the row, column, or module as usual. Then use the device icon to toggle between the different device sizes and make the necessary adjustments. Repeat this process to adjust the option for the different device sizes.

:::info
By default, if you set an option on the default device size (Extra Large device), that value applies to every device size. Beaver's Builder's automatic responsive behavior often means that you do not have to adjust the settings any further. However, if you wish, you can fine-tune the option at each device size.
:::

## Availability

Responsive Device Toggle is available for most row, column, and module options in Beaver Builder, but not all Usually, the Responsive Device Toggle can be used to control:

* Background images & positions.
* Margin & padding.
* Typography, including text alignment.
* Borders & shadows.
* Spacing within and between modules.

## Examples

Here are some examples of how you can optimize the layout and design for each device using the Responsive Device Toggle, ensuring that your content looks great on any device.

### Font Size

To ensure that our text looks great on any device, we use the Responsive Device Toggle, which allows us to adjust the font size of a Heading module. It is not limited to the Heading module, but can be applied to any module that has typography settings.

<Tabs>
<TabItem value="extra-large" label="Extra Large device" default>

![Extra Large device icon](/img/beaver-builder/responsive-design--responsive-toggle--2.jpg)

</TabItem>
<TabItem value="large" label="Large device">

![Large device icon](/img/beaver-builder/responsive-design--responsive-toggle--3.jpg)

</TabItem>
<TabItem value="medium" label="Medium device">

![Medium device icon](/img/beaver-builder/responsive-design--responsive-toggle--4.jpg)

</TabItem>
<TabItem value="small" label="Small device">

![Small device icon](/img/beaver-builder/responsive-design--responsive-toggle--5.jpg)

</TabItem>
</Tabs>

### Background Position

The background image may not be positioned properly on all devices. You can use the Responsive Device Toggle to reposition your background image to bring your subject matter back into focus.

The Beaver Builder logo isn't positioned centrally for the small device in the example below. In order to resolve this problem, choose the **Custom Position** option and adjust the **X Position** for small devices.

<Tabs>
<TabItem value="backgroundposition-before" label="Before" default>

![Extra Large device icon](/img/beaver-builder/responsive-design--responsive-toggle--7.jpg)

</TabItem>
<TabItem value="backgroundposition-after" label="After">

![Large device icon](/img/beaver-builder/responsive-design--responsive-toggle--8.jpg)

</TabItem>
</Tabs>
