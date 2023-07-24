---
id: use-shortcodes-in-your-layouts
title: Use shortcodes in your layouts
sidebar_label: Use shortcodes in your layouts
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

You can insert Beaver Builder layouts as shortcodes into any text or text editor field, just like you do for any other WordPress shortcodes.

<div className="embed-responsive">
<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/Q1l8f7dO--Q" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
</div>

:::info
* WordPress shortcodes are macros that can create markup dynamically. For an introduction to WordPress shortcodes, see [the WordPress Codex](https://developer.wordpress.org/plugins/shortcodes/). Shortcodes can be recognized as a bit of code that lives between square brackets, such as `[fl_builder_insert_layout id="123"]`.
* When you update the source content, the shortcode content is automatically updated.
* You can use shortcodes in the WordPress editor or in Beaver Builder module settings fields that accept text, such as the **Heading** field of the Heading module.
:::

##  Why use Beaver Builder shortcode?

The two most common uses for Beaver Builder shortcode are:

* Inserting Beaver Builder module into other Beaver Builder modules where normally only text can occur, as the following examples show.
* Inserting a section of Beaver Builder layout, such as a saved row, into a standard WordPress content area.  
For example, you could insert a Subscribe Form module into the middle of a post that is edited with the WordPress editor.

Here's an example where the shortcode for a Photo module was inserted into a feature field in a Pricing module.

![](/img/how-to-tips-shortcodes-in-layout-1.png)

The screenshot shows a Pricing Table module in which the first feature in the first feature in the first column contains text ("Your logo or custom text printed on apparel") a `<br>` tag to put the photo on the next line, and the shortcode for the saved Photo module.

Here are a couple of other examples of how you can use shortcodes:

* Add a button to a cell in a Pricing Table module.
* Embed a contact form from Beaver Builder or another plugin into a tab in a Tabs module.

:::tip **Tip**
If you have Beaver Themer, it can sometimes be used more efficiently than Beaver Builder shortcodes. See advanced examples of shortcodes and Themer alternatives below.
:::

## What Beaver Builder content can be turned into shortcodes?

You can create shortcodes for any Beaver Builder content that has an ID or a slug:

* Posts, pages, or custom post types with Beaver Builder layouts.
* Saved rows, columns, or modules.
* Saved layout templates.

:::tip
* If you use the [Beaver Builder Theme](https://www.wpbeaverbuilder.com/wordpress-framework-theme/), there's a special `[fl_year]` shortcode, which you can use to insert the current date both into both Beaver Builder layouts and into text areas of the theme, such as the top bar and footer. For more information, see the [article on the Beaver Builder Theme date shortcode](/bb-theme/defaults-for-layouts-content/shortcode-for-current-date.md).
* With the Pro and Agency versions of Beaver Builder, you can use Beaver Builder shortcodes anywhere on a multisite installation. See the [shortcodes article](/beaver-builder/advanced-builder-techniques/shortcodes/use-shortcodes-in-your-layouts.md).
:::

## Create a Beaver Builder shortcode

**Prerequisite:** If you plan to use a row, module, column, or layout template in your shortcode, it must be saved first so it has its own ID and slug. See the article about [saving rows, columns, and modules](/beaver-builder/layouts/templates/save-a-row-column-or-module-for-reuse.md) or the article about [saving layout templates](/beaver-builder/layouts/templates/create-and-save-a-custom-layout-template.md).

### Method 1:  Copy a shortcode for a saved item with one click

In the **Beaver Builder** section in the WP admin panel, under **Saved rows**, **Saved columns**, and **Saved modules**, there's now a **Shortcode** column with an automatically generated shortcode for each saved item. Clicking the shortcode automatically copies it to your clipboard.

This screenshot shows the shortcode location for a saved row.
![Saved row shortcode example](/img/wp-admin-saved-row-shortcode.png)

### Method 2: Manually construct a Beaver Builder shortcode

1. Get the ID or slug of the saved item.   
See [this article for instructions](/beaver-builder/advanced-builder-techniques/shortcodes/get-the-slug-or-id-for-a-shortcode.md).  

:::info
The ID of a WordPress object is always a number. The slug is more
usually a text string.
:::

  2. Create the shortcode.   
Use one of the following formats, depending on whether it's the slug or the ID:

  ```markup
  [fl_builder_insert_layout slug="my-post-slug"]
  ```
  ```markup
  [fl_builder_insert_layout id="123"]
  ```

See [the Shortcodes reference](/beaver-builder/advanced-builder-techniques/shortcodes/shortcode-reference.md) for more advanced
options.

Use this shortcode anywhere described in the following section.

## Where to insert shortcodes

Most plugins that let you create content, such as gallery, slider, or form
plugins, will often give you shortcode. You can insert Beaver Builder
shortcodes or any other shortcodes into a Beaver Builder module or the
standard WordPress editor.

In a Beaver Builder module, insert the shortcode into any text field. Here are
some examples of text fields in Beaver Builder modules:

* HTML module
* Text editor module
* **Heading** field of any module, such as the Heading or Callout module
* **Label** field of a Tabs module
* Text editor area in any module, such as the Icon module

:::tip
* If the shortcode you add to a Beaver Builder module isn't rendered properly, try putting the shortcode into an HTML module.

* See [why there can be a performance hit](/beaver-builder/advanced-builder-techniques/shortcodes/shortcode-performance.md) with the use of too many Beaver Builder shortcodes.
:::

### WordPress Editor & Widgets

The Beaver Builder shortcode can be used in the WordPress editor and widgets using the [Shortcode Block](https://wordpress.org/support/article/shortcode-block/).

As an example, you might save a Subscribe Form module and insert it in the middle of a post using the shortcode block, or between paragraphs when using the classic editor. For WordPress Widgets, simply use the Shortcode block and add your shortcode.


<Tabs>
<TabItem value="wordpress-editor" label="WordPress Editor" default>

![Insert shortcode using shortcode block](/img/beaver-builder/shortcodes--index--2.jpg)

</TabItem>
<TabItem value="classic-editor" label="Classic Editor">

![Insert shortcode into middle of post](/img/beaver-builder/shortcodes--index--3.jpg)

</TabItem>
<TabItem value="widgets" label="Widgets">

![Insert shortcode into widget](/img/beaver-builder/shortcodes--index--4.jpg)

</TabItem>
</Tabs>

## More examples of Beaver Builder shortcodes – and Beaver Themer alternatives

Here are some examples of how the Beaver Builder community have used Beaver
Builder shortcodes. Note that some of these ideas require PHP coding or CSS to
make them work. But also, many of these ideas are much more easily implemented
in Beaver Themer, as described in the list here.

  * Create a row or module, save it, and embed the shortcode into Post content that doesn't use Beaver Builder.  
– You can use Beaver Themer to create Parts that can appear in any of the
following locations on your post or page:  
![](/img/how-to-tips-shortcodes-in-layout-2.png)

  * Use the shortcode in the text option in the top bar and footer layout in Beaver Builder Theme. For example, create two columns of links to fill one of the footer columns in Beaver Builder Theme.  
– In Beaver Themer, you can create Header and Footer layouts that include the
top bar and footer areas and style them like you would any other Beaver Themer
layout. Use field connections from the modules to link to information that can
dynamically change. For example, you could display a different telephone
number, date, or any other information by setting up a field connection to a
custom field, which contains page-specific information. Or set up a field
connection to the Tagline that appears in Customizer and the Settings tab in
WordPress, so if you change your site's tagline it changes everywhere.

  * Use saved modules (such as a Subscribe Form module) as shortcodes in widgets in areas such as sidebars and footers.  
– Widgets are used to insert content in parts of the page outside of the
WordPress content area, such as in widget columns above the footer if allowed
by your theme. With Beaver Themer you can create layouts in areas of the page
that function outside the content area. For example, in a Footer-type Themer
layout, you can create Beaver Builder layouts for areas that used to require
widgets. For Singular-type or Archive-type Themer layouts, you can create a
sidebar with a Beaver Builder layout that includes both modules and WordPress
widgets. This gives you a lot more flexibility in layout and styling than
widgets do.

  * Create a custom area for clients to send feedback and watch video tutorials in the WordPress admin area.
