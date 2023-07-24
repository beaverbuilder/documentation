---
id: themer-singular-layout-featured-image-module
title: Featured Image module
sidebar_label: Featured Image module
---

The Featured Image module is in the **Post modules** category, which appears on when you're editing a Singular-type Themer layout.

The Featured images module displays the featured image that you set on an individual post or page in the WordPress editing screen.

## Under the hood

The Featured image module is a "shortcut" module. It's actually a Photo module with a field connection set to **Post featured image** in the **Photo** field. When you open this module for editing, you'll have the regular Photo module settings for cropping, alignment, captioning, and linking.

:::info
The field connection requires that the **Photo source** field be set to **Media Library** because that's where WordPress featured images come from.
:::
