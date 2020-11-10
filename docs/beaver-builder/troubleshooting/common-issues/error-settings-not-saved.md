---
id: error-settings-not-saved
title: Settings not saved error
sidebar_label: Error settings not saved
---

It's not likely but possible to encounter the following error when saving:

> Error! Settings not saved.
> These settings contain sensitive code that can only be edited by an administrator of this site. Remove the code or contact an administrator for help.


There is a WordPress capability called [`unfiltered_html`](https://wordpress.org/support/article/roles-and-capabilities/#unfiltered_html). Users who have a role that doesn't include that capability cannot enter code that is considered sensitive, such as `<script>` or `<iframe>` tags, in a text area. By default, only the administrator and editor roles have this capability, while only the superadmin has it on multisite installations. Here's [more information about this capability](https://publishpress.com/blog/unfiltered-html-permission-wordpress/).

Some custom roles, such as the WooCommerce [Shop Manager](https://docs.woocommerce.com/document/roles-capabilities/#section-2) role, do not have the `unfiltered_html` capability, though the role may have other WordPress admin capabilities.

If you see this error, you'll not be able to save without removing the sensitive code or employing one of the following workarounds:

* Log in with a user role that includes the `unfiltered_html` capability, such as WordPress Admin or Editor.
* Use a WordPress plugin that gives you the ability to assign different capabilities to roles, such as the [User Role Editor](https://wordpress.org/plugins/user-role-editor/) plugin.

See [our blog post](https://www.wpbeaverbuilder.com/wordpress-user-roles/) for basics about WordPress user roles.