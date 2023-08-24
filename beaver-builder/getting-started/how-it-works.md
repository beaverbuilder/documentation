---
id: how-it-works
title: How It Works
sidebar_label: How It Works
description: The purpose of this article is to explain how Beaver Builder works, what you can use it for, what you can't, and how the styling cascade works.
draft: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The purpose of this article is to explain how Beaver Builder works, what you can use it for, what you can't, and how the styling cascade works.

## Content Area

In WordPress, the content area is where the content written in the WordPress editor appears on the page or post. It's the area between the header and the footer in most themes.

Beaver Builder works on the WordPress content area and allows you to create complex layouts for pages, posts, and custom post types. You can use one of Beaver Builder's [prebuilt templates](templates/prebuilt-templates.md) or [design your own template](templates/saved-templates.md) by combining [Rows](rows/index.md), [Columns](columns/index.md), and [Modules](modules/index.md).

![Beaver Builder works on the WordPress content area](/img/beaver-builder/getting-started--how-it-works--1.png)

## Sidebars

Although sidebars can contain content, that content is added to widgets, so those areas are referred to as widgetized areas and are not considered part of the content area.

:::tip
The [Sidebar module](modules/sidebar.md) can be used to add **widgetized areas** to your layouts.
:::

## Header & Footer

Header and footer areas are outside the content area and are controlled by the theme. As a result, Beaver Builder is unable to customize or interact with these areas.

:::info
Beaver Themer allows you to create **header and footer layouts** that replace the theme's default header and footer.
:::

## Gutenberg & Classic Editor

The Beaver Builder plugin is compatible with the WordPress 5 block editor (Gutenberg) in the same way that it's compatible with the [WordPress classic editor](https://wordpress.org/plugins/classic-editor/). Depending on whether you set WordPress to prefer the block editor or use a plugin to maintain the classic editor, you can move text and images between Beaver Builder and the WordPress editor on a limited scale.

See the [Convert Content](advanced/convert-content.md) and [Launch Beaver Builder](getting-started/launch-builder.md) articles for more information.

## Reusable Blocks & Widgets

