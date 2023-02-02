---
id: custom-code
title: Custom Code
sidebar_label: Custom Code
description: This article explains the different methods for adding custom code to Beaver Builder layouts.
---

This article explains the different methods for adding custom code to Beaver Builder layouts.

## CSS

You can add custom CSS to any Beaver Builder layout, per-page or sitewide.

:::tip
To override theme styling, add the CSS to **Customize > Additional CSS** or your child theme's *style.css* file.
:::

### Per-Page or Per-Post CSS

This procedure applies if you only want your CSS to apply to specific page or post using Beaver Builder. For example, suppose you have a contact form and know that you only want your custom CSS to apply to that form on that single page.

To add CSS code that is restricted to a single Beaver Builder page or post:

1. Open the [Tools Menu](/beaver-builder/getting-started/bb-editor-basics/tools-menu.md) from the [Top Bar](beaver-builder/getting-started/bb-editor-basics/user-interface.md#1-7-top-bar).
2. Click **Layout CSS & JavaScript**.
3. On the **CSS** tab, enter your CSS code.
4. Click **Save**.

### Sitewide CSS

This procedure applies if you want your CSS to apply globally for all pages and posts which are using Beaver Builder.

To add CSS code that is applied globally to all Beaver Builder pages or posts:

1. Open the [Tools Menu](/beaver-builder/getting-started/bb-editor-basics/tools-menu.md) from the [Top Bar](beaver-builder/getting-started/bb-editor-basics/user-interface.md#1-7-top-bar).
2. Click [Global Settings](/beaver-builder/getting-started/bb-editor-basics/global-settings.md#css--javascript).
3. On the **CSS** tab, enter your CSS code.
4. Click **Save**.

### Utility Classes

Beaver Builder contains two utility classes that can be helpful when writing custom CSS.

#### `fl-builder`

The `fl-builder` class allows your custom CSS to only style pages or posts using Beaver Builder.

```css
.fl-builder .page-id-1 .fl-module-heading h1 { ... }
.fl-builder .page-id-1 .fl-module-button a { ... }
```

#### `fl-builder-edit`

The `fl-builder-edit` class is only available when the Beaver Builder editor is active on your page or post. This is useful if your theme styling is impacting the builder UI styling.

```css
.fl-builder-edit button { ... }
```

You can also use `fl-builder-edit` with the [`:not()`](https://www.w3schools.com/cssref/sel_not.asp) selector to apply complex styling, such as changing the position of a row, column, or module without affecting the builder's functionality.

```css
body:not(.fl-builder-edit).fl-builder .fl-module-heading {
  position: relative;
  top: -100px;
  left: 200px;
}
```

## JavaScript

You can add custom JavaScript to any Beaver Builder layout, per-page or sitewide.

:::info
To override theme **JavaScript**, add the code to your theme settings or use the WordPress [wp_enqueue_script()](https://developer.wordpress.org/reference/functions/wp_enqueue_script/) function.
:::

:::caution
The JavaScript tab does not support JavaScript code wrapped with `<script>...</script>` tags.
:::

### Per-Page or Per-Post JavaScript

This procedure applies if you only want your JavaScript to apply to specific page or post using Beaver Builder. For example, suppose you have anchor points and wish to tweak the smooth scrolling effect for that page only.

To do this:

1. Open the [Tools Menu](/beaver-builder/getting-started/bb-editor-basics/tools-menu.md) from the [Top Bar](beaver-builder/getting-started/bb-editor-basics/user-interface.md#1-7-top-bar).
2. Click **Layout CSS & JavaScript**.
3. On the **JavaScript** tab, enter your JavaScript code.
4. Click **Save**.

### Sitewide JavaScript

This procedure applies if you want your JavaScript to apply globally for all pages and posts which are using Beaver Builder.

To do this:

1. Open the [Tools Menu](/beaver-builder/getting-started/bb-editor-basics/tools-menu.md) from the [Top Bar](beaver-builder/getting-started/bb-editor-basics/user-interface.md#1-7-top-bar).
2. Click [Global Settings](/beaver-builder/getting-started/bb-editor-basics/global-settings.md#css--javascript).
3. On the **JavaScript** tab, enter your JavaScript code.
4. Click **Save**.

### Specific point in the page or post

You can add the JavaScript code to a specific point in your page or post using the HTML module.

### Tracking Scripts

Tracking scripts such as Google Analytics or Facebook pixel require the script to be added to the `<head>` of your website. JavaScript added to either **Global Settings** or **Layout CSS & JavaScript** are merged into the *layout.js* file which is loaded via the footer.

:::tip
* If you're using the BB Theme, you can add your tracking code using [these instructions](/bb-theme/code/insert-google-analytics-code.md).

* If you are using third-party theme, check to see if it has an option to add JavaScript to `<head>`. If not, you'll need to use WordPress [`wp_head()`](https://developer.wordpress.org/reference/functions/wp_head/) action.
:::

## Per-Node CSS & JS

The Enable Code Settings option in Beaver Builder [Advanced settings](/beaver-builder/management-migration/advanced-settings.md) allows you to add CSS and JavaScript to each node (rows, columns, and modules) individually. A CSS and JavaScript section can be found on the Advanced tab where you can add custom CSS and JavaScript for the specific node (row, column, module). All CSS and JavaScript is automatically scoped to the node you are working on.

:::info
The `!important` declaration may be required if your custom CSS styles something already defined in the row, column, or module settings.
:::

:::tip Example
The following CSS rule will only affect paragraph (`<p>`) tags for the module you are editing.

```css
p {
  color: red;
}
```

The CSS rules are then rewritten using the unique class name for that node.

```css
.fl-node-1d43q3gf56s p {
  color: red;
}
```
:::

## HTML

To add custom HTML to your Beaver Builder pages and posts you can use either the Text or HTML modules.

## PHP

Beaver Builder doesn't allow you to insert PHP code into post or page layouts. Instead, we recommend using the [WordPress Shortcode API](https://developer.wordpress.org/apis/handbook/shortcode/) to create your own shortcode, then add it to a HTML module.
