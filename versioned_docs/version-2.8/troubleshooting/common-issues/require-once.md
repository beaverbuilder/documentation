---
id: require-once
title: 'Fatal error: require_once()'
sidebar_label: 'Fatal error: require_once()'
---

> Error message example: require_once(): Failed opening required '/my-website/wp-content/plugins/bb-plugin/includes/compatibility.php'

The file named in the error does not exist or has been deleted. In the error example above, the file missing is compatibility.php.

This error usually occurs for the following reasons: 

* The server timed out when WordPress was performing an update
* You've deleted one or more plugin files using an FTP/SFTP client or a hosting file browser 
* A security plugin/scanner has renamed the file

To resolve the issue, reinstall Beaver Builder from the WordPress Admin Dashboard at **Plugins > Add New > Upload Plugin**. Prior to WordPress 5.5, you must deactivate and delete the Beaver Builder plugin first.