---
id: multi-layer-backgrounds
title: Multi-Layer Backgrounds
sidebar_label: Multi-Layer Backgrounds
---

Multi-Layer Backgrounds enables you to add multiple backgrounds to an individual row, column, Box module, or Popup module.

![Multiple backgrounds](/img/beaver-builder/basics--multiple-backgrounds--1.jpg)

## Usage

Use the Multiple Backgrounds field to stack more than one background on a single row, column, Box module, or Popup module. Each layer is a color, a gradient, or a photo, and Beaver Builder combines the layers into one CSS `background` value. A common use is a semi-transparent color layer over a photo, or a gradient fading into a solid color, without wrapping the content in extra elements.

Layers render as plain CSS, so background types that need JavaScript or markup, such as video, slideshow, and parallax, are not available as layers. In rows, those remain separate options under the **Advanced** group of the background **Type** setting.

With Beaver Themer active, color and photo layers can be connected to [field connections](/beaver-themer/field-connections), so a single Themer layout shows each post's own featured image or custom field color as a background layer.

## Availability

The field appears under a different name depending on where you open it.

- **Rows and columns:** In the **Style** tab, open the **Background** section and set **Type** to **Multiple Backgrounds**. The **Background Layers** field appears below it.
- **Box module:** In the **Container** tab, open the **Appearance** section and set **Background Type** to **Advanced**. The **Background Layers** field appears below it. The **Children** tab has the same control in its **Appearance** section, labeled **Background**, for the background applied to each child module.
- **Popup module:** In the **Appearance** section, the **Background** and **Backdrop** fields are always layer fields.

The field is responsive, so each breakpoint can hold its own set of layers.

## Add and manage layers

The field starts empty and shows **Click + to add layers**. Each layer you add is listed as a row with a thumbnail and a title.

1. **Add a layer.** Click the **+** button above the layer list and choose **Color**, **Gradient**, or **Photo**. New layers are added at the top of the list.
2. **Configure the layer.** Click the layer's title to open its picker. Color layers open the color picker, while gradient and photo layers open a dialog with their own controls.
3. **Repeat and save.** Add as many layers as you need in any combination, then click **Save**. The builder previews each change as you make it.

### Layer order

Layers render in list order. The first layer in the list is on top and the last layer is at the bottom, so an opaque layer hides everything below it.

For example, a solid color layer above a photo layer hides the photo completely. To show the photo through the color, lower the color's alpha value in the [color picker](/beaver-builder/basics/color-picker), or move the photo layer above the color.

### Reorder, duplicate, and delete layers

Drag a layer up or down the list to change its position. Hover over a layer to reveal its actions on the right-hand side of the row.

- **Duplicate** copies the layer, including its current settings, directly below the original. A field connection is not copied, so the duplicate of a connected layer shows the original's fallback color or image.
- **Delete** removes the layer. Deleting a connected layer also removes its field connection.

## Layer types

Each layer type has its own picker and writes a different part of the final CSS.

### Color

A color layer fills the whole element with a solid color. Click the layer to open the [color picker](/beaver-builder/basics/color-picker), where you can set the color and its alpha value. Choosing a global or theme color from the picker's **Presets** tab stores the color as a CSS variable, so the layer follows that global color when it changes.

### Gradient

A gradient layer applies a CSS gradient. Click the layer to open the gradient dialog, which shows a live preview, a gradient bar with color stops, and the controls below.

#### Type

Default: **Linear**

Selects the gradient shape. **Linear** fades along a straight line, **Radial** fades outward from the center, and **Conic** sweeps around the center.

#### Angle

Default: **0**

For linear gradients only. Sets the direction of the gradient in degrees, from 0 to 360.

#### Color Space

Default: **OKLCH**

Sets the color space the browser uses to blend between stops. Options are **sRGB**, **Linear sRGB**, **OKLAB**, and **OKLCH**. The OKLAB and OKLCH spaces avoid the muddy mid-tones that can appear when blending very different colors in sRGB.

#### Distribute color spots

Spaces every color stop evenly across the gradient bar. Use it after adding several stops to get a balanced starting point, then fine-tune individual positions.

#### Color stops

The gradient bar holds the stops that define the gradient. A new gradient starts with two stops.

<details>
<summary>Working with color stops</summary>

Click a stop to select it. The color picker, a position field, and a **Delete** button appear below the bar for the selected stop.

