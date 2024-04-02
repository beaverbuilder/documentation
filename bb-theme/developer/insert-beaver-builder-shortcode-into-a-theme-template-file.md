---
id: insert-beaver-builder-shortcode-into-a-theme-template-file
title: Insert Beaver Builder shortcode into a theme template file
sidebar_label: Insert Beaver Builder shortcode into a theme template file
---

If you're modifying a theme template file such as _single.php_, you can [insert a shortcode](/beaver-builder/shortcode/using-shortcode) for a Beaver Builder saved row, column, or module, but you also need to add the code to render it.

Add the following line of code to the theme template file that you're modifying:

```php
echo do_shortcode('[fl_builder_insert_layout slug="SLUGHERE"]');
```

Then insert the Beaver Builder shortcode where you want it.

:::info
Depending on which file and where you insert this code, you may or may not need the PHP open (`<?php`) and close (`?>`) tags.
:::
