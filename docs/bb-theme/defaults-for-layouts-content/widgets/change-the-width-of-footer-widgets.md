---
id: change-the-width-of-footer-widgets
title: Change the width of footer widgets
sidebar_label: Change the width of footer widgets
---

By default, all of the widgets have equal widths. You can use the snippet below to change the width of the footer widgets.

**To change the width of footer widgets:**

  * Add the CSS rule shown below. Remove parts of the rule to match the number of columns you have, and adjust the width percentages to suit your needs.  
  See the article on [where to add CSS code](/beaver-builder/styles/code/custom-css.md).  
  ```css
/*Change width of the footer widgets*/
@media (min-width: 768px) {
  .fl-page-footer-widgets .col-sm-3:first-child {
    width: 40%;
  }
  .fl-page-footer-widgets .col-sm-3:nth-child(2) {
    width: 20%;
  }
  .fl-page-footer-widgets .col-sm-3:nth-child(3) {
    width: 20%;
  }
  .fl-page-footer-widgets .col-sm-3:nth-child(4) {
    width: 20%;
  }
}
  ```
