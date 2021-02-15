---
id: wp-cli-plugin-theme
title: WP-CLI for Beaver Builder Plugin and Theme
sidebar_label: WP-CLI for Beaver Builder Plugin and Theme
---

[WP-CLI](https://wp-cli.org/) is a set of command-line tools for managing
WordPress installations. You can update plugins, configure multisite installs
and much more, without using a web browser.

After you've installed WP-CLI, you can use SSH to access your hosting server.
Navigate to the WordPress installation that you want to work in and enter the
following command to get a list of all Beaver Builder commands:

```bash
wp beaver
```

The on-screen information will tell you what commands are available and the
syntax of each command, with options and examples.

Currently, the following commands are available for the Beaver Builder Plugin
and Theme. To see a description of the Beaver Themer commands, see [this article](/beaver-themer/developer/wp-cli-for-beaver-themer.md).

## Clear cache

Clears the Beaver Builder Plugin cache, Beaver Builder Theme cache, or both.

```bash
wp beaver clearcache
```    

## Examples

### Single Site

  * Clear the Beaver Builder Plugin cache on your site.

  ```bash
  wp beaver clearcache
  ```

  * Reset the Beaver Theme cache on your site.

  ```bash
  wp beaver theme clearcache
  ```

  * Both actions can be combined if the Beaver Builder Theme is active.

  ```bash
  wp beaver clearcache --all
  ```

### Multisite

  * Clear Beaver Builder plugin cache on all subsites.

  ```bash
  wp beaver clearcache --network
  ```

  * Clear Beaver Builder plugin cache and reset Beaver Builder Theme cache   
  :::note **Note**
  Beaver Theme must be active on root site.
  :::

  ```bash
  wp beaver clearcache --network --all
  ```

##  wp beaver register

Activates or deactivates the Beaver Builder license key.

Syntax to activate the key (substitute your license key number) for the domain
whose directory you are in:

```bash
wp beaver register --license=01234567890
```

Syntax to deactivate the license for the directory whose domain you are in::

```bash
wp beaver register --deactivate
```
