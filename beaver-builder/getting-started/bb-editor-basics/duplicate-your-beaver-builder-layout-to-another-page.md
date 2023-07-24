---
id: duplicate-your-beaver-builder-layout-to-another-page
title: Duplicate your Beaver Builder layout to another page
sidebar_label: Duplicate your Beaver Builder layout to another page
description: See the ways to duplicate a Beaver Builder page or post with the same layout and metadata.
---

You can duplicate any Beaver Builder layout to a new page with the same layout
and metadata. Duplication copies the entire page and all metadata from the back end, including Yoast SEO data. This works with all Beaver Builder layouts: pages and posts, Beaver Themer layouts, and saved layout templates, rows, columns, and modules.

:::danger **Warning:**
Do not use duplicator plugins to duplicate Beaver Builder layouts. Use one of the following procedures instead.
:::

When you duplicate the layout, a new page is automatically created and opens for editing. The new page has the following initial title and slug, which you can modify:

  * Title: *`Copy of <original page title>`*
  * Slug: *`<original-slug-title>-copy`*

:::tip **Tip**
If your purpose is to use one page as a template for a number of other pages in your site, an alternative is to [save your page as a layout as a template](/beaver-builder/layouts/templates/create-and-save-a-custom-layout-template.md). You can apply layout templates to other pages, [export them to other sites](/beaver-builder/layouts/templates/export-import-content.md), or [make them available for clients to use in themes you deliver to them](/beaver-builder/developer/how-to-tips/theme-author-templates.md). 
:::

There are two ways to duplicate any page or post that uses a Beaver Builder layout: from the list of all pages or posts in the WordPress admin panel or from the **Tools** menu in the Beaver Builder editor. Both methods have the same result: a duplicate page or post with the same Beaver Builder layout and metadata.

## Method 1: Duplicate a page from the WordPress admin panel

Here's a screenshot of where this procedure occurs.

![Duplicate post, a 2.5 feature](/img/2-5-features-duplicate-post.png) 

Look for the green or gray dot after **Duplicate page** to know that this functionality is coming from Beaver Builder. Where possible, this feature hides the Duplicate option that comes from other plugins for pages and posts that have Beaver Builder layouts. These other plugins often don't work well with Beaver Builder.

1. From the WordPress admin panel, go to **Pages > All Pages** or **Posts > All Posts** or the equivalent for your custom post type. 
2.  Mouse over the page or post you want to duplicate to show the options.
3.  Click **Add Duplicate**.  
The duplicated page or post opens in the Beaver Builder editor.

:::tip **Tip**
You can change the page title and slug from within the Beaver Builder editor. From the [**Tools** menu](/beaver-builder/getting-started/bb-editor-basics/tools-menu.md), click **WordPress admin > Edit page**. A new browser tab opens with the WordPress editor open for that page, where you can change the page title and slug and publish the page, then close that tab. The first tab continues to show the old page title in the upper left corner of the Beaver Builder editor, so you can either reload the page in your browser or just save or publish the Beaver Builder page and it will save under the renamed page slug and title.
:::

## Method 2: Duplicate a page from within the Beaver Builder editor

:::info
Publish or save your current Beaver Builder layout before you duplicate it. If you've made editing changes to the layout and then duplicate it before saving the page, the duplicated page will not show the changes and the changes may be lost on the source page as well.
:::

Follow this video or use the written instructions below.

<div className="embed-responsive">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/CQGuGVLDSnI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

  1. Open the page you want to duplicate in Beaver Builder.
  2. Click the arrow in the page title bar in the upper left corner to open the **Tools** menu.
  3. Click **Duplicate layout**.   
The new page opens in the WordPress editor. From there, you can change the page title and slug and launch the Beaver Builder editor.

