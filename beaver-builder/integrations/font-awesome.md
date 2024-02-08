---
id: font-awesome
title: Font Awesome
sidebar_label: Font Awesome
---

The official Font Awesome WordPress plugin seamlessly integrates with Beaver Builder. This integration enables you to utilize the latest Font Awesome version within Beaver Builder, gain access to Font Awesome Pro Kits, and leverage DuoTone icons in your Beaver Builder layouts.

## Getting Started

To get started using the [Font Awesome WordPress plugin](https://wordpress.org/plugins/font-awesome/) with Beaver Builder, install and activate the plugin on your website.

## Font Awesome Free

To utilize the most up-to-date free version of Font Awesome with Beaver Builder:

1. Install and activate the [Font Awesome WordPress plugin](https://wordpress.org/plugins/font-awesome/).
2. Navigate to the Font Awesome plugin's settings page within your WordPress admin dashboard **(Settings > Font Awesome)**.
3. On the settings page, make the following configurations:

   * **Use CDN**.
   * Under Icons, select **Free**.
   * For Technology, choose **Web Font**.
   * For version, select **Latest**.

4. Save Changes.

## Font Awesome Pro

To utilize the most up-to-date Font Awesome Pro version with Beaver Builder:

1. Install and activate the [Font Awesome WordPress plugin](https://wordpress.org/plugins/font-awesome/).
2. Log into your [Font Awesome account](https://fontawesome.com/account) and create a kit.

   :::caution

   While setting up your Kit, ensure that it is configured for **Webfont** usage rather than SVG.

   :::

3. Copy your [API token](https://fontawesome.com/account#api-tokens) and paste into **WordPress Admin Dashboard > Settings > Font Awesome > API Token**.
4. Select a kit from the dropdown menu and click **Save Changes**.

:::tip

You can learn more from the [Font Awesome documentation](https://fontawesome.com/v6/docs/web/use-with/wordpress/).

:::

## Confirm Integration & Enable Font Awesome Icons

Once you have the Font Awesome plugin installed and configured, you will be able to confirm that Font Awesome is integrated with Beaver Builder, and you can enable Font Awesome icons.

1. Access your **WordPress Admin Dashboard**.
2. Go to **Settings > Beaver Builder > Icons**.
3. You should see a new section titled **Font Awesome Integration** which confirms that Font Awesome plugin is integrated with Beaver Builder.
4. Mark the checkboxes corresponding to the Font Awesome Free or Pro icon styles you want to enable in Beaver Builder.
5. Click **Save Icon Settings**.

![Font Awesome Integration](/img/beaver-builder/integrations--font-awesome--1.jpg)

## Access Font Awesome Icons

Once you have enable the Font Awesome icon styles, you can access them from any module that has an icon picker.

![Enable Font Awesome Pro icons](/img/beaver-builder/integrations--font-awesome--2.jpg)

## Using Duotone Icons

Upon activating Font Awesome Pro icons within Beaver Builder and enabling the duotone icon style, you gain the ability to utilize duotone icons directly within Beaver Builder.

Upon entering any module that supports icons, choosing a duotone icon prompts the module's icon style choices to adjust, offering the capability to designate both primary and secondary colors for the icon.

:::info

The **DuoTone Icon Secondary Color** automatically has reduced opacity. Also, Duotone icons don't have different hover colors.

:::

![Duo-Tone icons](/img/beaver-builder/integrations--font-awesome--3.jpg)
