---
id: set-up-a-mega-menu
title: Set up a Mega Menu
sidebar_label: Set up a Mega Menu
---

<div className="embed-responsive">
<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/KFm_cwL5PHg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
</div>

You can turn standard drop-down menus into mega menus in the [Beaver Builder Theme](https://www.wpbeaverbuilder.com/wordpress-framework-theme/), as shown in this screenshot.

![](/img/set-up-a-mega-menu-14a64605.png)

## Create a Mega Menu

  1. From the WordPress admin panel, click **Appearance > Menus**.
  2. In the upper right corner, click **Screen Options** and make sure the **CSS Classes** checkbox is selected.
  3. Scroll down to your menu items and open the top-level menu item whose nested menu items you would like to turn into a mega menu.  
  In the screenshot below, the target top-level item is **Services**.
  4. In the **CSS Classes** field, enter **mega-menu**, as shown in the screenshot.  
All of the menu items nested below the top-level item will be converted into a mega menu instead of a standard drop-down list.  
  ![](/img/set-up-a-mega-menu-46f22036.jpg)

:::note **Note**
The mega menu is automatically disabled with the `mega-menu-disabled` class if the mega menu width exceeds that of the menu container. For full Bootstrap 4, the container width limit is 960px.
:::

## Hide mega menu headings

You can hide the heading for any of the columns in your mega menus.

**To hide a mega menu column heading:**

  1. On the **Appearance > Menus** page, scroll down to a nested menu item whose heading you want to hide.
  2. In the **CSS Classes** field, enter **hide-heading**.
