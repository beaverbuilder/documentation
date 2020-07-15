---
id: white-label-your-child-theme
title: White label your child theme
sidebar_label: White label your child theme
---

When you use Beaver Builder settings to white label the theme in the Beaver Builder Agency version, it applies to the Beaver Builder parent theme only. 

If you use a child theme for your site, it's not hard to add custom branding to it manually. You can use any or all of the following branding ideas.

These instructions assume that you've downloaded the Beaver Builder child theme from the [My Account page](https://www.wpbeaverbuilder.com/my-account/) and already installed it and designed your site, although you can just as easily make these changes on your local system and then install the custom child. These instructions also assume you know how to FTP to your website to move files and modify them with a text editor, although there are other ways to do it. 

:::tip **Tip**
Make sure your child theme is activated in Appearances > Themes when you're done making the changes!
:::

## Replace the child theme thumbnail image in Appearance > Themes

1. Navigate to the Beaver Builder child theme directory at _wp-content/themes/bb-theme-child_.
2. Delete or rename screenshot.png.
3. Upload your own thumbnail image to the same location, making sure it is named screenshot.png.  
  In most cases, this thumbnail image will be the same one you used to white label the Beaver Builder parent theme.

The child theme image shows up in **Appearance > Themes** as the thumbnail image and also on the theme details page.

![](/img/white-label-your-child-theme-770b2468.jpg)

## Brand  the child theme details in Appearance > Themes

You can change the theme's description in **Appearance > Themes** when you hover over the child theme and click **Theme details**. This is controlled by the introductory commented content in your child theme's _style.css_.

1. Open _wp-content/themes/bb-theme-child/style.css_.  
  EXCEPTION: Do not modify the template: line.
  For example:
  ```
/*
Theme Name: Content Extraordinaire Child Theme
Theme URI: http://www.example.com
Version: 1.0
Description: The extraordinary child theme we've developed just for you.
Author: Content Extraordinaire Ltd.
Author URI: http://www.example.com
template: bb-theme /* DO NOT MODIFY THIS LINE */
*/
  ```

These intro comments will result in the child theme details popup, as shown in the following screenshot.

![](/img/white-label-your-child-theme-55cb91a4.png)

## Rename the Beaver Builder child theme directory

1. Navigate to _wp-content/themes/bb-theme-child_ and rename the directory to your branded name.
2. Go to **Appearance > Themes** and activate the "new" child theme.  
  If you already had the child theme activated, you'll see an error that the theme directory doesn't exist. Once you activate the new child theme, that error message and the thumbnail for the "old" child theme will disappear.

## Override credits in the child theme

The default footer says "Powered by Beaver Builder." See [this article](/bb-theme/defaults-for-layouts-content/footers/customize-the-default-theme-footer.md) for options to remove or customize it.