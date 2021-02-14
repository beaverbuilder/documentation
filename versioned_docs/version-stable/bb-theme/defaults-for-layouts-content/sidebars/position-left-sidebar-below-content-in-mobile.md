---
id: position-left-sidebar-below-content-in-mobile
title: Position left sidebar below content in mobile
sidebar_label: Position left sidebar below content in mobile
---

If you use the Beaver Builder Theme and enable the Primary Sidebar on the left or right in your blog posts or on static pages, the mobile view changes as follows:

  * Sidebar on the left: in mobile view, sidebar is displayed above content.
  * Sidebar on the right: in mobile view, content is displayed above sidebar.

If you want your left sidebar to display _below_ the content in mobile view, use the following CSS snippet. It sets up a CSS flexbox and assigns the page content a higher ordinal number than the sidebar so the content will appear
first.

:::note **Note**
The `max-width` setting in the first line is 767px, which reflects the default Beaver Builder breakpoint of 768 px for small devices. If you have set a custom breakpoint, the `max-width` value must be changed to reflect that.
:::

See the article on [where to put CSS code](/beaver-builder/styles/code/custom-css.md).

```css
@media (max-width: 767px) {
  .fl-page-content .row {
    display: -webkit-box;
    display: -moz-box;
    display: box;
    -webkit-box-orient: vertical;
    -moz-box-orient: vertical;
    box-orient: vertical;
  }
  .fl-page-content .fl-sidebar {
    -webkit-box-ordinal-group: 2;
    -moz-box-ordinal-group: 2;
    box-ordinal-group: 2;
  }
  .fl-page-content .fl-content {
    -webkit-box-ordinal-group: 1;
    -moz-box-ordinal-group: 1;
    box-ordinal-group: 1;
  }
}
```
