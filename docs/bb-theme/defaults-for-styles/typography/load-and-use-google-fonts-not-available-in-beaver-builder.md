---
id: load-and-use-google-fonts-not-available-in-beaver-builder
title: Load and use Google fonts not available in Beaver Builder
sidebar_label: Load and use Google fonts not available in Beaver Builder
---

Google fonts are updated frequently in the Beaver Builder Plugin and Theme, but if you just can't wait for the next Beaver Builder release, it's easy to add the Google font you want.

:::info
Calls to Google fonts are combined into a single call, which facilitates faster page load times. if you add Google fonts using the procedure in this article, the calls for those fonts will be made independently. The Google fonts in the Beaver Builder Plugin and Theme are frequently updated, so check back in future releases to see if this customization is still necessary.
:::

:::tip
Be careful about using too many different fonts if you're trying to pare down page load times. Each font loads separately. You can also check load times of your combination of Google fonts at [fonts.google.com](https://fonts.google.com).
:::

## Load the font

  1. At fonts.google.com, go to the page listing the font you want to use, and click **Select this font**.
  2. Click the **Family selected** box in the lower right corner to open the information about how to use the font.
  3. On the **Embed** tab, copy the `<link>` embed code. In this example, the Cormorant font has this embed code:  

  ```html
  <link href="https://fonts.googleapis.com/css?family=Cormorant" rel="stylesheet">
  ```

  4. Go to **Customize > Code > Head code** and paste in the embed code.

## Write the CSS rule

1. Back at the Google font family page, copy the code from the **Specify in CSS** section.  
  In this example, it's as follows:  

  ```css
  font-family: 'Cormorant', serif;
  ```

2. Add the following CSS code, substituting the name of your Google font.    
See the [article on where to add custom CSS code](/beaver-builder/styles/custom-code.md).   

  ```css
  /* Add Cormorant Google font */
  h1, h2, h3, h4, h5, h6 {
      font-family: 'Cormorant', serif;
  }
  ```
