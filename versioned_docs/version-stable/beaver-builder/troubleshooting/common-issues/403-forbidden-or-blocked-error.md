---
id: 403-forbidden-or-blocked-error
title: 403 Forbidden or 403 Blocked error
sidebar_label: 403 Forbidden or 403 Blocked error
---

Beaver Builder uses Ajax to process your work in the Beaver Builder editor,
and if the Ajax process encounters something in your content that triggers a
403 error, you'll see a popup error message. The 403 error or sometimes a 409
error may also appear in your browser console when you have trouble saving
modules or publishing a page.

Nearly always, the 403 error (and sometimes a 409 error) is caused by your
server having mod_security enabled. Usually (though not always), the 403 error
occurs when you add some custom code to one of your modules, such as an
`<iframe>` or `<script>` tag, but it has even been triggered by using the word
*select* in a text editor.

## Technical details

`Mod_security` is an Apache module that serves as a web application firewall.
When you save or publish a page, a POST object is sent to the admin Ajax, and
it is scanned by modsec if mod_security is enabled. Tags like `<iframe>` and
`<script>` (non-UTF-8 characters) or words like *select* , which Is a keyword
used in MySQL queries, can be interpreted as a security threat and produce a
403 or 409 error in Ajax, causing the Save or Publish to hang.

## Solution

Often your web hosting provider or server administrator can resolve this
issue, or you can try this solution.

  * Add the following line to the _wp-config.php_ file in your WordPress home directory:

```php
define( 'FL_BUILDER_MODSEC_FIX', true );
```

This line causes the request to be base64-encoded so modsec sees the offending
tags and text as binary data and allows it to pass through.

:::note **Note**
This line can go in a child theme _functions.php_ in some cases, but we
recommend that you put it in _wp-config.php_. If you've tried adding it to
_wp-config.php_ and _functions.php_ in your child theme and it doesn't resolve
the issue, contact your hosting provider or Beaver Builder Support.
:::
