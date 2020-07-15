---
id: theme-css-reference
title: Theme CSS Reference
sidebar_label: Theme CSS Reference
---

If you take a look in your browser web inspector of choice, you’ll notice that Beaver Builder doesn’t make use of the typical _style.css_ file that is required of all WordPress themes. That’s because all of Beaver Builder’s styles are generated dynamically from LESS files each time you click **Save Settings** on the theme settings page. If you need to dig through the core styles to find something you are trying to override, you can find those in the _wp-content/themes/bb-theme/less/_ directory. The main LESS file for the theme is called _theme.less_.

The styles that are generated are saved and compressed in a cached stylesheet with a unique ID that looks something like this:

`skin-533c5dbd2c98d.css`

Why is that good? If you’re using a CDN like CloudFront, static filenames like _style.css_ will stay cached on their servers and take a while to reflect any changes that you’ve made. Using a unique ID creates a new cached file so your changes will show up instantly.

## CSS namespace

If you look at Beaver Builder HTML outputs, you see a lot of class names that start with `fl-`. That is our namespace and helps us to avoid styling conflicts with plugins that you may have installed. When you see that namespace on an element you are styling, you know that it’s part of the Beaver Builder Theme or Beaver Builder plugin.

## CSS classes for page elements

The Beaver Builder Theme is intended to be a shell for the Beaver Builder plugin. As such, there isn’t much to talk about in terms of content, unless you’re using the built-in blog or WooCommerce.

Here are the elements that make up the shell of the website:

**Page Wrapper**  `.fl-page`
**Top Bar**  `.fl-page-bar`
**Fixed Header**  `.fl-page-header.fl-page-header-fixed`
**Header**` .fl-page-header.fl-page-header-primary`
**Content Area**  `.fl-page-content`
**Footer Widgets** `.fl-page-footer-widgets`
**Footer**  `.fl-page-footer`

Here are the three navigation positions you can choose from in the theme settings:

**Right Nav** `.fl-page-nav-right .fl-page-nav`
**Bottom Nav** `.fl-page-nav-bottom .fl-page-nav`
**Centered Nav** `.fl-page-nav-center .fl-page-nav`

See also the [diagram of areas on the page mapped to CSS classes](/bb-theme/code/beaver-builder-theme-customizer-settings-mapped-to-css.md).
