---
id: change-header-logo-size-in-nav-bottom-layout
title: Change header logo size in Nav Bottom layout
sidebar_label: Change header logo size in Nav Bottom layout
---

In a Nav Bottom layout, you can add text that displays to the right of the logo, as in this screenshot.

![](/img/change-header-logo-size-in-nav-bottom-layout-85722787.jpg)

By default, the logo takes 50% of the header width and the content takes the other 50%. If the text on the right is fairly long, it may conflict with the header logo.

You can increase the size of the header logo wrapper to allow more room for the text.

**To adjust the header logo wrapper width:**

- Add the following CSS code.
  See the article on [where to add CSS code](/beaver-builder/basics/custom-code).

  ```css
  @media (min-width: 768px) {
    /*Change logo wrapper width*/
    .fl-page-header-primary .row > div:first-child {
      width: 33.33%;
    }
    /*Change header content wrapper width*/
    .fl-page-header-primary .row > div:last-child {
      width: 66.67%;
    }
  }
  ```

See [this article for more information about Nav Bottom layout](/bb-theme/customizer-settings/header.md/#nav-bottom), which is set in **Customize > Header > Header Layout**.
