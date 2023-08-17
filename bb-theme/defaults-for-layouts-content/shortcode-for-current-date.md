---
id: shortcode-for-current-date
title: Shortcode for current date
sidebar_label: Shortcode for current date
---

The Beaver Builder Theme has a shortcode to convert the current year, month, day, in various formats. You can use this shortcode anywhere within the Beaver Builder Theme, plugin, or Beaver Themer.

The basic shortcode is `[fl_year]`, with a `format` parameter that accepts [PHP date formats](https://secure.php.net/manual/en/function.date.php).

By default, `format='Y'`, which means a four-digit year (2019). If you want to change to change to a two-digit year (19), use lower case `'y'` as the value. See the following sections, the first for common use in the footer and the second for examples of date formats.

## Theme footer example

Here's a screenshot example of combining text with the `[fl_year]` shortcode in a footer layout in the Beaver Builder Theme.

![](/img/beaver-builder-theme-shortcode-for-current-date-33247969.png)

Choose **Text** for the layout type, then enter the text plus shortcode into the text box. In this example, it's `testing 123 [fl-year]`. A typical example of a footer using this shortcode would be:

```html
&copy;[fl_year] My Tiny Biz LLC
```

which would result in the following text, in which the year would always match the current year:

> &copy;2020 My Tiny Biz LLC

## Other date examples

Refer to the [PHP date formats](https://secure.php.net/manual/en/function.date.php) page for a description of parameter values and the full set of parameters.

:::tip **Tip**
As long as you have the Beaver Builder Theme installed, you can use this shortcode in Beaver Builder (including Themer) layouts. If you copy and paste this code and the quotation marks display in the output or only part of the date displays, try deleting and retyping the quotation marks – sometimes hidden formatting can sneak in.
:::

Code  |  Example
---|---
`[fl_year]`  |  2018
`[fl_year format="y"]`  |  18
`[fl_year format="F j, Y"]`  |  May 26, 2018<br/>May 6, 2018
`[fl_year format="l, F j, Y"]`  |  Saturday, May 26, 2018<br/>Sunday, May 6, 2018
`[fl_year format="m-d-Y"]`  |  05-25-2018<br/>05-06-2018
`[fl_year format="n-j-y"]`  |  5-25-18<br/>5-6-18
`[fl_year format="d.m.y"]`  |  25.05.18<br/>06.05.18
