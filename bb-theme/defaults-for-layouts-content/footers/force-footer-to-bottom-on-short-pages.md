---
id: force-footer-to-bottom-on-short-pages
title: Force footer to bottom on short pages
sidebar_label: Force footer to bottom on short pages
---

When you have limited content on a page, the footer may be forced up in the page. You can add CSS to force the footer to the bottom of the page. This is also known as a sticky footer.

```css
/* Force footer to the bottom on pages with limited content */
.fl-page {
  position: relative;
  min-height: 100vh;
  padding-bottom: 60px; /* Should be equal to the height of your footer */
}
.fl-page-footer-wrap {
  width: 100%;
  position: absolute;
  bottom: 0px;
}
```

:::tip
For more comprehensive information about making footers sticky in Beaver Builder Theme and Beaver Themer, see [Neil Gowran's blog post at WP Beaches](https://wpbeaches.com/adding-a-sticky-footer-to-beaver-builder-theme-with-flexbox/).
:::
