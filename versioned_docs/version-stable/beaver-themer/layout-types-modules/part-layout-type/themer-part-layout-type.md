---
id: themer-part-layout-type
title: Part layout type
sidebar_label: Part layout type
---

The Part layout in Beaver Themer is used to display pieces of content in in various areas of the page outside the content area. For example, you could display a sale banner between the heading and the content area on particular pages of your site. In the screenshot, the Part layout contains a single row with a Heading module and Button module:

![](/img/themer-part-layout-type-eee5c85b.png)

When the sale is over, simply turn off the Part layout at **Beaver Buider > Themer layouts**, and the sale banner disappears from view everywhere.

![](/img/themer-part-layout-type-c14fd7b8.png)

## Part location and position

The Part-type  layout has the same **Location** field as other Themer layouts, where you can specify which pages of your site on which you want the layout to appear.

The Part layout has an additional field called **Position**, where you can specify which location within a page the layout should occur. The following screenshot shows the list of positions available when the Beaver Builder Theme is installed:

![](/img/themer-part-layout-type-68352acd.png)

:::note **Note**
The list of positions depends on hooks in the Beaver Builder Theme. You don’t need to use the Beaver Builder Theme to get support for Themer Parts, but you do need to use one of the [themes that support Beaver Themer](/beaver-themer/management-compatibility/beaver-themer-supported-themes.md). 
:::

If you’re not sure which position to choose, check the [Theme action reference](/bb-theme/developer/theme-action-reference.md) for more information about where in the rendered page's HTML each position fires. 

The **Order** field requires an integer from 0 to any number. You only need to change this number if you have two part layouts in the same position. The lower number appears above the higher number. For example, if you have a warning with order 0 and a banner with order one, the warning will appear above the banner in the same position on the page.

## Initial layout

Rather than an initial layout for the Part Themer layout, the full set of templates from Beaver Builder pops up when you launch Beaver Builder to edit the Themer layout for the first time. This lets you insert any of the default templates or your own saved layout templates.

For example, if you've already built a banner on a regular page with Beaver Builder, you can save it as a template and then use it in a Part Themer layout in a number of new locations outside of the content area.
