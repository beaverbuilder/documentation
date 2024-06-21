---
id: beaver-builder-does-not-open-for-editing-on-nginx-servers
title: Beaver Builder does not open for editing on NGINX servers
sidebar_label: Beaver Builder does not open for editing on NGINX servers
---

Some users have reported that when they click the Beaver Builder link in the
admin bar at the top of the page, the page refreshes, but Beaver Builder does
not open for editing.

When sites are hosted on an NGINX server, this problem has been due to a
configuration issue. In some but not all cases, it has happened when using
EasyEngine to install WordPress with Supercache.

NGINX implementations vary, so we can't provide specific instructions on where
to find the vHost configuration file and exactly what change to make. However,
the general procedure is to find your server's WordPress rewrite line and
append `$query_string`, or replace `$args` with `$query_string`.

The following procedure has worked for some users:

  1. In your vHost config file, look for one of the following lines:

  ```php
  try_files $uri $uri/ /index.php?$is_args$args;
  try_files $uri $uri/ /index.php?$args;
  ```

  2. Try replacing the `$args` variables with `$query_string`, for example:

  ```php
  try_files $uri $uri/ /index.php?$query_string;
  ```

If you are using Supercache, the following instructions may help.

  1. In the vHost config file, find the following line:  
`try_files /wp-content/cache/supercache/$http_host/$cache_uri/index.html $uri
$uri/ /index.php;`  
The correct configuration file may vary. For example, one user using
EasyEngine found the line in the file  */etc/nginx/common/wpsc.conf*.

  2. Change that line to the following, in which `?query_string` is appended:  
`try_files /wp-content/cache/supercache/$http_host/$cache_uri/index.html $uri
$uri/ /index.php?$query_string;`

Here are some additional resources that may help:

  * [NGINX setup for WordPress](https://www.nginx.com/resources/wiki/start/topics/recipes/wordpress/)
  * [NGINX - WordPress Codex](https://wordpress.org/support/article/nginx/)

If you are unable to find the correct configuration file to make the change,
we suggest contacting your hosting provider. If making a configuration change
does not solve the problem, contact  [Beaver Builder Support.](https://www.wpbeaverbuilder.com/beaver-builder-support/)
