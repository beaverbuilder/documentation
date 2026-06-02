---
id: popup
title: Popup layout type
---

The Popup layout type is a Beaver Themer layout you build like any other Themer template, but instead of replacing part of your theme, it renders as a modal that floats above the page. Use it to create promotional dialogs, sign-up forms, announcements, cookie notices, slide-in panels, and flyouts using the full Beaver Builder module set.

## Why use a Popup layout

Popups let you surface content on top of a page without sending visitors to a separate URL or permanently taking up space in your design. Because a popup is a Themer layout, it carries the same advantages as the rest of Beaver Themer.

- Build the popup with the same rows, columns, and modules you already use, including dynamic field connections.
- Control exactly which pages show the popup using Themer location rules, so one popup can appear site-wide or only on specific posts, pages, archives, or post types.
- Reuse a single popup across many pages instead of rebuilding the same dialog on each one.
- Open popups automatically based on visitor behavior, or on demand from a link or button.

## How Popup layouts work

A popup layout behaves differently from a header, footer, or content template because it is not part of the page flow. Understanding how it renders helps you reason about placement and styling.

Beaver Themer outputs every popup that matches the current page into the site footer, near the closing `</body>` tag. The popup stays hidden until something opens it. To avoid a popup opening on top of itself, Themer does not render a popup on the page where you are editing that same popup layout.

## Create a Popup layout

You create a popup the same way you create any Themer layout. The steps below cover the full process.

1. **Add a new Themer layout**  
  In your WordPress admin, go to **Beaver Builder → Themer Layouts → Add New**, give the layout a title, and choose the **Themer Layout** type.
2. **Select the Popup layout**  
  In the **Layout** dropdown, choose **Popup** from the **Content** group, then add the layout.
3. **Set location and user rules**  
  Choose where the popup should appear with location rules, and optionally restrict who sees it with user rules. A popup with no matching location will never render.
4. **Build the popup**  
  Launch Beaver Builder. A Popup module is already in place at the root of the layout. Add your rows, columns, and modules inside it, then adjust the popup's own settings for triggers, dismissal, sizing, and style.
5. **Publish**  
  Publish the layout. The popup now renders on every page that matches its location rules, ready to be opened.


## Open a popup

A popup stays hidden until it is opened, and you have several ways to trigger it. Choose the method that fits how you want visitors to encounter the content.

See the [Popup Modules](/beaver-builder/layouts/modules/popup) article for more information on how to configure a popup.
