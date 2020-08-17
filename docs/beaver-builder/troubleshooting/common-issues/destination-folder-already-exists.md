---
id: destination-folder-already-exists
title: Destination folder already exists
sidebar_label: Destination folder already exists
---

> Destination folder already exists. /home/user/my-site.com/wp-content/plugins/bb-plugin/
>
> Plugin install failed.

This error occurs when you're installing a WordPress plugin or theme and the folder it wants to extract to already exists. This conflict usually occurs whenever the old plugin or theme folder wasn't deleted completely.

If WordPress shows that the old plugin or theme still exists, you can try deleting it. (You won't lose your data.) If that doesn't work, you can fix the issue with these steps.

1. Connect to your WordPress site using an FTP client or your server's file manager.
2. Navigate to  */wp-content/plugins/* (for the plugin) or */wp-content/themes/* (for the theme). and delete the **bb-plugin** or **bb-theme** folder. This won't remove your data.
3. Go back to WordPress and install again in the normal fashion.
