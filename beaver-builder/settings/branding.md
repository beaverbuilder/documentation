---
id: branding
title: Branding Tab
sidebar_label: Branding (Unlimited license)
description: The Branding tab in the Beaver Builder settings lets you white label the Beaver Builder plugin and BB Theme with your own brand and logo.
---

The **Branding** tab in the Beaver Builder settings lets you white label the Beaver Builder plugin and BB Theme with your own brand and logo.

<div className="embed-responsive">
  <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/OQP1ZO7PMYQ?rel=0" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
</div>

:::info
The **Branding** tab is only available for users with the Unlimited license.
:::

:::caution

Beaver Builder's [Welcome settings page](welcome.md) cannot be white labelled and is removed when Branding options are used.

:::

## Access Branding tab

1. Access your site's WordPress Admin Dashboard.
2. Navigate to **Settings > Beaver Builder**.
3. Then click the **Branding** tab.

![Access the Beaver Builder setting's branding tab](/img/beaver-builder/settings--branding--1.jpg)

## Plugin Branding

**Plugin Branding** lets you white label the **"Beaver Builder"** name that appears in the Beaver Builder user interface, WordPress Admin Dashboard, and WordPress admin bar. Additionally, you can replace the Beaver Builder logo that appears in the [Top Bar](user-interface/top-bar.md) with your own.

### Plugin Name

Enter a custom plugin name to white label the **"Beaver Builder"** name.

### Plugin Icon URL

Upload an image to your site, copy the URL and paste into the **Plugin Icon URL** option. The image will display in the Beaver Builder user interface (UI). For best results, we recommend using an image with a ratio of 1:1 such as `250x250`.

The default URL points to the `beaver.png` icon which is located in the following directory:

```markup
http://my-website.com/wp-content/plugins/bb-plugin/img/
```

Leave the Plugin icon field blank if you don't want any icon to appear.

## Theme Branding

Theme Branding lets you white label the **"BB Theme"** (parent) name, description, logo, and URL.

The changed title will appear in the following locations:

- **WordPress Admin Dashboard > Appearance > Themes** (WordPress Themes).
- **WordPress Admin Dashboard > Appearance > Themes > Theme Details** (WordPress Theme Details)
- **WordPress Admin Dashboard > Appearance > Customize** (WordPress Customizer).
- **WordPress Admin Dashboard > Appearance > Themes File Editor** (WordPress Themes File Editor).

If you're using the BB Child Theme and view the [WordPress Theme Details](https://wordpress.org/support/article/appearance-themes-screen/#current-theme) the parent theme notification will use the custom Theme Name option, as shown in this screenshot.

![WordPress Theme Details child theme's parent name](/img/beaver-builder/settings--branding--2.jpg)

### Theme Name

Enter a custom theme name to white label the **"BB Theme"** name. In the screenshot below the white labeled theme name is **My Custom Theme Name**.

### Theme Description

Enter a custom theme description to white label the **"BB Theme"** description. In the screenshot below the white labeled theme description is **My Custom Theme Description**.

### Theme Company Name

Enter a custom theme company name to white label the **"Beaver Builder Team"** company name. In the screenshot below the white labeled company name is **My Custom Company Name**.

### Theme Company URL

Enter a custom company URL to white label the Beaver Builder website URL. In the screenshot below the white labeled company URL isn't visible, but is used when clicking the **Company Name**.

### Theme Screenshot URL

Enter a URL to white label the BB Theme default screenshot.

![WordPress Theme Details using custom branding](/img/beaver-builder/settings--branding--3.jpg)

## Limitations

### Child Theme

**Theme Branding** only white labels the Beaver Builder Theme (parent). You can brand the child theme manually by editing the _style.css_ file and replacing the screenshot image with your own.

### File Paths

**Branding** lets you white label product labels such as **"Beaver Builder"**, but not technical identifiers that are used in the underlying code, such as file paths.

The paths remain as:

- **Beaver Builder** - `/wp-content/plugins/bb-plugin/`
- **Beaver Themer** - `/wp-content/plugins/bb-theme-builder/`
- **BB Theme** - `/wp-content/themes/bb-theme/`

:::warning

If you rename the file paths to something other than the default, you will not receive updates.

:::

### Prebuilt Templates

**Branding** does not support white labeling the Beaver Builder prebuilt templates. Any prebuilt template that includes "Beaver Builder" branding in the text will not be white labelled

### `fl-` Prefix Class Name

Beaver Builder prefixes all nodes (rows, columns, and modules) markup with `fl-` which is an abbreviation for Fastline Media (Beaver Builder's parent company). For example, the Heading module parent class is `fl-module-heading`. **Branding** does not support white labeling the `fl-` CSS class prefix.
