---
id: css-gradients
title: CSS Gradients
sidebar_label: CSS Gradients
description: This article explains how to convert content from the Standard (block) or Classic editor in WordPress 5 to Beaver Builder and vice versa.
---

If you want to add a gradient to the background of a row or column, you can do so with the [color gradient background options](rows/background-settings.md#gradient) built into the rows and columns. Alternatively, if you need a gradient effect with more complexity, such as one created using a gradient generator, you can follow the steps below.

## Get the CSS for your Gradient

There are many gradient generators on the internet that generate CSS code.
Here are just a few:

- [Ultimate CSS gradient generator](http://www.colorzilla.com/gradient-editor/)
- [CSS Gradient](https://cssgradient.io/)
- [Web gradients](https://webgradients.com/)
- [UI gradients](https://uigradients.com/)

Once you've generated the gradient you want, copy the CSS and save it
somewhere.

## Add a Custom CSS Class to your Row or Column

Adding custom styling is possible by using the [unique node class name](getting-started/how-it-works.md#nodes), however, we recommend that you create your own class.

1. Open your row or column for editing and click the [Advanced tab](advanced-tab/index.md).
2. Scroll to the [HTML Element](advanced-tab/html-element.md#class) section and enter a custom name in the **Class** field. _(Do not use a period.)_

:::tip
It's a best practice to add a custom prefix to your class names to avoid conflict with other class names used by the theme and plugins. In this example, we'll use the class name `bb-gradient`. Repeat this step for any other rows or columns that you want to have the same color gradient background.
:::

3. Click **Save**.

## Add the Custom CSS for the Gradient

Your custom CSS should use the [class name you added to the row or column](#add-a-custom-css-class-to-your-row-or-column). Based on our `bb-gradient` class name example, here's what the CSS should look like.

```css
.bb-gradient {
  background-image: linear-gradient(
    -225deg,
    #231557 0%,
    #44107a 29%,
    #ff1361 67%,
    #fff800 100%
  );
}
```

Copy the CSS from the gradient generator and paste into your preferred location. See the [Custom Code](basics/custom-code.md) article for more information on where to place your custom CSS.

:::tip
If your CSS gradient doesn't appear on your row or column, make sure that the row or column background is set to **None**.
:::

As soon as you add your custom class name you should see the row or column on your page take on the background gradient color.
