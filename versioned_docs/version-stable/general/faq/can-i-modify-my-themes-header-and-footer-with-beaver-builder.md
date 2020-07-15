---
id: can-i-modify-my-themes-header-and-footer-with-beaver-builder
title: Can I modify my theme's header and footer with Beaver Builder?
sidebar_label: Can I modify my theme's header and footer with Beaver Builder?
---

It depends on which theme and which Beaver Builder products you have.

The [Beaver Builder plugin](https://www.wpbeaverbuilder.com/) is used for
layouts in the content area of your site, not the theme areas (header and
footer). See [this knowledge base article](/beaver-builder/getting-started/what-can-i-do-with-beaver-builder.md#plugin-vs-theme-vs-beaver-themer) for a diagram of the content area versus the parts of the page controlled by the WordPress theme.

The [Beaver Themer plugin](/beaver-themer/getting-started/what-can-i-do-with-beaver-themer.md) is an add-on to the Beaver Builder plugin, and it can be used to create layouts in just about every area of the page *besides*
the content area, plus pages that WordPress normally generates on the fly,
such as blog index and archive pages. You can also control which pages of your
site these Themer layouts apply to. Here's [an article](/beaver-themer/getting-started/primer-on-wordpress-content-and-theme-areas-themer.md) with more information about the parts of the page that Beaver Themer can control.

:::note **Note**
Beaver Themer overrides your theme's layout on the pages to which it
applies, so your theme must support the removal of headers and footers with
hooks. See the [list of themes that currently
support Beaver Themer](/beaver-themer/management-compatibility/beaver-themer-supported-themes.md).
:::

The Pro and Agency packages of the Beaver Builder plugin include the Beaver
Builder Theme, a very versatile theme framework that is simple to learn, the
header and footer are very customizable if you don't use Beaver Themer, and
it's fully compatible with Beaver Themer.

As an alternative to Beaver Themer, some Beaver Builder users [create a transparent header](/bb-theme/defaults-for-layouts-content/headers-nav-menus/merge-page-content-into-the-header.md) with the Beaver Builder plugin, or they suppress the header and footer in their theme, or they use a third-party header/footer plugin compatible with Beaver Builder.

