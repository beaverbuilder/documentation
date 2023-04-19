---
id: css-gradients
title: CSS gradients
sidebar_label: Gradients with CSS
---

The easiest way to add a gradient as the background color of a row or column
is to [use the color gradient background feature](/beaver-builder/styles/effects/color-gradients-for-row-and-column-backgrounds-and-overlays.md) built into the rows and columns. However, if you have a special gradient effect you want to use, for example from a gradient-generating tool, here are some tips.

Gradients can be variations of a single color:

![](/img/how-to-tips-gradients-1.jpg)

Or they can use multiple colors:

![](/img/how-to-tips-gradients-2.jpg)

Or they can even involve shapes. The following screenshot shows a preset
radial gradient from gradientgenerator.com, with CSS you can copy.

![](/img/how-to-tips-gradients-3.jpg)

No matter how involved the gradient, if you're using a tool that generates the
CSS, the basic procedure to add the gradient to a row or column background is
the same.

**To add a CSS gradient as a row or column background in Beaver Builder:**

  * Get the CSS for your gradient.
  * Add a custom CSS class to your row or column.
  * Add the custom CSS for the gradient.

## 1. Get the CSS for your gradient

There are many gradient generators on the internet that generate CSS code.
Here are just a few:

  * [Ultimate CSS gradient generator](http://www.colorzilla.com/gradient-editor/)
  * [Gradient generator](http://gradientgenerator.com/)
  * [Web gradients](https://webgradients.com/)
  * [UI gradients](https://uigradients.com/)

Once you've generated the gradient you want, copy the CSS and save it
somewhere.

## 2. Add a custom CSS class to your row or column

  1. Open your row or column for editing and click the **Advanced** tab.
  2. Scroll to the **CSS selectors** section and enter a custom name in the **Class** field. (Do not use a period.)  
It's a best practice to add a custom prefix to your class names to avoid
conflict with other class names used by the theme and plugins. In this
example, we'll use the class name `kb-gradient`. Repeat this step for any
other rows or columns that you want to have the same color gradient
background.

  3. Click **Save**.

## 3. Add the custom CSS for the gradient

Copy and paste the CSS from the gradient generator and replace the class name
in the first line with your own class name.

See [this article](/beaver-builder/styles/custom-code.md) about where to add custom CSS code.

As soon as you add your custom class name you should see the row or column on
your page take on the background gradient color.
