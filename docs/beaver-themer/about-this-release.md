---
id: about-this-release
title: About this release
sidebar_label: About this release
description: Describes the features in this Beaver Themer release.
---

Here are the new features for Beaver Themer 1.4-alpha. Features for the latest alpha version (alpha.2) are labeled. 

:::warning **Warning**
Using alpha releases in a production environment is highly discouraged. The risk of bugs is high and features can be changed or removed based on testing and feedback. See [this article](/general/alpha-and-beta-releases.md/#install-an-alpha-or-beta-plugin-release) for information about installing prerelease versions.
:::

## Layout enhancements

### Singular layouts can have Beaver Builder layouts in the post content area

You can now have both a Singular Beaver Themer layout and a Beaver Builder layout in the content area of the same post. This is illustrated in the following screenshot. The Themer Singular layout usually includes a Post Content module, into which the post content is dynamically inserted. The post content itself is created with the WordPress editor, or, as of Beaver Themer 1.4-alpha, with the Beaver Builder editor. In the screenshot, the post content area was created with a Beaver Builder layout with a Text Editor module and a Photo module in two columns.

![Singular Themer layout with Beaver Builder post content layout](/img/themer-1-4-features-1.jpg)

:::note **Note**
You can create both Themer Singular layouts and  Beaver Builder layouts for pages, posts, and custom post types, but by default, Beaver Builder layouts are limited to pages. If you don't see the option to launch Beaver Builder for a post or custom post type, see [this article](/beaver-builder/management-migration/control-which-post-types-can-use-beaver-builder.md) to change the settings.
:::

#### Create a Beaver Builder layout for a post with a Singular layout assigned

When you choose to edit a single post in Beaver Builder, a message is displayed as the editor opens, asking if you want to continue to apply the Singular Themer layout to this post. If you choose to override the Themer Singular layout, the post layout outside the content area is controlled by your theme. The Beaver Builder editor then opens for you to create your post content layout.

#### Change whether the Themer Singular layout is applied to a post with a Beaver Builder content layout

You can change your decision later about whether to apply the Singular layout to this post. In the Beaver Builder editor for this post content, open the **Tools** menu and choose **Themer override**. The same choice box is displayed, asking you to choose whether to override or use the Themer Singular layout for this page.

### Header layouts: Set the breakpoint for sticky headers

The Themer Header layout has a **Sticky** setting that in previous releases applied only to large devices. You can now choose which breakpoints it applies in the **Sticky breakpoint** setting. 

![Header Themer layout, Sticky Breakpoint setting](/img/themer-1-4-features-2.png)

The **Default** setting supports large devices only (the legacy setting). It also supports the `fl_theme_builder_sticky_header_breakpoint` filter, which enables the sticky header for medium but not small devices. The new **Sticky breakpoint** setting allows the most flexibility in device selection.

If the **Shrink** setting is set to **Yes** it also follows the **Sticky header** setting for device size. 

The **Overlay** setting is independent of the "Sticky header" setting and continues to work at all device sizes.

### Header layouts: four new layout templates (alpha.2)

When you create a Themer layout, a layout template is automatically assigned. You can change the layout template by opening the Content panel and clicking the **Templates** tab. By default, the **Header 1** layout template is assigned, but you can select any of Headers 2-5, as shown in this screenshot:

![Header Themer layout templates in the Content panel](/img/themer-header-templates.png)

### Footer layouts: four new layout templates (alpha.2)

Themer Footer layouts also have four new layout templates on the **Templates** tab of the content panel, as shown in this screenshot:

![Footer Themer layout templates in the Content panel](/img/themer-footer-templates.png)

## Field connection enhancements

### Field connection to pull the current, newest, or oldest post

In Themer Archive and Singular layouts you can display the results for the current post, newest post, or oldest post by connecting to or inserting a shortcode for any of the following fields:

* Post title
* Post ID
* Post slug
* Post URL (available only for settings that require a link, such as the **Link** field in a Button module)

To access this feature, add one of these field connections by clicking the **Connect** or **Insert** buttons, then choose the current, oldest, or newest post from the dropdown list of options for that field.

### Additional support for Advanced Custom Fields field connections

#### Dropdown selection of ACF fields

When you choose any ACF field category as a field connection or insert (post, archive, and so on), there's a **Detected Fields** dropdown list of ACF fields to choose from. Choosing a field from this list autopopulates the **Field type** and **Field name** settings.

#### Expanded support for ACF True/False field types

**True/false** is now listed as a field type when you're adding a field connection. After you select that field type, the settings panel that you see next has an option to enter a custom value for **True** (the default is **1**) or **False** (the default is **0**).

#### New support for the ACF Button Group  field type

When you click an ACF category from the list of eligible field connections,  just choose  **Button group** from the list of eligible field types.

#### Field connection support for the Smart Slider field type stored in ACF

[Advanced Custom Fields (ACF) Pro has a **Smart Slider 3** field type](https://smartslider.helpscoutdocs.com/article/1798-acf-publishing) that adds a custom field to a location in the WordPress back end that lets users select a Smart Slider 3 project from a dropdown list. This would, for example, allow authors to choose a different slider for every post. 

You can add this custom field to your Themer layout the same as you do with other ACF field connections. In the list of field connections, select the appropriate ACF location (for example, ACF Archive or ACF Post), then in the Options window click Autodetect and select the field where the Smart Slider information is stored. 

In the following screenshot, a custom field was created in ACF called **Smart Slider 3** with **Smart Slider 3** selected as the field type. The **Field type** and **Field name** settings are autopopulated. 

![Adding a field connection to an ACF Smart Slider field type](/img/themer-1-4-features-3.png)

## Conditional logic enhancements (alpha.2)

The **Browser** conditional logic category has been added to the  **Rules** section of the Beaver Themer editing panel. It was already available in the **Display** setting on the **Advanced** tab in Beaver Builder modules. The selections are documented in the [Conditional Logic article](/beaver-themer/conditional-logic/beaver-themer-conditional-logic.md/#browser). It has the selections **Cookie**, **Referer**, and **URL variable**.

![Conditional logic browser settings in the Rules section in the Themer editing screen](/img/browser-conditional-logic-settings-in-rules.png)
