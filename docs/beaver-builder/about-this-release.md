---
id: about-this-release
title: About this release
sidebar_label: About this release
description: Describes the features in this release of the Beaver Builder plugin.
---

Here are the Beaver Builder 2.5 features as of Version 2.5-beta.

:::warning **Warning**
Using alpha releases in a production environment is highly discouraged. The risk of bugs is high and features can be changed or removed based on testing and feedback.
:::

## New Beaver Builder editor features

### View an outline of your layout

The new Outline panel lets you view the structure of your page layout in an outline format. 

Access the Outline panel by clicking the Outline icon to the left of the **Done** button in the editor:

![Outline panel icon in the Beaver Builder editor](/img/2-5-features-outline-panel-icon-363.png) 

See [the article about the Outline panel](./beaver-builder/getting-started/bb-editor-basics/outline-panel.md) for more information.

### Reduce or disable undo/redo functionality in the editor
The [History manager](/beaver-builder/getting-started/bb-editor-basics/undo-redo.md) can cause sluggish behavior in the editor, particularly when your site is in a shared hosting environment or the page you're editing has a large number of rows and modules. The default number of changes the History Manager remembers is 20. 

You can reduce or disable this number temporarily or more permanently in two ways:

#### Disable the History Manager temporarily

* Add `&nohistory` to the end of your URL in the Beaver Builder editor.  
For example:

```markup
https://mysite.com/?fl_builder&nohistory
```
In the editor, if you click **History** in the [Tools menu](/beaver-builder/getting-started/bb-editor-basics/tools-menu.md), you'll see the message `Undo/redo history is currently disabled`.

#### Reduce or disable the history by changing wp-config

This method requires access to the *wp-config.php* file in your WordPress installation root. It reduces or disables the History Manager for all Beaver Builder layouts site-wide.

1. Open the *wp-config.php* file for editing.
2. Add the following code before the line that says `/* That's all, stop editing! Happy publishing. */`:  
```php
if ( ! defined( 'FL_BUILDER_HISTORY_STATES' ) ) {
			define( 'FL_BUILDER_HISTORY_STATES', 20 );
		}
```
3. Change the number of states from `20` to a smaller number, or change the number to `0` to disable the History Manager entirely.

To restore normal History Manager functionality, remove this code from the *wp-config.php* file.

## Existing module improvements

### Button Group module

When **Layout** on the **Style** tab is set to **Horizontal**, there is a **Width** setting that controls the width of all buttons in the group. The Width setting has two values: 

* **Default**  
The width of each button varies according to the individual button text plus padding. Longer text has longer button width:
![Button group width setting for horizontal layouts, 2.5 features](/img/about-this-release-2-5-button-group-module-default-width.png)
* **Custom**  
The width of all of the buttons is set to the custom width. Text wraps if necessary:
![Button group width setting for horizontal layouts, 2.5 features](/img/about-this-release-2-5-button-group-module-custom-width.png) 

### Contact  Form module

Contact Form labels (the **Show labels/placeholders** setting on the **General** tab) can be translated.

### Content Slider module

#### Background overlay

There's a **Background overlay** option for individual slides.

![Content slider module background overlay, 2.5 features](/img/2-5-features-content-slider-module-background-overlay.png) 

#### Button padding is responsive

On the **Link** tab for individual slides,  if you add a button, the **Padding** option is responsive.

![Responsive padding on Content Slider module buttons, 2.5 features](/img/BB25-content-slider-module-slide-button-responsive-padding.png) 

### Countdown module

The **Style** tab now has the standard [Typography section](/beaver-builder/styles/typography/typography.md) for both numbers and text. 

### HTML module

The code editor has line numbers and automatic line wrap. 

### Icon Group module

#### Ability to add text

You can now add text to each Icon item:

![Text in Icon Group module, 2.5 features](/img/BB25-icon-group-module-text-example.png)

The text can be formatted in the [Typography section](/beaver-builder/styles/typography/typography.md) on the **Style** tab. There are no text style settings for individual items.

#### The Alignment setting is responsive

The **Alignment** setting on the **Style** tab, which horizontally aligns the entire icon group within its column, now has a [Responsive Settings icon](/beaver-builder/layouts/responsive-design/responsive-settings-icon.md) to set different alignments at large, medium, and small devices. 

### List module

On the **General** tab, the settings were rearranged so the **List items** section appears at the top.

### Menu module

