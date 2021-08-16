---
id: about-this-release
title: About this release
sidebar_label: About this release
description: Describes the features in this release of the Beaver Builder plugin.
---

Here are the Beaver Builder 2.5 features as of Version 2.5-beta.4.

Changes for beta.3 and beta.4:

* [New layout templates](#new-layout-templates)
* [ New icon picker design and function](#changes-to-the-icon-picker)
* [Icons instead of top-bottom-left-right text labels](#new-icon-labels-for-left-right-up-down-settings)
* [Improvements to the WP edit page when Beaver Builder is restricted](#ui-improvements-when-beaver-builder-is-restricted-for-a-user-role)
* [Ability to disable Outline panel completely](#disable-the-outline-panel)

<!-- :::warning **Warning**
Using alpha releases in a production environment is highly discouraged. The risk of bugs is high and features can be changed or removed based on testing and feedback.
:::
-->

## New Beaver Builder editor features

### View an outline of your layout

The new Outline panel lets you view the structure of your page layout in an outline format. 

Access the Outline panel by clicking the Outline icon to the left of the **Done** button in the editor:

![Outline panel icon in the Beaver Builder editor](/img/2-5-features-outline-panel-icon-363.png) 

See [the article about the Outline panel](./beaver-builder/getting-started/bb-editor-basics/outline-panel.md) for more information.

### New layout templates

There are two new layout templates and several new content templates. Here's a thumbnail snapshot of the two new layout templates in the **Landing pages** group:

![New layout templates in the Landing Pages group](/img/25-features-layout-templates-landiing-group.png) 

And here's a thumbnail snapshot of the eight new layout templates in the **Content pages** group.

![New layout templates in Content Pages group](/img/25-features-layout-templates-content-group.png) 

#### Deleted layout templates

Some older layout templates have also been deleted in this release. The following screenshot shows the layout templates in the **Landing pages** group that have been deleted (Associates, Biz, Sell, Grande, Deluxe, Subscribe).

![Deleted layout templates in the Landing Pages group](/img/25-features-layout-templates-landing-group-deleted.png) 

The following screenshot shows the layout templates in the **Content pages** group that have been deleted (About Us, Design Portfolio, FAQs).

![Deleted layout templates in the Content Pages group](/img/25-features-layout-templates-content-group-deleted.png) 

### Changes to the icon picker

When you click a link to select an icon in the Beaver Builder editor, an icon picker opens, in which you can search through all the sets of icons that you have enabled.  The icon picker now uses the graphQL system that powers the icons page at fontawesome.com, which has resulted in the changes shown in the following screenshot and described in the list below:

![Icon Picker version comparison](/img/25-features-icon-picker-changes.png) 

* The old version of the icon picker opens in a full window. The new version opens in a smaller lightbox.
* Both versions search font slugs in all available libraries: Font Awesome and any others. 
* If the [Font Awesome plugin](#support-for-the-font-awesome-plugin) is installed, the new version searches the Font Awesome libraries for both font slug and font name and searches other font libraries for font slug only.
* The old version shows which Font Awesome libraries the icons are associated with. The new version does not distinguish between Font Awesome libraries in the search result.
* The old version lets you select a single icon library to work with. The new version does not have this filter.
* Font Awesome custom kits appear at the top of the icon libraries.

### New icon labels for left-right-up-down settings

In rows, columns, and modules, whenever there is a numerical Top, Bottom, Right, or Left setting, the labels now appear as icons, as shown in the following screenshot.

![Icon labels for top, bottom, right, left settings](/img/25-features-left-right-top-bottom-label-changes.png) 

These new labels apply to the following settings:

* border
* border radius
* margins 
* padding
* spacing

## Existing module improvements

### Button Group module

There is now a **Width** setting for horizontal as well as vertical layouts. The behavior is slightly different depending on the type of layout. See the [Button Group article](/beaver-builder/layouts/modules/button-group.md/#style-tab-global) for more details.

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

Changes to the **Style** tab:

* There is now the standard [horizontal alignment](/beaver-builder/getting-started/bb-editor-basics/alignment.md) setting, and you can set alignment differently for large, medium, and small devices.
* There is now  the standard [Typography section](/beaver-builder/styles/typography/typography.md) for both the number and text settings. 

See the [Countdown module article](/beaver-builder/layouts/modules/countdown.md) for all the details.

### HTML module

The [code editor](/beaver-builder/layouts/modules/html.md) has line numbers and automatic line wrap. 

### Icon Group module

#### The Alignment setting is responsive

The **Alignment** setting on the **Style** tab, which horizontally aligns the entire icon group within its column, now has a [Responsive Settings icon](/beaver-builder/layouts/responsive-design/responsive-settings-icon.md) to set different alignments at large, medium, and small devices.

For details, see the [Icon and Icon Group modules article](/beaver-builder/layouts/modules/icon-and-icon-group.md).

#### Text labels reverted

The ability to add text labels to individual icons in the Icon Group module has been reverted. As in Beaver Builder 2.4, the Icon Group module contains a group of icons, no text.

<!-- You can now add text to each Icon item:

![Text in Icon Group module, 2.5 features](/img/BB25-icon-group-module-text-example.png)

The text can be formatted in the **Typography** section on the **Style** tab for the entire group.  -->

### List module

On the **General** tab, the settings were rearranged so the **List items** section appears at the top.

### Menu module

The Menu module has the following new features. See the [Menu module article](/beaver-builder/layouts/modules/menu/menu.md) for more complete descriptions.

#### Menu behavior with keyboard navigation

The menu now closes when tabbing through the last of the items in a menu.

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

There are two additional options on the **Structured data** tab: **contentUrl**  and **embedUrl**.

## Column improvements

* You can now set the width for single columns.  
![Column width setting for single columns, 2.5 features](/img/2-5-features-single-column-width.png) 
* You can now set custom positions for column backgrounds. 
If you use a **Photo** background in your column's **Style** settings, the **Position** option has a **Custom position** option where you can set the X position and Y position in either pixels or percent. This feature is already available for row photo backgrounds,.

## Improvements in the WP admin UI

### Duplicate option in post and page lists

For posts (including pages and custom post types) that use a Beaver Builder layout, there's now an **Add Duplicate** option, allowing you to duplicate Beaver Builder layouts to new posts and pages.

![Duplicate post, a 2.5 feature](/img/2-5-features-duplicate-post.png) 

Where possible, this feature hides the **Duplicate** option that comes from other plugins for pages and posts that have Beaver Builder layouts. These other plugins often don't work well with Beaver Builder.

:::note **Note**
You can still [duplicate pages from the Tools menu in the Beaver Builder editor](/beaver-builder/getting-started/bb-editor-basics/duplicate-your-beaver-builder-layout-to-another-page.md).
:::

### Copy a shortcode for a saved item with one click

In the Beaver Builder section in the WP admin panel, under **Saved rows**, **Saved columns**, and **Saved modules**, there's now a **Shortcode** column with an automatically generated shortcode for each saved item. Clicking the shortcode automatically copies it to your clipboard.

![Saved row shortcode example](/img/wp-admin-saved-row-shortcode.png) 

### UI improvements when Beaver Builder is restricted for a user role

There are a couple of improvements in what users see when their user role does not allow them to use Beaver Builder and they open a Beaver Builder page for editing in WordPress.

The following screenshots show Beaver Builder 2.4 and 2.5 for comparison. The following shows the screen when the logged-in user is not allowed to open Beaver Builder and clicks **Edit** to open a Beaver Builder page or post for editing in the WordPress standard editor.

![User restricted from using Beaver Builder clicks Edit for a page that uses Beave Builder](/img/25-features-bb-restricted-block-editor-view.png) 

In both the older and newer releases, the person with restricted access sees a **View page** button in the location in which there's normally a **Launch Beaver Builder** button. The **Use Standard Editor** link does not open either editor.

The second change in behavior is when the user  is restricted from using the Beaver Builder and has selected the **Disable the visual editor when writing** option in their WordPress profile. In Beaver Builder 2.4, when they opened a Beaver Builder page they'd see the page in the WordPress code editor. In Beaver Builder 2.5, they see the same view/editor options as in the previous case:

![User who is restricted from using Beaver Builder and has disabled the WP visual editor clicks Edit for a page that uses Beave Builder](/img/25-features-visual-editor-disabled.png) 

## Other improvements

### Support for the Font Awesome plugin

There is now basic support for the [official Font Awesome Plugin](https://wordpress.org/plugins/font-awesome/) so you can use that plugin's shortcodes in your Beaver Builder layouts. If you want to use Font Awesome Pro icons, be sure to follow the [plugin installation instructions](https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/wordpress) for enabling your domain in the Font Awesome CDN or set up a kit.

### Support for SEOPress

Beaver Builder now supports [SEOPress](https://www.seopress.org/).

### Line height allows 0 value in all module **Typography** sections

You can set the line height to be 0 in any [Typography section](/beaver-builder/styles/typography/typography.md).

### Disable the Outline Panel

If you want to completely disable the Outline Panel, add the following filter to your child theme's *functions.php*  file:

```php
//Diisable Outline Panel
add_filter( 'fl_builder_outline_panel_enabled', '__return_false' );
```

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

```PHP
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
