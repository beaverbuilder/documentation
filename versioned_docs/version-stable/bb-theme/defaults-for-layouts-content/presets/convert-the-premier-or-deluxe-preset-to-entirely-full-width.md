---
id: convert-the-premier-or-deluxe-preset-to-entirely-full-width
title: Convert the Premier or Deluxe preset to entirely full width
sidebar_label: Convert the Premier or Deluxe preset to entirely full width
---

The Premier and Deluxe presets are a mix of full-width and boxed content.

The Premier preset has full-width header and footer but a boxed content area. The Deluxe preset is full-width except the nav bar and content area are boxed.

For these two mixed-layout presets, the layout under  **Customize > General > Layout** is set to **Full-width**, but CSS in the preset's skin file is used to box the content area for the Premier preset, and to box both the nav bar and content area for the Deluxe preset.

**To override the preset's boxed content and make the entire preset full width:**

  * Add the following CSS code.  
  Add the first rule for the Premier preset; add both rules for the Deluxe preset.  
  See the [article on where to put CSS code](/beaver-builder/styles/code/custom-css.md).  
  ````css
    /* Add the following rule for to make the Premier and Deluxe preset's content area full width */
    .fl-full-width .fl-page .fl-page-content {
        max-width: 100%;
    }
    /* Add the following rule to make the Deluxe preset's nav bar full width */
    .fl-full-width .fl-page .fl-page-nav-wrap {
        max-width:100%;
    }
  ````

After you have set these areas to full-width, you can control the width of the content area by opening a page in the Beaver Builder editor, going to **Tools > Global Settings**, and adjusting the **Max width** setting in the  **Rows** section. You can control the width of the header, footer, and nav bar through the **Customize > General > Layout > Content width** setting.
