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

### [Advanced Custom Fields](https://www.advancedcustomfields.com/) (Extra Widget Fields only)

Any additional fields added to widgets using ACF will not show up in the
Beaver Builder interface.

### [Async Javascript](https://wordpress.org/plugins/async-javascript/)

This is reported by a user, who was in contact with the developer:

This plugin works with Beaver Builder if both of the following conditions are
met:

- jQuery is excluded
- _wp-includes/js_ is added to the **Async Javascript > Settings > Scripts Exclusion** field.

### [Cookie and Consent Solution for the GDPR & ePrivacy](https://wordpress.org/plugins/iubenda-cookie-law-solution/)

The Beaver Builder user interface is not functional if **Automatically block scripts detected by the plugin** is enabled and **Primary Engine** is selected.

Switch from the **Primary Engine** to the **Secondary Engine** to solve the problem.
The Secondary Engine makes use of a third-party PHP library that is more accurate, capable of parsing broken HTML, and can resolve problems with third-party plugins.

![Cookie and Content Solution settings page](/img/beaver-builder/troubleshooting--known-incompatibilities--cookie-plugin.jpg)

### Duplicator plugins (such as Post Duplicator)

Don't use duplicator plugins to clone pages with Beaver Builder layouts or
saved layouts. They may look like they work but can cause problems when you
try to edit the Beaver Builder layout on the new page. Instead, use the
[Duplicate Layout](basics/duplicate-layout.md) functionality on the Tools menu in the Beaver Builder editor.

### [Google Maps Bank](https://wordpress.org/plugins/google-maps-bank/screenshots/) (Shortcodes only)

Shortcodes from this plugin break Beaver Builder because `document.write` is
used to render them. Everything else about this plugin should be fine.

### [Jetpack](https://wordpress.org/plugins/jetpack/) (Gallery Widget and VideoPress)

The settings panel for Jetpack’s gallery widget doesn’t fully load in Beaver
Builder because it is only coded to load in _wp-admin/widgets.php_ and _wp-
admin/customizer.php_. VideoPress calls admin-only code that breaks the media
uploader on the front end.

### [LiteSpeed Cache](https://wordpress.org/plugins/litespeed-cache)

If you have CSS Minify enabled in Page Optimization settings, then the Settings Panel can go fullscreen in responsive editing. A workaround is to exclude the builder. You can do that in the Tuning tab of Page Optimization. Scroll down to URI Excludes and enter `?fl_builder` in the box and save and purge all caches.

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

If your theme allows it, calling `the_post();` in your _page.php_ file above
the Timber code will enable the loop and allow Beaver Builder to function
correctly.

### Varnish on Cloudways hosting

If you use Cloudways with a multisite setup, their Varnish configuration
causes issues with saving Beaver Builder settings. To fix this issue, either turn off Varnish or configure
the Breeze plugin to automatically purge the Varnish cache.

### [WP External Links](https://wordpress.org/plugins/wp-external-links/)

This plugin with default settings breaks the BB Editor. The workaround is to navigate to the Exceptions tab in the plugin settings and change it from applying from the whole page (simply uncheck that setting)

### [WP Job Manager](https://wpjobmanager.com)

The WP Job Manager plugin is not compatible with Beaver Builder because it
takes over `the_content`, which doesn't allow Beaver Builder to run.

However, you can solve the problem by adding the following line of code to the
_functions.php_ file in your child theme.

```php
add_filter("the_job_description", "FLBuilder::render_content");
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
a hardcoded script in _header.php_ that interferes with Beaver Builder
functions such as opening module settings.

### [Icelander](https://www.webmandesign.eu/project-type/themes/) Theme prior to Version 1.1.8

Icelander Theme Version 1.1.8 or higher is compatible with both Beaver Builder plugin and [Beaver Themer](/beaver-themer/management-compatibility/beaver-themer-supported-themes).

### Kleo Theme

The module/row settings windows are blank with this theme active. It appears
to be caused by one script. To fix it, try adding the code below to your child
theme's _functions.php_ , or incorporate it into a plugin if you know how to
create one.

```php
function bb_custom_enqueue_scripts()
{
  if (class_exists("FLBuilderModel") && FLBuilderModel::is_builder_active()) {
    wp_deregister_script("app");
  }
}
add_action("wp_enqueue_scripts", "bb_custom_enqueue_scripts", 99);
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

### [Elfsight](https://elfsight.com/)

There is a possibility that Elfsight's script and HTML markup will interfere with the Beaver Builder photo field, preventing you from adding or replacing images.

To avoid this issue, wrap the script with the `[fl-safe]` shortcode like the example below.

```html
[fl-safe]
<script src="https://apps.elfsight.com/p/platform.js" defer></script>
[/fl-safe]
<div class="elfsight-app-123abc-123-456-789-abcdefgh123456"></div>
```

:::caution

The `[fl-safe]` shortcode only works in the Beaver Builder editor. It will not work for code added to the WordPress editor, Customizer, or Themes.

:::

## Code

### `document.write()` (JavaScript)

Anything that uses `document.write()` will break the Beaver Builder interface,
because Beaver Builder content is loaded via AJAX when you make updates.
Calling `document.write()` after the page loads will cause it to overwrite all
of the page content with the content passed to `document.write()`.

### Old jQuery/jQuery UI Versions

Beaver Builder is dependent on the jQuery version that comes pre-packaged with WordPress, and it is designed to work exclusively with that specific version.

However, if you or any third-party plugin or theme happens to load an outdated jQuery/jQuery UI version, it can lead to compatibility problems with Beaver Builder. Consequently, you may encounter difficulties in dragging and dropping rows, columns, or modules onto your layouts in such instances.
