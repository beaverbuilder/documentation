---
id: color-picker
title: Color Picker
sidebar_label: Color Picker
---

Beaver Builder's visual color picker is based on the [WordPress Iris color
picker](http://automattic.github.io/Iris/). The color picker includes an
opacity sliderd, shown in the following screenshot. 

![](/img/the-basics-color-picker-in-bb-1.jpg)

The opacity slider on the right uses the RGBa alpha channel, rather than an
`opacity` CSS attribute. When you move the opacity slider, you'll see the hex
color value change to RGBa settings to reflect the requirement of the alpha
channel. You can also set your own RGBA values instead
of hex values for colors.

:::tip **Tips**
  * To add your own RGBa values, move the right-hand opacity slider until the color field converts to RGBa values, then enter your RGBa value.
  * If you see only gray values in your color picker, move the saturation slider to the right.  
![](/img/the-basics-color-picker-in-bb-2.gif)
:::

:::note **Developer note**

Some legacy sites may have been set up to use
connections to custom fields containing color settings for row backgrounds for older versions of Beaver Builder in which opacity was set separately in the **Opacity** field. In that situation,
these legacy color settings may revert to 100% opacity when the row is edited.
This is because Beaver Builder now gets its opacity information from an RGBa
color value rather than a separate opacity setting.

To preserve both your custom field settings and the row background opacity
settings in legacy sites, you can try implementing [this code to restore the legacy row background opacity field](https://gist.github.com/fastlinemedia/ea77d927955f9d27a011fc1cac6d0a7d).

Moving forward, if you want to use custom fields to store color settings in
sites built with Beaver Builder, use RGBa values to encode opacity in the
alpha channel.
:::
