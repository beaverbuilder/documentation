---
id: 08-module-property-reference
title: '08: Module property reference'
sidebar_label: '08: Module property reference'
slug: module-property-reference
---


## `$category` string

The category that your module will appear in the Beaver Builder editor's
module list.

## `$description` string

A short description of what your module does. It is not currently used within
Beaver Builder but may be in the future.

## `$dir` string

The directory path to your module. This should include the trailing slash.

## `$editor_export` boolean

Set this to false if you do not want a stripped down version of your module
exported to the default WordPress editor when publishing a layout.

## `$enabled` boolean

Set this to false to disable your module and keep it from appearing in Beaver
Builder's module list.

## `$group` string

The group that your module will appear in Beaver Builder's group selector. You
may omit this property if you would like your module to appear in the main
Standard Modules group.

## `$icon` string

An SVG icon for your module. Check out the guide [adding icons to your custom modules](/beaver-builder/developer/tutorials-guides/add-icons-to-your-custom-modules.md) for a complete reference. You may omit this property if you would
like to use the default icon.

## `$name` string

The name of your module that will appear in Beaver Builder's module list.

## `$node` string

The module's unique ID that doesn't change, even if it is exported and
imported into another database.

## `$partial_refresh` boolean

Set this to true if you would like to enable partial refresh for your module.
Please see the [partial refresh reference](17-partial-refresh-reference.md) before doing so.

## `$url` string

The URL path to your module. This should include the trailing slash.
