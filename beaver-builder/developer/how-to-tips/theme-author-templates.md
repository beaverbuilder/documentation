---
id: theme-author-templates
title: Theme author templates
sidebar_label: Theme author templates
---

Theme authors can make their layout templates available to users within the
lite and premium versions of Beaver Builder without needing to import them
through the WordPress importer. This is perfect for theme authors who
distribute Beaver Builder using [TGM plugin activation](http://tgmpluginactivation.com/), and it's a great addition for
those already building custom modules for their themes.

![](/img/theme-author-templates-1.jpg)

Using the following method, templates are automatically made available in
Beaver Builder’s template selector after you register them.

## 1. Decide where your templates will live

We recommend that you keep a copy of your templates on a source site for a
better user experience. When a user selects a template for use, the media
files in the template (such as images and videos) are not imported to their
WordPress site but rather are linked to your source site. This is because
users often don't want to import sample images that they will not be using.

For example, all of our templates live on a multisite instance at
[demos.wpbeaverbuilder.com](https://demos.wpbeaverbuilder.com). We also use this location for demos on our own
website.

If you don’t keep a copy of your templates on the source site, users can still
use your templates, but the media will not be loaded.

:::tip **Tip**
Templates are exported to .dat files, which must be transferred to source repositories as binary not ascii.
:::

## 2. Create your layout templates

Create your [custom layout templates](layouts/templates/saved-templates.md) and [saved rows or modules](layouts/templates/saved-content.md) for users.

## 3. Categorize and add featured images to the layout templates

Use the **Beaver Builder** admin panel (on the WordPress admin panel menu)
assign categories and add featured images to your saved layout templates. See
[how to categorize and add thumbnails to saved layout templates](/beaver-builder/layouts/templates/categorize-and-add-thumbnails-to-saved-templates-list.md). (This won't work for saved rows and modules.)

## 4. Export your template data file

1. In the WordPress admin panel, click **Tools > Template exporter**.
   If you don't see that menu option, enable it by doing the following:

   - Go to **Settings > Beaver Builder > User Access**.
   - In the **Admin** section, select the user roles that you want to have access to the Template Data Exporter
   - Save the settings.

You’ll see a screen similar to the screenshot below.
![](/img/theme-author-templates-2.jpg)

2. Select all templates or the specific layout templates, rows, and modules you want to export and click **Export template data**. A _templates.dat_ file will download to your computer.

## 5. Register your templates

Register the _templates.dat_ file with Beaver Builder, using the
`FLBuilder::register_templates` method within either a theme or plugin, as
shown in the example below.

The biggest consideration in deciding whether to register within the theme or
in a plugin is whether you want the templates to remain accessible when the
user switches to a different theme. If the answer is yes, register in a
plugin. If no, register within a theme. If you choose a plugin, you can
[download an example plugin](https://www.wpbeaverbuilder.com/downloads/bb-custom-templates-example.zip) to use as a model.

### To register in your theme:

Pass the full path of your _templates.dat_ file to the `FLBuilder::register_templates` method:

```php
FLBuilder::register_templates("/path/to/your/templates.dat");
```

In order to make sure that your theme or plugin doesn’t throw any errors, hook
that method into the `after_setup_theme` action, and check to see if the
builder is installed and the current version supports registering templates,
as follows.

```php
function my_plugin_load_bb_templates()
{
  if (
    !class_exists("FLBuilder") ||
    !method_exists("FLBuilder", "register_templates")
  ) {
    return;
  }
  FLBuilder::register_templates("/path/to/your/templates.dat");
}
add_action("after_setup_theme", "my_plugin_load_bb_templates");
```

The templates will be loaded the next time you open Beaver Builder for
editing.

## 6. Install and test your plugin or theme

Make sure your plugin (or theme) is installed and active and then open a page
for editing in Beaver Builder. If you got everything right, your templates
should show up in one of three places based on whether they are layouts, rows,
or modules.

Layouts will show up on the **Templates** tab in the Content panel within the
categories you specified, or **Uncategorized** if none, and opening a category
will display the featured images of the templates in a thumbnail grid. The
categories and underlying grid layout for a single category are shown in the
following screenshot.

![](/img/theme-author-templates-3.jpg)

Your rows and modules are displayed on the **Saved** tab in the Content panel.

## Things to keep in mind

Here are a few things to keep in mind when building templates for Beaver
Builder.

### Templates can only be created in the premium versions

The ability to create, save, edit and export templates is currently only
available in the [premium versions](https://www.wpbeaverbuilder.com/pricing/)
of Beaver Builder. You will need at least the Standard subscription to export
_templates.dat_ files.

### Not all modules are available in the Lite version of Beaver Builder

If you build templates for the Lite version, keep in mind that not all of the
premium modules are available there. If users use a template with a module
that is not supported in their version of Beaver Builder, the module will not
be rendered.

For this reason, we recommend third-party theme authors create custom modules
for their themes and templates if they need something that isn’t available in
the lite version. See [the custom module guide](/beaver-builder/developer/custom-modules/index.md).

### Global rows and modules are exported as standard templates

Global rows and modules are exported to _templates.dat_ as standard (non-
global) rows or modules.
