---
id: change-menu-background-color-on-small-devices
title: Change menu background color on small devices
sidebar_label: Change menu background color on small devices
description: xxxx
---
This tip applies to the case in which you want to change the background color of the Menu button dropdown list in the following case:

* You're using a header layout in which the menu is set in **Customize > Header > Nav Layout**.
*  **Responsive nav toggle** is set to **Menu button**.
*  **Responsive nav layout** is set to **Dropdown**.

Use the following CSS to change the background color of the dropdown.

1. Paste in the following CSS code. Replace `red` with the color of your choice (color name, hex code, or rgb value)
See the article on [where to put CSS code](/beaver-builder/styles/custom-code).  

```css
@media (max-width: 767px) {
    .fl-page-nav-toggle-button.fl-page-nav-toggle-visible-mobile .fl-page-nav-collapse {
        background-color: red;
    }
}
 ```
