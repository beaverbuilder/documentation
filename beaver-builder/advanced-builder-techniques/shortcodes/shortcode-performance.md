---
id: shortcode-performance
title: Shortcode Performance
sidebar_label: Shortcode Performance
---

Using too many Beaver Builder shortcodes on a single page can cause a hit to
page loading times. Why? Each Beaver Builder shortcode opens the CSS and
JavaScript files of the page that it's pulling content from and queries the
database for the content. Multiply that times the number of shortcodes on your
page.

How many shortcodes are too many? That depends on factors such as what else
has to be loaded and how important it is to you to shave off every millisecond
of page loading time that you can. As a ballpark, a few shortcodes are ok; a
couple dozen are probably going to cause problems.

Use global rows or modules instead of shortcodes when you can. Global rows and
modules become part of the main layout, so you don’t need separate queries for
the data and separate assets to render them.

:::tip **Tip**
Beaver Themer is often an easier and better way to inject content
into posts and pages than Beaver Builder shortcodes. Using Beaver Themer, many
of the fields in your standard Beaver Builder settings have links where you
can create field connections, which essentially use a variable that inserts
content based on the value of a WordPress setting or a custom field for that
page or post. See [the examples in the last section of the shortcodes article](/beaver-builder/advanced-builder-techniques/shortcodes/use-shortcodes-in-your-layouts.md) for a few specific examples.
:::
