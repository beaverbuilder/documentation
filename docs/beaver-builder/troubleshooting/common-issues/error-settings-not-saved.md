---
id: error-settings-not-saved
title: Settings could not be saved error
sidebar_label: Settings not saved error
---

It's not likely but possible to encounter the following error when saving a module:

> Settings could not be saved.

There are two possible reasons for this to occur, described in the following sections. The error message is different for each but in both cases, the reason for the error is that sensitive code containing tags such as `<script>` or `<iframe>` has been inserted into a post title, post content, or comment, and either the user role does not have the required capability or the *wp-config.php* file contains a filter that disallows saving this sensitive code.

## User role does not have the right capability

In this case, the error message says:

> Settings could not be saved.  
> Your user role (...) doesn't allow you to enter sensitive code with tags such as `<iframe>` or `<script>`.

In WordPress, user roles, (such as Administrator or Editor, contain a set of [capabilities](https://wordpress.org/support/article/roles-and-capabilities/), which define the particular tasks that users can perform. Custom roles, such as the Shop Manager in WooCommerce or custom roles that you create, have a custom set of capabilities. 

One capability is called [`unfiltered_html`](https://wordpress.org/support/article/roles-and-capabilities/#unfiltered_html). User roles with this capability are allowed to enter sensitive code with tags such as `<script>` or `<iframe>` into post titles and content. By default, only the WordPress Administrator and Editor roles have this capability, while only the Super Admin role has it on multisite installations. Here's [more information about this capability](https://publishpress.com/blog/unfiltered-html-permission-wordpress/). The WooCommerce [Shop Manager role](https://docs.woocommerce.com/document/roles-capabilities/#section-2) does not have the `unfiltered_html` capability, and other custom roles may not have it, even though users with this role can perform many other types of administrative tasks.

If you see this error, you'll not be able to save without removing the sensitive code or employing one of the following workarounds:

* Log in with a user role that includes the `unfiltered_html` capability, such as WordPress Admin or Editor.
* Use a WordPress plugin that gives you the ability to assign different capabilities to roles, such as the [User Role Editor](https://wordpress.org/plugins/user-role-editor/) plugin, and assign the `unfiltered_html` capability to the user role you want to have it.
* Use the `fl_builder_ui_js_config` filter to give users the `unfiltered_html` capability in Beaver Builder layouts, see the [Filter Examples](/beaver-builder/troubleshooting/common-issues/error-settings-not-saved.md/#filter-examples) below.

See [our blog post](https://www.wpbeaverbuilder.com/wordpress-user-roles/) for basics about WordPress user roles.

## The DISALLOW_UNFILTERED_HTML setting is in use

In this case, you'll see the following version of the error.

> Settings could not be saved.  
> Sensitive code (with tags such as `<iframe>` or `<script>`) is not allowed because the site's wp-config.php file contains the DISALLOW_UNFILTERED_HTML setting.

This happens when the WordPress *wp-config.php* file has the following setting:

```
define( 'DISALLOW_UNFILTERED_HTML', true );
```

This setting prevents all users, regardless of their user role capabilities, from being able to insert scripts in the title and body of posts and pages. 

In this case, the alternatives are:

* Remove the `DISALLOW_UNFILTERED_HTML` setting from the *wp-config.php* file for your WordPress installation.
* Remove the sensitive code from the title or content of your Beaver Builder layout and save your layout.
* Add the following filter to give users the `unfiltered_html` capability in Beaver Builder layouts.

## Filter examples

If you want to preserve the `DISALLOW_UNFILTERED_HTML = true` setting in WordPress but override it in Beaver Builder, you can add the `fl_builder_ui_js_config` filter to their child theme's *functions.php* file. Here are some code examples of this filter in use.

:::note **Note**
This filter gives the user roles mentioned in the filter the `unfiltered_html` capability only in the Beaver Builder editor, not in WordPress.
:::

The following snippet gives all user roles the `unfiltered_html` capability.

```php
add_filter( 'fl_builder_ui_js_config', function( $config ) {
    $config['userCaps']['unfiltered_html'] = true;
    return $config;
} ,10);
```

The snippet below gives a specific user role (in this case the WooCommerce Shop Manager role) the `unfiltered_html` capability.

```php
add_filter( 'fl_builder_ui_js_config', function( $config ) {
 	$user = wp_get_current_user();
	$role = $user->roles[0];
 	if ($role == "shop_manager") {
    	$config['userCaps']['unfiltered_html'] = true;
 	}
    return $config;
} ,10);
```

This code snippet gives both the Shop Manager and Author roles the `unfiltered_html` capability.

```php
add_filter( 'fl_builder_ui_js_config', function( $config ) {
 	$user = wp_get_current_user();
	$role = $user->roles[0];
 	if ($role == "shop_manager" || $role == "author") {
    	$config['userCaps']['unfiltered_html'] = true;
 	}
    return $config;
} ,10);
```

You can add any user roles to the filter. See the [WordPress documentation about roles](https://wordpress.org/support/article/roles-and-capabilities/#summary-of-roles
).
