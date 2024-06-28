---
id: css-customization
title: CSS Customization
sidebar_label: CSS Customization
description: Here's some CSS to change the icons to Media Library images in the Accordion module.
---

This article showcases several CSS examples that illustrate how custom CSS can be used to style the Accordion module beyond what can be achieved through the module's settings.

:::tip
The examples below use the Accordion module's `fl-module-accordion` parent class, which, depending on where you add your CSS, will style all Accordion modules used on your website. However, if you wish to customize a specific Accordion module, you should add a custom class name to the module and replace `fl-module-accordion` with the new custom class name.

```css
.my-custom-class .fl-accordion-item-active {
  background-color: #f4f4f4;
}
```

:::

## Active Accordion Item

The following CSS examples demonstrate how to modify the appearance of the active accordion item. Doing so can increase the visibility in comparison to the inactive items:

### Background Color

```css
.fl-module-accordion .fl-accordion-item-active {
  background-color: #f4f4f4;
}
```

### Label Color

```css
.fl-module-accordion .fl-accordion-item-active .fl-accordion-button-label {
  color: #ff0000;
}
```

### Accordion Content Color

```css
.fl-module-accordion .fl-accordion-item-active .fl-accordion-content {
  background-color: #f4f4f4;
  color: #000000;
}
```

## Replace Expand/Collapse Icons with Images

You can use the CSS provided below to replace the icons of the collapsed and expanded states in the Accordion module with images of your choice.

```css
.fl-module-accordion .fl-accordion-button {
  width: 100%;
  position: relative;
}

/* Hide Accordion Icons */
.fl-module-accordion .fl-accordion-button .fl-accordion-button-icon {
  display: none;
}

/* Collapsed Image */
.fl-module-accordion .fl-accordion-button-label:after {
  content: '';
  width: 30px;
  height: 30px;
  background-image: url(IMAGE URL);
  background-size: cover;
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
}

/* Expanded Image (Active Accordion) */
.fl-module-accordion .fl-accordion-item-active .fl-accordion-button-label:after {
  background-image: url(IMAGE URL);
}
```
