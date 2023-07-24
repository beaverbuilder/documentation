---
id: wp-cli-for-beaver-themer
title: WP-CLI for Beaver Themer
sidebar_label: WP-CLI for Beaver Themer
---

[WP-CLI](https://wp-cli.org/) is a set of command-line tools for managing WordPress installations. You can update plugins, configure multisite installs and much more, without using a web browser.

After you've installed WP-CLI, you can enter the following command to get a list of all Beaver Builder commands:

`wp beaver`

The on-screen information will tell you what commands are available and the syntax of each command, with options and examples.

Currently, the following commands are available for Beaver Themer. To see a description of the Beaver Builder Plugin and Theme commands, see [this article](/beaver-builder/developer/tutorials-guides/wp-cli-plugin-theme).

## List all Themer layouts

The following command lists all of the Themer layouts with the following values:

* ID of the Themer layout
* Name of the Themer layout
* Status of the Themer layout (Publish or Draft)
* Type of Themer layout (part, footer, etc.)
* Hook where the Part will appear, if the Themer layout is of type Part.
* Locations to which the Themer layout applies  
  
  ```
    wp beaver themer list
  ```  
  ![](/img/wp-cli-for-beaver-themer-178c944c.png)

You can also use this command to list the values that can be used for the `--hooks` option to specify the location of a Part type, as described in the section below on setting the type for the Themer layout.

## Change status for a Themer layout to Published or Draft

Changes the Themer layout status to either **Published** or **Draft** with the following commands.

```
wp beaver themer set-status --id=123 --status=publish
```
```
wp beaver themer set-status --id=456 --status=draft
```

Setting a Themer layout to Draft status effectively disables the Themer layout from being applied.

## Set type for Themer layout

The following command sets the Themer layout type to Archive:

```
wp beaver themer set-type --id=123 --type=archive
```

The following command sets the Themer layout type to Part, using the `-hook` argument to determine the Part location, in this case before the content area:

```
wp beaver themer set-type --id=456 --type=part --hook=fl_before_content
```

To get a list of `--hook` values for -`-type=part`, use the following command:

```
wp beaver themer list-hooks
```

## Add a location to the Themer layout

Set the location of the Themer layout:

```
wp beaver themer add-location --id=123 --location=general:single
```

Add location `general:site` to Themer layout with ID 456 as the first element of the array:

```
wp beaver themer add-location --id=456 --location=general:single --position=0
```

## Delete location from Themer layout

Remove a specified location from a Themer layout. Use the `wp beaver themer list` command to find the value for the location you want to remove.

```
wp beaver themer del-location --id=123 --location=general:single
```
