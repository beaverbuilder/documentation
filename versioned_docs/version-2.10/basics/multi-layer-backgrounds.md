---
id: multi-layer-backgrounds
title: Multi-Layer Backgrounds
sidebar_label: Multi-Layer Backgrounds
---

Multi-Layer Backgrounds enables you to add multiple backgrounds to an individual row, column, or Box module.

![Multiple backgrounds](/img/beaver-builder/basics--multiple-backgrounds--1.jpg)

## Background Types

You can choose from three background types: Color, Photo, and Gradient. Other background types, such as video, are not available because videos cannot be added as a background using CSS.

:::info

Please note that Field Connections and Global Colors are not currently supported.

:::

### Color

The Color background type applies a solid color to the entire row, column, or Box module. You can use the color picker to quickly adjust the color. The background color is then applied using CSS.

See the [Color Picker](color-picker.md) article for more infomration.

### Gradient

The Gradient background type applies a CSS gradient effect to the entire row, column, or Box module. You can add multiple gradient colors to create unique gradient combinations.

<details><summary>Adding Gradient Colors</summary>

When you open the gradient color picker, it includes two preset color stop items by default, giving you a basic gradient to work with. To change a color in the gradient:

1. Click on one of the color stop items in the gradient range control (the bar showing the gradient).
2. The color swtch will update to show the color of the selected color stop.
3. Click the color swatch to open the color picker.
4. Choose your preferred color from the picker. Once selected, the gradient updates automatically.
5. Repeat these steps to change the other color in the gradient.

</details>

<details><summary>Adding More Colors</summary>

You can add more color stops to the gradient:

1. Click anywhere on the gradient range control where there isn’t already a color stop item.
2. A new color stop item will appear at that spot.
3. Click the new color stop item, then the color swatch, and use the color picker to choose a color for it.

</details>

<details><summary>Adjusting the Gradient</summary>

You can drag the color stop items left or right to adjust the position of each color in the gradient.

</details>

<details><summary>Delete a Gradient Item</summary>

If you want to remove a color from the gradient:

1. Click the gradient color swatch item you want to delete.
2. Click the **Trash** button to the right-hand side of the color swatch.

</details>

<details><summary>Distribute Gradient Items</summary>

If your gradient has multiple color stops, you can easily distribute them evenly across the gradient. Simply click the Distribute button, and all color stops will be spaced out evenly.

This feature is especially helpful when working with several color stops and aiming for a balanced look. After distributing, you can still fine-tune the colors and positions to achieve your desired gradient effect.

</details>

### Photo

The Photo background type applies an image to the entire row, column, or Box module. You can choose images from the WordPress media library, a URL, or an SVG using SVG code.

The Photo background type offers the following options:

<details><summary>WordPress Media Library</summary>

- **Select Image** - The Select Image button allows you to choose an image from the WordPress media library.
- **WordPress Image Size** - Choose the WordPress media image size to use. You can choose from the default thumbnail, medium, large, or full size and any custom image size you have added.
- **Replace** - Allows you to select a different image from the WordPress Media Library to replace the current background image.
- **Remove** - Remove the image from the background.

</details>

<details><summary>URL</summary>

- **URL** - Enter or paste the URL of the image you want to use into the URL field.

</details>

<details><summary>SVG</summary>

- **SVG Code** - Enter or paste the SVG code into the SVG Code field for the SVG you want to use. For best results, use simple SVG code, such as:

  ```html
  <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="40" fill="blue" />
  </svg>
  ```

</details>

<details><summary>Background Properties</summary>

The background properties for repeat, position, size and clip to are available for all Photo options (WordPress Media Library, URL, and SVG).

- **Repeat** - Choose whether to repeat the image or not.
- **Position** - Choose the position of the image.
- **Size** - Choose the size of the image, either default, cover, or contain.
- **Clip To** - Choose whether to clip the image to the background or not.

</details>

## Using Multiple Backgrounds

You can add as many background types as you like in any order and combination. To add multiple backgrounds to a row, column, or box module:

1. Open a row, column, or Box module for editing.
2. Navigate to the **Background** section and choose the **Multiple Backgrounds** option.
3. Click the **+** icon to add a background type and select the one you want to add (color, photo, or gradient).
4. Configure the background settings.
5. Click the **+** icon again to add another background type.
6. Repeat steps 3 and 4 for each background type you want to add.
7. Click **Save** to save your changes.

### Background Layer Order

The order in which background types are displayed on the page is determined by the order in which you add them to the Multi-layer Backgrounds option. The first background type added appears on top of the background, and the last background type added appears on the bottom.

For example, if you add a color type first and a photo second, the photo background will appear behind the color background and isn't visible. In order to see the photo behind the color background, you must reduce the [background color alpha value](color-picker.md).

### Reorder Background Types

You can change the order of the background types any way you like. To reorder the background types, click and drag them up or down the list to the desired positions.

### Duplicating Background Types

To duplicate a background type, click the **Duplicate** <i className="fa-regular fa-copy" /> icon to the right of the background type you want to duplicate.

### Remove Background Types

You can also remove a background type by clicking the **Trash** <i className="fa-solid fa-trash-can" /> icon to the right of the background type you want to remove.
