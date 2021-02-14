---
id: fixed-header-types
title: Fixed header types
sidebar_label: Fixed header types
---

A fixed header means that as the page is scrolled down past the header, the header logo area and menu stay displayed at the top of the page, maintaining the background color you set for the header. There are several types of fixed headers, and they vary a bit by the layout you choose, as described here.

:::note **Notes**
* Fixed headers appear only on large screens, not on medium or small devices.
* Fixed headers are not available for **Nav vertical left**  and **Nav vertical right** layouts.
:::

If you want to enable a fixed header, go to **Customize > Header > Header layout**. The **Fixed header** field has the following settings.

### Disabled

If the fixed header is disabled, the header scrolls up and out of sight as the page scrolls.

With this setting, you have two additional options:

  * **Hide header until scroll**  
  No header is displayed when the page first loads, but the full header slides down into view and remains as a fixed header after the visitor starts scrolling down the page.
  * **Scroll distance**  
  You can set the number of pixels of downward scrolling before the header is displayed.

### Fade in

After the header scrolls out of sight, a vertically smaller version of the header fades in, as in this animation.

![](/img/fixed-header-types-bd26ac2c.gif)

If there is a top bar in the full header, it does not appear as part of the fade-in header.

For **Nav bottom**, **Nav centered**, **Nav right**, and **Nav centered + inline logo layouts**, the header logo is on the left and the menu on the right. For the **Nav left** layout, the menu is in the left and the header logo is on the right.

If the tagline is enabled in the full header, it doesn't appear in the fade-in header. If the search icon is enabled for the full header, it doesn't appear in the fade-in header. For **Nav bottom** layouts, if the content layout is enabled in the full header, it doesn't appear in the fade-in header.

### Shrink

The vertical space in the full header shrinks. The full header layout remains in view but the vertical space shrinks, as shown in the following animation. If the header is a logo, the logo shrinks in size. If the header logo is text, the text size stays the same but the padding around it shrinks. The top bar, if enabled, retains its full height. Scrolling back to the top of the page returns the full-sized header.

![](/img/fixed-header-types-b6a20a1b.gif)

### Fixed

The header and top bar remain at the full size and stay anchored at the top while the page is scrolled.
