---
id: full-width-layout-types
title: "Full Width Layout Types"
sidebar_label: "Full Width Layout Types"
---

If you use a third-party theme with Beaver Themer you may need to add some additional CSS to get your layouts to be full width. A full-width layout spans the entire width of the page from edge to edge.

Here's something you can try.

First, find the ID or class name of your theme’s content wrapper. If you look at the HTML source for a page, the content wrapper is usually a `<div>` tag that occurs after the header block, and it often uses an ID or class with the selector`content`, for example:

```html
<div id="content"></div>
```

Next, write a rule for the CSS class of the type of layout you want full width with that content wrapper ID or class inside it.

For Singular layouts use `.fl-theme-builder-singular`
For Archive layouts use `.fl-theme-builder-archive`
For 404 layouts use `.fl-theme-builder-404`

If `id="content"` is the selector for your content wrapper, then the rule would look like this:

```css
.fl-theme-builder-singular #content,
.fl-theme-builder-archive #content,
.fl-theme-builder-404 #content {
  padding: 0;
  margin: 0;
  max-width: none;
  width: auto;
}
```

See the article on [where to put custom CSS code](/beaver-builder/basics/custom-code).

If you cannot get this rule to work, [contact Support](https://www.wpbeaverbuilder.com/beaver-builder-support/) for help.
