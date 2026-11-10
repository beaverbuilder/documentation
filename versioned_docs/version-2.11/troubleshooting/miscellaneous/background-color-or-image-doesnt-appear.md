---
id: background-color-or-image-doesnt-appear
title: "Background color or image doesn't appear"
sidebar_label: "Background color or image doesn't appear"
---

When you set a background color on a row or column and it doesn't show up, in
most cases it's due to improper HTML markup in one or more of your modules
somewhere on the page. Here are some examples of improper markup:

* There's an open tag (for example, `<h1>` but not a corresponding close tag `</h1>`).
* The close tag exists but the HTML is not nested validly. For example:  

```html
<h1>The heading
  <p>A paragraphs should not be nested under a heading</p>
</h1>
```

* The open tag is in one module and close tag is in another.

If you can't find the problem with a manual inspection, try an HTML syntax
checker or validator on the entire page. Among other options, all browsers
have HTML validation add-ons or extensions.
