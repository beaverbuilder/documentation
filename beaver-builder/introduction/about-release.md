---
id: about-release
title: About this Release
sidebar_label: About this Release
toc_min_heading_level: 2
toc_max_heading_level: 2
---

Beaver Builder 2.11 includes the following new features and improvements.

## :rocket: New Features

The following features have been added:

### Popup Module

Popup is a new module that allows you to create dialogs, popovers, and flyouts that appear over page content, making it ideal for newsletter opt-ins, promotions, confirmations, videos, and other content that should appear at the right moment.

See the [Popup Module](../layouts/modules/popup.mdx) article for more information.

### Maintenance Mode

Maintenance Mode is a new settings tab that allows you to temporarily show visitors a selected Beaver Builder layout while you update, launch, or work on your site. You can choose which roles bypass maintenance mode, schedule it for a specific time window, and return a 503 Service Unavailable status to help preserve search rankings.

See the [Maintenance Mode](../settings/maintenance.md) article for more information.

### Custom Attributes

Custom Attributes is a new Advanced tab section that allows you to add HTML attributes to any row, column, or module. You can add attributes to the wrapper element, or, for modules, target an inner element with a CSS selector. This gives you more control over markup for accessibility, tracking, styling, JavaScript integrations, and other custom use cases.

See the [Custom Attributes](../layouts/advanced-tab/custom-attributes.md) article for more information.

### [Post Type] Settings tab

[Post Type] Setting is a new tab in the Layout Settings (formerly Layout CSS & JavaScript) panel that provides a convenient way to modify your page, post, product, or custom post type data without leaving the builder. It lets you edit key WordPress fields for the item you are currently building, with changes saved directly to the WordPress post rather than to Beaver Builder layout data.

The tab name changes to match the type of content you are editing. For example, it appears as Page Settings for pages, Post Settings for posts, Product Settings for WooCommerce products, and so on.

### WordPress Font Library Support

Beaver Builder now supports the WordPress Font Library, allowing fonts installed or uploaded through WordPress to be used in Beaver Builder typography settings. Once a font is added to the Font Library, it becomes available in modules that include typography settings.

### `post_id` Parameter

A new `post_id` parameter has been added to field connections, allowing you to pull content from a specific post instead of the current page, post, or loop item. This makes it possible to display data from another post anywhere in your layout, such as a featured post’s title, image, excerpt, or other connected field.

See the [Post ID](/beaver-themer/field-connections/syntax#post-id) section for more information.

## :boom: Improvements

The following improvements have been made:

### Accessibility

- Links that open in a new tab now include screen-reader text.
- Global Styles adds outline styling controls for interactive elements.
- Accordion module HTML structure improved through module deprecation for backward compatibility.
- Accordion buttons now have unique accessible names.
- Search module gets proper accessibility attributes.
- Search module adds a new reveal layout.
- Content Slider, Post Slider, and Post Carousel remove end navigation when looping is disabled and add aria-hidden where needed.
- Number Counter wraps number prefix/suffix in spans through module deprecation for backward compatibility.

### User Interface (UI)

- Overlays now show parent container overlays similar to rows when enough space is available.
- Overlays now render in the body instead of layout markup to avoid styling conflicts with the coming 3.0 design panel.
- Outline Panel adds Save As to the context menu.
- Outline Panel adds direct export for Globals/Components from the context menu.
- [Applying a Template](../layouts/templates/index.md#apply-a-template-to-a-page-or-post) to a page or post now supports Prepend.
- The settings panel has been updated with a cleaner, more modern design to make it easier to navigate and use.

### Other Changes

- Font Awesome 7 Support
- Font Awesome Pro Style Support
- Icon Field Connection Support
