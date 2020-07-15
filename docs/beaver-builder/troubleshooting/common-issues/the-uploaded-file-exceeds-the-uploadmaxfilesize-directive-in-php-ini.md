---
id: the-uploaded-file-exceeds-the-uploadmaxfilesize-directive-in-php-ini
title: The uploaded file exceeds the upload_max_filesize directive
  in php.ini
sidebar_label: The uploaded file exceeds the upload_max_filesize directive
  in php.ini
---

This error occurs when you try to upload a file through WordPress that is
larger than the **upload_max_filesize** limit.

How to increase this limit in PHP depends on your hosting provider. The best
course of action is to contact their support and ask them to increase the
limit, or ask them for help on how to increase it.

For a short-term solution, if you know where to upload the files, you can
upload them manually through FTP. For example, for the Beaver Builder plugin,
you can extract the files from the zip directory and FTP them to the following
location:

```bash
your-wordpress-installation-root/wp-content/plugins/bb-plugin.
```
