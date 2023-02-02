---
id: change-the-accordion-icon-to-an-image
title: Change the accordion icon to an image
sidebar_label: Change the accordion icon to an image
description: Here's some CSS to change the icons to Media Library images in the Accordion module.
---

By default, the Accordion module has a plus icon when the content is collapsed
and a minus icon when the content is expanded, as shown in this screenshot.

![](/img/how-to-tips-change-accordion-icon-1.jpg)

Using some custom CSS, you can change these icons to images that show the
expanded and collapsed state.

![](/img/how-to-tips-change-accordion-icon-2.jpg)

**To change the Accordion icons to images:**

  1. From the WordPress admin panel, click **Media** and upload your images to the Media Library. Make a note of your image URLs so you can insert them into the CSS.
  2. Paste in the CSS code below and replace the URLs with the correct ones for your images. Omit the last rule if you're using the same image for both states.  
See [this article](/beaver-builder/styles/custom-code.md) about where to add custom CSS code.

  3. Click **Save & Publish**.

```css
/*Change BB accordion plus sign*/
.fl-accordion-button {
  width: 100%;
  position: relative;
}
.fl-accordion-button .fl-accordion-button-icon {
  display: none;
}

span.fl-accordion-button-label:after {
  content: '';
  width: 24px;
  height: 24px;
  background-image: url(http://example.com/downicon.png);  
  background-size: cover;
  position: absolute;
  right: 10px;
  top: 50%;
  margin-top: -12px; /*Should be half the value of the height above*/
}

/*Change BB accordion minus sign*/
/*Omit this rule if you are using the same image for both*/
.fl-accordion-item-active span.fl-accordion-button-label:after {
  background-image: url(http://example.com/upicon.png);
}
```
