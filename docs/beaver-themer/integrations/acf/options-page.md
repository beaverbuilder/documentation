---
id: options-page
title: ACF Options Page
sidebar_label: Options Page
description: Beaver Themer supports Advanced Custom Fields Pro's options page feature for adding custom fields and displaying their data on any page, post, or custom post type.
---

The Advanced Custom Fields Pro [Options Page](https://www.advancedcustomfields.com/resources/options-page/) feature is fully supported by Beaver Themer. With this feature, users can add extra option pages to their WordPress admin dashboard, which can be populated with fields. Any data saved on an options page is considered global, and can be displayed on any page, post, or custom post type throughout the website by utilizing Beaver Themer field connections.

![Advanced Custom Fields Options page](/img/beaver-themer/integrations--acf--options-page--1.jpg)

## Getting Started

To begin, add the code below to your child theme's _`functions.php`_ file to create an **Options Page**:

```php
if( function_exists('acf_add_options_page') ) {

    acf_add_options_page();

}
```

Upon adding this code, an options page named **Options** will appear on the sidebar of your WordPress admin dashboard. Next, you can generate custom fields, allocate them to the Options Page location, and the information stored in these fields will act as global settings.

:::info
See the Advanced Custom Fields [Options Page](https://www.advancedcustomfields.com/resources/options-page/) article for more information.
:::

![Options Page Location](/img/beaver-themer/integrations--acf--options-page--2.jpg)

## Output

There are two ways to display the data from fields added to the Options Page. One is by using a field connection shortcode in an HTML module, while the other is by connecting or inserting the field connection to a row, column, or module option.

### Shortcode

The Beaver Themer field connection shortcode can be used to pull data from fields assigned to the **Options page** by adding `site:acf_option` to the shortcode.

For example, suppose you have created an ACF Image field named **Site Logo** and assigned it to the ACF Options Page. You can use this field to display your website's logo image by adding the field connection shortcode in an HTML module. This will output the image from the **Site Logo** field using an `<img>` tag.

```markup
[wpbb site:acf_option type='image' name='site_logo' image_size='large' display='tag' linked='yes']
```

### Connect or Insert

You can also display fields that are added to the ACF Options Page by connecting or inserting the field connection to row, column, or module options.

For instance, you can add a Photo module to your Beaver Themer header layout and connect or insert the Site Logo image field, which is added to an ACF Options Page, into the **Photo** option as shown in the screenshot below.

![Options Page image field connected to Photo module](/img/beaver-themer/integrations--acf--options-page--3.jpg)