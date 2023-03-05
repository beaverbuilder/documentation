---
id: spacing
title: Spacing - Margin & Padding
sidebar_label: Spacing - Margin & Padding
description: The Spacing section in the Advanced tab lets you change the default margin for rows, columns, modules and padding for rows and columns.
---

The **Spacing** section in the Advanced tab lets you change the default margin for rows, columns, modules and padding for rows and columns.

![Spacing section in the Advanced tab](/img/beaver-builder/advanced-tab--spacing--1.jpg)

## Global Defaults

Beaver Builder adds the following default margins and padding via the [Global Settings](/beaver-builder/getting-started/bb-editor-basics/global-settings.md):

* `0px` margin on each side of all rows and columns.
* `20px` padding on each side of all rows.
* `0px` padding for columns.
* `20px` margin on each side of all modules.  

	:::info
	Modules **do not** support padding.
  :::

If you didn't change a single margin or padding anywhere, these defaults would apply on every device, though mobile devices may be different if [Auto Spacing](/beaver-builder/getting-started/bb-editor-basics/global-settings.md#auto-spacing) is enabled, which is enabled by default.

## Margin

Beaver Builder gives you complete control over [Margin](https://www.w3schools.com/csS/css_margin.asp). Margin can be set for each side of an element (top, right, bottom, and left). You can also choose from the following CSS units `px`, `%`, `vw` and `vh`.

### Negative Margins

While margin property values can be negative, there may be visual inconsistencies between browsers, especially when using large values, such as `-50px` or greater. If you need to move your content slightly to one side, then `-15px` or less should work without causing any inconsistency between browsers, but higher values should be avoided.

For content positioning, we recommend using [position](https://www.w3schools.com/Css/css_positioning.asp), [top](https://www.w3schools.com/cssref/pr_pos_top.asp), [right](https://www.w3schools.com/cssref/pr_pos_right.asp), [bottom](https://www.w3schools.com/cssref/pr_pos_bottom.asp), [left](https://www.w3schools.com/cssref/pr_pos_left.asp), and [z-index](https://www.w3schools.com/Css/css_z-index.asp) properties instead of negative margins.

For example, suppose you need to position your Heading module higher up the page. You can use a negative `margin-top` value such as `-150px`, but this may appear differently between browsers. As a result, you should give your Heading module a [custom class](html-element.md#class) and then use this with the `position`, `top`, `right`, `bottom`, `left`, and `z-index` properties, see the example CSS below. By using this method, browser inconsistencies caused by high negative margin values should be eliminated.

```css title='Example'
.my-heading-module {
	position: relative;
	top: -150px;
	z-index: 10
}
```

:::tip
When using CSS to change a module's position, be sure to prefix your CSS with the [fl-builder-edit utility class and use the `:not()` selector](/beaver-builder/getting-started/bb-editor-basics/custom-code.md#utility-classes) to avoid problems in the builder.
:::

## Padding

Beaver Builder gives you complete control over [Padding](https://www.w3schools.com/csS/css_padding.asp). Padding can be set for each side of an element (top, right, bottom, and left). You can also choose from the following CSS units `px`, `em`, `%`, `vw` and `vh`.

:::caution
Negative values **are not supported** by padding.
:::
