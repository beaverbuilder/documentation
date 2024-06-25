---
id: i-migrated-a-site-but-my-image-urls-didnt-change
title: I migrated a site but my image URLs didn't change
sidebar_label: I migrated a site but my image URLs didn't change
---

If you’re having trouble with your image links going to your old location
after migrating a site, try two things.

First, clear the Beaver Builder cache.

* Go to **Settings > Beaver Builder > Tools**, click the **Cache** tab, and then click **Clear cache**.

If that doesn't solve the problem, use [a serialized search & replace tool](https://interconnectit.com/products/search-and-replace-for-wordpress-databases/) to search for old URLs in your migrated database content and
replace them with the new URLs.

:::warning **WARNING:**
Be sure to make a backup of your site before you make any change
to the database such as search and replace.
:::

If it's just a few links, you might prefer to change them manually.
