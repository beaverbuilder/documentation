---
id: wp-cli-plugin-theme
title: WP-CLI for Beaver Builder Plugin and Theme
sidebar_label: WP-CLI for Beaver Builder Plugin and Theme
description: Description of Beaver Builder's commands to use with WP-CLI.
---

[WP-CLI](https://wp-cli.org/) is a set of command-line tools for managing
WordPress installations without using a web browser. You can perform WordPress tasks such as updating plugins and configuring multisite installs. 

You can also use WP-CLI to perform certain tasks in Beaver Builder. This article describes the commands available for the Beaver Builder plugin and theme. To see a description of the Beaver Themer commands, see [this article](/beaver-themer/developer/wp-cli-for-beaver-themer.md).

## Accessing WP-CLI

After you've installed WP-CLI, use SSH to access your hosting server. Navigate to the WordPress installation directory that you want to work in and enter the following command to get a list of all options:

```bash
wp beaver
```

The on-screen information tells you what commands are available and the
syntax of each command, with options and examples.

## Clear the Beaver Builder and Beaver Theme cache

This command clears the Beaver Builder [plugin cache](/beaver-builder/troubleshooting/debugging/issue-fixer-clear-the-cache.md) or both the Beaver Builder plugin and Beaver Builder Theme caches:

```bash
wp beaver clearcache
```

**Options:**

*  `--network`  
Clears the Beaver Builder cache for all sites on a network.
*  `--all`  
Clears both the Beaver Builder plugin and Beaver Builder Theme caches.

### Examples

#### Single Site

* Clear the Beaver Builder Plugin cache on your site.  
`wp beaver clearcache`

* Reset the Beaver Theme cache on your site.  
`wp beaver theme clearcache`

* If the Beaver Builder Theme is active, clear both caches. 
`wp beaver clearcache --all`

#### Multisite

* Clear the Beaver Builder plugin cache on all subsites of a multisite installation.  
`wp beaver clearcache --network`

* Clear the Beaver Builder plugin cache and reset the Beaver Builder Theme cache on all subsites of a multisite installation. Beaver Theme must be active on the root site.  
`wp beaver clearcache --network --all`

##  Activate or deactivate the Beaver Builder license key for a domain

The following command activates or deactivates the Beaver Builder license key and registration of the domain in your account at *wpbeaverbuilder.com*.

```bash
wp beaver register
```

**Options:**

* `--deactivate`  
Deactivates this domain at *wpbeaverbuilder.com* and removes the license.
* `--license`  
License key value to use

### Examples

* Activate the license (substitute your license key number) and register the domain whose directory you are in:  
`wp beaver register --license=01234567890`

* Activate the license when the license is defined in *wp-config.php* using `FL_LICENSE_KEY global`:   
`wp beaver register`

* Deactivate the license for the domain whose directory you are in:
`wp beaver register --deactivate`

## List Beaver Builder global settings

Returns the list of Beaver Builder global settings.

```bash
wp beaver global --list
```

## Update a Beaver Builder global setting

Normally you manage global settings at **Tools > Global Settings** in the Beaver Builder editor, but you can also change individual global settings with a WP-CLI command by using the setting's ID and assigning a new value. Here's the basic command:

```bash
wp beaver global-update
```

**Options:**

* `--id`  
The ID for the global option.

* `--value`  
The value for the global option.

### Example

Hide the page title for the WordPress theme you're using by changing the value of the **CSS selector** option in **Tools > Global settings** in the Beaver Builder editor.  

```bash
wp beaver global-update --id=default_heading_selector --value=.fl-post-header  
```
This command assigns the value `.fl-post-header` to the **CSS selector** field in **Tools > Global Settings**.

:::note **Note**
`.fl-post-header` is the selector for the Beaver Builder Theme and is the default **CSS selector** value. [Follow this article](/beaver-builder/getting-started/bb-editor-basics/show-or-hide-the-wordpress-page-title.md) to find the selector for your theme.