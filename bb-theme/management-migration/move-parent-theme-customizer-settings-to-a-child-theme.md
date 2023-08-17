---
id: move-parent-theme-customizer-settings-to-a-child-theme
title: Move parent theme Customizer settings to a child theme
sidebar_label: Move parent theme Customizer settings to a child theme
---

[Here's why you should create a child theme](/bb-theme/getting-started/do-i-need-to-install-the-beaver-builder-child-theme.md). Beaver Builder makes it easy by providing a child theme that you can download and install.

If you neglected to set up a child theme and have already created Customizer settings in your parent theme, here's how to export them, create a child theme, and move the settings to the child theme.

**To move the parent theme's Customizer settings to a child theme:**

  1. Make sure your parent theme is activated by checking at **Appearance > Themes** from the WordPress admin panel.  
  If you already installed the Beaver Builder child theme and noticed that your settings are missing, just reactivate the parent theme.
  2. Export your Customizer settings from the parent theme by [following these instructions](/bb-theme/management-migration/export-or-import-customizer-settings.md).  
  The result is a _.dat_ file in the downloads folder on your local system.
  3. If you haven't installed the child theme yet, [follow these instructions](/bb-theme/getting-started/install-the-bb-theme-and-child-theme.md) to download, install, and activate it.  
  Don't delete the parent theme you already have installed. You need both. If you've already installed the child theme, reactivate it.
  4. Import your Customizer setting from the same **Export/Import** tab you used in Step 1, using the **.dat** file you downloaded, following [the same instructions](/bb-theme/management-migration/export-or-import-customizer-settings.md).
