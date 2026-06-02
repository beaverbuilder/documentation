---
id: layout-settings
title: Layout Settings
sidebar_label: Layout Settings
description: Layout CSS & JavaScript allows you to configure certain Beaver Builder settings globally.
---

Layout Settings is a per-post panel inside Beaver Builder that groups everything tied to the page you are currently editing. It has three tabs: **CSS** and **JavaScript** for custom code that runs only on this page, and a contextual **Page Settings** tab for editing core WordPress fields without leaving the builder.

When you have added custom CSS or JavaScript, a green dot appears next to the **Layout Settings** item in the Tools menu so you know code is loaded for the page.

## Open Layout Settings

You open Layout Settings from the Tools menu in the top bar of the builder.

1. Click **Tools** in the top bar.
2. Choose **Layout Settings**, or press <kbd>⌘</kbd> + <kbd>Y</kbd> (macOS) / <kbd>Ctrl</kbd> + <kbd>Y</kbd> (Windows).
3. Select the tab you want to work in.

The option is only visible to users who can delete others' posts or have unfiltered HTML, so editors without code permissions will not see it.

## CSS tab

The CSS tab adds custom CSS that applies only to the page or post you are editing. Use it for one-off styling that you do not want loaded site-wide.

The code editor includes syntax highlighting and runs only on the current layout. Styles added here are stored with the post and load alongside the layout on the front end. For site-wide CSS, use [Global Settings](/beaver-builder/essentials/global-settings) instead.

:::tip
  Debug Mode lets you view any code added through Global Settings or Layout Settings, which makes it easier to identify whether your custom code is causing a conflict with Beaver Builder.
:::

## JavaScript tab

The JavaScript tab adds custom JavaScript that applies only to the page or post you are editing. Use it for behaviour that needs to run on a single page rather than across the whole site.

The code editor includes syntax highlighting and runs only on the current layout. Scripts added here are stored with the post and execute on the front end after the layout renders. For site-wide JavaScript, use [Global Settings](/beaver-builder/essentials/global-settings).

<Warning>
  Custom JavaScript runs on the front end with the same privileges as your theme code. Only users who can edit unfiltered HTML can save changes here.
</Warning>

## [Post Type] Setting tab

The [Post Type] Settings tab lets you edit core WordPress fields for the post you are currently building, such as title, slug, status, and featured image. Changes are written directly to the post in WordPress, not to Beaver Builder layout data.

:::info
  The tab title matches the post type you are editing. On a Page it appears as **Page Settings**, on a Post as **Post Settings**, on a WooCommerce product as **Product Settings**, and so on. If you are editing something that is not attached to a post, the tab does not appear.
:::

### Available fields

The fields shown depend on what the post type supports. Beaver Builder reads each post type's WordPress capabilities and hides sections that do not apply.

#### General

The General section is always available. It includes the main WordPress fields used to identify, describe, and publish the post.

- **Title** - The post title. Saved to `post_title`.
- **Description / Excerpt** - Used by themes, RSS feeds, and SEO plugins as the page description. Hidden if the post type does not support excerpts.
- **Slug** - The URL-friendly version of the title. Changing this reloads the builder at the new permalink.
- **Status** - Sets the publish state of the post.

  Available options:

  - **Published** - Visible to the public. Requires the `publish_posts` capability, otherwise the status is saved as Pending Review.
  - **Draft** - Saved but not visible to the public.
  - **Pending Review** - Awaiting review by a user who can publish.
  - **Private** - Visible only to users who can read private posts.

#### Featured Image

The Featured Image section appears when the post type supports thumbnails.

- **Featured Image** - Select an image from the WordPress media library or remove the current one. The selection updates the post thumbnail immediately on save.

#### Attributes

The Attributes section appears when the post type supports page attributes.

- **Parent Page** - Sets the parent post. Type to search existing pages.
- **Page Template** - The theme template assigned to the post. Selecting **Default Template** clears any custom template.
- **Order** - The `menu_order` value. Used by themes and queries that sort by menu order.

#### Discussion

The Discussion section appears when the post type supports comments.

- **Allow Comments** - Opens or closes comments on the post.
- **Allow Pingbacks & Trackbacks** - Opens or closes pingbacks and trackbacks.

### How saving works

Page Settings fields are saved to WordPress core, not to Beaver Builder's layout data.

When you publish or save a draft in the builder, Beaver Builder writes title, slug, status, excerpt, parent, menu order, comment status, and ping status to the post using `wp_update_post`. Page template is saved to the `_wp_page_template` post meta. The featured image is set with `set_post_thumbnail`. None of these values are stored in Beaver Builder meta.

:::info

Changing the slug updates the post permalink. The builder reloads at the new URL automatically so you keep editing the same post without hitting a 404.

:::

### Theme layouts and user templates

Page Settings is available on Themer layouts and saved user templates with a reduced field set.

- **Themer layouts** (`fl-theme-layout`) - Title, slug, and featured image. The status field is hidden because publish status is managed elsewhere for theme parts.
- **User templates** (`fl-builder-template`) - Title, slug, status, and featured image. Excerpt and attributes are hidden.

### Permissions

You need permission to edit the post before the tab will save changes.

Page Settings respects WordPress capability checks. Users who can edit the post can change its fields. Setting the status to **Published** requires the `publish_posts` capability for that post type. If the user does not have it, the status is downgraded to **Pending Review** on save.
