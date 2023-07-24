---
id: additional-css
title: The Additional CSS tab in Customizer
sidebar_label: Additional CSS Tab
---

WordPress 4.7 introduced the **Customize > Additional CSS** tab. Any CSS code added to **Customize > Additional CSS** applies to any part of any page site-wide, whether it's in a Beaver Builder layout, in a theme area, in a WordPress content area, or a generated archive page.

:::info
The **Additional CSS** tab contents are theme-specific. If you activate a different theme, the CSS rules will disappear from the **Additional CSS**  tab, but they'll reappear if you reactivate the theme in which you added the rules. If you have CSS rules in **Additional CSS** that you want to migrate to a new theme, copy the rules manually.
:::

CSS rules placed in **Additional CSS** are stored in the database. See  the article about [where to put custom CSS](/beaver-builder/styles/custom-code.md).

## Updating from old versions of Beaver  Builder Theme

The **Customize > Code > CSS Code** tab was eliminated in Beaver Builder Theme Version 1.6.

If you update a Beaver Theme installation from a version earlier than 1.6, any CSS code stored in the old **Code > CSS Code** tab is automatically migrated to **Customize > Additional CSS**. The migrated code has the following comment to identify it:

```css
  /*
  CSS Migrated from BB theme:
  */
```

:::info **Migration notes**
* If you import Beaver Builder Theme Customizer settings from a 1.5  _.dat_ file into Beaver Builder Theme 1.6 or higher, CSS from the **Customize > Code > CSS Code** tab will automatically migrate to the **Additional CSS** tab.

* If you export/import Beaver Builder Theme Customizer settings, CSS code in the **Customize > Additional CSS** tab currently will not export or import. Make sure to manually copy the CSS code from the old location to the new location if you want to move it.
:::
