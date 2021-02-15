---
id: map
title: Map
sidebar_label: Map
description: The Map module inserts a Google map with a marker pointing to an address you specify. 
---

The Map module inserts a Google map with a marker pointing to an address you specify. The map automatically adjusts in size to fit in the column, and you can specify map height. The default is 400px. You can also use either `px` or `vh` as units for map height. See [this article](/beaver-builder/advanced-builder-techniques/css-length-height-units.md) for more information about the units.


There's a setting to add a map title. This title is not visible on the web page but rather is placed in a `title` attribute to improve accessibility. Use the same considerations in creating this title as when creating an `alt` tag for images.

:::important **Notes:**
* Page load times can be affected by this module, because the embedded map is loaded from Google.
* This module uses Beaver Builder's API key to display the map. You don't need to create your own API key or store credit card information with Google.
:::

![](/img/map-module-1.jpg)

:::tip **Tip:**
For people who want to minimize load time, an alternative way to
display a map is to take a screenshot of the Google map, use that in a Photo
module, and link to the online Google map.
:::

## Advanced tab

There are all the usual [**Advanced** tab settings](/beaver-builder/layouts/advanced-tab-rows-columns-modules.md) for margins, visibility, animations, and advanced HTML settings.
