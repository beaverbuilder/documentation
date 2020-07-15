---
id: exceeds-php-max-input-vars
title: 'Exceeds PHP max_input_vars'
sidebar_label: 'Exceeds PHP max_input_vars'
---

You might see a popup message in Beaver Builder that the PHP Max Input Vars setting is lower than the number of settings being saved.

![](/img/troubleshooting-critical-issue.png)

The [PHP max_input_vars setting](https://www.php.net/manual/en/info.configuration.php#ini.max-input-vars) limits how many input variables can be accepted. This is a security feature for DDoS attacks, but in some cases, the limit might need to be increased to accommodate the number of post variables that Beaver Builder is saving.

## Find the current value of max_input_vars

You can show the value of `max_input_vars` by enabling Debug mode in Beaver Builder.

1. Go to **Settings > Beaver Builder > Tools**.
2. Scroll to the **Debug mode** section and click **Enable debug mode**.
3. Go to the unique link provided in the **Debug mode** section.
4. On that page, search for `PHP Max Input Vars`.  
The value is listed there.
5. Return to **Settings > Beaver Builder > Tools** and click **Disable debug mode**.

## Change the value of max_input_vars

Most shared hosts won’t grant you full access to modify this value but your hosting provider can easily change the value for you. We recommnend that you ask them to increase `max_input_vars` to `5000`.

If you're able to set it yourself, we recommend the first method for standard users and the second method for advanced users.

### Method 1: Edit the .htaccess file

This method may not work in your hosting situation. In that case, contact your hosting provider for help.

:::note **Note**
Make sure to back up your _.htaccess_ file before editing.
:::

1. Locate your _.htaccess_ file, which is usually in the root folder of your WordPress installation.
2. Open the file in a text editor and add the following line of code:  
`php_value max_input_vars 5000`
3. Save the file and refresh your website.

### Method 2: Edit the php.ini file

Use  this method only if you have direct access to your php.ini file or if you’re on localhost.

1. Locate your php.ini file in the root folder of your WordPress installation and open it in a text editor.  
2. Locate the following line of code, where `nn` represents a number:  
`max_input_vars = nn;`
3. Change `nn` to `5000`.
4. Save your changes and reboot your local host or server.