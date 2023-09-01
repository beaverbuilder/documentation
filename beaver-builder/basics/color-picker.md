---
id: color-picker
title: Color Picker
sidebar_label: Color Picker
---

The Color Picker is used to select and adjust color values throughout the Beaver Builder user interface, such as backgrounds, buttons, text, and links. You can also adjust opacity, saturation, and save your favourite color presets.

![Beaver Builder color picker](/img/beaver-builder/basics--color-picker--1.jpg)

## Opacity

The opacity slider located on the right-hand side uses the RGBa alpha channel (`rgba(red, green, blue, alpha)`) and when you adjust the opacity, you'll see the `hex` color value (`#ffffff`) change to the RGBa value (`rgba(255,255,255,0.8)`). Additionally, you can enter your own RGBa values in the input field at the top of the color picker.

![Opacity slider](/img/beaver-builder/basics--color-picker--2.jpg)

## Saturation

You can adjust the saturation of colors using the saturation slider located at the bottom. Color saturation is defined as the intensity of a color. For example:

- There are no shades of gray in 100%, it is pure color.

- 50% is 50% gray, but you can still see the color.

- 0% is completely gray and you cannot discern the color.

![Saturation slider](/img/beaver-builder/basics--color-picker--3.jpg)

## CSS Variables

Instead of selecting a color from the color picker or entering a hex or rgba value, you have the option to use CSS variables in the Beaver Builder color picker. This is particularly handy when you intend to utilize a color that's already established in [Global Styles](user-interface/global-styles.md#colors-tab), your theme, or a color defined in your custom CSS.

To integrate a CSS variable, just input its name into the field at the upper part of the color picker. Remember to enclose the CSS variable name within `var()`.

```css
var(--css-var-name)
```

![Add colors manually](/img/beaver-builder/basics--color-picker--4.jpg)

## Color Presets

You can add single colors or color palettes to the Beaver Builder editor both
manually and programmatically.

<div className="embed-responsive">
  <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/zN9h8GiYGU8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
</div>

These two procedures will not replace existing colors in existing modules, but it makes it easier for you to select the new color in the future. Each of these procedures saves the colors so they are usable wherever you edit in Beaver Builder.

### Add color manually

1. [Launch Beaver Builder](getting-started/launch-builder.md) on your page or post.

2. Click on any **Color** setting for a row, columns, or module to open the Color Picker.

3. Select a color in the Color Picker or type/paste in a hex or RGBA color value for one of your colors.  
   **#1** in the screenshot below.

4. Click the **Plus** symbol (+) in the upper right corner of the Color Picker to create a preset.  
   **#2** in the screenshot below.

5. Review your color presets by clicking the **Color Presets** at the bottom of the Color Picker.  
   **#3** in the screenshot below.

![Add colors manually](/img/beaver-builder/basics--color-picker--5.jpg)

### Add color programmatically

You can register custom colors programmatically by using the `fl_builder_color_presets` filter.
