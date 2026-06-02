---
id: data-storage
title: Data storage
sidebar_label: Data storage
---

Layout data for Beaver Builder is stored in the WordPress postmeta table in a
serialized array.

Live Beaver Builder data is stored using the postmeta key  `_fl_builder_data,` ,
while draft data is stored using the postmeta key `_fl_builder_draft`.

When you activate Beaver Builder, any content that is already in the WordPress
editor is migrated to a text module within Beaver Builder. In addition, every
time you make changes and publish a Beaver Builder layout, a stripped-down
version of the layout is saved to the WordPress editor so your content is
available should you ever decide to deactivate Beaver Builder.
