---
id: center-the-nav-menu-with-nav-bottom-layout
title: Center the nav menu with Nav Bottom layout
sidebar_label: Center the nav menu with Nav Bottom layout
---

By default, when you choose **Nav Bottom** header layout, the navigation menu is left-aligned. If you want to center it, you can add the following CSS rules. See the article on [where to put CSS code](/beaver-builder/styles/custom-code).

```css
.fl-page-nav-bottom {
  text-align: center;
}

.fl-page-nav-bottom ul.nav {
  float: none;
}

.fl-page-nav-bottom ul.nav > li {
  display: inline-block;
  float: none;
}

.fl-page-nav-bottom ul.sub-menu {
  text-align: left;
}
```
