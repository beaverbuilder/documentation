---
id: export-and-import-saved-templates-rows-columns-modules
title: Export and import saved templates, rows, columns, and modules
sidebar_label: Export and import saved templates, rows, columns, and modules
---

You can export your custom layout templates, as well as saved rows, columns and modules, and import them into another
site – or give them to clients, or sell them.

You can select a combination of individual templates, rows, columns, or
modules to export, or the entire set. This means you can create sets of
templates on a single WordPress install or staging area, then easily move them
around to other locations or bundle them for migration, resale, or
distribution.

:::warning
When exporting a page or post that contains global content (rows, columns, or modules), you must also export the global content. If the global content is not exported, the layout for the exported page or post will not include global content.
:::

:::tip
* Images and icon sets used by the templates, rows, columns, or modules you're exporting are not migrated with the template. You'll have to add them to the new location after import. Likewise, the theme at the new site will control the default font families, colors, and so on.

* Links are not updated automatically in the imported template.

* If you're migrating an entire website from one domain to another (for example, you're migrating a development site to production), we recommend either using a migration plugin or following our instructions to [migrate a site to another domain](/beaver-builder/management-migration/manually-migrate-a-beaver-builder-site.md) instead of moving templates.
:::

##  Export custom layout templates, and saved rows, columns, and modules

  1. On the WordPress admin panel, go to **Tools > Export**.
  2. Select **Templates**, then choose **Export a** **ll** or **Export selected**. If you choose to select the templates, choose the templates, and saved rows, columns, and modules you want to export.
  3. Click **Download export file**.  
The downloaded file is an XML file that you can use for any WordPress website
containing a premium version of the Beaver Builder plugin.

##  Import custom layout templates and saved rows, columns, and modules

  1. On the WordPress admin panel, go to **Tools > Import, **scroll down to **WordPress**, and click **Run Importer**.  

  ![](/img/row-columns-export-import-saved-templates.png)

  If this is your first time importing, the link in the
WordPress section says **Install now**. After you click to install the
importer, click the **Run importer** link that replaces it.

  2. On the WordPress Importer page, select the XML file that you exported, then click **Upload file and import**.
  3. You can choose either to import the user who owns the page or post or to assign an existing user on the site to which you're importing.

## Update links, images, and icon sets

You'll need to update the graphics, icons, and links in the imported templates
and modules. You can do this by editing the layout templates, saved rows, or
saved modules directly or by updating the page after you've added the saved
template, row, or module. In either case, change the links to point to your
current site and upload any images and icon sets to your media library.

See the articles about [editing saved templates](/beaver-builder/layouts/templates/edit-or-delete-saved-layout-templates.md), and [rows, columns, or modules](/beaver-builder/layouts/templates/edit-a-saved-row-column-or-module.md) and adding them to pages.
