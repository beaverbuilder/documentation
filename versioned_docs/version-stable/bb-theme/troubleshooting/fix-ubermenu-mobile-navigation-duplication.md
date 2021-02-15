---
id: fix-ubermenu-mobile-navigation-duplication
title: Fix Ubermenu mobile navigation duplication
sidebar_label: Fix Ubermenu mobile navigation duplication
---

If you use the Ubermenu plugin, check to see if mobile navigation is repeated, one for the Beaver Builder Theme and another for Ubermenu.

If so, you can use this CSS code below, provided by the Ubermenu developer himself.

**To get rid of  Ubermenu duplication:**

  1. Add the CSS rules below.  
  See the article on [where to add CSS code](/beaver-builder/styles/code/custom-css.md).  
  ```css
  .navbar-toggle {
      display: none !important;
  }
  div.fl-page-nav-collapse.collapse {
      height: auto !important;
      display: block;
      visibility: visible;
  }
  ```
  2. Click **Save & Publish**.
