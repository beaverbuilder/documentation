---
id: theme-template-authors
title: Theme & Template Authors
sidebar_label: Theme & Template Authors
tags: [Row, Rows, Columns, Modules, Layout, Templates, Template Data Exporter]
description: The Template Data Exporter allows template authors to distribute their custom templates to their users via a plugins or themes.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Template authors can make their custom templates available to users within the lite and premium versions of Beaver Builder without needing to import them through the WordPress importer. This is perfect for Template authors who distribute Beaver Builder using [TGM plugin activation](http://tgmpluginactivation.com/), and it's a great addition for those already building custom modules for their themes.

Using the following method, templates are automatically made available in
Beaver Builder’s template selector after you register them.

### 1. Template source

We recommend that you keep a copy of your templates on a source site for a better user experience. When a user selects a template for use, the media files in the template (such as images and videos) are not imported to their WordPress site but rather are linked to your source site. This is because users often don't want to import sample images that they will not be using.

For example, all of our templates live on a [WordPress Multisite](https://wordpress.org/support/article/create-a-network/) instance at [demos.wpbeaverbuilder.com](https://demos.wpbeaverbuilder.com). We also use this location for demos on our own website.

If you don’t keep a copy of your templates on the source site, users can still
use your templates, but the media will not be loaded.

:::tip
Templates are exported to `.dat` files, which must be transferred to source repositories as **Binary** not ASCII.
:::

### 2. Create templates

Create your [custom layout templates](saved-templates.md) and [saved rows](rows/saved-rows.md) or [modules](modules/saved-modules.md) for users.

### 3. Categorize templates

Use the **Beaver Builder** admin panel (on the WordPress admin panel menu)
assign categories and add featured images to your saved layout templates. See
[how to categorize and add thumbnails to saved layout templates](saved-templates.md#categorize-saved-templates). (This won't work for saved rows and modules.)

### 4. Export Template .dat file

1. Access your site's WordPress Admin Dashboard.
2. Navigate to **Tools > Template Exporter**.

  :::info
  If you don't see that menu option, enable it by doing the following:

    1. Go to **Settings > Beaver Builder > User Access**.
    2. In the **Admin > Template Data Exporter** section, select the user roles that you want to have access to the Template Data Exporter
    3. Save the settings.
  :::

  You’ll see a screen similar to the screenshot below. **Themer Layouts** is visible only if Beaver Themer is installed.

  ![Template Exporter overview](/img/beaver-builder/settings--template-exporter--1.jpg)

3. Select all templates or the specific layout templates, rows, and modules you want to export and click **Export template data**. A _templates.dat_ file will download to your computer.

### 5. Register your templates

Register the _templates.dat_ file with Beaver Builder, using the `FLBuilder::register_templates` method within either a theme or plugin, as shown in the examples below.

The biggest consideration in deciding whether to register within the theme or in a plugin is whether you want the templates to remain accessible when the user switches to a different theme. If the answer is yes, register in a plugin. If no, register within a theme. If you choose a plugin, you can [download the example plugin](https://www.wpbeaverbuilder.com/downloads/bb-custom-templates-example.zip) to use as a model.

#### To register in your theme:

Pass the full path of your _templates.dat_ file to the `FLBuilder::register_templates` method:

```php
FLBuilder::register_templates( '/path/to/your/templates.dat' );
```

:::tip
Use the [`get_stylesheet_directory()`](https://developer.wordpress.org/reference/functions/get_stylesheet_directory/) function if you prefer not to use the full path.

```php title="Example"
FLBuilder::register_templates( get_stylesheet_directory() . '/templates.dat' );
```
:::

In order to make sure that your theme or plugin doesn’t throw any errors, hook that method into the [`after_setup_theme`](https://developer.wordpress.org/reference/hooks/after_setup_theme/) action, and check to see if the builder is installed and the current version supports registering templates, as follows.

<Tabs>
<TabItem value="fullpath" label="Full Path Example" default>

```php
function my_plugin_load_bb_templates() {

  if ( ! class_exists( 'FLBuilder' ) || ! method_exists( 'FLBuilder', 'register_templates' ) ) {
    return;
  }

  FLBuilder::register_templates( '/path/to/your/templates.dat' );
}
add_action( 'after_setup_theme', 'my_plugin_load_bb_templates' );
```

</TabItem>
<TabItem value="get-stylesheet-dir" label="Get Stylesheet Example">

```php
function my_plugin_load_bb_templates() {

  if ( ! class_exists( 'FLBuilder' ) || ! method_exists( 'FLBuilder', 'register_templates' ) ) {
    return;
  }

  FLBuilder::register_templates( get_stylesheet_directory() . '/templates.dat' );
}
add_action( 'after_setup_theme', 'my_plugin_load_bb_templates' );
```

</TabItem>
</Tabs>



The templates will be loaded the next time you open Beaver Builder for editing.

###  6. Install and test your plugin or theme

Make sure your plugin (or theme) is installed and active and then open a page for editing in Beaver Builder. If you got everything right, your templates should show up in one of three places based on whether they are layouts, rows, or modules.

Layouts will show up on the **Templates** tab in the Content panel within the categories you specified, or **Uncategorized** if none, and opening a category will display the featured images of the templates in a thumbnail grid. The categories and underlying grid layout for a single category are shown in the following screenshot.

![Custom templates in the Content panel](/img/beaver-builder/settings--template-exporter--2.jpg)

Your rows and modules are displayed on the **Saved** tab in the Content panel.

##  Things to keep in mind

Here are a few things to keep in mind when building templates for Beaver Builder.

### Template creation

The ability to create, save, edit and export templates is currently only available in the [premium versions](https://www.wpbeaverbuilder.com/pricing/) of Beaver Builder. You will need at least the Standard subscription to export _templates.dat_ files.

### Module availability

If you build templates for the Lite version, keep in mind that not all of the premium modules are available there. If users use a template with a module that is not supported in their version of Beaver Builder, the module will not be rendered.

For this reason, we recommend third-party Template authors create custom modules for their themes and templates if they need something that isn’t available in the lite version. See [the custom module guide](/developer/custom-modules).

### Global content

Global rows, columns and modules are exported to _templates.dat_ as standard (non-global) rows, columns, or modules.
