---
id: add-underlines-to-link-text-beaver-builder-theme
title: Add underlines to link text
sidebar_label: Add underlines to link text
---

By default, the Beaver Builder Theme underlines link text in content only when you mouse over it, and not at all in the navigation menu. Here's how to add default underlining of link text in your content, your nav menu and header, or both, with some simple CSS.

See the article on [where to add custom CSS code](/beaver-builder/styles/code/custom-css.md).

**To add underlines to all links in your site:**

The following CSS rule adds underlines to both content and the theme areas on your site whether controlled by Beaver Builder or not.

  * Add the following CSS code.   
  ```css
a {
    text-decoration: underline;
}
  ```

:::tip **Tip**
If you don't see the changes you expect after adding the CSS and saving it, try adding `!important` to the declaration. For example:
```
`text- decoration: underline !important;`
```
:::

**To add underlines to Beaver Builder content and the Beaver Builder Theme areas:**

    ```css
    /* Add default underlines to Beaver Builder content and BB Theme link text */
    .fl-builder a {
      text-decoration: underline;
    }
    ```

**To remove underlines from the Beaver Builder Theme's header:**

If you don't want the previous rule to apply to the Beaver Builder Theme's header area, add the following CSS after the previous rules:

```css
/* Remove underlines from nav menu links */
nav li a {
    text-decoration: none !important;
}

/* Remove underlines from header logo area text */
.fl-page-header-logo a {
    text-decoration: none;
}
```
