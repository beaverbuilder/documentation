---
id: enable-font-awesome-pro-icon-sets
title: Enable Font Awesome Pro icon sets
sidebar_label: Enable Font Awesome Pro icon sets
description: Instructions for enabling Font Awesome Pro icons in Beaver Builder.
---

You can enable support for your Font Awesome Pro icons by installing the Font Awesome plugin or, without the plugin, by connecting to a Font Awesome kit or the Font Awesome CDN in the Beaver Builder settings, using one of the following methods. See the [overview article about enabling icon sets](/beaver-builder/styles/icons/enable-disable-or-delete-icon-sets.md) to see the advantages of using the Font Awesome plugin.

No matter which method you choose, in the Beaver Builder editor's icon picker you'll see the Font Awesome Pro icon sets that you've enabled in the Beaver Builder settings. If you enable the Duotone icon set, you'll also see [two color choices in the style settings]((/beaver-builder/styles/icons/font-awesome-pro-duotone-icons.md)) after you select a Duotone icon from the icon picker.

## Method 1: Set up Font Awesome Pro icons through the Font Awesome plugin

1. Install the [Font Awesome plugin](https://wordpress.org/plugins/font-awesome/).
2. Follow the [plugin installation instructions](https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/wordpress) for enabling your domain in the Font Awesome CDN or set up a kit.
3. From the WordPress admin panel, go to **Settings > Beaver Builder > Icons**.   
Scroll down the page and you should see a **Font Awesome Integration** section that has details about the integration, such as in this screenshot.  
![Font Awesome plugin information and Beaver Builder icon settings](/img/styles--icons--enable-font-awesome-pro-icons--1.png)
4. Scroll up and select the checkboxes for which Pro icons you want to enable, as shown in the previous screenshot.

## Method 2: Enable Font Awesome Pro icons in Beaver Builder settings

Font Awesome is deprecating the use of Font Awesome Pro icons through their Content Delivery Network (CDN) and recommends the use of their icon kits instead. You can use either method of Font Awesome Pro font delivery through **Settings > Beaver Builder**. This enables you to skip all the code that Font Awesome recommends you use to enable and use the icons.

**To enable Font Awesome Pro icons using a Font Awesome Kit or their CDN:**

  1. Log into your Font Awesome account and create or open a kit for your domain.   
If you have already registered your site at their CDN, that will work also.
  2. Copy just the URL from the Kit Code.  
The URL ends in *.js*.
  3. Go to **Settings > Beaver Builder > Icons**.
  4. Select the checkbox  **Enable Font Awesome PRO icons**, then click **Save icon settings**.  
If you've registered through the Font Awesome CDN, Beaver Builder autodetects the registration and displays a yellow star to show it was successful. Skip the next step.
  5. If you're using a Font Awesome kit, enter the kit URL.
  6. Select the checkboxes for the Pro icon sets or custom kit icons that you want to display in Beaver Builder's icon picker.  
![](/img/how-to-tips-fa-pro.png)
  7. Click **Save icon settings**.  
Whether you're using a Font Awesome Pro kit or CDN registration for your domain, you should be seeing a yellow star.
