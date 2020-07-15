---
id: theme-conflict
title: Theme conflict
sidebar_label: Theme conflict
---

Some themes can cause conflicts with Beaver Builder plugin, which often
manifests in the following ways.

  * Can't open a page for editing in Beaver Builder
  * Beaver Builder editing bar doesn't appear at the top of the page
  * Module settings boxes don't appear in the editor
  * Page hangs while editing or trying to save the edited page

## General test for a theme conflict

First, check the list of [known incompatibilities](/beaver-builder/troubleshooting/debugging/known-beaver-builder-incompatibilities.md) to see if
your theme is listed there.

If it's not listed, the easiest way to test for a theme conflict is to see if
your issues go away when you change to a theme known to work with Beaver
Builder.

:::important **Important**
Before changing to a different theme, it's a good idea to back up
your theme's Customizer settings by exporting them. See [how to export and import Customizer settings](/bb-theme/customizer-settings/export-import.md).
:::

* From the WordPress admin panel, go to **Appearance > Themes** and switch your active theme to one of the standard WordPress themes, such as Twenty Seventeen.

If this resolves your issue, your theme is incompatible with the Beaver
Builder plugin. We recommend you contact Beaver Builder Support to look into
the incompatibility in more detail. If your theme is indeed incompatible in a
way that can't be worked around, contact your theme author and let them know
that their theme isn’t currently compatible with Beaver Builder. Many theme
authors are willing to resolve the incompatibility.

## Reasons why the theme can cause a problem

Here are the most common reasons why themes are incompatible with Beaver
Builder.

###  The theme is bundled with other builders

Sometimes you can use both Beaver Builder and another page builder in the same
site (though not on the same page), but in general, it's not recommended.

### The theme doesn't use the WordPress loop

For whatever reason, some theme developers remove The Loop from their theme.
The Loop is the code that WordPress uses to display content on your website,
and which Beaver Builder relies on:

```php
<?php
  if ( have_posts() ) {
    while ( have_posts() ) {
      the_post();
        //
        // Post Content here
        //
    } // end while
  } // end if
?>
```

See [the WordPress codex](https://codex.wordpress.org/The_Loop) for more
information about The Loop.

### The theme has enqueued or hardcoded its own version of jQuery

Beaver Builder uses the current WordPress version of jQuery, so if your theme
is loading a different version, you might end up with the wrong version or
even with two versions loaded.

Beaver Builder only supports versions of jQuery included in current WordPress
installations, but it may still work with a different version, so the general
theme conflict test described above is the best way to determine if there's a
conflict causing a problem and contact Beaver Builder Support for further
troubleshooting.

If you have advanced skills and know how to find out which version of jQuery
is being loaded or if more than one version is being loaded and think that
might be the problem, you could can try adding the following jQuery code to
the _functions.php_ file in your child theme. Change the jquery in the
`dequeue` and `deregister` lines in this code to whatever “handle” the theme
gave to their jquery script.

```php
function fix_bb_jquery() {
  if (class_exists('FLBuilderModel') && (FLBuilderModel::is_builder_active())) {
    wp_dequeue_script('jquery');
    wp_deregister_script('jquery');
    wp_register_script('jquery', '/wp-includes/js/jquery/jquery.js');
    wp_enqueue_script('jquery');
  }
}
add_action('wp_enqueue_scripts', 'fix_bb_jquery', 11, 1);
```

:::note **Note**
If the theme has hard-coded the jQuery version, there's no workaround.
:::
