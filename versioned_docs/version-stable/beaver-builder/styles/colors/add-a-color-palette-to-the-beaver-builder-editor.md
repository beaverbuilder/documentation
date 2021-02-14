---
id: add-a-color-palette-to-the-beaver-builder-editor
title: Add a color palette to the Beaver Builder editor
sidebar_label: Add a color palette to the Beaver Builder editor
---

You can add single colors or color palettes to the Beaver Builder editor both
manually and programmatically.

Neither of these procedures will replace any existing colors that you have set
in existing modules, but it makes it easy to select the new color moving
forward. Both procedures save the colors for use in the Beaver Builder editor
no matter where you're editing.

## To add custom color presets manually

  1. Open a page for editing ini Beaver Builder.
  2. Click in any **Color** field for a row, column, or module.  
The Color Picker opens.

  3. Select one of your palette colors or paste in the hex number for one of the colors (#1 in the screenshot below).
  4. Click the Plus sign in the upper right corner of the Color Picker create a preset (#2 n the screenshot below).
  5. Review your color presets by clicking **Color presets** in the bottom line in the Color Picker (#3 in the screenshot below).

![](/img/how-to-tips-color-palette-1.png)

## To add custom color presets programmatically

  1. Check your current color presets by opening a module for editing in Beaver Builder, then choose a color field and click **Color presets**. Delete any presets that you don't want to keep by clicking the **X** icon next to the color.
  2. Add the following code to your child theme's _functions.php_ file.  
**Tip:** You can edit this file in **Appearance > Editor**, but make sure you
choose the correct file.

  ```php
  //Add color presets for Beaver Builder
  function my_builder_color_presets( $colors ) {
    $colors = array();

      $colors[] = '8E181B';
      $colors[] = 'D11C23';
      $colors[] = '1A4688';
      $colors[] = 'D6E1EE';
      $colors[] = 'fdfffc';
      $colors[] = 'f1d302';

    return $colors;
  }

  add_filter( 'fl_builder_color_presets', 'my_builder_color_presets' );
  ```

  3. Replace the hex values in the code with the hex value for each color you want to define. Add or remove `$colors[]` lines accordingly.

:::note **Note**
Don't use the hashtag (#) symbol with the hex values in this Beaver Builder code.
:::

:::tip **Tip**
You can also [add color presets to the Customizer settings](/bb-theme/defaults-for-styles/colors/add-color-presets-to-customizer.md) in the Beaver Builder child theme.
:::
