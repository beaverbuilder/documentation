---
id: manage-plugin-activations-centrally
title: Manage plugin activations centrally
sidebar_label: Manage plugin activations centrally
---

You can see a list of all the WordPress installations in which your license is
activated, and you can deactivate, remove, or reactivate the license for any
of those installations.

To see the list of sites, on the  [My Account](https://www.wpbeaverbuilder.com/my-account/) page, navigate to the Domain Manager section and click **Manage Domains**.

:::tip **Tip**
Switching from HTTP to HTTPS on your site by adding an SSL certificate will cause that site to appear twice in the Domain Manager because the two are considered separate domains. For example:

```markup
http://my-website.com/
https://my-website.com/
```

You can safely remove the non-SSL domain from the domain manager.
:::

## Deactivate a domain

Deactivating a domain prevents the site from receiving remote updates from our
server, but the existing version of Beaver Builder still functions normally.

Deactivating prevents the Beaver Builder license from being activated at the
local site in **Settings > Beaver Builder > License**.  If you want to lock
out a client from using your Beaver Builder license, this is the option to
choose.

A deactivated site stays in the Domain Manager list if you want to reactivate
it later.

## Remove a domain

Removing a domain prevents the site from receiving remote updates from our
server, but the existing version of Beaver Builder still functions normally.

The site is removed from the Domain Manager list, but it returns if the
license key is entered at the local site in  **Settings > Beaver Builder >
License**.

## Reactivate a domain

Your local installation might tell you that you need to reactivate your
license for that domain. If so, go to Domain Manager, find the domain in the
list and click **Reactivate**.

**Note:** Activate new and removed Beaver Builder licenses locally in your
WordPress website at **Settings > Beaver Builder > License**. See the Related
Links about installing the plugin for specific instructions.
