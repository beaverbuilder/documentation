---
id: increase-space-between-images-in-posts-module-gallery
title: Increase space between Posts in Posts Gallery module
sidebar_label: Increase space between Posts in Posts Gallery module
---

When you choose the Gallery layout style in the Posts module, by default there
is no space between the featured images for each Post in the gallery, such as
in the following screenshot.

![](/img/how-to-tips-space-in-post-gallery-1.png)

You can use the following CSS rule to increase spacing between the featured
images in the display:

```css
.fl-post-gallery-post {
  margin: 20px;
}
```

Increasing to a `20px` margin separates the space between images as shown in
the following screenshot. You can see that the increased margins can also lead
to different break points in the rows.

![](/img/how-to-tips-space-in-post-gallery-2.png)
