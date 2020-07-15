---
id: menu
title: Menu
sidebar_label: Menu module
---

The Menu module can give you more options for menu content, style, and layout
than the menu available in your theme or widget area. It also gives you the
ability to insert a menu anywhere in your layout. Here are some ideas:

  * Use special menus in your Beaver Builder page layouts. For example, if you have one groups of static pages on your site related to a particular topic, you could create a special menu for the pages in that particular group and display the links in a Menu module on the main page in that group.
  * Save a Menu module and [use it in shortcode in a text widget](/beaver-builder/advanced-builder-techniques/shortcodes/use-shortcodes-in-your-layouts#add-beaver-builder-shortcode-to-a-wordpress-text-widget.md). There's a Custom Menu widget in WordPress, but the menu module gives you more control over styling without resorting to CSS.
  * If you have FAQs that contain fairly long answers, create a separate Post for each individual FAQ, then create a menu item for each Post, then use that menu in a Menu module embedded in your page content. That menu serves as a table of contents linking to the Post that contains the answer. The following screenshot shows an example of a menu used as an FAQ table of contents.

![](/img/menu-module-1.jpg)

##  Choose menu layouts

The Menu module has the following four different menu layout options. For the
first three options, you have a choice of an arrow or plus sign to display the
submenu.

  * **Horizontal**  
A standard horizontal layout that supports dropdown submenus, with a choice of
down arrow, plus sign, or nothing. These two screenshots show horizozntal
menus with an arrow for the submenu. The submenu is opaque in the upper
screenshot and semi-transparent in the lower menu.  
![](/img/menu-module-2.png)  
![](/img/menu-module-3.png)

  * **Vertical**  
A vertical layout that has support for submenus that fly out to either the
left or right of the menu. For example, here's the flyout on mouseover of the
main menu item:  
![](/img/menu-module-4.png)  
![](/img/menu-module-5.png)

  * **Accordion**  
A vertical accordion layout that displays submenus inline when the toggle icon
is clicked. For example:  
![](/img/menu-module-6.png)  
Note that with accordion layout, submenu opacity background is 100%, no matter
how it's set on the **Style** tab. In the following screenshot, the submenu
background opacity is set at 60% but appears at 100%.  
![](/img/menu-module-7.png)

  * **Expanded**  
Epanded layout is similar to the [WordPress Navigation Menu widget](https://en.support.wordpress.com/widgets/navigation-menu-widget/).
Top-level menu and submenu items are displayed in an unordered list style
format. For example:  
![](/img/menu-module-8.png)

## Set responsive behavior

You can choose how to display the menu on mobile devices: the expanded form, a
hamburger icon, a MENU label, or both the hamburger icon and MENU label.
There's also a setting for the breakpoint at which the changeover to the
hamburger icon or MENU label appears: By default, it appears on small devices
only, but you can change the behavior to medium and small devices, or all
devices.

There's a Responsive style section with the following three options for how
expand the menu when the hamburger icon is clicked:

  * Inline
  * Below row
  * Overlay

**Inline** means that the expanded menu falls below the hamburger. This works
for centered menus but doesn’t work if, for example, you have a hamburger in a
small column on the right. The menu gets squished.

**Below row** removes the menu in the markup and puts it below the column that
the menu is in. This means that expanded menus in small columns still appear
inline but don’t get squished.

**Overlay** will overlay the expanded menu on top of the content below.

## Style everything

Use the **Style** tab of the Menu module to create unique menu designs with
style options:

  * Left, center, or right alignment of main menu items
  * Show or hide a drop shadow on the submenu box
  * Text link and hover color
  * Font size, format (uppercase, lowercase, caps), and weight (normal, bold, light)
  * Horizontal and vertical spacing between links
  * Menu background color and opacity
  * Submenu background color and opacity
  * Background hover color
  * Show or hide separators between menu items, set separator color and opacity

:::important **Notes:**
If you are using the Beaver Builder Theme, _the font-family is what
you defined for page content in_ **Customize > General > Text** and cannot be
customized on the Style tab. By default, the menu link colors appear in the
color you defined in **Appearance > Customize > General > Accent Color**, and
you can customize this color.
:::

## Style options for mobile devices

The **Mobile Style** option on the **General** tab has the following settings:

  * **None**  
The menu does not collapse and all of the menu items show in an unordered
list style format.

  * **Hamburger Icon**  
The menu collapses as the screen becomes smaller, and a hamburger icon
(horizontal lines) toggle button appears.

  * **Hamburger Icon + Label**  
The menu collapses as the screen becomes smaller, and a hamburger icon toggle
button plus the word **MENU** appears.

  * **Menu Button**  
This option displays a button labeled **MENU**, similar to how the Beaver
Builder theme works.

## Advanced tab

There are all the usual [**Advanced** tab settings](/beaver-builder/layouts/advanced-tab-for-rows-columns-modules.md) for margins, visibility, animations, and advanced HTML settings.

