---
id: font-awesome-icons
title: Troubleshooting Font Awesome icons
sidebar_label: Font Awesome icons
---

Font Awesome 5 (FA5) is not compatible with Font Awesome 4 (FA4), and this has
caused various problems with the display of Font Awesome icons within and
across WordPress plugins. The main indicator of icon trouble is seeing a blank
box instead of the icon itself, but there can be other problems that arise
from the fact that the CSS classes have changed for FA5 icons. We can't
recommend a fix that works in all cases, but here are some things you can try.

## 1. Try changing Beaver Builder plugin and theme settings

Both the [Beaver Builder plugin](https://www.wpbeaverbuilder.com/) and theme
have changed across several versions to smoothly transition to FA5, and there
are some settings that may solve the problem, but the settings are a bit
different depending on which versions of the Beaver Builder plugin and theme
you're using. If you're using a different theme or these Beaver Builder Theme
settings don't solve the problem, there are a few other troubleshooting
solutions you can try, described in Sections 2 and 3.

Beaver Builder loads only the FA5 icon set for content
layouts. If you still have FA4 icons in your legacy content layouts, a shim loads
to automatically convert those icons to FA5. If you have custom CSS rules for
FA4 icons, you will need to update them, because the FA5 classes have
different names. See Section 3 of this article.

Beaver Builder Theme relies on the Beaver Builder plugin to load the icon sets
that apply to the areas of the page controlled by the theme, so the icon set
is only loaded a maximum of one time for a page.

If you're using non-Beaver Builder plugins that use Font Awesome icons, such
as a mega menu, there's a setting in the Beaver Builder Theme at **Customize >
General > Layout > Font Awesome icons** that can force icons to load on every
page. Changing this setting may solve the problem if you are seeing blank
boxes instead of icons.

If you're using the Beaver Builder Theme, can choose how Font Awesome icons load on every page. See [this article](/bb-theme/defaults-for-layouts-content/icons/choose-how-font-awesome-icons-load-in-beaver-builder-theme) for details.


## 2. Possible conflicts from other plugins or themes

We've seen an issue where the way another plugin handles assigning font weight
to icons has caused a problem with FA5. The free version of FA5 requires a
font weight of 900. If you're seeing blank boxes and other solutions haven't
worked, you could try adding this custom rule. See [this article](/beaver-builder/styles/custom-code.md) about where to add custom CSS code.

```css
.fas { font-weight:900 !important; }
```

The `.fas` class is used for FA5 Solid icons.

If this rule doesn't work, try going through the routine of [deactivating plugins](/beaver-builder/troubleshooting/debugging/plugin-conflicts.md) or [changing themes](/beaver-builder/troubleshooting/debugging/theme-conflict.md) to see if your problem is resolved.

## 3. Other FA5 troubleshooting tips

If you added your own HTML for Font Awesome icons or developed custom CSS
rules for FA4, you will probably need to update them. The free set of FA5
Solid icons use the `.fas` class and require a font weight of 900. Here's
[some basic information](https://fontawesome.com/how-to-use/on-the-web/referencing-icons/basic-use) about built-in classes in FA5 and examples of CSS rules for other modifications, and here's some basic FA5 [troubleshooting information](https://fontawesome.com/how-to-use/on-the-web/other-topics/troubleshooting).

If you have written custom CSS that uses pseudo elements (`::before` or `::after`) and it’s not working, see [this Font Awesome article](https://fontawesome.com/how-to-use/on-the-web/advanced/css-pseudo-elements) about writing rules that include pseudo-elements. Be sure to use the correct font weight for your icon set, as listed in that article.

:::info
Some ad blocker browser extensions will block certain icon fonts from loading.
If you're using an ad blocker, try whitelisting the site.
:::