The Menu module has the following new features. See the [Menu module article](/beaver-builder/layouts/modules/menu/menu.md) for more complete descriptions.

#### New General tab settings

* Link to Menu page from the **Layout** setting when there is no menu
* A centered inline logo option  
* Option to add search  
* Option to responsively stack or wrap horizontal menu items  

#### New Style tab settings

* [Typography settings](/beaver-builder/styles/typography/typography.md) in the **Dropdowns** section, to style the text in dropdowns for submenus.
* A new **Responsive dropdown** section, to style responsive dropdown settings differently from the dropdown settings for larger devices.
* A **Responsive toggle** section with options to set the toggle size, submenu dropdown background colors, text colors, and borders.  

#### Support for WooCommerce Dynamic Cart 

If you have WooCommerce installed, there's a **WooCommerce** tab with options to display the WooCommerce Dynamic Cart, with additional settings on the **Style** tab.
 
### Number Counter module

* In the bar display of the number, you can now set the height of the bar.  
On the **General** tab, when **Layout** is set to **Bars counter**,  then on the **Style** tab in the **Bar styles** section, there is a new setting for **Bar height**. This option also has a [Responsive Settings icon](/beaver-builder/layouts/responsive-design/responsive-settings-icon.md) so you can adjust the height differently for large, medium, and small devices.
* You can hide the number entirely in the bar display.  
On the **General** tab, set **Number position** to **Hidden**.
* The **Style** tab now has the standard [Typography section](/beaver-builder/styles/typography/typography.md) for both numbers and text. 

### All Posts modules

If you want to display a defined set of posts or pages, categories, or tags in a custom order, you can set this up on the **Content** tab. As of Beaver Builder 2.5, you can reorder your custom selection in any of the **Filter** section settings by dragging listed items. For example, in the following screenshot showing three posts about insects, you can change the order of posts in the **Match these posts** setting.

![Settings to order a filtered set of posts - 2.5 features](/img/2-5-features-posts-order-by-selection.jpg)

### Posts Carousel module

Now includes the standard Beaver Builder [Typography section](/beaver-builder/styles/typography/typography.md) for the **Post Title** and **Post Info** sections.

### Posts Slider module

Now includes the standard Beaver Builder [Typography section](/beaver-builder/styles/typography/typography.md) for the **Post Title**, **Post Info**, and **Post Content** sections.

<!--### Posts Slider & Posts Carousel modules

There's now an option to customize the output when no posts are found.
-->
### Pricing Table module 

The Pricing Table module has several enhancements, summarized in this screenshot and explained in the following sections.

![Pricing Table module 2.5 features](/img/2-5-features-pricing-table-overview.png) 

#### Monthly/yearly pricing
There's a new **Toggle pricing** option where you can choose  a single price or a toggle to display dual pricing. If you enable the toggle, you can also choose the two billing options (the default is Monthly/Yearly). Then in each pricing box, there are fields to enter the price for each billing option. On the front end, there's a toggle with the two billing options, as shown in the screenshot above. 

#### Display a ribbon
For each price column, you can select an option to display a ribbon with custom text in the top center, upper left corner, or upper right corner.

#### New options for each pricing feature

You can optionally add the following to each pricing feature row:
* A feature icon  
An icon added to an individual feature overrides an icon that is set for all features.
* A tooltip  
You can add text for a tooltip. On the front end, this is displayed as a question mark to the right of the pricing feature text. Clicking on the question mark reveals the tooltip text.

This screenshot shows an example of one pricing feature in one pricing box with both a custom icon and a tooltip:

![Pricing module feature showing custom icon and tooltip](/img/2-5-features-pricing-module-icon-tooltip.png) 

#### Typography options

Each feature in a Pricing Box now has its own **Style** tab with the standard Beaver Builder [Typography section](/beaver-builder/styles/typography/typography.md). 

Typography sections have also been added to the **Title** and **Price** in each pricing box and the **Toggle Pricing** icon at the top of the table.

### Separator module

The Separator module has new responsive toggles for both the **Height** and **Alignment** settings, with the result that you can now specify different settings for height, width, and alignment for large, medium, and small devices. 

![Separator module height and alignment settings now responsive in 2.5](/img/2-5-features-separator-module-settings.png) 

### Slideshow module

The Google+ icon has been removed.

### Subscribe Form module

The Mailpoet 3 integration now shows all lists.

### Video module

There are two additional options on the **Structured data** tab: `contentUrl` and `embedUrl`.

