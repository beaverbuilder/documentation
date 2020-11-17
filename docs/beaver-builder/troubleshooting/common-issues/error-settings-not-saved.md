---
id: error-settings-not-saved
title: Settings could not be saved error
sidebar_label: Settings not saved error
---

It's not likely but possible to encounter the following error when saving:

> Settings could not be saved.

There are two possible reasons for this to occur, described in the following sections. The error message is different for each but in both cases, the reason for the error is that sensitive code containing tags such as `<script>` or `<iframe>` has been inserted into a post title, post content, or comment, and either the user role does not have the required capability or the *wp-config.php* file contains a filter that disallows saving this sensitive code.

## User role does not have the right capability

In this case, the error message says:

> Settings could not be saved.  
> These settings contain sensitive code that is not allowed for your user role.

In WordPress, user roles, (such as Administrator or Editor, contain a set of [capabilities](https://wordpress.org/support/article/roles-and-capabilities/), which define the particular tasks that users can perform. Custom roles, such as the Shop Manager in WooCommerce or custom roles that you create, have a custom set of capabilities. 

One capability is called [`unfiltered_html`](https://wordpress.org/support/article/roles-and-capabilities/#unfiltered_html). User roles with this capability are allowed to enter sensitive code with tags such as `<script>` or `<iframe>` into post titles and content. By default, only the WordPress Administrator and Editor roles have this capability, while only the Super Admin role has it on multisite installations. Here's [more information about this capability](https://publishpress.com/blog/unfiltered-html-permission-wordpress/). The WooCommerce [Shop Manager role](https://docs.woocommerce.com/document/roles-capabilities/#section-2) does not have the `unfiltered_html` capability, and other custom roles may not have it, even though users with this role can perform many other types of administrative tasks.

If you see this error, you'll not be able to save without removing the sensitive code or employing one of the following workarounds:

* Log in with a user role that includes the `unfiltered_html` capability, such as WordPress Admin or Editor.
* Use a WordPress plugin that gives you the ability to assign different capabilities to roles, such as the [User Role Editor](https://wordpress.org/plugins/user-role-editor/) plugin, and assign the `unfiltered_html` capability to the user role you want to have it.

See [our blog post](https://www.wpbeaverbuilder.com/wordpress-user-roles/) for basics about WordPress user roles.

## The DISALLOW_UNFILTERED_HTML setting is in use

In this case, you'll see the following version of the error.

> Settings could not be saved.  
> These settings contain sensitive code that is not allowed as DISALLOW_UNFILTERED_HTML has been set globally via wp-config.


This happens when the WordPress *wp-config.php* file has the following setting:

```
define( 'DISALLOW_UNFILTERED_HTML', true );
```

This setting prevents all users, regardless of their user role capabilities, from being able to insert scripts in the title and body of posts and pages. 

In this case, the alternatives are:

* Remove the `DISALLOW_UNFILTERED_HTML` setting from the *wp-config.php* file for your WordPress installation.
* Remove the sensitive code from the title or content of your Beaver Builder layout and save your layout.