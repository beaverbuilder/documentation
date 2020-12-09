---
id: preset-tips
title: One-click presets
sidebar_label: One-click presets
---

<div className="embed-responsive">
<iframe width="560" height="315" src="https://www.youtube.com/embed/18SBBrNrD0U" FrameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="">
</iframe>
</div>

The Beaver Builder Theme has a number of Customizer presets, which are [described in the Customizer section](/bb-theme/customizer-settings/presets.md). Presets let you set a basic layout and color scheme for your site with one click. 

Presets are great if you want a quick layout and color alternative, but you should be aware of a couple things if you plan to customize them further. Here are some guidelines for selecting them and also some troubleshooting help.

## Do I need to use a preset?

The **Default** preset is the one to choose if you want to create all your own settings. The other areas of the Customizer make it easy for you to set up your custom layout and colors.

On the other hand, you might choose a hybrid preset to get a layout that you can't normally get in Customizer. See the section on hybrid presets.

If you're customizing the Beaver Builder Theme for your clients and you want to enable only some presets, or include your own presets, or remove some or all of the presets, see the following articles for help.

* [Add a custom theme preset](/bb-theme/developer/custom-theme-preset/add-a-custom-theme-preset.md)
* [Remove an existing or custom preset](/bb-theme/developer/custom-theme-preset/remove-an-existing-or-custom-preset.md)

## What is actually being preset?

Here are some things that presets control. For a diagram of the portions of the page layout that the Beaver Builder Theme controls, see the article about [Customizer settings mapped to CSS classes](/bb-theme/code/beaver-builder-theme-customizer-settings-mapped-to-css.md).

### Full-width vs. boxed vs. hybrid page layouts

The first decision to make about a preset is whether you want a full-width, boxed, or hybrid layout. If you try to change this layout setting in **Customize > General > Layout**, the preset will change it back, so it's a good idea to decide if you want a full-width or boxed layout before you choose a preset.

:::note **Note**
If you customize a preset and then choose a different preset, you'll probably lose some of your Customizer settings.
:::

#### Full-width presets:

  * Default
  * Default dark
  * Bold
  * Stripe

#### Boxed presets

  * Classic
  * Modern
  * Dusk
  * Midnight

#### Hybrid presets

Normally in Customizer you choose a layout that's either entirely full-width or entirely boxed. However, there are two presets that use a combination of full-width and boxed:

  * The **Premier** preset has a full-width header and footer but a boxed content area.
  * The **Deluxe** preset has a boxed nav bar and content area, but all other header and footer areas are full-width.

These hybrid presets use CSS to achieve their hybrid layout, so this can be a time-saver over writing your own CSS if that's the look you're going for. On the other hand, if you use a hybrid preset and later decide you want to change to full-width or boxed without losing other custom settings, you'll have to [add custom CSS to override that behavior](/bb-theme/defaults-for-layouts-content/presets/convert-the-premier-or-deluxe-preset-to-entirely-full-width.md).

### Colors

The preset sets initial colors in all of the page layout areas: page background, header, footer, and content area background, text, and link colors, You can change any of these colors in the Customizer. On the other hand, if you plan to customize, it's also easy to start with the **Default** preset and set your own layout and colors in the Customizer.

:::note **Note**
Whether or not you use a preset, nav bar color can only be different from the header logo area for two of the header layouts: **Nav centered** or **Nav bottom**. You can change the header layout of any preset, either adding or removing the ability to change the nav bar colors, using **Customize > Header > Nav Style**.
:::

The default colors for each preset are listed in the [Customizer: Presets](/bb-theme/customizer-settings/presets.md) article.

See the following troubleshooting articles for a couple minor quirks with preset colors.

* [Preset background color setting does not match the preview](/bb-theme/troubleshooting/background-color-in-customizer-doesnt-match-the-preview.md)
* [Cannot reset color to default in a preset](/bb-theme/troubleshooting/cannot-reset-color-to-default.md)
