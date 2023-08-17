---
id: background-color-in-customizer-doesnt-match-the-preview
title: Preset background color setting does not match the preview
sidebar_label: Preset background color setting does not match the preview
---

The default color in presets is black, #000000. If the theme uses that color in a particular spot, then no color is set. The three themes that use #000000 for one or more backgrounds are **Premier**, **Dusk**, and **Midnight**.

Having no color set can lead to a surprise in Customizer. For example, suppose you choose the **Bold** preset, for which the header background is blue:

![](/img/background-color-in-customizer-doesnt-match-the-preview-4d0fdf66.png)

Then you switch to the **Midnight** preset, for which the header background is black #000000. In **Customize > Header > Header Style**, the background color still displays as blue.

![](/img/background-color-in-customizer-doesnt-match-the-preview-9b778734.png)

But you can see in the preview that the header background is black, and if you look more closely, you can see that in spite of the blue color, there actually is no color set, as you can see when you click **Select Color**.

![](/img/background-color-in-customizer-doesnt-match-the-preview-10e5b457.png)

The preview is correct – the header background will be rendered black, or you can set a different custom color.
