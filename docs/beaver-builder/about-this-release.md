---
id: about-this-release
title: About this release
sidebar_label: About this release
description: Describes features in the latest prerelease of the Beaver Builder plugin.
---

Here are the new features in Beaver Builder 2.5.

:::warning **Warning**
Please do not use alpha releases in a production environment because the risk of bugs is high and features can be changed or removed based on testing and feedback.
:::

## New Beaver Builder editor features

### View an outline of your layout

The new Outline panel lets you view the structure of your page layout in an outline format. 

Access the Outline panel by clicking the Outline icon to the left of the **Done** button in the editor:

![Outline panel icon in the Beaver Builder editor](/img/2-5-features-outline-panel-icon-363.png) 

In this release, the Outline Panel is view-only. Make changes to your layout in the usual fashion.

### Disable undo/redo functionality in the editor
The [History manager](/beaver-builder/troubleshooting/miscellaneous/reduce-disable-undo-redo-manager/#reduce-history-manager-functionality.md) can cause sluggish behavior in the editor, particularly when your site is in a shared hosting environment or the page you're editing has a large number of rows and modules. 

If you need to, you can manually disable the History Manager functionality by adding `&nohistory` to the end of your URL in the Beaver Builder editor. For example:

```markup
https://mysite.com/?fl_builder&nohistory
```

## Existing module improvements

### Content Slider module

There's a new **Background overlay** option for individual slides.

![Content slider module background overlay, 2.5 features](/img/2-5-features-content-slider-module-background-overlay.png) 

<!---### Icon Group module

You can now display text next to Icons, just like the Icon Module. 
-->
### Menu module

Added features:

#### Responsive menu style

The **Style** tab has a new **Responsive toggle** section with options for submenu link colors and the responsive toggle on smaller devices.

![Menu module responsive toggle, 2.5 features](/img/2-5-features-menu-module-responsive-toggle.png) 

#### Centered inline logo option

On the **General** tab, there's a new section to create a centered inline menu by inserting a logo.

![Menu module centered inline logo, 2.5 features](/img/2-5-features-menu-module-centered-inline-logo.png) 

#### Option to add search

On the **General** tab, there's a new section to add search to the menu:

![Menu module, add search, 2.5 features](/img/2-5-features-menu-module-search-option.png) 

#### Support for WooCommerce Dynamic Cart 
If you have WooCommerce installed, there's a section on the Menu module **General** tab to display the WooCommerce Dynamic Cart. You can display the number of items, the total amount, or both.

This screenshot shows the difference between the **Cart** menu item added to the WordPress menu at **Appearance > Menus** versus the dynamic cart added with the Menu module:

![Menu module WooCommerce dynamic cart, 2.5 features](/img/2-5-features-menu-module-woocommerce-cart.png) 

<!---  ### Posts module

The **No posts found** option has been moved to the **Content** tab.
-->
### Posts Slider module

Now includes the standard Beaver Builder [Typography section](/beaver-builder/styles/typography/typography.md) for the **Post Title**, **Post Info**, and **Post Content** sections.

<!--### Posts Slider & Posts Carousel modules

There's now an option to customize the output when no posts are found.
-->
### Pricing Table module 

The Pricing Table module has a number of enhancements, summarized in this screenshot and explained in the following sections.

![Pricing Table module 2.5 features](/img/2-5-features-pricing-table-overview.png) 

#### Display a ribbon
You can select an option to display a ribbon with custom text in the upper left or right corner of a price column.

#### Monthly/yearly pricing
There is a new **Toggle pricing** option where you can choose  a single price or a toggle to display monthly and yearly pricing.

#### Icons for each feature
You can assign icons to individual features. Icons added to an individual feature override a general icon if one has been set for all features.

#### Typography options

Each feature in a Pricing Box now has its own **Style** tab with the standard Beaver Builder [Typography section](/beaver-builder/styles/typography/typography.md). 

Typography sections have also been added to the **Title** and **Price** in each pricing box and the **Toggle Pricing** icon at the top of the table.

### Video module

There are two additional options on the **Structured data** tab for `contentUrl` and `embedUrl`.

## Column improvements

* You can now set the width for single columns.  
![Price Table module 2.5 features](/img/2-5-features-single-column-width.png) 
<!-- * There are now custom positions available for backgrounds. -->

## Improvements in the wp-admin UI

### Duplicate option in post and page lists

For posts (including pages and custom post types) that use a Beaver Builder layout, there's now an **Add Duplicate** option, allowing you to duplicate Beaver Builder layouts to new posts and pages without the need to open the Tools menu in the editor.

![Duplicate post, a 2.5 feature](/img/2-5-features-duplicate-post.png) 

## Other improvements

* There is basic support for the official [Font Awesome Plugin](https://wordpress.org/plugins/font-awesome/) so you can use that plugin's shortcodes in your Beaver Builder layouts. If you want to use Font Awesome Pro icons, be sure to follow the plugin installation instructions for enabling your domain in the Font Awesome CDN.
* There's now an easy way to disable [smooth scrolling](/beaver-builder/advanced-builder-techniques/smooth-scrolling-links.md) so a link jumps to its target on the same page.  
on the **Advanced** tab where you set the anchor in the **ID** field, add `fl-no-scroll` to the **Class** field  below it. See the [smooth scrolling article](/beaver-builder/advanced-builder-techniques/smooth-scrolling-links.md) for more information about creating target anchors on a page and linking to them.
* Change in Debug Mode operation: errors are output only if  the`showerrors` parameter is in the URL.  
This feature applies when Debug Mode is enabled at **Settings > Beaver Builder > Tools**.
* CSS and JavaScript files are now automatically cleared when the URL changes.
