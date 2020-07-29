---
id: cant-open-page-in-beaver-builder
title: "Can't open page in Beaver Builder"
sidebar_label: "Can't open page in Beaver Builder"
---

If you've installed Beaver Builder and can't see any sign of it on a page you
open, try these troubleshooting steps.

## Can't see Beaver Builder tab

You can't edit a page or post in Beaver Builder because you don't see the tab?

![](/img/troubleshooting-cant-open-bb-1.png)

There are two possible solutions.

1. Check to make sure that Beaver Builder is enabled for that page or post type:

   * From the WordPress admin panel, go to **Settings > Beaver Builder** >  **Post Types** and make sure the correct checkbox is selected for the page or post type you want to edit.

2. Make sure Beaver Builder is enabled for the correct user roles.

  * From the WordPress admin panel, go to **Settings > Beaver Builder > User access**. In the **Builder access** field in the **Front end** section, make sure the user role is enabled for the user having the problem.

## Can't see the Beaver Builder UI

Normally when you open a page for editing in Beaver Builder, you see the
Beaver Builder admin bar across the top of the page, as in this screenshot.

![](/img/troubleshooting-cant-open-bb-2.png)

The first things to check are:

  * URL settings not matching in the WordPress Admin under **Settings > General**.
    * One instance is when `www` is present in one URL but not the other:  
    ![](/img/troubleshooting-cant-open-bb-3.png)

    * This can also occur if you use SSL(`https`) for one URL and `http` for the other URL.

The other likely cause is a [conflict with another plugin](/beaver-builder/troubleshooting/debugging/plugin-conflicts.md) installed on your
site.