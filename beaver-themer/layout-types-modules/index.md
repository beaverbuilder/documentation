---
id: index
title: Layout Types
---

Beaver Themer layout types let you replace your WordPress theme’s default layouts with custom layouts built using Beaver Builder. These layout types determine how content is displayed across your site, allowing you to create a consistent design without coding.

## Available Layout Types

Each layout type serves a specific purpose, giving you full control over different areas of your site:

- **Singular** – Defines the layout for individual content items such as single posts, pages, or custom post types.

- **Archive** – Controls how lists of posts, pages, or custom post types appear, including blog archives, category pages, search results, and author archives.

- **404** – Customizes the “Page Not Found” (404) page, allowing you to provide helpful messages or alternative navigation.

- **Header** – Replaces the default theme header with a custom design, typically including logos, navigation menus, and call-to-action buttons.

- **Footer** – Replaces the default theme footer with a custom design, often containing links, copyright information, and social media icons.

- **Part** – A reusable layout that can be inserted anywhere on your site using your theme’s hooks, commonly used for calls to action, subscription forms, testimonials, or banners.

## Theme Compatibility

Most themes natively support Singular, Archive, and 404 layouts without any additional setup. However, using Header, Footer, and Part layouts requires a theme that allows these elements to be removed via hooks. If your theme doesn’t support them, you can manually enable compatibility by following the steps in our Add Support for Beaver Themer guide.

## Themer Layout Settings

Each layout type includes a set of configurable settings, accessible within the Themer Layout Settings panel on the layout editing screen. These settings vary based on the layout type.

Some examples include:

- **Header Layout**: Offers a Sticky setting which keeps the header fixed at the top of the page as users scroll.

- **Singular Layout**: Offers a Custom Template setting, which lets you save your layout as a WordPress Page Template. This allows you to reuse the same design for multiple pages without rebuilding it from scratch.

- **Part Layout**: Includes a Position setting that lets you control where the layout appears on your site. It uses your theme’s built-in “hooks” to place content in specific areas, such as above or below a post title, inside a sidebar, or before the footer.

Additionally, all layout types include Location and Rule options. The Location option determines where the layout appears on your website, such as site-wide or on specific pages. The Rule option allows you to set conditions for displaying the layout, such as whether a user is logged in or not.

## Default Layouts

A default layout is automatically applied when you first open Beaver Builder for a new layout, providing a starting point that can be customized or removed to build from scratch.

The Part layout type is the only exception, as it does not include a default layout and starts as a blank canvas when the builder is launched.

## Create a Themer Layout

Beaver Themer layouts can be created from both the **WordPress Admin Dashboard** and the **WordPress Admin Bar**.

### From the WordPress Admin Dashboard

1. Open your site's **WordPress Admin Dashboard**.
2. Go to **Beaver Builder > Themer Layouts**.
3. Click the **Add New** button to create a new Beaver Themer layout.

### From the WordPress Admin Bar

You can also create a Beaver Themer layout directly from the **WordPress Admin Bar** when logged in:

1. Click **+ New** in the admin bar.
2. Select **Themer Layout**.
3. You’ll be redirected to the **Add New** Beaver Themer layout page.

## Edit a Themer Layout

Beaver Themer layouts can be edited from both the **WordPress Admin Dashboard** and the **WordPress Admin Bar**.

### From the WordPress Admin Dashboard

1. Open your site's **WordPress Admin Dashboard**.
2. Navigate to **Beaver Builder > Themer Layouts**.
3. Click the layout you want to edit.

### From the WordPress Admin Bar

- When viewing a **Themer Layout**, click **Edit Themer Layout** in the admin bar to quickly access the edit screen.
- When viewing a **page or post**, hover over the **Beaver Builder** menu item to see options for editing the page itself or any Beaver Themer layouts applied to it.

The following screenshot shows two Beaver Themer layouts (**Header & Footer**) and a **Beaver Builder layout** applied to the homepage. Clicking a layout name will launch Beaver Builder for editing.

:::tip
You can also access the **Edit Themer Layout** screen by clicking the <i className="fas fa-cog"></i> **Cog** icon in the drop-down menu.
:::
