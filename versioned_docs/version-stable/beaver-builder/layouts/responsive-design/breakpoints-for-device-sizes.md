---
id: breakpoints-for-device-sizes
title: Breakpoints for device sizes
sidebar_label: Breakpoints for device sizes
---

Both the Beaver Builder plugin and the Beaver Builder Theme have their own
breakpoint values for small, medium and large devices, which you can
customize. (/beaver Builder Theme has this capability since **Version 1.7.3**.)
These values correspond to browser widths and determine the point at which the
layout switches to that for medium and small devices.

## Behaviors for medium and small device sizes

Here's what changes in the parts of the page controlled by the plugin and
theme when you change from one device size category to another. This is the
default behavior. We'll give you ways to get different behavior in the last
section.

&nbsp;  |  Medium devices  |  Small devices  
---|---|---  
Beaver Builder plugin  |  VISIBILITY: **Advanced tab > Visibility > Breakpoint sizes** must include **Medium devices** to appear on the published page (default is all sizes)  |  VISIBILITY: **Advanced tab > Visibility > Breakpoint sizes** must include **Small devices** to appear on the published page  COLUMN STACKING: Columns in layout stack vertically
Beaver Builder Theme  |  HEADER LAYOUT: **Nav Right**, **Nav Left**, and **Nav Centered + Inline Logo** change to **Nav Centered** (menu below logo)  | NAV LAYOUT: Nav menu collapses to Hamburger icon or MENU link  

:::note **Note**
If you use a Beaver Themer header layout, the Beaver Builder plugin's breakpoints will control header behavior.
:::

## Customize device size behavior

### Customize the breakpoint values

The breakpoint values are found in the following locations:

**To customize the breakpoint values in the Beaver Builder Plugin:**

  * In the Beaver Builder editor, click the down arrow in the upper left corner to open the **Tools** menu, then click **Global settings** and go to the **Responsive layout** section.

**To customize the breakpoint values in the Beaver Builder Theme:**

  * From the WordPress admin panel, click **Appearance > Customize > General > Layout** and scroll to the two breakpoint settings.

Because of differences in architecture between the plugin and theme, the
defined breakpoint values are one pixel different from the plugin in
determining device behavior, as shown in this table.

&nbsp;  |  Large devices  |  Medium devices  |  Small devices  
---|---|---|---  
Default breakpoint value (plugin and theme): browser width  |  undefined  |  992px  |  768px  
Browser width range for device size  |  Plugin: 993px and higher Theme: 992px and higher  |  Plugin: 769-992px  Theme: 768-991px  |  Plugin: 768px and lower Theme: 767px and lower  

###  Keep visibility the same in landscape and portrait tablet orientation

Here's an example of how a row, column, or module set not to be visible at
small devices can mean that that content appears in landscape orientation and
disappears in portrait orientation as you rotate the tablet, and how to fix
that.

The display size of some iPad models is 1024x768px for landscape orientation
and 768x1024px for portrait orientation. The default small device size in the
Beaver Builder plugin is 768px, so if you set visibility for a row, column, or
module to not include small devices, then it will not appear on this iPad in
portrait orientation, but it will appear at landscape orientation.

To avoid this behavior, change the plugin's default small device breakpoint
from 768px to 767px. Check the display size of other tablets and tweak that
setting if necessary.

### Reverse or prevent column stacking

By default, in Beaver Builder layouts, columns stack vertically on small
devices. See [this article](/beaver-builder/layouts/columns/column-layouts-overview.md) for a detailed description of how nested columns stack. This stacking behavior applies to both standard content area
layouts and to Beaver Themer layouts, such as in a Header layout.

You can reverse the column stacking order for any layer of columns in your
layout by [following these instructions](/beaver-builder/layouts/columns/reverse-column-stacking-order.md).

You can also [prevent columns from stacking](/beaver-builder/layouts/columns/prevent-column-stacking-with-custom-widths.md) by setting custom responsive widths.

### Use the mobile nav for larger devices

If you use a Beaver Builder Theme header, by default the responsive nav
Hamburger icon or MENU link is used for small devices, but the following
setting can be changed to include medium devices or all devices: **Appearance > Customize > Header > Nav layout > Responsive Nav Breakpoint**. You can change other responsive nav settings on that tab, including the text for the
MENU link.

If you use a Beaver Themer header, the Menu module's **General** tab has a
**Responsive** section with a **Responsive breakpoint** field where you can
change the device sizes that use the responsive nav.

### Preserve the theme's header layout on medium devices

If you want to keep the Beaver Theme's **Nav Left**, **Nav Right**, and
**Nav Centered + Inline Logo** header layouts intact on medium devices instead
of changing to the **Nav Centered** layout, set the **Medium device
breakpoint** at **Appearance > Customize > General > Layout** to match the
mobile setting, which by default is **768px**. This keeps the same header
layout at both landscape and portrait orientation on the models of iPads whose
portrait orientation is 768px or higher. Tweak this setting if you want to
include other tablets, but also make sure that your menu is readable and
tappable at portrait orientation.
