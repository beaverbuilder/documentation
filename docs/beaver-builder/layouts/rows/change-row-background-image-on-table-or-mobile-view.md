---
id: change-row-background-image-on-table-or-mobile-view
title: Change row background image on tablet or mobile view
sidebar_label: Change row background image on tablet or mobile view
---

Most of the time, full-width images don’t look that great on mobile view,
because they are cropped (which is better than being stretched). You can change the background image or any of the background
image settings ( **Repeat**, **Position**, **Attachment**, **Scale** ) for
each device size. To change any of these settings per device size, click the
responsive icon toggle to open Responsive Editor mode. See [this article about using Responsive Editor mode](//beaver-builder/layouts/responsive-design/responsive-editing-with-beaver-builder.md).

For earlier versions of Beaver Builder, you can change the background image
when screen size reaches the mobile responsive breakpoint by using the
following procedure.

**To change the background image for a row on mobile view:**

  1. Upload the mobile image you want to use to your media library and copy the URL for its location.
  2. Open the row with the background image for editing.
  3. Click the **Advanced** tab and scroll to the **HTML element** section.
  4. In the **Class** field, enter a custom class name.  
  It's a best practice to add a custom prefix to your class names as a
namespace, to avoid conflict and identify where the class came from. In this
example, we'll use the custom class name **ss-changeme**.  
Don't use a period before the class name.

  5. Click **Save**.
  6. Add the CSS rule below.  
  See the article on [where to put custom CSS code](/beaver-builder/styles/custom-code.md).

  7. Replace the class `.ss-changeme` in the code below with your own class, and change the URL to the one you copied in Step 1.
