---
id: set-a-background-color-or-image-for-the-browser-window
title: Set a background color or image for the browser window
sidebar_label: Set a background color or image for the browser window
---

Set a background color or image for the browser window in **Customize > General > Background**. This background color or image fills the entire browser area with the color or image you specify, and it applies the same background to every page of your site.

:::tip **Tip**
If you select both a background color and an image, the image will overlay (and hide) the background color. However, since the color tends to load faster than the image, it's possible to get a splash of color before the image displays.
:::

The background color or image is visible between the edges of your page and the browser window when the browser window is sized larger than the page. It's also visible inside your page when background opacity of any item on the page is set to less than 100% or the background isn't set at all. The following screenshot shows an example.

![](/img/set-a-background-color-or-image-for-the-browser-window-6c5e644f.jpg)

Here's a description of some of the page settings shown in this screenshot.

  * In **Customize > General > Layout**, the **Width** field is set to **Boxed**.  
  This allows the background image to display when the browser window is wider than the width of the box.
  * In **Customize > General > Layout**, the **Spacing** field is set to 25px, which determines the amount of vertical space between the top of the browser window and the top of the page.  
  Note that this vertical space may appear differently in different browsers, so test.
  * In **Customize > Header > Top bar style**, the **Background color** field is set to **#ffffff** (white) with opacity 50%, so the top bar takes on some of the color and texture of the underlying image.
  * In **Customize > Header > Header style**, the **Background color** field is set to **#0f1066** (dark navy) at 60% background opacity.  
  The underlying image color makes the navy blue look more purple.
  * In **Customize > Header > Nav style**, the **Background color** field is set to #ffffff (white) with opacity 50%, but notice the difference in color from the top bar, which has the same setting.  
  This is because, by default, the navigation area is the same color as the header, so white at 50% opacity reflects the underlying heading style layer, which itself is opaque, so there is still a slight effect of the image color and texture.
  * In **Customize > Content > Color background**, the **Background color** field is set to **#ffffff** (white) with opacity 80%.  
  This is the optional setting for a content area background color. Any background set in a Beaver Builder layout will cover this color if opacity is set to 100%, as it is in the row containing the heading with brown background) If opacity is less than 100%, the content area color is partially displayed under the row background color. If the row background **Type** is **None**, as it is for the row containing the map, the content area background color and opacity from the Customizer setting is displayed.

## Apply a background color or image to a single page

To apply a background color or image to a single page instead of globally on your site, use CSS to set a custom rule on the `<body>` tag. In the following example, on a specific page the CSS replaces the background image shown in the screenshot above with the same navy blue background color used in the header. You can add this code specifically to the page you want to change, or you can add the page ID class and insert the code wherever you keep your CSS.

**To add the CSS code to the specific page to which it applies:**

  1. Open the page for editing in Beaver Builder.
  2. On the **Tools** menu, click **Layout CSS & JavaScript**.  
  **Tip:** The **Tools** menu is in the upper left corner of your screen. Access it by clicking the down arrow in the title bar.
  3. On the **CSS** tab, add the following code:  
  ```css
  body {
    background-image: none;
    background-color: #0f1066;
  }
  ```

If you prefer to add the rule to the location where you store all your other
CSS rules, you can add the class for the page ID, such as:

```css
body.page-id-1414 {
  background-image: none;
  background-color: #0f1066;
}
```

If you want to add a background image to a single page, the CSS rule would
look like the following, substituting your own values:

```css
body {
  background-image: url("https://example.com/wp-content/uploads/2018/03/cutbackboat1.jpg");
  background-repeat: no-repeat;
  background-position: center top;
  background-attachment: fixed;
  background-size: 100%;
  background-color: #0f1066;
}
```

:::tip **Tip**
By adding both background image and color properties to the rule, you override any global setting, whether it's an image or a color.
:::
