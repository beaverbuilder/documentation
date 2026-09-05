---
title: Design Systems Menu
description: Manage the design systems on your site from the Design Systems admin page. Rename, set a default, download a kit, delete, and see every page a design system is applied to.
---

Manage the design systems on your site from the Design Systems admin page. Rename, set a default, download a kit, delete, and see every page a design system is applied to.

## Opening the Design Systems page

Design systems have their own admin page, separate from the Beaver Builder AI settings page.

In the WordPress admin, go to **Beaver Builder > Design Systems**. When the Beaver Builder plugin is not active, **Design Systems** is a top-level menu item instead. The Beaver Builder menu sits directly below **Appearance**, and **Design Systems** is the first item in it.

## Page tabs

The page has up to three tabs, depending on which plugins are active.

- **Design Systems**. The list of design systems on your site.
- **Design Kits**. The bundled starter kits you can build a page from. See [Design kits](../design-foundations/design-kits.md).
- **Import a Kit**. The importer for a design kit folder or zip. See [Import a kit](../design-foundations/design-kits.md#import-a-kit).

The two kit tabs require the Beaver Builder AI plugin. Without it the page shows the design systems list on its own and the tab bar is hidden.

## Design Systems List

The list shows every design system on the site, newest first, with a summary of each in four columns.

A notice above the list points to where editing happens: open a page that uses a design system to edit its tokens, styles, and guidance. Nothing on this page is editable except the name. If no design systems exist yet, an empty state explains that they are created when you generate your first page or import a design kit.

Click anywhere in a row, other than a button or the name field, to open that design system's detail page.

### Name

The design system's name, with a **Default** badge when it is the site default.

Click the pencil icon to rename the system inline. Press Enter or click away to save, or press Escape to cancel. An empty name or an unchanged name is discarded.

### Colors

A strip previewing up to five of the design system's color tokens, in the order they are defined.

Only `--ds-color-*` tokens appear here. Hover a swatch to see the token name and its value. The column is empty for a design system with no color tokens.

### Used by

The number of pages, posts, and templates that use the design system.

Hover the count to see the breakdown by type, for example "4 pages, 1 template". The count includes published, draft, pending, private, and scheduled content, and excludes anything in the trash.

### Actions

Icon buttons for the actions available on each design system, with tooltips.

The same actions appear as text buttons in the detail page header. They are described in [Design system actions](#design-system-actions).

## Design system actions

Each design system has three action buttons, on both the list row and the detail page header.

### New Page

Creates a blank draft page assigned to this design system and opens it for editing.

The new page opens in Beaver Builder when the Beaver Builder plugin is active, and in the block editor when it is not. If your role cannot create any post type, the action fails with a permission error.

### Download Kit

Exports the design system as a design kit zip file.

The kit contains the token set, the shared CSS and JavaScript, the creative guidance, and the format specification files an AI coding agent needs to build pages against your design. See [Design kits](../design-foundations/design-kits.md) for the workflow and [Design kit format](../developer/design-kit-format.md) for the file specification. This button requires the Beaver Builder AI plugin.

### More actions

An ellipsis menu holding the two destructive or site-wide actions.

- **Make default** sets this design system as the site default, the one applied to a page that does not have a system assigned yet. A confirmation dialog explains that existing pages are not affected. The item is disabled for the current default, with an "Already the default" tooltip.
- **Delete** removes the design system, including its tokens, shared assets, fonts, and guidance. The item is disabled while any page, post, or template uses the system, with a "Design system in use" tooltip. Reassign that content first, or trash it from the [Used By list](#item-actions). Deleting cannot be undone.

:::warning
Deleting a design system is permanent. Download a kit first if you want a copy of the tokens, styles, and guidance.
:::

## The detail page

Clicking a row opens a full-page view of one design system, with the list's actions in the header.

The header shows the design system's name, a **Design Systems** button to go back to the list, and the New Page, Download Kit, and More actions buttons as text buttons. When the design system has a brief, the first few lines appear below the name with a **Read more** toggle.

Below the header are five read-only tabs.

### Used By

Every piece of content that uses this design system, as a grid or a list. This tab opens first. See [Reviewing where a design system is used](#reviewing-where-a-design-system-is-used).

### Tokens

The design system's tokens, grouped by category.

Categories are ordered Color, Font, Text Size, Weight, Line Height, Letter Spacing, Space, Radius, Shadow, Width, and Transition, with any custom categories after them and System and Other last. Color tokens render as labeled swatches; everything else renders as a name and value list. See [Design tokens](../design-foundations/design-tokens.md) for the naming conventions.

### CSS

The design system's shared CSS in two sections, **Reset** and **Base**.

Each section is a read-only code view, or a short "No reset CSS." or "No base CSS." placeholder when empty.

### JS

The design system's shared JavaScript as a read-only code view.

Empty design systems show "No base JS." here. Page-specific JavaScript is not shown on this page.

### Brief

The business brief and the creative direction the AI maintains for this design system.

Each appears under its own heading, **Brief** and **Creative Direction**. A design system with neither shows "No brief yet."

## Reviewing where a design system is used

The **Used By** tab is the fastest way to see the reach of a design system before you change or delete it.

At the top of the tab, filter chips show a count for **All** and for each post type in use. Click a chip to narrow the results to that type. To the right, a **Grid** and **List** toggle switches the layout, and your choice is remembered in the browser for the next visit.

### Grid view

Grid view shows twelve items per page as cards with a live preview.

Each card renders the real page in a small frame, loaded as the card scrolls into view, with the post title and a badge for its type below. Drafts and scheduled content preview through a signed link, so you see unpublished content as it will appear. Click a preview to open it in the lightbox.

### List view

List view shows twenty items per page in a table with **Title**, **Type**, **Modified**, and **Actions** columns.

The title links to the edit screen for that post. When Beaver Builder is enabled for the post, the link opens the Beaver Builder editor.

### Item actions

Both views offer the same actions per item, as icon buttons with tooltips.

- **Edit** opens the post's edit screen, or the Beaver Builder editor when Beaver Builder is enabled for it.
- **Duplicate** clones the post and opens the copy for editing straight away.
- **View** opens the live page. This appears in list view only, and only for content with a public URL, so Beaver Builder templates do not have it.
- **Preview** opens the preview lightbox. This appears in grid view only.
- **Move to Trash** moves the item to the WordPress trash after a confirmation, and you can restore it from the trash as usual. This appears in list view only, and only for items your role is allowed to trash; on sites with the trash disabled the action does not appear at all. Trashed content no longer counts as using the design system, so trashing is the quickest way to clear the last few items before deleting a design system.

### The preview lightbox

The lightbox shows one item at a time in a live frame and pages through the rest.

Move between items with the arrow buttons or the left and right arrow keys. A counter between them shows your position, for example "3 of 9". Only items that can be previewed are included, so paging never lands on a blank frame.

The header also holds:

- **Edit** and **Duplicate** buttons, which act on the item currently shown.
- Breakpoint buttons for **Desktop**, **Tablet (768px)**, and **Mobile (375px)**, which resize the frame without leaving the lightbox.
- A close button. Pressing Escape also closes the lightbox.

When results run past one page, **Previous** and **Next** buttons with a "Page X of Y" status appear below the results.

## Editing a design system

This admin page is read-only for tokens, CSS, JavaScript, and guidance, because those changes need a live preview.

Open a page that uses the design system and edit it from the design system panel there. In Beaver Builder, choose **Design System** from the Tools menu or press **Shift+D**. In the block editor, open the Beaver Builder AI panel and click the palette icon. See [Editing a design system](../design-foundations/design-systems.md#editing-a-design-system) for the panel's tabs and what each one changes.
