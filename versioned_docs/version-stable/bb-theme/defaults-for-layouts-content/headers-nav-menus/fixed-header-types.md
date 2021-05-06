---
id: fixed-header-types
title: Fixed header types
sidebar_label: Fixed header types
description: Describes the types of fixed headers that can be set for Beaver Builder Theme headers in the Customizer.
---

A fixed header means that as the page is scrolled down past the header, the header logo area and menu stay displayed at the top of the page, maintaining the background color you set for the header. There are several types of fixed headers, and they vary a bit by the layout you choose, as described here.

:::note **Notes**
* Fixed headers appear only on large screens, not on medium or small devices.
* Fixed headers are not available for **Nav vertical left**  and **Nav vertical right** layouts.
:::

If you want to enable a fixed header, go to **Customize > Header > Header layout**. The **Fixed header** field has the following settings.

### Disabled

If the fixed header is disabled, then the behavior is controlled by the **Hide header until scroll** setting. 
* If disabled, then the header scrolls up and out of sight as the page scrolls. 
* If enabled, then no header is displayed when the page first loads. After the visitor starts scrolling down the page, the full header slides down into view and remains as a fixed header. The **Scroll distance** controls the number of pixels of downward scrolling before the header appears.

### Fade in

After the header scrolls out of sight, a vertically narrow version of the header fades in with a smaller header logo text or image, as in this animation.

![](/img/fixed-header-types-bd26ac2c.gif)

There are the following differences between the full header and the fade-in version:

* If there is a top bar in the full header, it does not appear in the fade-in header.
* If the [header logo is an image](/bb-theme/customizer-settings/header.md/##header-logo), then there's an option to set a max height for the fade-in logo.
* For **Nav bottom**, **Nav centered**, **Nav right**, and **Nav centered + inline logo** layouts, in the fade-in header the header logo is on the left and the menu on the right. For the **Nav left** layout, the menu is on the left and the header logo is on the right.
* If [the site tagline appears](/bb-theme/defaults-for-layouts-content/headers-nav-menus/add-the-site-tagline-to-the-header.md) in the full header, it doesn't appear in the fade-in header. 
* If the search icon is enabled for the full header, it doesn't appear in the fade-in header. 
* For **Nav bottom** layouts, if a content section is enabled in the full header, it doesn't appear in the fade-in header.

### Shrink

In the **Shrink** fixed header, the topbar and full header layout stay in view but the vertical space between items in the header shrinks, as shown in the following animation. 

![](/img/fixed-header-types-b6a20a1b.gif)

* If the [header logo is an image](/bb-theme/customizer-settings/header.md/##header-logo), then you can set a max height for the shrink logo.
* If the header logo is text, the text size stays the same but the padding around it shrinks. The top bar, if enabled, retains its full height. 
* You can set a custom top padding to move the page content further down from the header.

Scrolling back to the top of the page returns the full-sized header.

### Fixed

The header and top bar remain at full size and stay anchored at the top while the page is scrolled. You can set a custom top padding to move the page content further down from the header.

