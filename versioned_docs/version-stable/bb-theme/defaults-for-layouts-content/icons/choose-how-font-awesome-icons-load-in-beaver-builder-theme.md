---
id: choose-how-font-awesome-icons-load-in-beaver-builder-theme
title: Choose how Font Awesome icons load in Beaver Builder Theme
sidebar_label: Choose how Font Awesome icons load in Beaver Builder Theme
---

Font Awesome Version 5 is not backwards-compatible with Font Awesome 4, so the Beaver Builder Theme has a **Font Awesome Icons** field on the **Customize > General > Layout** tab to aid the transition by letting you control whether Font Awesome loads on your website pages and which version loads.

:::note **Note**
In **Settings > Beaver Builder > Icons** you can no longer enable the Font Awesome 4 icon set in order to select FA4 icons. If you have Font Awesome 4 icons in your existing layouts, a shim loads automatically to convert those icons to Font Awesome 5.
:::

You can choose from the following settings.

  * **None**  
  This is the default setting. It allows Beaver Builder modules to determine when there's a need to load Font Awesome. It also loads Font Awesome 5 only when it's needed in areas of the page controlled by the theme, for example when there are social icons in the top bar or footer.   The advantage of this setting is that it minimizes page load time and can be used when you're only using Font Awesome icons in the theme and Beaver Builder plugin, not in additional plugins such as megamenus. If you use this setting and see blank boxes instead of icons, try one of the other settings.
  * **Font Awesome 4 shim**  
If this setting is selected, any existing Font Awesome 4 icons on your pages are converted to Font Awesome 5. Try this setting if you're seeing blank boxes where icons should be.
  * **Font Awesome 5**
This setting loads Font Awesome 5 on every page of your site, whether it's needed or not. For example, you might want to use this setting when you're using icons in HTML modules on a majority of pages on your site and so want to load the icons on every page.
