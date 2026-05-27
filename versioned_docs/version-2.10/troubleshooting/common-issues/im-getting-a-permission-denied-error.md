---
id: im-getting-a-permission-denied-error
title: I'm getting a Permission Denied error
sidebar_label: I'm getting a Permission Denied error
---

A Permission Denied error may occur when you attempt to install or update
either the Beaver Builder plugin or theme. This happens because your server is
preventing Beaver Builder from creating directories that are required for
Beaver Builder to function correctly. The error may appear like this:

> Warning: mkdir() [function.mkdir]: Permission denied in [home]/xxxxx/wp-content/plugins/bb-plugin/classes/class-fl-builder-model.php on line 540

To resolve this issue, contact your web host provider or server administrator
and ask them to review your read/write permissions on all directories. For
more information on WordPress file permissions, see the  [WordPress Codex on changing file permissions](https://wordpress.org/support/article/changing-file-permissions/).  
