---
id: conditional-shortcodes-for-field-connections-overview-themer
title: Conditional shortcodes for field connections
sidebar_label: Conditional shortcodes for field connections
---

Besides Beaver Themer's regular [field connection shortcodes](/beaver-themer/field-connections/field-connection-shortcodes-overview-themer.md), which return the contents of fields as text strings, Beaver Themer also has *conditional* field connection shortcodes, which work as an *if-else* statement so you can display custom text based on whether the *if*-statement is true.

There are three variations of conditional shortcode tests, with slight variations of the syntax.

* Test for the presence or absence of content returned by a field connection shortcode.  
This conditional shortcode test lets you specify what text to display if the field connection shortcode returns content or if it doesn't. For the syntax and examples, see [the article about using conditional shortcode to test for the presence of content](/beaver-themer/field-connections/use-conditional-shortcode-to-test-for-presence-of-content-themer.md). 

:::note **Note**
For Pods custom fields, you can only use this first method, to test for presence or absence of content. Here's [an example using conditional field connection shortcode with a Pods custom field](/beaver-themer/field-connections/use-conditional-shortcode-to-test-for-presence-of-content-themer.md/#example-3-display-an-icon-if-a-pods-custom-field-has-content).
:::

* Test for a text or integer value for WordPress custom fields  
 The shortcode text string is equal to or not equal to a text value, or a shortcode integer value is greater than (`>`), greater than or equals (`>=`), less than (`<`), less than or equals (`<=`), equal to (`=`), or not equal to (`!=`) an integer value.  
 See [Test for values in WordPress custom field shortcode](/beaver-themer/field-connections/connections-to-wp-custom-fields/test-for-values-in-wordpress-custom-field-shortcode.md).

* Test for a text, number, email, or URL value in Advanced Custom Fields (ACF, a third-party plugin)  
Enables testing shortcode values for **Text**, **Number**, **Email**, and **Url**-type fields.  
See [Test for values in shortcodes for Advanced Custom Fields](/beaver-themer/field-connections/connections-to-acf/test-for-values-in-shortcodes-for-advanced-custom-fields.md).

Besides being useful for custom development, the most common use for field connection shortcodes is when you're creating a [custom post layout in a Posts module](/beaver-builder/layouts/modules/posts/posts.md/#layout-tab), either in a Themer layout or in a standard Beaver Builder layout. The standard Posts module includes the **Post layout** setting in the Posts module even in standard layouts as long as Beaver Themer is installed.

Conditional field connection shortcodes are also useful for troubleshooting during development to find out why a field connection or field connection shortcode isn't working the way you think it should. See the article on [using condition field connection shortcode to troubleshoot](/beaver-themer/field-connections/troubleshoot-field-connection-shortcodes-themer.md).