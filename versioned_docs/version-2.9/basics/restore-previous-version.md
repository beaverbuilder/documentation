---
id: restore-previous-version
title: Restore previous version
sidebar_label: Restore Previous Version
---

The **Revisions** menu item in the [Tools menu](user-interface/tools-menu.md) uses the native [WordPress revision](https://wordpress.org/support/article/revisions/) functionality to let you restore to previously published versions of WordPress content using Beaver Builder.

![WordPress Revisions in Beaver Builder](/img/beaver-builder/editor-basics--revisions--1.jpg)

## What are WordPress revisions?

Whether you're editing a post, page, or custom post type in WordPress, it keeps track of the changes you make. Every time you click the Save Draft or the Update button, WordPress saves a copy of your content.

These copies are called revisions. Your revisions can be viewed directly from the 
WordPress [Page/Post Settings Sidebar](https://wordpress.org/support/article/settings-sidebar/) or within the Beaver Builder user interface for the page or post you're editing in Beaver Builder.

:::tip
WordPress Revisions are available for all Beaver Builder layouts: pages, posts, templates, saved rows, columns, modules, and Beaver Themer layout types if Beaver Themer installed.
:::

## Access Revisions

1. Launch Beaver Builder on any layout using Beaver Builder.

2. On the [Tools menu](user-interface/tools-menu.md), click **Revisions**.  
  The number of revisions available is displayed in brackets. For example, `[10]` means this layout has **10** revisions.

3. The previous versions of that page or post are displayed in a list. Click one of the revisions to preview the layout.  
  The preview screen is shown in the following screenshot.
  
  ![Access WordPress revisions in Beaver Builder](/img/beaver-builder/editor-basics--revisions--2.jpg)
  
4. Click **Apply** to accept that revision or **Cancel** to revert to your current layout.

5. Publish the page to finish accepting the older revision, or discard your changes to return to the currently published page.

:::info
Any custom CSS and JS code set in a layout version are restored along with the layout.
:::

:::tip
Only published pages count as revisions. Saved drafts of pages are not available as revisions. 
:::
