---
id: known-beaver-builder-incompatibilities
title: Known Beaver Builder incompatibilities
sidebar_label: Known Beaver Builder incompatibilities
---


We try our very best to make Beaver Builder compatible with everything you
throw at it, but sometimes there’s nothing we can do. Software changes
rapidly, so if you want to give these plugins and themes a try anyway, let us
know if the developer made them compatible with Beaver Builder.

## Plugins

See [how to troubleshoot possible plugin conflicts](/beaver-builder/troubleshooting/debugging/plugin-conflicts.md).

###  [Advanced Custom Fields](https://wordpress.org/plugins/advanced-custom-fields/) (Extra Widget Fields only)

Any additional fields added to widgets using ACF will not show up in the
Beaver Builder interface.

### [Async Javascript](https://wordpress.org/plugins/async-javascript/)

This is reported by a user, who was in contact with the developer:

This plugin works with Beaver Builder if both of the following conditions are
met:

  * jQuery is excluded
  * *wp-includes/js* is added to the **Async Javascript > Settings > Scripts Exclusion** field.

### Duplicator plugins (such as Post Duplicator)

Don't use duplicator plugins to clone pages with Beaver Builder layouts or
saved layouts. They may look like they work but can cause problems when you
try to edit the Beaver Builder layout on the new page. Instead, use the
[Duplicate Layout](/beaver-builder/getting-started/bb-editor-basics/duplicate-your-beaver-builder-layout-to-another-page.md) functionality on the Tools menu in the Beaver Builder editor.

### [Google Maps Bank](https://wordpress.org/plugins/google-maps-bank/screenshots/) (Shortcodes only)

Shortcodes from this plugin break Beaver Builder because `document.write` is
used to render them. Everything else about this plugin should be fine.

###  [Jetpack](https://wordpress.org/plugins/jetpack/) (Gallery Widget and VideoPress)

The settings panel for Jetpack’s gallery widget doesn’t fully load in Beaver
Builder because it is only coded to load in *wp-admin/widgets.php* and *wp-
admin/customizer.php*. VideoPress calls admin-only code that breaks the media
uploader on the front end.

### [Post video players, slideshow albums, photo galleries and music / podcast playlist](https://wordpress.org/plugins/video-playlist-and-gallery-plugin/)

Incorrectly loads in jQuery, causing a second version to be loaded which
breaks many scripts on the page, including Beaver Builder scripts.

### [Schema Creator by Raven](https://wordpress.org/plugins/schema-creator/)

Currently coded to only work in wp-admin.

### [Timber](https://www.upstatement.com/timber/)

Timber is a plugin that enables the use of twig, a templating engine that
eliminates the WordPress loop and allows for simpler code when creating
templates. Given their names, you'd think that "Timber" and "Twig" would be a
perfect match for "Beaver Builder," but they're incompatible.

The problem is that Timber doesn’t use `the_content`, which is the basic
WordPress loop. This causes an incompatibility between Timber and any other
plugin that relies on the WordPress loop.

If your theme allows it, calling `the_post();` in your *page.php* file above
the Timber code will enable the loop and allow Beaver Builder to function
correctly.

### Varnish on Cloudways hosting

If you use Cloudways with a multisite setup, their Varnish configuration
causes issues with saving Beaver Builder settings. To fix this issue, either turn off Varnish or configure
the Breeze plugin to automatically purge the Varnish cache.

### [WP External Links](https://wordpress.org/plugins/wp-external-links/)
This plugin with default settings breaks the BB Editor.  The workaround is to navigate to the Exceptions tab in the plugin settings and change it from applying from the whole page (simply uncheck that setting)

### [WP Job Manager](https://wpjobmanager.com)

The WP Job Manager plugin is not compatible with Beaver Builder because it
takes over `the_content`, which doesn't allow Beaver Builder to run.

However, you can solve the problem by adding the following line of code to the
*functions.php* file in your child theme.

```php
add_filter( 'the_job_description', 'FLBuilder::render_content' );
```

### [WP Log Viewer](https://wordpress.org/plugins/wp-log-viewer/)

At the time this plugin was tested for this incompatibility (with WordPress
5.0.3), it hadn't been updated for two years.

