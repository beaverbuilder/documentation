---
id: install-beaver-builder-via-composer
title: Install Beaver Builder via Composer
sidebar_label: Install Beaver Builder via Composer
---

You can install Beaver Builder Plugin, Beaver Builder Theme, or Beaver Themer
via [Composer](https://getcomposer.org).

## Install with composer.json

Create a composer.json file in your WordPress root folder and add the
following code. Replace KEY with your key from your [My Account](https://www.wpbeaverbuilder.com/my-account/) page.

```json
{
  "repositories": {
    "beaver-builder": {
      "type": "composer",
      "url": "https://composer.wpbeaverbuilder.com/KEY"
    }
  },
  "require": {
    "beaver-builder/bb-plugin-pro": "*",
    "beaver-builder/bb-theme": "*",
    "beaver-builder/bb-theme-builder": "*"
  }
}
```

Run `composer install` in CLI to install the latest versions of all three
packages in their correct plugin and theme folders. To install specific
versions, substitute the * in the JSON file with the version you require.

## Using a global config

You can add your repo link to the global composer config so you can then
install the packages via CLI without even needing a composer.json file. Run
the following command in CLI:

```bash
composer config --global repositories.beaver-builder composer https://composer.wpbeaverbuilder.com/KEY
```

After the global config is added you can then install any version of any
package with a single-line command. Here are a few examples:

`composer require beaver-builder/bb-plugin-pro` installs the latest
available Pro version of Beaver Builder. Substitute the following for your
version of the plugin:

* Standard version: `bb-plugin-standard`
* Pro version: `bb-plugin-pro`
* Agency version: `bb-plugin-agency`

`composer require beaver-builder/bb-plugin-pro:2.3.1` installs the Pro
version 2.3.1 of Beaver Builder.

`composer require beaver-builder/bb-theme` will install the latest version of
the Beaver Builder Theme.

`composer require beaver-builder/bb-theme-builder` will install the latest
version of Beaver Themer.
