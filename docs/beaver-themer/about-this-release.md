---
id: about-this-release
title: About this release
sidebar_label: About this release
description: Describes the features in this Beaver Themer release.
---

Here are the new features for Beaver Themer 1.4-beta.2. 

<!-- :::warning **Warning**
Using alpha releases in a production environment is highly discouraged. The risk of bugs is high and features can be changed or removed based on testing and feedback. See [this article](/general/alpha-and-beta-releases.md/#install-an-alpha-or-beta-plugin-release) for information about installing prerelease versions.
:::
-->

## Layout enhancements

### Singular layouts can have Beaver Builder layouts in the post content area

You can now have both a Singular Beaver Themer layout and a Beaver Builder layout in the content area of the same post. This is illustrated in the following screenshot. The Themer Singular layout usually includes a Post Content module, into which the post content is dynamically inserted. The post content itself is created with the WordPress editor, or, as of Beaver Themer 1.4-alpha, with the Beaver Builder editor. In the screenshot, the post content area was created with a Beaver Builder layout, containing a Text Editor module and a Photo module in two columns.

![Singular Themer layout with Beaver Builder post content layout](/img/themer-1-4-features-1.jpg)

By default, Beaver Builder layouts for post or page content override Singular Themer layouts, so there's an extra step involved if you assign a Singular Themer layout to a page or post with a Beaver Builder layout. See the [Singular layout page](/beaver-themer/layout-types-modules/singular-layout-type/themer-singular-layout-type.md/#extra-step-for-singular-layouts-with-beaver-builder-layouts-in-the-content-area) for more information.

### Header layouts: Set the breakpoint for sticky headers

The Themer Header layout has a **Sticky** setting that in previous releases applied only to large devices. You can now choose which breakpoints it applies in the **Sticky breakpoint** setting. 

![Header Themer layout, Sticky Breakpoint setting](/img/themer-1-4-features-2.png)

The **Default** setting supports large devices only (the legacy setting). It also supports the `fl_theme_builder_sticky_header_breakpoint` filter, which enables the sticky header for medium but not small devices. The new **Sticky breakpoint** setting allows the most flexibility in device selection.

If the **Shrink** setting is set to **Yes** it also follows the **Sticky header** setting for device size. 

The **Overlay** setting is independent of the "Sticky header" setting and continues to work at all device sizes.

### Header layouts: four new layout templates

When you create a Themer layout, a layout template is automatically assigned. You can change the layout template by opening the Content panel and clicking the **Templates** tab. By default, the **Header 1** layout template is assigned, but you can select any of Headers 2-5, as shown in this screenshot:

![Header Themer layout templates in the Content panel](/img/themer-header-templates.png)

### Footer layouts: four new layout templates

Themer Footer layouts also have four new layout templates on the **Templates** tab of the content panel, as shown in this screenshot:

![Footer Themer layout templates in the Content panel](/img/themer-footer-templates.png)

## Themer Module enhancements

### Post Navigation module

The Post Navigation module has a number of new options and a new **Style** tab. See the [Post Navigation Module article](/beaver-themer/layout-types-modules/singular-layout-type/themer-singular-layout-post-navigation-module.md) for details.

![Beaver Themer 1.4 post navigatio module enhancements](/img/themer-1-4-features-9.png)

### New: Woo Notices module for Singular layouts

There is a new Woo Notices module for Singular layouts that displays standard WooCommerce notices such as the following:

![Beaver Themer 1.4 new Woo Notices module enhancements](/img/themer-1-4-features-9.png)

This module lets you style the notices and place them in page locations other than the default notices.

The module has a **Style** tab, with settings for text and background color, plus [**Typography**](/beaver-builder/styles/typography/typography.md) and [**Border**](/beaver-builder/styles/effects/borders.md) sections, and the standard [**Advanced** tab](/beaver-builder/layouts/advanced-tab-rows-columns-modules.md).

### WooCommerce Add to Cart Button module enhancements

#### New Add to Cart button hover colors

In Singular Themer layouts, you can set hover colors in the Add to Cart Button module in the **Themer Modules** group:

![WooCommerce](/img/themer-1-4-features-8.jpg)

#### WooCommerce Wishlists plugin integration

The [WooCommerce Wishlists plugin](https://woocommerce.com/products/woocommerce-wishlists/) adds an **Add to wishlist** button to the WooCommerce **Add to Cart** hook, which includes product quantity and product variations. Beaver Themer's Add to Cart Button module, available in Singular layouts when the WooCommerce plugin is active, serves as a pass-through for this behavior, as shown in this screenshot.

![WooCommerce Wishlists plugin, Add to Wishlist button](/img/themer-1-4--about--wc-wishlist.png)

You can also create Themer Archive layouts specifically for the Wishlist archive page. Choose **Wishlist archive** selection for **Location** when you create the Archive layout:

![WooCommerce Wishlists plugin, Wishlist Archive location setting](/img/themer-1-4--about--wc-wishlist--2.png)

:::note **Notes**

* Color settings in the Add to Cart Button module have no effect on the wishlist button. That color must be changed in the WooCommerce Wishlists plugin settings. 
* If you do add a custom background color in the WooCommerce Wishlists settings, you won't see that color in the Themer layout preview or even in the front-end Singular Themer layout, but you'll see it on the product page.
* The **Add to Wishlist** button does not appear with the **Add to Cart** button on Shop and other product archive pages, whether or not there is a Themer Archive layout applied.
:::

## New HTML classes for third-party integrations

### WooCommerce: class for products on sale

When a product is on sale, the WooCommerce single product page with a Singular Themer layout adds a `sale` class, as follows:

![WooCommerce added HTML sale class in singular layouts for products on sale](/img/themer-1-4--about--wc-sale-class--4.png)

This class is useful if you want to add some custom CSS rules to single products on sale.

### The Events Calendar: single event class

Themer Singular layouts applied to single events add the `tribe-events-single` class to single event pages that have a Singular Themer layout applied. This is useful if you want to add some custom CSS rules to single event pages.

## Field connection enhancements

### Expanded ability to test for values in fields

The ability to test for values in field connections was previously limited to certain data types in custom fields. You can now test for values in standard fields. For example, you could test for a specific title for a standard post and display something as a result. 

Another example: you could check for a specific term assigned to the post. Suppose you have a standard category with the value `News` and the slug `news-cat`. The following shortcode tests for the presence of this category on a particular post. 

```
[wpbb-if post:terms_list taxonomy='category' display='slug' limit='1' linked='no' exp='equals' value='news-cat']
The result here is what's displayed if the post is in the News category.
[/wpbb-if]
```

The easiest way to construct the conditional field connection shortcode is to follow this procedure:

1. Create a field connection shortcode in a Beaver Builder module in the usual way: click the Plus icon, choose the options to create the shortcode, and click **Insert**.
2. Change the `[wpbb` at the beginning of the shortcode to `[wpbb-if`
3. After the right bracket at the end of the shortcode, add the text you want to display if the statement is true, followed by [/wpbb-if]`.
3. In the [wpbb-if] open tag, add an `exp=' '` attribute to indicate the operator.  
Usually, you're doing a text comparison using `equals`, or `notequals`.
4. Add a `value=' '` attribute to indicate the value you're looking for.

For example, here's a standard field connection shortcode to insert a post title:

```
[wpbb post:title]
```

Here's a conditional shortcode constructed from that:

```html
[wpbb-if post:title exp="equals" value="My funky post"]
Yeah, this is my funky post!
[/wpbb-if]
```

If the post title is "My funky post" then here is what's displayed on the page: "Yeah, this is my funky post!".

### Additional support for Advanced Custom Fields field connections

#### Dropdown selection of ACF fields

When you choose any ACF field category as a field connection or insert (post, archive, and so on), there's a **Detected Fields** dropdown list of ACF fields to choose from. Choosing a field from this list autopopulates the **Field type** and **Field name** settings, as shown in this screenshot.

![](/img/themer-1-4-features-7.png)

Using **Detected fields** is optional. You can continue to select the field type and type in the field name slug manually.

#### Support for ACF Taxonomy fields

You can now use a field connection or field connection shortcode to list the items selected in an ACF Taxonomy field.

In this example, the WooCommerce Products taxonomy was used in an ACF Taxonomy field and assigned to single posts, so that products could be featured in a blog and related to product categories. Then a field connection shortcode was added in a module in a Themer Singular layout to display the product terms selected for any particular post, as shown in the following screenshot.

![Example of an ACF Taxonomy field in a Themer Singular layout](/img/themer-1-4-features-5.jpg)

To set up the field connection or shortcode, use a module with text output, such as a Text Editor or HTML module, or even a module with a text field such as a Heading module. When you click the Plus sign to insert the field connection, choose **ACF Relational**, shown in this screenshot: 

![To insert a Taxonomy field, choose ACF Relational](/img/themer-1-4-features-4.png)

Then in the settings, specify the slug for your ACF Taxonomy field. You can type it into the **Field name** setting or simply select it from the **Detected fields** list, shown in the screenshot below. In the **List type** setting, choose how you want your terms list to appear.

![ACF Taxonomy field - field connection settings](/img/themer-1-4-features-6.png)

#### Expanded support for ACF True/False field types

**True/false** is now listed as a field type when you're adding a field connection. After you select that field type, the settings panel that you see next has an option to enter a custom value for **True** (the default is **1**) or **False** (the default is **0**).

#### New support for the ACF Button Group  field type

When you click an ACF category from the list of eligible field connections, choose  **Button group** as the **Field type** or choose a Button Group field from the **Detected Fields** list.

#### Field connection support for the Smart Slider field type stored in ACF

[Advanced Custom Fields (ACF) Pro has a **Smart Slider 3** field type](https://smartslider.helpscoutdocs.com/article/1798-acf-publishing) that adds a custom field to a location in the WordPress back end that lets users select a Smart Slider 3 project from a dropdown list. This would, for example, allow authors to choose a different slider for every post. 

You can add this custom field to your Themer layout the same as you do with other ACF field connections. In the list of field connections, select the appropriate ACF location (for example, ACF Archive or ACF Post), then in the Options window click Autodetect and select the field where the Smart Slider information is stored. 

In the following screenshot, a custom field was created in ACF called **Smart Slider 3** with **Smart Slider 3** selected as the field type. The **Field type** and **Field name** settings are autopopulated. 

![Adding a field connection to an ACF Smart Slider field type](/img/themer-1-4-features-3.png)

## Conditional logic enhancements

The **Browser** conditional logic category has been added to the  **Rules** section of the Beaver Themer editing panel. It was already available in the **Display** setting on the **Advanced** tab in Beaver Builder modules. The selections are documented in the [Conditional Logic article](/beaver-themer/conditional-logic/beaver-themer-conditional-logic.md/#browser). It has the selections **Cookie**, **Referer**, and **URL variable**.

![Conditional logic browser settings in the Rules section in the Themer editing screen](/img/browser-conditional-logic-settings-in-rules.png)
