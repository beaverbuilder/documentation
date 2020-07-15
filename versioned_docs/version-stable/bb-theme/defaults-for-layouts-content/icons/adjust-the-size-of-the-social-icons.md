---
id: adjust-the-size-of-the-social-icons
title: Adjust the size of the social icons
sidebar_label: Adjust the size of the social icons
---

You can adjust the size of the social icons in the Beaver Builder Theme's top bar, Nav Bottom header, or footer with the CSS in this article.

The social icons used by the Beaver Builder Theme are all from the Font Awesome icon set with the exception of the Blogger icon. If you want to include the Blogger icon in your social icon set, there are some extra CSS rules for that icon at the end of the article.

See how to set up the social icons in the [header](/bb-theme/customizer-settings/header.md) or [footer](/bb-theme/customizer-settings/footer.md) layout and [how to add the correct links to your social sites](/bb-theme/customizer-settings/general.md/#social-links).

**To adjust the size of the social icons:**

  1. Add one of the CSS rules below, depending on where your social icons appear.  
  See the [article on where to add CSS code](/beaver-builder/styles/code/custom-css.md).
  2. Click **Save & Publish**.

:::note **Note**
If you make the icons too large and spaced too far apart, you may exceed the width of the theme column, and the icon row will wrap.
:::

**For top bar icons:**

Adjust the top, right, bottom, and left margins in Line 3 to add extra space between the icons and the top and bottom of the top bar, as required. Change the font size in Line 6 to the size you want, and adjust the spacing between icons in Line 7 if necessary with the `width` attribute.

```css
/* Resize and reposition the Font Awesome social icons in the top bar */
.fl-page-bar .fl-social-icons {
    margin: 10px 0 5px 0;
}
.fl-page-bar .fl-social-icons i.fab {
    font-size: 40px;
    width: 60px !important;
}
```

**For header icons:**

Change the font size in Line 3 to the size you want, and adjust the spacing between icons in Line 4 if necessary with the `width` attribute. Change the value in Line 7 if you need to adjust the icons' right alignment.

```css
/* Resize and reposition the Font Awesome social icons in the Nav Bottom header */
.fl-page-header-primary .fl-social-icons .fa-stack  {
    font-size: 30px;
    width: 80px;
}
.fl-page-header-content .fl-social-icons {
    margin-right: 20px !important;
}
```

**For footer icons:**

Change the font size in Line 3 to the size you want, and adjust the spacing between icons in Line 4 if necessary `width` attribute.

```css
/* Resize and reposition the Font Awesome social icons in the footer */
.fl-page-footer .fl-social-icons .fa-stack {
    font-size: 30px;
    width: 80px;
}
```

## Icon displays with the Blogger icon

If you have selected the Blogger icon to appear in your list, the CSS is more complicated, because the Blogger icon is not part of the Font Awesome set. It uses a different CSS class, and once you set the size, its position relative to the other social icons needs to be adjusted in the different ways.

Add the following CSS rules to the previous set if you are using both Font Awesome icons and the Blogger icon. If you're using only the Blogger icon, use only these rules.

**Top bar blogger icon:**

Change the font size in Line 3 to the size you want.

```css
/* Resize and reposition the Blogger social icon in the top bar */
.fl-page-bar .fl-social-icons .fl-icon {
    font-size: 50px;
}
```

**Header blogger icon:**

Change the font size in Line 3 to the size you want, and adjust the spacing between the Font Awesome and Blogger icons in Line 4 if necessary. Adjust the top value in Line 6 to vertically align the Blogger icon with the other social icons.

```css
/* Resize and reposition the Blogger social icon in the Nav Bottom header */
.fl-page-header-primary .fl-social-icons .fl-icon {
    font-size: 60px;
    width: 40px;
    position: relative;
    top: 7px;
}
```

**Footer blogger icon:**

Change the font size in Line 3 to the size you want, and adjust the spacing between the Font Awesome and Blogger icons in Line 4 if necessary. Adjust the top value in Line 6 to vertically align the Blogger icon with the other social icons.

```css
/* Resize and reposition the Blogger social icon in the footer */
.fl-page-footer .fl-social-icons .fl-icon {
    font-size: 60px;
    width: 50px;
    position: relative;
    top: 10px;
}
```