You can use [Reusable Blocks](https://wordpress.org/support/article/reusable-blocks/) and [Widgets](https://wordpress.org/support/article/wordpress-widgets/) in Beaver Builder layouts. If a reusable block or widget is updated in WordPress, it's also updated in any Beaver Builder layout where it's used.

See the [Reusable Blocks](modules/reusable-blocks.md) and [Widgets](modules/widgets.md) articles for more information.

## WordPress Multisite

The Beaver Builder plugin is compatible with [WordPress Multisite](https://wordpress.org/support/article/create-a-network/), but only the Pro and Agency licenses support it. In addition, the Agency license includes [Network-wide settings](settings/index.md#network-wide-settings-agency-only) that can be applied to all subsites on the network. You can also override network-wide settings on a [site-by-site basis](settings/index.md#override-network-wide-settings-agency-only).

## WordPress Themes

Beaver Builder has been developed to work with almost any theme. However, there are some exceptions to this rule such as:

- Themes bundled with other page builders
- Themes designed to work with other page builders
- Themes that don't use the WordPress loop
- A theme has its own version of jQuery enqueued or hardcoded

If you're using a premium third-party theme, you could test it out by installing the [Beaver Builder Lite version available from WordPress.org](https://wordpress.org/plugins/beaver-builder-lite-version/) to see if you encounter any issues. If you don't, then you shouldn't have any issues with a premium version of Beaver Builder.

## Post Types

By default, Beaver Builder is enabled only for WordPress pages, not for posts. When you [enable posts or custom post types](settings/post-types.md), you can use Beaver Builder to create layouts for the content area of single posts or custom post types.

:::info
When the builder is enabled for pages, posts, or custom post types, it may be [launched on a per-page or per-post basis](getting-started/launch-builder.md). This ensures that you have total control over which pages or posts make use of Beaver Builder.
:::

:::caution
Not all custom post types are completely supported. See the [Post Types](settings/post-types.md) article for more information.
:::

## Post & CPT Layouts

You can use Beaver Builder to create layouts in the content area of posts and custom post types.

:::caution
Beaver Builder cannot edit the post's title, featured image, post info, or post navigation because they are outside the content area. To edit the post title, featured image, or post info of a post or custom post type, go to the WordPress Editing Screen.
:::

:::tip
Using Beaver Themer, you can create a singular layout for your posts and custom post types, including editing the post title, featured image, and post information.
:::

## WordPress Archive Pages

WordPress generated pages, such as the index and archive pages, are not customizable with Beaver Builder. The various types of WordPress-generated archives are listed below.

- Author archives
- Blog posts index & Posts page
- Category archives
- Custom post type archives
- Custom taxonomy archives
- Date archives
- Search archives
- Tag archives

:::tip
You can display saved content, such as templates, rows, columns, or modules, on archive and index pages using the [WordPress `do_shortcode()`](https://developer.wordpress.org/reference/functions/do_shortcode/) function and [Beaver Builder shortcode](shortcode/index.md).

See the [Using Shortcodes in PHP files](shortcode/using-php-files.md) article for more information.
:::

:::info
It is possible to create layouts for WordPress index and archive pages using **Beaver Themer** without the need for custom code or hooks.
:::

## Nodes

A node is any row, column, or module you add to your layout. A unique class name is assigned to each node, which is used to style the node based on your configuration settings.

Multiple HTML elements are added to the [DOM](https://www.w3schools.com/whatis/whatis_htmldom.asp) by each node, allowing margins, padding, width, and height to be customized. Below are examples of typical markup for each node.

<Tabs>
  <TabItem value="row" label="Row markup" default>

In the code example below, the **row** node's unique class name is `fl-node-4m98zgeu7tyc`.

```markup
<div class="fl-row fl-row-fixed-width fl-row-bg-none fl-node-4m98zgeu7tyc" data-node="4m98zgeu7tyc">
	<div class="fl-row-content-wrap">
		<div class="fl-row-content fl-row-fixed-width fl-node-content">
			<!-- Column markup -->
				<!-- Module markup -->
			<!-- End of Column markup -->
		</div>
	</div>
</div>
```

  </TabItem>
  <TabItem value="column-markup" label="Column markup">

In the code example below, the **column** node's unique class name is `fl-node-gy3dorte1pkb`.

```markup
<!-- Row markup -->
	<div class="fl-col-group fl-node-gy3dorte1pkb" data-node="gy3dorte1pkb">
		<div class="fl-col fl-node-jkv0cyspnrgu" data-node="jkv0cyspnrgu">
			<div class="fl-col-content fl-node-content">
				<!-- Module markup -->
			</div>
		</div>
	</div>
<!-- End of Row markup -->
```

  </TabItem>
  <TabItem value="module" label="Module markup">

In the code example below, the **Heading module** node's unique class name is `fl-node-lrqwuvkn30px`.

```markup
<!-- Row markup -->
    <!-- Column markup -->
		<div class="fl-module fl-module-heading fl-node-lrqwuvkn30px" data-node="lrqwuvkn30px">
			<div class="fl-module-content fl-node-content">
				<h2 class="fl-heading">
					<span class="fl-heading-text">Hello World</span>
				</h2>
			</div>
		</div>
	<!-- End of Column markup -->
<!-- End of Row markup -->
```

  </TabItem>
</Tabs>

:::tip
You can use the unique node class name to add custom styling. Alternatively, you can [apply your own custom class](advanced-tab/html-element.md#class).
:::

## Styling Cascade

Beaver Builder uses a styling cascade to ensure the theme's styling is inherited into Beaver Builder content, maintaining consistency with colors and typography.

You can override the theme styling by changing text, links, and heading colors in row, column, and module options. In addition, you can override the theme's typography on a module-by-module basis with the [typography option](basics/typography.md).

A similar styling cascade occurs with Beaver Builder content where module color options have priority over column and row color options, while column color options can only override row color options. Below is a diagram showing how the styling cascade works.

![Styling cascade diagram](/img/beaver-builder/getting-started--how-it-works--3.jpg)

:::info Example
Suppose you have a row with a dark background, and require all text to be white, but the heading to be a different color. It is possible to do this by changing the color of each module inside the row. However, the most efficient approach is to utilize the styling cascade.

You can do this by opening the [row settings](rows/settings.md) and choosing a color for the text color option. All text within that row will now inherit that color. For the heading, choose a color from the module settings. This will override the color of the row text for that particular module, but all other text will use the row text color.
:::

## Compiled CSS & JavaScript

Each Beaver Builder layout has a dynamically generated and compressed CSS and JavaScript file, which is cached each time you update or save a layout. Each file name starts with the current post ID, followed by either `- layout`, `-layout-draft`, or `-layout-partial`.

• `-layout` contains all the CSS or JavaScript required for the page or post layout.

• `-lavout-draft` contains the CSS or JavaScript for changes made in that editing session and are only visible when editing in Beaver Builder. See the [Done > Save Draft](user-interface/top-bar.md#save-draft) section for more information on drafts.

• `-layout-partial` are rendered if there's more than one layout on the page such as [saved row](rows/saved-rows.md), columns, or [modules](modules/saved-modules.md) which were added to the layout using our shortcode.

Additionally, instead of loading the CSS and JavaScript for every possible module, Beaver Builder only loads the CSS and JavaScript for the modules currently on the page. That includes only enqueuing when needed third-party libraries such as sliders, tabs, or accordions.

The files are located in:

```markup
/wp-content/uploads/bb-plugin/cache
```

:::tip
See the [Tools](settings/tools.md#cache) article for more information about purging the cache.
:::
