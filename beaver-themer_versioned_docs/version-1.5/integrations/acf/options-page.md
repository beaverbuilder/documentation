---
id: options-page
title: ACF Options Page
sidebar_label: Options Page
description: Beaver Themer supports Advanced Custom Fields Pro's options page feature for adding custom fields and displaying their data on any page, post, or custom post type.
---

The Advanced Custom Fields Pro **Options Page** feature is fully supported by Beaver Themer. With this feature, users can add extra option pages to their WordPress admin dashboard, which can be populated with fields. Any data saved on an options page field is considered global, and can be displayed on any page, post, or custom post type throughout the website by utilizing Beaver Themer field connections.

![Advanced Custom Fields Options page](/img/beaver-themer/integrations--acf--options-page--1.jpg)

:::info
See the [Advanced Custom Fields Options Pages](https://www.advancedcustomfields.com/resources/options-page/) documentation for more information.
:::

## Output Data

Once you've created your Options Page(s), added your custom fields, and assigned them to your Options Page(s), you can display the data stored in those fields using two methods. One involves utilizing a field connection shortcode within an HTML module, while the other requires connecting or inserting the field connection into a row, column, or module option.

### Field Connection Shortcode

The Beaver Themer field connection shortcode can be used to pull data from fields assigned to the **Options page** by adding `site:acf_option` to the shortcode.

```markup
[wpbb site:acf_option type='text' name='FIELD_NAME']
```

For example, suppose you have created an ACF Image field named **Site Logo** and assigned it to the ACF Options Page. You can use this field to display your website's logo image by adding the field connection shortcode in an HTML module. This will output the image from the **Site Logo** field using an `<img>` tag.

```markup
[wpbb site:acf_option type='image' name='site_logo' image_size='large' display='tag' linked='yes']
```

### Connect or Insert

You can also display fields that are added to the ACF Options Page by connecting or inserting the field connection to row, column, or module options.

For instance, you can add a Photo module to your Beaver Themer header layout and connect or insert the Site Logo image field, which is added to an ACF Options Page, into the **Photo** option as shown in the screenshot below.

![Options Page image field connected to Photo module](/img/beaver-themer/integrations--acf--options-page--2.jpg)
