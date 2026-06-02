---
id: full-width-rows-on-third-party-themes
title: Full-width rows on third-party themes
sidebar_label: Full-width rows on third-party themes
---

A full-width row spans the entire width of the page from edge to edge.

If you use a third party theme, you may need to add some additional CSS to get
your rows to be full width. Here's something you can try.

First, find the ID or class name of your theme’s content wrapper. If you look
at the HTML source for a page, the content wrapper is usually a `<div>` tag
that occurs after the header block, and it often uses an ID or class with the
selector `content`, for example:

```markup
<div id="content" class="site-content">
```

Next, write a rule for the class `fl-builder` with that content wrapper ID or
class inside it. If `id="content"` is the selector for your content wrapper,
then the rule would look like this:

```css
.fl-builder #content {
  padding: 0;
  margin: 0;
  max-width: none;
  width: auto;
}
```

See the article on [where to put custom CSS code](basics/custom-code.md).

If you cannot get this rule to work, please [contact Support](https://www.wpbeaverbuilder.com/beaver-builder-support/) for help.
