---
id: css-length-height-units
title: CSS length, height, and size units
sidebar_label: CSS length, height, and size units
---

You can use not only an absolute unit value (px) for length, height, margin,
and padding settings, but also relative **`em`**, **`rem`**, **`%`**, **`vw`**,
and **`vh`** units, depending on the setting.

## What do these relative units mean?

The W3Schools site has a good [summary table of absolute and relative CSS units](https://www.w3schools.com/cssref/css_units.asp) and what each of the relative units is relative to, plus which versions of which browsers support
which units.

##  Which of these units are available in Beaver Builder layouts?

The absolute **px** unit is always available for every setting in Beaver
Builder.

As for relative settings, which units are available for which setting depends
on the type of setting and whether the applicable units have been enabled for
a particular setting. The following table shows which CSS units are enabled
for which settings.

Setting  |  px  |  %  |  em  |  rem  |  vw  |  vh  
---|---|---|---|---|---|---  
Row margins  |  ✓  |  ✓  |  |  |  ✓  |  ✓  
Row margins (global setting)  |  ✓  |  ✓  |  |  |  |  
Column margins (individual and global)  |  ✓  |  ✓  |  |  |  |  
Module margins (individual and global)  |  ✓  |  ✓  |  |  |  |  
Row padding  |  ✓  |  ✓  |  ✓  |  |  ✓  |  ✓  
Row padding (global setting)  |  ✓  |  ✓  |  ✓  |  |  |  
Column padding (individual and global)  |  ✓  |  ✓  |  ✓  |  |  |  
Row width (individual and global)  |  ✓  |  ✓  |  |  |  ✓  |  
Minimum height (row, column)  |  ✓  |  |  |  |  ✓  |  ✓  
Row shape overlays  |  ✓  |  ✓  |  |  |  ✓  |  ✓  
Border settings (row, column, multiple modules)  |  ✓  |  |  |  |  |  
Module style padding (Accordion, Call to Action, Callout, Tabs)  |  ✓  |  ✓  |  ✓  |  |  |  
Module style padding (Menu)  |  ✓  |  |  ✓  |  |  |  
Module width (Button)  |  ✓  |  ✓  |  ✓  |  |  |  
Module width (Photo, Separator)  |  ✓  |  ✓  |  |  |  ✓  |  
Module height (Map)  |  ✓  |  |  |  |  |  ✓  
Typography font size (multiple modules)  |  ✓  |  |  ✓  |  ✓  | ✓ |  
Typography font line height (multiple modules)  |  ✓  |  |  ✓  |  |  |  
Icon size (modules with icons)  |  ✓  |  |  ✓  |  ✓  |  |  

:::note **Note**
If you don't see a setting here, chances are the unit is **px** only.
:::

## Notes on using the vw unit for font size

The **vw** unit refers to viewport width, where viewport is usually the browser window for purposes of Beaver Builder.

To use this **vw** unit, check the **Base font size** setting in **Global Settings**. Base font size must be set in pixels, and the default is **16px**. As the tooltip for that setting explains, this global setting only applies when vw is used in the **Typography** section of modules.

When you set a font size in **vw** units in a module's **Typography** section, the the actual font size in pixels is calculated using the [CSS `calc()` function](https://www.w3schools.com/cssref/func_calc.asp), with the formula `calc( base-font-size + 1vw)`. If the global **Base font size** is **16px**, the calculation is `calc( 16px + 1vw )`.

By using a base font size in this calculation, the font size scales more slowly as viewport width decreases, producing a better result at all device sizes. For more information and more explanation of the CSS calc() function, see [this CSS-Tricks article](https://css-tricks.com/fun-viewport-units/#article-header-id-1) on viewport units.

## When to use which unit

Unfortunately there's not a simple answer to help you make the decision of
whether to use absolute or relative units, and if relative, which one. Some of
the factors are design, accessibility, and media queries.

Here are some of the many articles on the topic:

  * [Typography units (em, rem, px, %) for beginners](https://www.youtube.com/watch?v=OQXZb3W6sgE) \- Webflow CSS tutorial (video)
  * [Width and height units (px, %, vh, vw) - Webflow CSS tutorial](https://www.youtube.com/watch?v=__KNqdpqji0) (video)
  * [When to use which units in CSS](https://daveredfern.com/use-units-css/)
  * [EM vs. REM vs. PX](https://engageinteractive.co.uk/blog/em-vs-rem-vs-px)
  * [Comprehensive Guide: When to Use Em vs. Rem](https://webdesign.tutsplus.com/tutorials/comprehensive-guide-when-to-use-em-vs-rem--cms-23984)
  * [Fun with Viewport Units](https://css-tricks.com/fun-viewport-units/)

Most browser versions supported by Beaver Builder support all of the CSS units
available for layouts. However, if you are planning for your website to be
used in restricted browser situation, check [the browser support table at the
W3Schools site](https://www.w3schools.com/cssref/css_units.asp) for
compatibility.
