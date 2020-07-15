---
id: add-latin-extended-capabilities-for-a-google-font
title: Add Latin-Extended capabilities for a Google font
sidebar_label: Add Latin-Extended capabilities for a Google font
---

If you have a Google font that includes Latin Extended characters, you can add
that capability to your Beaver Builder layouts.

Add the following filter to the *functions.php* file of your child theme and
replace the font name in Line 5 with the name of your Google font family.

```php
function my_font_subset($subset, $name) {
  if ($name == "Acme") {
    $subset = "&subset=latin,latin-ext";
  }
  return $subset;
}
add_filter("fl_font_subset", "my_font_subset", 10, 2);
```

:::note **Note**
Not all Google fonts have Latin-extended characters, so make sure
the Google font you choose has them.
:::
