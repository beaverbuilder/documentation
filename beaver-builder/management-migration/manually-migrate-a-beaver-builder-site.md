---
id: manually-migrate-a-beaver-builder-site
title: Manually migrate a Beaver Builder site
sidebar_label: Manually migrate a Beaver Builder site
---

There are third-party plugins you can use to migrate Beaver Builder sites to a
new domain or location, but you can also migrate manually if you are careful
about a couple things: updating the database and clearing the Beaver Builder
cache. See the [WordPress codex](https://wordpress.org/support/article/moving-wordpress/)
for information about migrating sites manually, and pay attention to the
following sections.

## Always use serialized search & replace

It’s important to use a serialized search and replace tool when changing URLs
in the WordPress database, because many plugins, themes, and WordPress itself
store arrays and objects in a serialized format, which becomes corrupted if
you try to do a standard search and replace. If you use a backup plugin, make
sure it uses serialized search and replace.

The proper way to manually migrate a WordPress database is by doing a
serialized search and replace on the database. The fine folks at
**interconnect/it** offer a [Serialized Search and Replace](https://interconnectit.com/products/search-and-replace-for-wordpress-databases/) tool. Make sure to use version 3.1.0 or higher. If you use a plugin, we recommend the [Better Search Replace plugin](https://wordpress.org/plugins/better-search-replace/) by Delicious Brains.

:::danger **Warning:**
Always make a backup of your database before running a search and replace!
:::

## Clear the Beaver Builder Cache

The Beaver Builder plugin caches image and asset URLs, so it’s also important
to [clear the Beaver Builder cache](/beaver-builder/troubleshooting/debugging/issue-fixer-clear-the-cache.md) after migrating.

