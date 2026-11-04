---
id: error-when-trying-to-install-update
title: Error when trying to install update
sidebar_label: Error when trying to install update
---

You get a notice that an update is available, but when you try to update you
get an error that includes the following error code:

> PCLZIP_ERR_BAD_FORMAT (-10): Invalid archive structure

This error occurs when the PHP cURL extension has not been installed on your
server by your hosting provider. This update error will occur for any
WordPress plugin or theme update from independent developers, so it's
important to ask your hosting provider to install the PHP cURL extension.

When cURL is not installed, there's a warning at **Settings > Beaver Builder** on the **License** tab, as shown in the
following screenshot.  

![](/img/error-when-trying-install-update.png)