## Column improvements

* You can now set the width for single columns.  
![Column width setting for single columns, 2.5 features](/img/2-5-features-single-column-width.png) 
* You can now set custom positions for column backgrounds. 
If you use a **Photo** background in your column's **Style** settings, the **Position** option has a **Custom position** option where you can set the X position and Y position in either pixels or percent. This feature is already available for row photo backgrounds,.

## Improvements in the WP admin UI

### Copy a shortcode for a saved item with one click

In the Beaver Builder section in the WP admin panel, under **Saved rows**, **Saved columns**, and **Saved modules**, there's now a **Shortcode** column with an automatically generated shortcode for each saved item. Clicking the shortcode automatically copies it to your clipboard.

![Saved row shortcode example](/img/wp-admin-saved-row-shortcode.png) 

### Duplicate option in post and page lists

For posts (including pages and custom post types) that use a Beaver Builder layout, there's now an **Add Duplicate** option, allowing you to duplicate Beaver Builder layouts to new posts and pages.

![Duplicate post, a 2.5 feature](/img/2-5-features-duplicate-post.png) 

Where possible, this feature hides the **Duplicate** option that comes from other plugins for pages and posts that have Beaver Builder layouts. These other plugins often don't work well with Beaver Builder.

:::note **Note**
You can still [duplicate pages from the Tools menu in the Beaver Builder editor](/beaver-builder/getting-started/bb-editor-basics/duplicate-your-beaver-builder-layout-to-another-page.md).
:::

## Other improvements

### Line height allows 0 value in all module **Typography** sections

You can set the line height to be 0 in any [Typography section](/beaver-builder/styles/typography/typography.md).

### Support for the Font Awesome plugin

There is now basic support for the [official Font Awesome Plugin](https://wordpress.org/plugins/font-awesome/) so you can use that plugin's shortcodes in your Beaver Builder layouts. If you want to use Font Awesome Pro icons, be sure to follow the plugin installation instructions for enabling your domain in the Font Awesome CDN.

### An easier way to disable smooth scrolling

There's now an easy way to disable [smooth scrolling](/beaver-builder/advanced-builder-techniques/smooth-scrolling-links.md). When smoother scrolling is disabled, a link jumps to its target on the same page rather than dynamically traveling down the page.  

On the **Advanced** tab where you set the anchor in the **ID** field, add `fl-no-scroll` to the **Class** field  below it. See the [smooth scrolling article](/beaver-builder/advanced-builder-techniques/smooth-scrolling-links.md) for more information about creating target anchors on a page and linking to them.

### Change in Debug Mode operation

Errors are now output only if  the `showerrors` parameter is in the URL.  

After [enabling Debug Mode](/beaver-builder/troubleshooting/debugging/enable-beaver-builder-debug-mode.md), add the parameter `/?showerrors` to your URL to view errors, for example:  
`https://mysite.com/?showerrors`.

If the URL already has a `?` parameter in use, then use `&showerrors` instead. For example, if you're using the Beaver Builder debug URL, the existing URL might be something like `mysite.com?fldebug=ed52f356`. In this case, you'd append the `showerrors` parameter to form `mysite.com?fldebug=ed52f356&showerrors`.

### Automatic clearing of CSS and JavaScript files
CSS and JavaScript files are now automatically cleared when the URL changes.

### Filter to add a mail service to the Subscribe module

The `fl_builder_subscribe_form_services` filter lets you add a service to the list displayed in the Subscribe Form module. Here's an example.

```php
function bb_subscribe_form_custom_service( $services ) {
	$services['convertkit_custom'] = array(
		'type'  => 'autoresponder',
		'name'  => 'ConvertKitCustom',
		'class' => 'FLBuilderServiceConvertKitCustom',
		'file' 	=> FL_CHILD_THEME_DIR.'/classes/class-fl-builder-service-convertkit.php',
	);
	return $services;
}
add_filter( 'fl_builder_subscribe_form_services', 'bb_subscribe_form_custom_service' );
```
### The suggest field in posts is sortable

For module developers, the `suggest` field is sortable. See the [Module Development Guide](/beaver-builder/developer/custom-modules/cmdg-10-setting-fields-reference.md/#suggest-field).

### WP-CLI enhancements

* The following command shows a list of all options:  
`wp beaver global list`
*  The following command updates a single option:  
`wp beaver global-update --id=default_heading_selector --value=.fl-post-header`
