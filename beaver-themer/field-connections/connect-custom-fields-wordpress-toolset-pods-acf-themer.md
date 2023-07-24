---
id: connect-custom-fields-wordpress-toolset-pods-acf-themer
title: Connect to various types of custom fields
sidebar_label: Connect to various types of custom fields
---

You can use standard WordPress custom fields, Toolset custom fields, Pods custom fields, or Advanced Custom Fields as field connections in Beaver Themer layouts.

## Standard WordPress custom fields

Any standard WordPress custom field can be connected using the **Post Custom Field** field connection provided by Beaver Themer. See the [tutorial about how to add a WordPress custom field and use it in a Themer layout](/beaver-themer/field-connections/connections-to-wp-custom-fields/display-a-wordpress-custom-field-in-a-singular-themer-layout.md).

Since custom fields are essentially the same thing as [post meta](https://developer.wordpress.org/reference/functions/add_post_meta/), any post meta stored in the database can be connected by using the **Post Custom Field** field connection.

:::info
Currently, only string values will be returned as objects, and arrays are not currently supported by field connections.
:::

## Toolset custom fields

Custom fields created with Toolset work almost identically to custom fields provided by WordPress. The only difference is that you need to prefix your field's name (key) in the connection form with `wpcf`. For example, if your Toolset custom field has a name (key) of `my_tc_field`, in Themer it should be `wpcf-my_tc_field`.

## Pods custom fields

Custom fields that you've created with Pods work just like custom fields added using the core WordPress form. Just add the field name (key) using the Post Custom Field connection as shown above and everything else will take care of itself.

Use the [Pods Beaver Themer Add-On](https://wordpress.org/plugins/pods-beaver-builder-themer-add-on/) to select Pods fields for the currently displayed custom post type in the field connections list and see the [Themer tutorial for Pods](/beaver-themer/field-connections/connections-to-pods-custom-fields/build-this-display-a-pods-custom-field-and-separator-only-when-theres-content.md).

## Advanced Custom Fields

The Advanced Custom Fields plugin (free or Pro version) can be used to create custom fields that appear in the field connection list just like the other types of custom fields. See [this article for an overview](../integrations/acf/index.md).
