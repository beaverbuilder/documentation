---
id: integrate-sensei-with-the-beaver-builder-theme
title: Integrate Sensei with the Beaver Builder Theme
sidebar_label: Integrate Sensei with the Beaver Builder Theme
---

When you install the Sensei plugin and use the Beaver Builder Theme, you may run into problems where the Sensei content is full-width and the sidebar is placed underneath instead of inline. To resolve the issue, add the code below to your child theme’s _functions.php_ file.

```php
// Sensei unhook
global $woothemes_sensei;
remove_action( 'sensei_before_main_content', array( $woothemes_sensei->frontend, 'sensei_output_content_wrapper' ), 10 );
remove_action( 'sensei_after_main_content', array( $woothemes_sensei->frontend, 'sensei_output_content_wrapper_end' ), 10 );

add_action('sensei_before_main_content', 'my_theme_wrapper_start', 10);
add_action('sensei_after_main_content', 'my_theme_wrapper_end', 10);

function my_theme_wrapper_start() {
  echo '<div class="fl-content-full container">
    <div class="row">
        <div class="fl-content fl-content-left col-md-8">';
}

function my_theme_wrapper_end() {
  echo '</div>';
    get_sidebar();
  echo "</div>
  </div>";
}

add_action( 'after_setup_theme', 'declare_sensei_support' );
function declare_sensei_support() {
    add_theme_support( 'sensei' );
}
```
