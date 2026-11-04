---
id: plugin-conflicts
title: Plugin conflicts
sidebar_label: Plugin conflicts
---

When you're having problems with the Beaver Builder editor, often the problem
is a conflict with another plugin. Follow the steps below to troubleshoot
plugin conflicts.

1. On the WordPress admin panel, click  **Plugins**.
2. Check if you have any cache or minify plugins installed and active. If so, flush the Beaver Builder cache first.  
From the admin panel, go to **Settings > Beaver Builder**. On the **Tools**
tab, click **Clear Cache**.

3. In the WordPress admin sidebar, click **Plugins > Installed Plugins**, deactivate all plugins except Beaver Builder.
4. Test to see if your Beaver Builder issue is resolved.   
If it's not resolved, it's not a plugin conflict.  
If it is resolved, follow the next steps to see which plugin is causing the
problem.

5. Enable each plugin one by one and test Beaver Builder after each one.
6. Repeat this process until you locate the plugin causing the issue.
7. Once you identify the plugin that's causing the conflict, report it to [Beaver Builder Support](https:/www.wpbeaverbuilder.com/beaver-builder-support/) and contact the author of the plugin.

:::tip **Tip**
Check your browser extensions as well. Some browser extensions have
been observed to interfere with editing and saving Beaver Builder layouts. An
easy way to test is to use your browser's Private Window/Incognito mode, which
normally skips using the browser cache and extensions.
:::
