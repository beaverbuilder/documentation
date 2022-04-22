---
id: dev-2.6
title: 2.6 Developer Preview
sidebar_label: 2.6 Developer Preview
description: Describes the features in this release of the Beaver Builder plugin.
---

The Beaver Builder 2.6-dev2 release is a pre-alpha release. It contains several features that we’d like to get feedback about from developers before we commit to putting them in an Alpha release.

## Provide Feedback

To provide feedback, click the **Dev feedback** button in the upper right corner of the Beaver Builder editor:

![Dev feedbback button in the Beaver Builder editor](/img/beaver-builder/2.6-dev-preview--1.jpg) 

:::warning **Warning**
Using dev and alpha releases in a production environment is highly discouraged. The risk of bugs is high and features can be changed or removed based on testing and feedback.
:::

## Reusable blocks

You can use [WordPress reusable blocks](https://wordpress.org/support/article/reusable-blocks/) in Beaver Builder layouts. If a reusable block is updated in WordPress, it's also updated in any Beaver Builder layout where it's used. 

1. Open the Content panel and select the **Reusable blocks** group.  

  ![Reusable blocks group in the Beaver Builder editor](/img/beaver-builder/2.6-dev-preview--2.jpg)   

2. Drag the block that you want to use into your layout.

3. Save your layout in the normal fashion.

## Google fonts preview

In any module that has a [Typography section](/beaver-builder/styles/typography/typography.md), in the **Font** section you can click the **Family** dropdown box, scroll to the **Google fonts** section, and hover over individual fonts to see a preview.
 
:::note **Note**
The preview doesn't work in the **Recently used** section of the list and the font you select from the list doesn't display in the **Recently used** section either.
:::

## Search saved items

Added a search bar to the Saved tab allowing you to search saved content items (rows, columns, and modules).

## Pricing Table - Ribbon typography 

Added typography settings for the Pricing table ribbon.

## Multiselect of post types in Posts modules

On the **Content** tab of the Posts, Posts Carousel, and Posts Slider modules, in custom queries you can select one or more post types. For example, you can display both posts and pages. 
 
![Posts module custom query with both posts and pages selected](/img/beaver-builder/2.6-dev-preview--3.jpg) 
 
Each post type is listed with its own set of filters. For example for Posts you can filter by specific post, post category, and so on. For Page you can filter by specific pages. 
 
:::note **Note**
There is an `AND` filter relationship across post types, so filters from one post type apply to all post types. For example, if you choose to display both posts and pages but for pages you filter to show only one specific page, there will be no posts displayed.
:::

## New breakpoint in global settings

In [**Global settings** on the Tools menu](/beaver-builder/getting-started/bb-editor-basics/tools-menu.md/#global-settings), in the **Responsive layout** section there's a new breakpoint setting for large devices, so you can set three custom breakpoints. The default settings are 1200px for large devices, 992px for medium devices, and 768px for small devices.

![Global settings Large Devices breakpoint](/img/beaver-builder/2.6-dev-preview--4.jpg) 

This means that there is now a category larger than the **Large Device** breakpoint, which is called **Extra Large devices**. You can see this selection listed in the **Breakpoint** setting in the **Visibility** section on the **Advanced** tab of rows, columns, and modules.

![Advanced tab breakpoint settings](/img/beaver-builder/2.6-dev-preview--5.jpg) 

## Dynamic data in Tabs and Accordion Modules 

There are two dynamic data features in the Tabs and Accordion modules.

* Automatically populate the items in an Accordion or Tabs module with any post type.
* Use a saved element (row, column, module, or template) in an Accordion or Tabs module item

### Automatically populate the items in an Accordion or Tabs module

Here's an example of using a post type as a repeater in an Accordion module.

![Example of posts displayed in an Accordion module](/img/beaver-builder/2.6-dev-preview--6.jpg) 

The Accordion or Tabs item is populated as follows:

* The post title becomes the item label of the Accordion or Tabs item.
* The post's featured image doesn't appear in the Accordion or Tabs item.
* If the post has a Beaver Builder or WordPress block editor layout, that layout appears in the Accordion or Tabs item.
* Post info (author, date, categories, or tags) is not displayed.

**To set up a post type as a repeater in an Accordion or Tabs module:**

1. Open the Settings panel of the Accordion or Tabs module.
2. On the **Items** tab, in the **Content source** field choose **Post**.  
A new **Post** section opens below with more settings.
2. In the **Post type** field, choose the post type you want to display.  
After you choose the post type, other settings appear that let you filter the content for that post type. These are the same settings that you see on the **Content** tab of the Posts module.

:::note **Note**
You cannot select multiple post types.
:::

### Use a saved element in an Accordion or Tabs module item

You can use a saved Beaver Builder element (row, column module, or layout template) as the content of an Accordion or Tabs module item. You can only use elements you have saved yourself, not prebuilt layout templates or rows that come with a Beaver Builder installation.

Here's a screenshot in which a saved Button module was added to an Accordion module item:

![Saved row in an Accordion module item](/img/beaver-builder/2.6-dev-preview--7.jpg) 

**To use a saved item in an Accordion or Tabs module:**

1. Open the Settings panel of the Accordion or Tabs module.
2. On the **Items** tab, in the **Content source** field choose **Custom content**.
2. In the **Custom content** section, click **Edit item** to open the individual item settings.
3. For the **Label** setting, enter your title for this item.
4. In the **Type** field, choose the type of saved element you want to use.
5. In the **Select** field that opens below, choose the exact element that you want to use.
6. Save the module. You'll now see the item displayed with your label and your saved element in the content area.

## Add aspect ratio support for columns

You can size column length using an aspect ratio. The column keeps its normal width and changes the height based on the ratio you assign. For example, if the row is set to 1200px with 0px margins and padding and there is one column in the row and it has an aspect ration of 4/3, then its width is 1200px and its height is 900px.

Use the forward slash notation: *width*/*height*.

## Import, export & reset settings

You can import, export and reset Beaver Builder global settings and the setting from **WordPress Admin Dashboard > Settings > Beaver Builder**.

![Import & export global and Beaver Builder settings](/img/beaver-builder/2.6-dev-preview--8.jpg) 

## Row shapes upload UI

You can upload custom row shapes from **Tools Menu > Global Settings**. 

![Row shape uploads user interface](/img/beaver-builder/2.6-dev-preview--9.jpg) 

## UI brightness operating System level

The Beaver Builder user interface can inherit your operating system's appearance. You can override by choosing light or dark.

## Copy/Paste Improvements

You can copy and paste row, column, and module settings. There’s also a new UI dropdown menu allowing quick access to copy and paste.

![Row shape uploads user interface](/img/beaver-builder/2.6-dev-preview--10.jpg) 

## Post module filter by custom field

The Post module supports filtering by a custom field.

![Row shape uploads user interface](/img/beaver-builder/2.6-dev-preview--11.jpg) 

## Behind-the-scenes improvements

### Database reduction in settings saved 

`Null` options aren’t saved in the database.

If a node setting is not set or is `null` the setting does not get saved to the database reducing the post meta data size by about 50%.

### Refactor UI CSS 

This aims to unify our css with custom properties such as:

* Font family
* Colors
* Sizing

### UI Overlay refinements

Refined the feel of the builder overlay UI and highlight features in the canvas area.

### Fix visibility settings upgrade

Fix some issues with visibility settings upon upgrade related to the new breakpoint.

For example, any content set to Large Only devices were changed to Extra Large Only devices upon upgrading to 2.6. After installing the dev 3 update, any devices set to Large Only will be automatically switched to Extra Large and Large devices.
