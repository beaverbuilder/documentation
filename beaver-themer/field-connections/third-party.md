---
id: third-party
title: Third-party Custom Fields
sidebar_label: Third-party 
description: This article gives a brief introduction to using field connections with fields created in third-party plugins that are not inherently supported by Beaver Themer.
---

This article gives a brief introduction to using field connections with fields created in third-party plugins that are not inherently supported by Beaver Themer.

:::caution
If you encounter any issues with field connections related to Toolset, Pods, or Meta Box, we advise reaching out to their respective support teams for assistance.
:::

## Meta Box

By utilizing the [Meta Box - Beaver Themer Integrator](https://metabox.io/plugins/meta-box-beaver-themer-integrator/) plugin, you can seamlessly integrate custom fields generated with Meta Box. This integration enables you to effortlessly select and display custom fields, created using the Meta Box plugin, through a dropdown menu in Beaver Themer.

Below is an example of a Meta Box field connection shortcode. It's important to be aware that the shortcode syntax may differ based on the type of field you aim to display and the layout type to which you are applying it.

```markup
[wpbb post:meta_box field='FIELD_NAME']
```

## Pods

By installing the [Pods Beaver Themer Add-On](https://wordpress.org/plugins/pods-beaver-builder-themer-add-on/), you gain the ability to effortlessly select Pods fields in Beaver Themer field connections through a dropdown menu. This dropdown menu corresponds to the currently displayed item, whether it's a Custom Post Type or Taxonomy.

Below is an example of a Pods field connection shortcode. It's important to be aware that the shortcode syntax may differ based on the type of field you aim to display and the layout type to which you are applying it.

```markup
[wpbb post:pods_display field='FIELD_NAME']
```

## Toolset

Toolset fields are compatible with Beaver Themer and function almost identically to [WordPress Custom fields](wordpress-custom-fields.md). The only difference is that you should prefix your field's name (key) with `wpcf-`.

1. In the field connection panel list, select **Post Custom Field**.
2. In the **Field Key** field, enter the name of your Toolset custom field, prefixed with `wpcf-`.  

For example, if your Toolset custom field is named `my_tc_field`, in Themer, it should be specified as `wpcf-my_tc_field`.

```markup
[wpbb post:custom_field key='wpcf-my_tc_field']
```