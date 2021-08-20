---
id: enable-beaver-builder-debug-mode
title: Debug Mode
sidebar_label: Debug Mode
---

Enabling Beaver Builder Debug Mode generates a report that lets the Beaver
Builder Support team quickly get facts about your website's environment to
help them troubleshoot. Debug mode can also help you find information to
assist in your own troubleshooting efforts.

For example, Debug Mode lets you access any code you've added to the [Global CSS](../../styles/code/custom-css.md/#1-site-wide-rules-for-content-area-layouts) and [JavaScript](../../styles/code/custom-javascript.md) option on the Tools menu, so you can troubleshoot whether your custom code is causing a conflict with Beaver Builder.

![Debug Mode Global CSS/JS](/img/beaver-builder--enabled-debug-global-css-js.png)

Entering Debug Mode produces a URL that contains a debug report. You can do
any of the following things with the URL:

* Copy it into your browser to view the debug report.
* Add the URL when you file a Support ticket
* Send it to the Support team when they request it at *hello@wpbeaverbuilder.com*.

## Enable Debug Mode

To enable Beaver Builder Debug Mode and obtain the URL for the debug report:

1. On the WordPress admin panel, click **Settings > Beaver Builder**, then click the **Tools** tab.
2. Click the **Enable debug mode** button.  
The URL appears just above the button. Copy the URL to send to Support.

:::note **Note**
There are no security risks from having Debug Mode enabled. Debug Mode is automatically disabled after 48 hours.
You'll see a countdown timer on the **Settings > Beaver Builder > Tools** tab.  
You can also disable it manually on that tab after you know that Support has
accessed the report. Once Debug Mode is disabled, the report is deleted.
:::

## Show Errors

Beaver Builder debug mode doesn't output errors by default. In order to show errors add the `showerrors` parameter in the URL.

After enabling Debug Mode, add the parameter `/?showerrors` to your URL to view errors, for example: `https://my-website.com/?showerrors`.

If the URL already has a `?` parameter in use, then use `&showerrors` instead. For example, if you're using the Beaver Builder debug URL, the existing URL might be something like `https://mysite.com?fldebug=ed52f356`. In this case, you'd append the `showerrors` parameter to form `https://mysite.com?fldebug=ed52f356&showerrors`.
