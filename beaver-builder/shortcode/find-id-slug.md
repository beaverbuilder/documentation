---
id: find-id-slug
title: Find ID or slug
sidebar_label: Find ID or slug
description: The Beaver Builder shortcode is really easy to use to add content to your layouts. This reference shows the syntax of the shortcode, including examples with attributes.
---

Beaver Builder shortcodes can be used with either the saved content `ID` or slug. The `ID` is always a number, and the slug is usually a text string. The steps below will guide you through the process of locating the `ID` and slug for your saved content.

## Slug

1. From the WordPress admin dashboard, click **Beaver Builder**, then click either Templates, Saved Rows, Saved Columns, or [Saved Modules](modules/saved-modules.md).

2. Click **Edit** beneath the template, row, column, or module that you want.

3. To get the **Slug**, copy the value in the Slug field, as shown in this screenshot.  
  If you don't see the **Slug** field, click **Screen Options** in the upper right corner and select the **Slug** checkbox.  
  
  ![Location the saved content's slug](/img/beaver-builder/shortcodes--find-id-slug--1.jpg)  
  
  Using the **slug** from the screenshot above, the shortcode markup would look like this:
  
  ```markup
  [fl_builder_insert_layout slug="homepage-hero-module"]
  ```

## ID

1. From the WordPress admin dashboard, click **Beaver Builder**, then click either Templates, Saved Rows, Saved Columns, or [Saved Modules](modules/saved-modules.md).

2. Click **Edit** beneath the template, row, column, or module that you want.

3. To get the **ID**, copy the post number from the URL in your browser’s address bar when editing your saved content, as shown in this diagram.  
  
import BrowserWindow from '@site/src/components/BrowserWindow';

<BrowserWindow url='https://my-website.com/wp-admin/post.php?post=35720&action=edit'>

The saved content `ID` is **35720**.

</BrowserWindow>

Using the `ID` from the diagram above, the shortcode markup would look like this:

```markup
[fl_builder_insert_layout id="35720"]
```

