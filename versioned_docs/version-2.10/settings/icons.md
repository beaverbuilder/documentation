---
id: icons
title: Icons Tab
sidebar_label: Icons
description: The Icons tab in the Beaver Builder settings lets you enable, disable icon sets and upload custom icon sets which can be used in Beaver Builder modules..
---

The **Icons** tab in the Beaver Builder settings lets you enable, disable icon sets and upload custom icon sets which can be used in Beaver Builder modules.

## Access Icons tab

1. Access your site's WordPress Admin Dashboard.
2. Navigate to **Settings > Beaver Builder**.
3. Then click the **Icons** tab.

![Access Icons tab](/img/beaver-builder/settings--icons--1.jpg)

## Included Icon Sets

Beaver Builder comes with icon sets from three sources enabled by default:

- [Font Awesome 5](https://fontawesome.com/)
- [Foundation Icons](https://zurb.com/playground/foundation-icon-fonts-3)
- [WordPress Dashicons](https://developer.wordpress.org/resource/dashicons/)

The Font Awesome 5 icon set is separated into styles which you can enable or disable:

- Font Awesome Solid
- Font Awesome Regular
- Font Awesome Light (Pro only)
- Font Awesome DuoTone (Pro only)
- Font Awesome Brands

:::info

You can use the official [Font Awesome WordPress plugin](https://wordpress.org/plugins/font-awesome/) to access the latest version of Font Awesome, including [custom kits and icons](integrations/font-awesome.md). This ensures your site stays up to date with changes like the new <i className="fa-brands fa-x-twitter"></i> (X) icon that replaced the classic Twitter bird <i className="fa-brands fa-twitter"></i>.

:::

## Enable or Disable Icon Sets

This applies to both built-in and custom icon sets.

1. On the WordPress admin panel, click **Settings > Beaver Builder**.
2. Click the **Icons** tab.
3. Select or clear checkboxes to enable or disable the icon sets.

## Custom Icons

You can use the IcoMoon App or Fontello to create and download a custom icon set as a web font, then upload it so Beaver Builder can use it. Here are the instructions for each task.

:::tip
If you use icons from different icon sets on the same page, creating a custom icon set with just those icons is a great way to reduce page load time. That way Beaver Builder only loads one icon set.
:::

### IcoMoon App

1. Open the [IcoMoon App](https://icomoon.io/app/).

2. Select the icons you want in your set by clicking on them.
   You can select icons from paid or free libraries by clicking the **Icon Library** button in the top toolbar.
   If you have your own icons, you can upload them by clicking **Import icons** in the top toolbar.

3. Once you have your set selected, click **Generate font** in the lower right corner, verify your font set, then click **Preferences** in the toolbar.

4. Change **Font name** to something that will help you remember the set in Beaver Builder.

    :::tip
    This step is optional, but the default font name is **icomoon**, so if you import more than one IcoMoon icon set, Beaver Builder will display the same **icomoon** label for both.
    :::

5. Rename the **Class prefix** from `icon-` to anything else.

:::warning **Important**
Be sure to provide a custom class prefix. If left unchanged, multiple icon fonts using IcoMoon's default `icon-` prefix may conflict, causing some to display incorrectly or not display within Beaver Builder’s icon picker.
:::

6. Open the **CSS Selector** section and choose either **Use attribute selectors** or **Use a class**.
   Don't choose to use the `<i>` tag, because it can override all other fonts' styling in Beaver Builder.

7. Click **X** in the upper right corner to close the **Preferences** window.

8. Click **Download**.
   The download file is a zip file prefixed with _icomoon_.

9. Follow the instructions below to [import your icon set](#import-custom-icon-set).

### Fontello

1. Go to the [Fontello](https://fontello.com/) site.

2. Select the icons you want in your set by clicking on them or upload SVG icons by dragging them in. See the [Fontello help](https://github.com/fontello/fontello/wiki/How-to-use-custom-images) for additional information.

3. Once you have your set selected, add an optional custom **font name** in the upper right corner.
   Mousing over the font name field will tell you the naming constraints.

4. Click **Download webfont** in the upper right corner.
   The download file is a zip file prefixed with fontello.

5. Follow the instructions below to import your icon set into Beaver Builder.

### Import custom icon set

1. On the WordPress admin panel, click **Settings > Beaver Builder**.
2. Click the **Icons** tab, then click **Upload Icon Set**.
3. When the Media Library upload window opens, select your zip file. After the icon set has uploaded, click **Select file**.

The custom icon set appears in the **Icons** tab list with one of the following names:

- The custom font name you assigned
- **IcoMoon** (the default name for IcoMoon downloads)
- **Fontello** plus the date uploaded to the Media Library.

## Enable Font Awesome PRO icons (Deprecated)

This setting is now deprecated and will be removed in a future release. For Font Awesome Pro icons or Font Awesome version 6+, install the official Font Awesome plugin.

See the [Font Awesome Integration](integrations/font-awesome.md) article for more information.
