---
id: add-hover-effects-to-the-photo-module
title: Add hover effects to the Photo module
sidebar_label: Add hover effects to the Photo module
---

Using a custom class and some custom CSS, you can add some really cool hover
effects to images.

1. Add a Photo module to your page.
2. Configure the Photo module as you normally would.
3. Click the **Advanced** Tab
4. In the **HTML element** section, add one of the following values to the **Class** field, depending on which effect you want. See the description of each effect in the sections below.  

   * Hover Zoom In: `hover-zoom-in`
   * Hover Zoom Out: `hover-zoom-out`
   * Hover Zoom Out and Rotate: `hover-zoom-out-rotate`
   * Hover Unblur: `hover-unblur`
   * Grayscale to Color: `gray-scale-img`
   * Sepia to Color: `sepia-img`
5. Add the CSS for the effect wherever you put your custom CSS.  
See [this article](/beaver-builder/styles/code/custom-css.md) about where to add custom CSS code.

The transition speeds in the CSS examples are set to `.3s`. You can change the
value to speed up or slow down the effect. For example, `1s` will slow the
change.

:::tip **Tip: Shortcut for applying an effect to multiple Photo modules in a row**  
If you have multiple Photo modules in a row and want to apply an effect to the
entire set, add the effect’s class to the **Class** field on the **Advanced**
tab in the row settings. The effect will apply to each Photo module contained
in the row.
:::

### Hover Zoom In

This effect adds a smooth zoom effect when you hover over the image.

```css
/* Zoom in on hover */
.hover-zoom-in .fl-photo-content {
  overflow: hidden;
}
.hover-zoom-in .fl-photo-content .fl-photo-img {
  -webkit-transition: 0.3s ease-in-out;
          transition: 0.3s ease-in-out;
  will-change: transform;
}
.hover-zoom-in .fl-photo-content .fl-photo-img:hover {
  -webkit-transition: 0.3s ease-in-out;
          transition: 0.3s ease-in-out;
  -webkit-transform: scale(1.3);
          transform: scale(1.3);
}
```

### Hover Zoom Out

This effect adds a smooth zoom out effect when you hover over the image.

```css
/*  Zoom out on hover*/
.hover-zoom-out .fl-photo-content {
  overflow: hidden;
}
.hover-zoom-out .fl-photo-content .fl-photo-img {
  -webkit-transition: 0.3s ease-in-out;
          transition: 0.3s ease-in-out;
  -webkit-transform: scale(1.3);
          transform: scale(1.3);
  will-change: transform;
}
.hover-zoom-out .fl-photo-content .fl-photo-img:hover {
  -webkit-transition: 0.3s ease-in-out;
          transition: 0.3s ease-in-out;
  -webkit-transform: scale(1);
          transform: scale(1);
}
```

### Hover Zoom Out and Rotate

This effect shows the image zoomed in and rotated 45 degrees in its default
state and adds a smooth zoom out and rotates to upright when you hover over
the image.

```css
/* Zoom out & rotate on hover */
.hover-zoom-out-rotate .fl-photo-content {
  overflow: hidden;
}
.hover-zoom-out-rotate .fl-photo-content .fl-photo-img {
  -webkit-transform: rotate(15deg) scale(1.4);
          transform: rotate(15deg) scale(1.4);
  -webkit-transition: .3s ease-in-out;
          transition: .3s ease-in-out;
  will-change: transform;
}
.hover-zoom-out-rotate .fl-photo-content .fl-photo-img:hover {
  -webkit-transform: rotate(0) scale(1);
          transform: rotate(0) scale(1);
}
```

### Hover Unblur

This effect displays the image in a blurred state and unblurs it on hover.

```css

/* Unblur on hover */
.hover-unblur .fl-photo-content {
  overflow: hidden;
  -webkit-backface-visibility: hidden;
}
.hover-unblur .fl-photo-content .fl-photo-img {
  -webkit-filter: blur(3px);
          filter: blur(3px);
  -webkit-transition: .3s ease-in-out;
          transition: .3s ease-in-out;
  will-change: filter;
}
.hover-unblur .fl-photo-content .fl-photo-img:hover {
  -webkit-filter: blur(0);
          filter: blur(0);
}
```

### Grayscale to Color

This effect displays the image in grayscale and brings the color back on
hover.

```css
/* Grayscale To Color */
.gray-scale-img .fl-photo-content {
  overflow: hidden;
  -webkit-backface-visibility: hidden;
}
.gray-scale-img .fl-photo-content .fl-photo-img {
  -webkit-filter: grayscale(100%);
          filter: grayscale(100%);
  -webkit-transition: .3s ease-in-out;
          transition: .3s ease-in-out;
  will-change: filter;
}
.gray-scale-img .fl-photo-content .fl-photo-img:hover {
  -webkit-filter: grayscale(0);
          filter: grayscale(0);
}
```

### Sepia to Color

This effect displays the image in sepia tones and brings the color back on
hover.

```css
/* Sepia To Color */
.sepia-img .fl-photo-content {
  overflow: hidden;
  -webkit-backface-visibility: hidden;
}
.sepia-img .fl-photo-content .fl-photo-img {
  -webkit-filter: sepia(100%);
          filter: sepia(100%);
  -webkit-transition: .3s ease-in-out;
          transition: .3s ease-in-out;
  will-change: filter;
}
.sepia-img .fl-photo-content .fl-photo-img:hover {
  -webkit-filter: sepia(0);
          filter: sepia(0);
}
```
