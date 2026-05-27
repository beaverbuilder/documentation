---
id: system-requirements
title: System Requirements
sidebar_label: System Requirements
---

This article covers the recommended system requirements for installing and using Beaver Builder on your sites.

## WordPress

- Beaver Builder is compatible with WordPress version 6.6 or higher.
- The WordPress REST API must be enabled: Beaver Builder relies on the REST API for key features. You can verify it’s active by visiting `/wp-json/` on your site (e.g., `https://yourwebsite.com/wp-json/`).

We recommend a [WP memory limit](https://wordpress.org/support/article/editing-wp-config-php/#increasing-memory-allocated-to-php) of at least 128 MB, with 256 MB or more preferred for optimal performance.

## Server

To ensure smooth functionality of the Beaver Builder user-interface (UI), it is important to configure the server with the following settings, as failure to do so may lead to issues:

- Set `X-Frame-Options` to `SAMEORIGIN`.
- Configure Content-Security-Policy (CSP) with the directive [`frame-ancestors`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/frame-ancestors) to `self`.

Contact your web host provider for assistance with configuring these settings.

:::caution

Setting `script-src` to `none` in your Content Security Policy (CSP) will break the Beaver Builder UI, as it prevents all JavaScript from running—including the scripts essential for the builder's functionality. Since CSP configurations can be highly complex and vary widely depending on your setup, it's crucial to thoroughly test your website after making any changes to ensure that the Beaver Builder UI continue to work as expected.

:::

## PHP

Beaver Builder follows the WordPress requirements for PHP version. See the [Wordpress Requirements page](https://wordpress.org/support/article/requirements/) for current recommendations.

:::info

PHP 8 is supported for all Beaver Builder products with some warnings, which are fixed in Beaver Builder 2.5, Beaver Builder Theme 1.7.9, and Beaver Themer 1.4.

:::

## jQuery

Beaver Builder enqueues the version of jQuery that is bundled with WordPress core and only supports that version. It is quite possible that other versions of jQuery will work, but use them at your own risk.

## Browsers

Beaver Builder supports all modern browsers (Chrome, FireFox, Safari and Edge).

### Viewing Beaver Builder content

To view content added by Beaver Builder to your pages, posts, or custom post types we support the latest three versions of Chrome, Firefox, Safari, and Edge. For example, if the latest version is 66, then any release of versions 64-66 is supported.

:::info

As of [WordPress 5.8](https://wordpress.org/news/2021/05/dropping-support-for-internet-explorer-11/), Internet Explorer 11 is no longer supported.

:::

### Working with the Beaver Builder editor

We only support the latest browser version when using the Beaver Builder editor.

## Mobile Devices

The Beaver Builder editor can be used on tablets and smartphones to edit layouts. Note the functionality is still subject to limitations inherent on smaller screens.
