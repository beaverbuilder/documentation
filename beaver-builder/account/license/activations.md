---
id: activations
title: Site Activations
sidebar_label: Site Activations
---

A site activation is always required for enabling automatic updates and being eligible for support for that domain. Activating your license key connects your website to our update server and lists your site on the [domain manager](../domain-manager.md) in your account.

## Development & Staging Activations

Beaver Builder license types have a site limit on the number of production websites they can be activated on. However, we allow unlimited activations on development and staging websites.

We detect if a site is a development or staging website using the following ruleset:

- **IP address:** 192.168.0.1
- **Subdomain:** test.example.com, testing.example.com, sandbox.example.com, dev.example.com, local.example.com, stage.example.com, staging.example.com.
- **TLD:** example.local, example.loc, example.localhost, example.test, example.dev.
- **No TLD:** localhost.
- **Host Staging:** .flywp.xyz, .instawp.xyz, .temp-site.link, .wp1.site, bigscoots-staging.com, closte.com, cloudwaysapps.com, cloudwayssites.com, flywheelstaging.com, kinsta.cloud, myftpupload.com, onrocket.site, tempurl.host, wpcomstaging.com, wpengine.com, wpenginepowered.com.

When your development or staging URL aligns with any of the above, it will be categorized as a development or staging site and will not be included in your license site limit count.

:::info

We use the [WordPress Site URL](https://wordpress.org/documentation/article/settings-general-screen/#site-address-url) to determine the website domain. Therefore, any website served in a subdirectory (e.g., _https&#58;//example.com/staging_) will be treated as a production URL.

:::

## WordPress Multisite

In WordPress Multisite network installations, subsites are not considered separate sites and do not count towards your license site activation limit.