- **Add a stop:** Click an empty spot on the gradient bar to add a stop at that position. Click the swatch at either end of the bar to add a stop at the start or end.
- **Change a stop's color:** Select the stop and choose a color in the picker. Global colors from the **Presets** tab are supported here too.
- **Move a stop:** Drag the stop along the bar, or type a value from 0 to 100 in the position field.
- **Delete a stop:** Select the stop and click the **Delete** button, double-click the stop, or press Backspace while it is selected. Double-click and Backspace leave at least two stops in place. The **Delete** button has no such limit, so keep at least two stops for a valid gradient.

</details>

### Photo

A photo layer places an image on the element. Click the layer to open the photo dialog, choose where the image comes from, then set how it repeats, sits, and scales.

#### Source

Three buttons at the top of the dialog switch the image source.

<details>
<summary>Source options</summary>

- **Media Library:** Click **Select Image** to choose an image from the WordPress Media Library. Once an image is set, you can pick a different registered image size, click **Replace** to choose another image, or click **Remove** to clear it.
- **URL:** Paste the direct URL of an image. A [field connection shortcode](/beaver-themer/field-connections/syntax) also works here when Beaver Themer is active, although connecting the layer is the simpler option for post data.
- **SVG:** Paste inline SVG markup. Beaver Builder encodes it as a data URL and uses it as the background image. Simple SVG code works best, for example:

  ```html title="Simple SVG background"
  <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="40" fill="blue" />
  </svg>
  ```

</details>

#### Repeat

Default: **Repeat**

Controls how the image tiles inside the element. Choose **No Repeat** for a single image, **Repeat** to tile in both directions, **Repeat Horizontal** or **Repeat Vertical** to tile along one axis, or **Space** and **Round** to tile without clipping the image.

#### Position

Anchors the image within the element, from **Top Left** through **Center** to **Bottom Right**. When no position is chosen the image uses the browser default, which is the top left corner.

#### Size

Default: **Default Size**

Controls how the image scales. **Default Size** uses the image's own dimensions, **Cover** scales it to fill the element and crops any overflow, and **Contain** scales it so the whole image stays visible.

#### Clip To

Limits how far the layer extends. **Border** paints under the border, **Padding** stops at the inside edge of the border, and **Content** paints only behind the content area.

## Connect a layer to a field connection

With Beaver Themer active, color and photo layers can take their value from a [field connection](/beaver-themer/field-connections) instead of a fixed color or image. Gradient layers cannot be connected, and global colors are chosen through the color picker rather than the connections menu.

:::note

Layer connections require Beaver Themer. Without it, the connect button does not appear on layers, and existing connected layers render their fallback color or image.

:::

1. **Open the connections menu.** Hover over a color or photo layer and click the **+** icon that appears beside **Duplicate** and **Delete**. The menu lists only data sources that match the layer type: photo sources for photo layers and color sources for color layers.
2. **Choose the data source.** Hover over the data source and click **Connect**. Photo layers can connect to sources such as **Post Featured Image**, **Author Picture URL**, **User Picture URL**, and image fields from integrations such as Advanced Custom Fields and WooCommerce. Color layers connect to color fields from integrations such as Advanced Custom Fields.
3. **Configure the connection.** If the source has settings, a dialog opens. For example, **Post Featured Image** asks for the image size and a default image. Click **Save** in the dialog to complete the connection. Cancelling abandons it, and the layer keeps its previous value.

### Work with a connected layer

A connected layer shows a database icon and the data source's name in place of its color or image title. The thumbnail previews the value the connection currently returns for the page being edited.

- **Edit the connection settings:** For a color layer, click the layer's row. For a photo layer, click the layer to open the photo dialog, then click **Edit**. The row only responds when the data source has settings to change.
- **Keep the photo controls:** On a connected photo layer, the source buttons are replaced by a summary of the connection, but **Repeat**, **Position**, **Size**, and **Clip To** stay editable.
- **Disconnect the layer:** Hover over the layer and click the unlink icon that replaces the **+** icon. The layer returns to its own color or image.
- **Change the data source:** Disconnect the layer first, then connect it to the new source.

### How do connected layers render?

A connected layer keeps the color or image you picked as its fallback. On the front end, Beaver Builder writes the connected value into the element's own inline style, so every instance gets its own value. Duplicated rows and Loop module items each show their own post's image or color, and connections made at a single breakpoint apply only at that breakpoint.

When Beaver Themer is deactivated, or a connection returns no usable value for the current page, the layer falls back to the color or image you picked. Photo connections accept image URLs, and color connections accept hex, `rgb()`, `rgba()`, `hsl()`, and `hsla()` values.
