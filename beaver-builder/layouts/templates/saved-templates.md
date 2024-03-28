---
id: saved-templates
title: Saved Templates
sidebar_label: Saved Templates
tags: [Row, Rows, Layout, Saved Content]
description: You can create a custom layout template from a page you have already designed in Beaver Builder, or you can create a layout template from scratch.
---

Saved templates can be created from a page you have already designed in Beaver Builder (including a Themer layout), or they can be created from scratch in the [WordPress back-end](#back-end).

![Save templates](/img/beaver-builder/templates--saved-templates--1.jpg)

## Usage

You can save the Beaver Builder layout for any page or post as a template. This is useful in several ways:

- You want your site to conform to a layout across more than one page.
- [Export and import](#export--import) the layout to another site or share with another person.
- [Distribute your saved templates from either a plugin or theme](settings/template-exporter.md).

:::caution
Saved templates are **not** global. Therefore, if you make modifications to a saved template, it will not impact any pages that are already using that template.
:::

:::info
Saved templates are not public pages on your site and are not available for indexing by search engines.
:::

## Create saved templates

You can save templates in two ways: via the builder (front-end) or through the WordPress admin dashboard (back-end).

### Front-end

1. [Launch Beaver Builder](getting-started/launch-builder.md) on your page or post.
2. Create the layout structure using rows and columns, then add your content using modules.
3. On the [Tools menu](user-interface/tools-menu.md), click **Save template**.

:::tip
You can also save templates using the [keyboard shortcut](user-interface/tools-menu.md#keyboard-shortcuts):
_ <kbd>Ctrl</kbd> + <kbd>J</kbd> (Windows)
_ <kbd>⌘ command</kbd> + <kbd>J</kbd> (macOS).
:::

4. Give the template a name and click **Save**.

![Save templates from the front-end](/img/beaver-builder/templates--saved-templates--2.jpg)

### Back-end

1. In the WordPress admin dashboard, go to **Beaver Builder > Templates**.
2. Click the **Add New** button.
3. Enter a title for the template and click Add saved template.
4. Click [Launch Beaver Builder](getting-started/launch-builder.md) and construct the layout.
5. To save the layout template, click **Done > Publish**.

![Save templates from the back-end](/img/beaver-builder/templates--saved-templates--3.jpg)

## Access & edit saved templates

You can access your saved templates via the [Saved tab](index.md#template-subgroups) or the [Saved Templates subgroup](index.md#template-subgroups) on the [Content panel](user-interface/content-panel.md). They can also be accessed and edited via the **Beaver Builder > Templates** menu in the WordPress admin dashboard.

## Add a saved template to your page

You can add a saved template to your page or post by clicking the template you want to use.

## Categorize saved templates

Saved templates can be organized by categorizing them. These categories will be displayed in the **Content panel > Templates tab** [Saved Templates subgroup](index.md#template-subgroups).

<div className="embed-responsive">
<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/LaMVjKcu86g?controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
</div>

<!--![View categorized saved templates in Content panel](/img/beaver-builder/templates--saved-templates--4.jpg)-->

1. In the WordPress admin dashboard, click **Beaver Builder > Templates**.
2. Select a saved template you wish to edit.
3. Add one or more categories to the saved template in the Beaver Builder Categories panel on the right. You can also create a new category by clicking **+ Add New Category**.

![Add categories to saved templates](/img/beaver-builder/templates--saved-templates--5.jpg)

4. Click Update to save your changes.

### Template thumbnails

Beaver Builder saved templates support WordPress featured images. If you add a featured image to your template, the image will display in the Beaver Builder user interface. This makes it easier for you or your clients to find the right template.

:::tip
The Beaver Builder user interface styles the thumbnails using `background-size: cover;` so you don't need to be concerned about image ratios.
:::

![Save templates thumbnails](/img/beaver-builder/templates--saved-templates--6.jpg)

## Rename

You can change the title or the slug name for a saved template.

![Rename saved templates title and slug](/img/beaver-builder/templates--saved-templates--7.jpg)

1. In the WordPress admin dashboard, click **Beaver Builder > Templates**.

2. Mouse over the template you want to rename and click **Edit**.

3. Change the title and optionally the slug and click **Update**.
   If you don't see the Slug field, click [Screen options in the upper right corner of the screen](shortcode/index.md#find-id-or-slug) and make sure the Slug checkbox is selected.

Once the change is made, it will apply to all instances of the saved template.

## Delete saved templates

You can delete saved templates in two ways: via the builder (front-end) or through the WordPress admin dashboard (back-end).

### Front-end

1. [Launch Beaver Builder](getting-started/launch-builder.md) on your page or post.

2. On the [Top bar](user-interface/top-bar.md), click the **Plus** symbol (+) to open the [Content panel](user-interface/content-panel.md).

3. Click the **Templates tab** and select the [Saved Templates subgroup](index.md#saved-templates).

4. Mouse over the template you want to delete and click the close <i className="fas fa-times" aria-hidden="true"></i> icon.

5. Confirm the deletion in the prompt window.

![Delete saved templates from the front-end](/img/beaver-builder/templates--saved-templates--8.jpg)

### Back-end

1. In the WordPress admin dashboard, click **Beaver Builder > Templates**.

2. Mouse over the template that you want to delete, then click **Trash** to move the template to the WordPress trash.

:::info
Deleted templates remain available in the trash until you permanently delete them.
:::

## Shortcode

You can render Saved Templates into any text or text editor field, this also includes other modules using the Beaver Builder shortcode.

See the [Shortcode article](shortcode/index.md) for more information.

## Export & Import

You can export your saved templates and import them into another site – or give them to clients, or sell them.

See the [export and import article](settings/export-import.md) for more information.