When both this plugin and Beaver Builder are activated, then existing Beaver
Builder layouts can be edited, but when you try to add a new page or click
Edit to open an existing page in WordPress, you'll see the following error:
"The editor has encountered an unexpected error." If you enable Beaver Builder
for Posts, you'll see the same behavior.

### [WP Retina 2x Pro](https://meowapps.com/plugin/wp-retina-2x/)

Reported by a user in contact with the plugin developer, Beaver Builder works
with WP Retina 2x Pro as of Version 5.4.1. Some earlier versions of this
plugin conflicted with the Builder UI loading due to a fatal error.

### [WPFront Notification Bar](https://wordpress.org/plugins/wpfront-notification-bar/)

Issue was posted on their [support forums](https://wordpress.org/support/topic/wpfront_notification_bar-write_markup-is-breaking-front-end-ajax?replies=1) with no reply.

## Themes

See the [tips to test for a theme conflict](/beaver-builder/troubleshooting/debugging/theme-conflict.md).

### Blox Theme

Blox Theme is a fork of Headway. In recent releases, it prevents smooth
scrolling in Beaver Builder from working. Version 1.01 of the theme is known
to be compatible with smooth scrolling.

### Cherry Framework

There are multiple incompatibilities, depending on the Cherry Framework theme
being used. Of many issues, the one that cannot be fixed by Beaver Builder is
a hardcoded script in *header.php* that interferes with Beaver Builder
functions such as opening module settings.

### [Icelander](https://www.webmandesign.eu/project-type/themes/) Theme prior to Version 1.1.8

Icelander Theme Version 1.1.8 or higher is compatible with both Beaver Builder plugin and [Beaver Themer](/beaver-themer/management-compatibility/beaver-themer-supported-themes.md).

### Kleo Theme

The module/row settings windows are blank with this theme active. It appears
to be caused by one script. To fix it, try adding the code below to your child
theme's *functions.php* , or incorporate it into a plugin if you know how to
create one.

```php
function bb_custom_enqueue_scripts(){  

  if ( class_exists( 'FLBuilderModel' ) && FLBuilderModel::is_builder_active() ) {
    wp_deregister_script( 'app' );
  }
}
add_action( 'wp_enqueue_scripts', 'bb_custom_enqueue_scripts', 99 );
```

### Tesseract Theme

Tesseract appears to have dropped support for Beaver Builder and taken away
the templates they were originally offering. As an alternative we recommend
either the [Beaver Builder Theme](https://www.wpbeaverbuilder.com/wordpress-framework-theme/)
or any alternative theme known to integrate well with Beaver Builder, such as [GeneratePress](https://generatepress.com).

## Services

### CloudFlare’s Rocket Loader

This CloudFlare feature can interfere with Beaver Builder when building sites,
but it’s fine to turn it on after a site is finished.

### [Form Stack](https://www.formstack.com/)

When using the Javascript Embed Script option, the issue comes in when you
have Form Stack load jQuery or jQuery UI. This conflicts with Beaver Builder
when it loads the same version of jQuery that is loaded by WordPress.

To avoid this issue, check the "I don't need jQuery" box and the "I don't need
jQuery UI" box when getting your Form Stack embed code.

![](/img/know-incompatibilities-formstack.png)

### [Google AMP](https://developers.google.com/amp/)

Google's Accelerated Mobile Pages (AMP) is an open source initiative to speed
up mobile websites. It does not allow JavaScript except for the AMP Runtime
and also has limits on HTML and CSS, so it's not compatible with Beaver
Builder. If you want to know more about Google AMP, [here is a fairly thorough
discussion](https://molily.de/amp/) from the viewpoint of Google AMP's impact
on JavaScript.

Some Beaver Builder users have reported success with getting Google AMP to
work to posts, even with Themer layouts. This is a good question to ask on [our forum](https://community.wpbeaverbuilder.com/).

## Code

### `document.write()` (JavaScript)

Anything that uses `document.write()` will break the Beaver Builder interface,
because Beaver Builder content is loaded via AJAX when you make updates.
Calling `document.write()` after the page loads will cause it to overwrite all
of the page content with the content passed to `document.write()`.
