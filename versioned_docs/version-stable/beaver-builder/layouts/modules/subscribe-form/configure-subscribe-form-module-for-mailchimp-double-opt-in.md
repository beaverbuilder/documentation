---
id: configure-subscribe-form-module-for-mailchimp-double-opt-in
title: Configure the Subscribe Form module for MailChimp double opt-in
sidebar_label: Configure MailChimp double opt-in
description: Here's some code to configure the Subscribe Form module to include an email from MailChimp to the subscriber asking for verification.
---

MailChimp changed their default subscriber setting to single opt-in – in other
words, a subscriber submits a subscription form connected to the MailChimp API
and is automatically subscribed. Double opt-in is when the subscriber submits
the form and receives an email asking for subscription verification.

If you're using the Beaver Builder Subscribe Form module, you can enable
double opt-in with a Beaver Builder filter.

**To enable double opt-in for MailChimp with the Subscribe Form module:**

  * Add the following code to your child theme's _functions.php_ file.

  ```php
  // Enable double opt-ins.
  add_filter( 'fl_builder_mailchimp_double_option', '__return_true' );
  ```

By default, the double opt-in setting in Beaver Builder is `false`, but this
filter sets it to `true`.
