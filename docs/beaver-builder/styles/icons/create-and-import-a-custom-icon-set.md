---
id: create-and-import-a-custom-icon-set
title: Create and import a custom icon set
sidebar_label: Create and import a custom icon set
---

You can use the IcoMoon App or Fontello to create and download a custom icon
set as a web font, then upload it so Beaver Builder can use it. Here are the
instructions for each task.

:::tip **Tip**
If you use icons from different icon sets on the same page, creating
a custom icon set with just those icons is a great way to reduce page load
time. That way Beaver Builder only loads one icon set.
:::

## 1. Create a custom icon set

You can use either the IcoMoon app or Fontello to create a custom icon set,
either from sets they provide or from icons that you upload. Here are
instructions for both.

### To create a custom icon set with the IcoMoon App

1. Open the [IcoMoon App](https://icomoon.io/app/).
2. Select the icons you want in your set by clicking on them.  
  You can select icons from paid or free libraries by clicking the **Icon
Library** button in the top toolbar.  
If you have your own icons, you can upload them by clicking **Import icons**
in the top toolbar.

3. Once you have your set selected, click **Generate font** in the lower right corner, verify your font set, then click **Preferences** in the toolbar.
4. Change **Font name** to something that will help you remember the set in Beaver Builder.  

  :::tip **Tip**
  This step is optional, but the default font name is **icomoon**, so
  if you import more than one IcoMoon icon set, Beaver Builder will display the
  same **icomoon** label for both.
  :::

5. Rename the  **Class prefix** from **icon-** to anything else.    
**Important:** Be sure to provide a custom class prefix. If left unchanged,
multiple icon fonts using IcoMoon's default `icon-` prefix may conflict,
causing some to display incorrectly or not display within Beaver Builder’s
icon selector.

6. Open the **CSS Selector** section and choose either **Use attribute selectors** or **Use a class**.  
Don't choose to use the `<i>` tag, because it can override all other fonts'
styling in Beaver Builder.

  7. Click **X** in the upper right corner to close the **Preferences** window.
  8. Click **Download**.  
The download file is a zip file prefixed with *icomoon*.

  9. Follow the instructions below to import your icon set into Beaver Builder.

### To create a custom icon set with Fontello

  1. Go to the [Fontello site](http://fontello.com).
  2. Select the icons you want in your set by clicking on them or upload SVG icons by dragging them in. See the [Fontello help](https://github.com/fontello/fontello/wiki/How-to-use-custom-images) for additional information.
  3. Once you have your set selected, add an optional custom font name in the upper right corner.   
Mousing over the **font name** field will tell you the naming constraints.

  4. Click **Download webfont** in the upper right corner.  
The download file is a zip file prefixed with _fontello_.

  5. Follow the instructions below to import your icon set into Beaver Builder.

## 2. Import the custom icon set into Beaver Builder

1. On the WordPress admin panel, click **Settings > Beaver Builder > Icons**, then click **Upload icon set**.
2. When the Media Library upload window opens, select your zip file. After the icon set has uploaded, click **Select file**.  

The custom icon set appears in the **Icon settings** list with one of the
following names:

  * The custom font name you assigned
  * **IcoMoon** (the default name for IcoMoon downloads)
  * **Fontello** plus the date uploaded to the Media Library.
