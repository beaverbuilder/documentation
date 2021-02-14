---
id: insert-beaver-builder-shortcode-into-a-theme-template-file
title: Insert Beaver Builder shortcode into a theme template file
sidebar_label: Insert Beaver Builder shortcode into a theme template file
---

If you're modifying a theme template file such as *single.php*, you can [insert a shortcode](/beaver-builder/advanced-builder-techniques/shortcodes/use-shortcodes-in-your-layouts.md) for a Beaver Builder saved row, column, or module, but you also need to add the code to render it.

Add the following line of code to the theme template file that you're modifying:

```php
  echo do_shortcode('[fl_builder_insert_layout slug="SLUGHERE"]');
```

Then insert the Beaver Builder shortcode where you want it.

:::note **Note**
Depending on which file and where you insert this code, you may or may not need the `<?php` open and close tags.
:::
