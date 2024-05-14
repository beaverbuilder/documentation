---
id: radio-button
title: Radio Button
sidebar_label: Radio Button
---

You can use the Advanced Custom Field (ACF) plugin's Radio button field type as a field connection, as a conditional shortcode, and as conditional shortcode testing for a value.

## Getting started

To get started, create your [Radio Button field](https://www.advancedcustomfields.com/resources/radio-button/) in ACF and use the shortcode to display the flexible content field on your page or posts. You can use the shortcode inside any module that supports HTML such as a Text or HTML module.

## Shortcode

Here is an example of the Beaver Themer Radio Button field connection shortcode.

```markup
[wpbb post:acf type='radio' name='my_radio_button']
```

## ACF Options page

The Beaver Themer radio button field connection shortcode also supports radio button fields added to the ACF [Options page](../options-page.md) by adding `site:acf_option` to the field connection shortcode.

```markup
[wpbb site:acf_option type='radio' name='my_radio_button']
```

## Notes

* If you add a default value, the Themer field connection will only display the default value for new posts or when an existing post is updated. This is true whether or not you make the field required.

* If you set **Allow null** to **Yes**, the radio button group can be blank, so the field will not display in the published page but there will be a vertical space in the published page where that field value should appear, because the HTML markup is there but the content isn't.

* If you allow the user to set other values by setting the **Other** field to **Yes**, the field connection and shortcodes will display user-assigned values without a problem.
