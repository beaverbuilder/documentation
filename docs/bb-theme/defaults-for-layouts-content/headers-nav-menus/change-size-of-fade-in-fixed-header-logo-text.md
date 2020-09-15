---
id: change-size-of-fade-in-fixed-header-logo-text
title: Change the size of fade-in fixed header logo text
sidebar_label: Change the size of fade-in fixed header logo text
---

With fade-in fixed headers in the Beaver Builder Theme, you can set the font size for header logo text on initial view, but there's no Customizer setting for the logo text when it shrinks after fade-in. The default logo text font size is 28px for after fade-in, and the fade-in effect is shown in the following animation.

![](/img/change-size-of-fade-in-fixed-header-logo-text-d04d56d6.gif)

:::tip **Tip**
Logo text can be set to display at **Header > Header Logo > Logo type > Text,** and the fade-in fixed header is set at **Header > Header Layout > Fixed header > Fade in**.
:::

The good news is that a little CSS can take care of this.

Change the font size to the size you want and paste the following code into the location where you put your custom CSS. For more specific instructions on where to put CSS for your theme, see [Methods 2 and 3 in this article](/beaver-builder/styles/code/custom-css.md).

```css
.fl-page-nav-right.fl-page-header-fixed .fl-logo-text,
.fl-page-header-fixed .fl-logo-text {
  font-size:20px;
}
```
