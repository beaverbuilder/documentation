---
id: not-getting-beaver-builder-updates
title: I'm not getting Beaver Builder updates
sidebar_label: I'm not getting Beaver Builder updates
---

If your subscription is active and you're still not getting automatic update
notices, there are several possible reasons why.

## 1. Didn't enter a license key

If you recently purchased a premium version of Beaver Builder, you might have
forgotten to enter the license key. Do the following:

  1. In your WordPress installation, go to **Settings > Beaver Builder** and click the **License** tab.
  2. Enter your license key and click **Save license key**.   
It doesn't hurt to do this even when the license says it's active because it
also solves the following problem, adding a removed domain back.

## 2. Domain was deactivated or removed in Domain Manager

The solution is different depending on whether your domain was deactivated or
completely removed.

### Deactivated domain

You know a domain was deactivated in Domain Manager when the  **License**  tab
in **Settings > Beaver Builder** in your WordPress installation has the
following message:

> UPDATES UNAVAILABLE! Your subscription is active but this domain has been
deactivated. Please reactivate this domain in your account to enable automatic
updates.   [Visit Account »](https://www.wpbeaverbuilder.com/my-account/?utm_medium=bb-pro&utm_source=license-settings-page&utm_campaign=license-deactivated)

See [how to fix a deactivated license](/general/account-billing/my-beaver-builder-license-was-deactivated.md).

### Removed domain

It could be that you removed a domain from Domain Manager on your  [My Account](https://www.wpbeaverbuilder.com/my-account/) page on the Beaver Builder website. In this case, the license will still show as Active in
**Settings > Beaver Builder** on your site, but the domain no longer appears in
Domain Manager.

See [how to add a removed domain back into Domain Manager](/general/account-billing/restore-a-removed-domain-in-domain-manager.md).

## 3. Update hasn't propagated yet

If you've just heard there's a brand new version, it could be that the update
notifications just hasn't propagated yet.

In this case, you can go to **Dashboard > Update** in your WordPress admin
panel, and click **Check for updates**. If this doesn't work, you can download
the update from your  [My Account](https://www.wpbeaverbuilder.com/my-account/) page and install it manually by FTP, or you can simply wait a little longer.

## 4. Update issue in older versions of Beaver Builder

If you're updating from a version of Beaver Builder prior to 1.8.4, there was an
issue where the WordPress Updater's cache prevented an autoupdate
notification. Here's how to clear the WordPress updates cache. Once you've updated to the latest
version, you shouldn't have a problem any longer.

  1. On the WordPress admin panel, click **Dashboard > ** **Updates**.
  2. Click the button that says either **Check for Updates** or **Check Again**.  
You may need to click this button two or three times. If the cache still
hasn't cleared, wait about 5 minutes and the updates should show up properly.
