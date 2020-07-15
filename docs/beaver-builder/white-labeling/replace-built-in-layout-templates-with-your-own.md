---
id: replace-built-in-layout-templates-with-your-own
title: Replace built-in layout templates with your own
sidebar_label: Replace built-in layout templates with your own
---

In the Agency version of Beaver Builder, you can suppress the display of the
built-in Beaver Builder layout templates (on the **Templates** tab in the
Content panel) and instead display a set of your own saved layout templates as
the core templates. Your templates can be categorized into groups, as shown in
the following screenshot. When the categories are opened, the templates are
displayed in a grid format with thumbnail images. If you have a multisite
installation, you can specify which installation has the "master" saved layout
templates to be displayed.

![](/img/replace-built-in-layouts-1.jpg)

:::note **Note**
Replacing the core templates with your own means that your clients
will no longer be able to save layout templates. This functionality was
created with the assumption that you want clients to choose only from the
templates you provide, not use prebuilt templates or save their own.
:::

**Prerequisite:**

The following procedure assumes that you have already saved your custom layout
templates, assigned them to categories, and set featured images for them. See
the article on [categorizing and adding thumbnails to saved templates](/beaver-builder/layout-templates/categorize-and-add-thumbnails-to-saved-templates-list.md).

**To replace the display of built-in templates with your saved layout
templates:**

  1. On the WordPress admin panel, go to **Settings > Beaver Builder** and click the **Templates** tab.
  2. In the **Enable templates** section, select **Enable core templates only**.  
When you override the core templates, your saved templates become both core
and user templates, so you want to disable user templates so they're not
displayed twice in the list.

  3. Select **Override core templates**.  
The choices to show saved row, column, and module categories are handled in a
different article.

  4. For a multisite installation, enter the ID of the site whose saved templates you want to take precedence in overriding the core templates.
  5. Click **Save template settings**.
