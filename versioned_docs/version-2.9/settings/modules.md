---
id: modules
title: Modules Tab
sidebar_label: Modules
description: The Modules tab in the Beaver Builder settings lets you control which modules will display in the Content Panel in the Beaver Builder editor.
---

The **Modules** tab in the Beaver Builder settings lets you control which modules will display in the [Content Panel](user-interface/content-panel.md) in the Beaver Builder editor. If there are some modules you never use, or some modules you don't want your clients to use, you can disable specific modules or even disable all modules.

## Access Modules tab

1. Access your site's WordPress Admin Dashboard.
2. Navigate to **Settings > Beaver Builder**.
3. Then click the **Modules** tab.

![Access the Beaver Builder setting's modules tab](/img/beaver-builder/settings--modules--1.jpg)

## Disable or Enable modules

By default, when you disable modules in **Settings > Beaver Builder > Modules**, they do not appear in the module list in the Beaver Builder editor, but any modules of that type already used in layouts are still displayed on web pages.

1. In the WordPress admin panel.
2. Navigate to **Settings > Beaver Builder**.
3. Click the **Modules** tab.
4. Clear the checkboxes of any modules you want to disable.
5. Click **Save Module Settings**. 

:::caution

The Slideshow module is required for row background slideshows to function.

:::

:::tip

You can use the [`is_module_disable_enabled`](developer/tutorials-guides/common-beaver-builder-plugin-filter-examples.md#show-which-modules-are-in-use-in-a-website) filter to see how many times each module is used in pages, posts, and "Templates." The "Templates" category applies both to saved layout templates and saved rows, columns, and modules.

:::
