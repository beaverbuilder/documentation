---
id: display-full-captions-under-photos
title: Display full captions under photos
sidebar_label: Display full captions under photos
description: Here's how to avoid captions under images getting truncated in the Photo or Gallery module.
---

By default, if you display captions in the Photo or Gallery module, the
caption is cut off at the first line with an ellipsis mark. This happens
whether the caption is set to **On hover** or **Below photo**.

![](/img/how-to-tips-display-full-caption-1.jpg)

If you display the caption below the photo, you can use the following CSS
snippet to display the full caption. See [this article](/beaver-builder/styles/custom-code.md) about where to add custom CSS code.

```css
.fl-photo-caption.fl-photo-caption-below {
  text-overflow: initial;
  white-space: normal;
}
```

Now you'll get the full caption, and it will wrap as the screen is sized down:

![](/img/how-to-tips-display-full-caption-2.jpg)
