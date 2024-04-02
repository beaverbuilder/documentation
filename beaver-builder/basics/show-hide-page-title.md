---
id: show-hide-page-title
title: Show/Hide Page Title
sidebar_label: Show/Hide Page Title
---

If you are using Beaver Builder Theme, the title that you assign to the page
in WordPress is hidden on pages using Beaver Builder by default, though you can set it
to [show if you prefer](user-interface/global-settings.md#default-page-heading).

<div className="embed-responsive">
  <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/39fRCRyVSJ0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
</div>

## Benefits for hiding page title

There are several advantages to adding your own page titles in Beaver Builder using the [Heading module](layouts/modules/heading.md). As an example, styling your theme's page title may require custom CSS, whereas you can use the included styling options with the Heading module.

## Show or hide the page title

This works for [BB Theme](/bb-theme/) and third-party themes.

1. Click the title bar in the upper left corner to expose
   the [Tools Menu](user-interface/tools-menu.md), then choose [Global Settings](user-interface/global-settings.md#default-page-heading), or just use the keyboard
   shortcut:

   - <kbd>command ⌘</kbd> + <kbd>U</kbd> (<i className="fab fa-apple"></i> Mac)
   - <kbd>Ctrl</kbd> + <kbd>U</kbd> (<i className="fab fa-windows"></i> Windows).

2. On the **General** tab, navigate to the **Default Page Heading** section.

3. To display the WordPress page title, set **Show** to **Yes**. To hide the default page title, set **Show** to **No**.

4. Click **Save**.
   If you don't see the change, try publishing, saving, or reloading the page in
   your browser.

If you're using BB Theme, you're done. If you're using a third-party theme and you can't hide the title in your theme's settings, follow the next procedure.

## Third-Party theme CSS class

First, you need to find the CSS class selector used by your theme for the page title. The easiest method is to use your browser's developer tools to inspect the page title. This will let you see what class(es) are assigned to the page title.

The screenshot below, shows an example, where the page title is **"Sample Page"** and the relevant class is `.entry-title`.

![Use CSS to hide page title](/img/beaver-builder/editor-basics--show-hide-title--1.jpg)

1. Go to [Global Settings > Default Page Heading](user-interface/global-settings.md#default-page-heading).
2. In the **CSS selector** field, replace `.fl-post-header` with the correct CSS selector for your theme's page title.
   The CSS selector must start with a period. In the previous example, you would add `.entry-title`.

:::tip
You can use the links below to learn how to open your preferred browser's developer tools.

- [Chrome](https://developer.chrome.com/docs/devtools/overview/)
- [Edge](https://docs.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/)
- [FireFox](https://firefox-dev.tools/)
- [Safari](https://support.apple.com/en-gb/guide/safari/sfri20948/mac)
  :::
