---
id: white-labeling-beaver-builder
title: White label Beaver Builder and BB Theme
sidebar_label: White label Beaver Builder and BB Theme
---

<div className="embed-responsive">
  <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/OQP1ZO7PMYQ?rel=0" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
</div>

With the Agency version of Beaver Builder, you can replace the branding for
the Beaver Builder plugin and Beaver Builder theme with your own.

:::info
Beaver Builder white labeling changes product labels, not technical identifiers that are used in the underlying code, such as file paths. The paths remain as */wp-content/plugins/bb-plugin/* and */wp-content/themes/bb-theme/*.
:::

## Beaver Builder plugin

The **"Beaver Builder"** label will be replaced throughout the WordPress admin
area and the Beaver Builder interface wherever the Beaver Builder plugin name
and Beaver Builder labels are normally displayed.

1. On the WordPress admin panel, click **Settings > Beaver Builder**, then click the  **Branding** tab.
2. In the **Plugin branding** section, add your custom plugin name and optionally a URL to a custom icon to replace the Beaver Builder logo.  
  By default, the URL points to the Beaver Builder icon at:

  ```markup
  http://yourdomain.com/wp-content/plugins/bb-plugin/img/beaver.png
  ```

  Leave the **Plugin icon** field blank if you don't want any icon to appear.  

  ![](/img/white-lable-bb-1.png)

## BB Theme

Adding custom branding changes the title, description, logo, and URL of the
Beaver Builder Theme displayed in the **Appearance > Themes** thumbnail and
description, as in the following screenshot:

![](/img/white-lable-bb-2.jpg)

It also changes the name of the theme at the top of the Customizer panel in
**Appearance > Customize**, as shown in the following example.

![](/img/white-lable-bb-3.png)

In **Settings > Beaver Builder > Branding**, add information to any of the fields you want to customize: **Theme name**, **Theme description**, **Theme company name**, **Theme company URL**, and a URL that displays a screenshot of the theme, as shown in the following screenshot.

![](/img/white-lable-bb-4.png)

:::info
This procedure white labels the Beaver Builder parent theme. If you
have the child theme installed, [you can brand it manually](/bb-theme/white-labeling/white-label-your-child-theme).
:::
