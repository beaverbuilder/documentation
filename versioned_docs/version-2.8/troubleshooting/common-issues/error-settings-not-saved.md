---
id: error-settings-not-saved
title: Settings could not be saved error
sidebar_label: Settings not saved error
---

In rare circumstances you may encounter the following error when saving a module:

> Settings could not be saved.

The reason for this error is that sensitive code containing tags such as `<script>` or `<iframe>` has been inserted into a post title, post content, or comment, and either the [user role does not have the required capability](#user-role-does-not-have-the-right-capability) or the [*wp-config.php* file contains a filter that disallows saving this sensitive code](#the-disallow_unfiltered_html-setting-is-in-use). 

## User role does not have the right capability

In this case, the error message says:

> Settings could not be saved.  
> These settings contain sensitive code that is not allowed for your user role.
>
> We detected a possible issue here:

In WordPress, user roles, (such as Administrator or Editor, contain a set of [capabilities](https://wordpress.org/support/article/roles-and-capabilities/), which define the particular tasks that users can perform. Custom roles, such as the Shop Manager in WooCommerce or custom roles that you create, have a custom set of capabilities. 

One capability is called [`unfiltered_html`](https://wordpress.org/support/article/roles-and-capabilities/#unfiltered_html). User roles with this capability are allowed to enter sensitive code with tags such as `<script>` or `<iframe>` into post titles and content. By default, only the WordPress Administrator and Editor roles have this capability, while only the Super Admin role has it on multisite installations. Here's [more information about this capability](https://publishpress.com/blog/unfiltered-html-permission-wordpress/). The WooCommerce [Shop Manager role](https://docs.woocommerce.com/document/roles-capabilities/#section-2) does not have the `unfiltered_html` capability, and other custom roles may not have it, even though users with this role can perform many other types of administrative tasks.

If you see this error, you'll not be able to save without removing the sensitive code or employing one of the following workarounds:

* Log in with a user role that includes the `unfiltered_html` capability, such as WordPress Admin or Editor.

* Use a WordPress plugin that gives you the ability to assign different capabilities to roles, such as the [User Role Editor](https://wordpress.org/plugins/user-role-editor/) plugin, and assign the `unfiltered_html` capability to the user role you want to have it.

* Use the `fl_user_has_unfiltered_html` filter to give users the `unfiltered_html` capability in Beaver Builder layouts, see the [Filter Examples](/beaver-builder/troubleshooting/common-issues/error-settings-not-saved.md/#filter-examples) below.  
  
  :::caution
  We recommend switching to the `fl_user_has_unfiltered_html` hook if you are currently using the `fl_builder_ui_js_config` hook to resolve the issue.
  :::

See [the last section](#wordpress-sensitive-code) for more information about what WordPress considers sensitive code.

See [our blog post](https://www.wpbeaverbuilder.com/wordpress-user-roles/) for basics about WordPress user roles.

## The DISALLOW_UNFILTERED_HTML setting is in use

In this case, you'll see the following version of the error.

> Settings could not be saved.
>
> These settings contain sensitive code that is not allowed as DISALLOW_UNFILTERED_HTML has been set globally via wp-config.

The sensitive code is then displayed.

This version of the error happens when the WordPress *wp-config.php* file has the following setting:

```php
define( 'DISALLOW_UNFILTERED_HTML', true );
```

This setting prevents all users, regardless of their user role capabilities, from being able to insert sensitive code in the title and body of posts and pages. See [the last section](#wordpress-sensitive-code) for more information about what WordPress considers sensitive code.

In this case, the alternatives are:

* Remove the `DISALLOW_UNFILTERED_HTML` setting from the *wp-config.php* file for your WordPress installation.
* Remove the sensitive code from the title or content of your Beaver Builder layout and save your layout.
* Add the following filter to give users the `unfiltered_html` capability in Beaver Builder layouts.

## Filter examples

If you want to preserve the `DISALLOW_UNFILTERED_HTML = true` or sensitive code but override it in Beaver Builder for specific user roles, you can add the `fl_user_has_unfiltered_html` filter to their child theme's *functions.php* file. Here are some code examples of this filter in use.

:::info
This filter gives the user roles mentioned in the filter the `unfiltered_html` capability only in the Beaver Builder editor, not in WordPress.
:::

The following snippet gives all user roles the `unfiltered_html` capability.

```php
add_filter( 'fl_user_has_unfiltered_html', '__return_true' );
```

The snippet below gives a specific user role (in this case the WooCommerce Shop Manager role) the `unfiltered_html` capability.

```php
add_filter( 'fl_user_has_unfiltered_html', function( $cap ) {
    $user = wp_get_current_user();
    $role = $user->roles[0];

    if ( $role == 'shop_manager' ) {
        return true;
    } 
    return $cap;
} );
```

This code snippet gives both the Shop Manager and Author roles the `unfiltered_html` capability.

```php
add_filter( 'fl_user_has_unfiltered_html', function( $cap ) {
    $user = wp_get_current_user();
    $role = $user->roles[0];

    if ( $role == 'shop_manager' || $role == 'author' ) {
        return true;
    } 
    return $cap;
} );
```

You can add any user roles to the filter. See the [WordPress documentation about roles](https://wordpress.org/support/article/roles-and-capabilities/#summary-of-roles
).

## WordPress sensitive code

Every WordPress installation includes a file called [*kses.php*](https://core.trac.wordpress.org/browser/tags/5.5.1/src/wp-includes/kses.php), which contains a list of HTML elements and attributes that are considered safe. KSES is an acronym for "kses strips evil scripts." Here's [a good article about KSES and the `wp_kses` function in WordPress](https://tommcfarlin.com/what-is-wordpress-kses/).

With the `unfiltered_html` user capability and the `DISALLOW_UNFILTERED_HTML` setting in *wp-config.php*, WordPress makes it possible to restrict code that can be used for malicious purposes and to limit users who are able to enter code with sensitive tags or attributes.

By default, Beaver Builder follows these WordPress restrictions on sensitive code, while offering you the ability to add a filter to override them in your layouts.
