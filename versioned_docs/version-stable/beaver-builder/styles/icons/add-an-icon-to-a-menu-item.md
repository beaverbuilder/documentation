---
id: add-an-icon-to-a-menu-item
title: Add an icon to a menu item
sidebar_label: Add an icon to a menu item
---

It's easy to add a Font Awesome 5 icon to appear as a nav menu item. The icon
can replace menu text or appear before or after menu text. This works in all
of the following cases:

  * Any nav menu item in [Beaver Builder Theme](https://www.wpbeaverbuilder.com/wordpress-framework-theme/)
  * Any theme that has Font Awesome enqueued  
See the note below to use this technique with other themes.
  * The Beaver Builder Menu module in both regular page layouts and Themer layouts.

For example, suppose you want to replace an existing menu item labeled
**Cart** with a shopping cart icon, as shown in the following screenshot.

![](/img/how-to-tips-add-icon-menu-1.png)

:::note **Note**
The Font Awesome site has instructions to use fonts that require
inserting code with a link to their Content Delivery Network (CDN) into the
`<head>` tag of your site. That step is not necessary with Beaver Builder
because it loads the free Font Awesome 5 icon set locally for both the plugin
and the theme. If your theme does not enqueue Font Awesome 5 icons, you can
follow the [instructions to link to the Font Awesome CDN](https://fontawesome.com/start).
:::

## 1. Get the Font Awesome icon markup

1. Go to the [Font Awesome 5 free icon gallery](https://fontawesome.com/icons?d=gallery&m=free), find the icon you want, and click it.
2. Click the **Start using this icon** button.
3. Copy the HTML markup from the popup by clicking the **Copy** icon next to the code.

## 2. Paste the markup into the menu item

  1. In the WordPress admin panel, click **Appearance > Menus**.
  2. Click the down arrow next to your **Cart** menu item (or whatever menu item you're using) to open its properties.
  3. In the **Navigation Labe** l field, replace the *Cart* text with the copied icon code or paste the code before or after the text, depending on how you want the icon to appear.  
For the example shown in the screenshot above, the code looks like this:  
`<i class="fas fa-shopping-cart"></i>`

  4. (Optional) If you want to resize the icon, you can add a class that Font Awesome will automatically convert to an em unit.  
The mapping of classes to ems is shown on [Font Awesome's Resizing Icons
page](https://fontawesome.com/how-to-use/on-the-web/styling/sizing-icons).  
For example, to increase the icon size to 2 ems, add the `fa-2x` class like
this:  
`<i class="fas fa-2x fa-shopping-cart"></i>`  
![](/img/how-to-tips-add-icon-menu-2.png)

  5. Click **Save menu**.

The icon should now appear on your menu.
