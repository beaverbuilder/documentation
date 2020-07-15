---
id: conditional-shortcodes-for-field-connections-overview-themer
title: Conditional shortcodes for field connections
sidebar_label: Conditional shortcodes for field connections
---

Besides Beaver Themer's regular field connection shortcodes, which return the contents of fields as text strings, Beaver Themer has *conditional* field connection shortcodes, which work as an *if-else* statement that tests for content or for the value of certain types of field connection. Using this conditional shortcode, you can set up conditions in which to display custom text.

There are three variations of conditional shortcode tests, with slight variations on the syntax.

  * Test for the presence or absence of content returned by a regular field connection shortcode.  
  This conditional shortcode test adds custom text if the field has content, or it can add text if it doesn't. This type of test works with built-in WordPress field connections, WordPress custom fields, Advanced Custom Fields (ACF), and Pods custom fields.  
  See [Use conditional shortcode to test for presence of content (Themer)](/beaver-themer/field-connections/use-conditional-shortcode-to-test-for-presence-of-content-themer.md).

  :::note **Note**
  For Pods custom fields, you can only use this first method, to test for presence or absence of content.
  :::

  * Test for a text or integer value for WordPress custom fields  
  The shortcode text string is equal to or not equal to a text value, or a shortcode number value is greater than (`>`), greater than or equals (`>=`), less than (`<`), less than or equals (`<=`), equal to (`=`), or not equal to (`!=`) an integer value.  
  See [Test for values in WordPress custom field shortcode](/beaver-themer/field-connections/connections-to-wp-custom-fields/test-for-values-in-wordpress-custom-field-shortcode.md).

  * Test for text, number, email, or URL value in Advanced Custom Fields (ACF, a third-party plugin)  
  Enables testing shortcode values for **Text**, **Number**, **Email**, and **Url**-type fields.  
  See [Test for values in shortcodes for Advanced Custom Fields](/beaver-themer/field-connections/connections-to-acf/test-for-values-in-shortcodes-for-advanced-custom-fields.md).
