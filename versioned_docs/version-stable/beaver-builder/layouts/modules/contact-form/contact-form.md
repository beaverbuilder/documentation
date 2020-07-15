---
id: contact-form
title: Contact form
sidebar_label: Contact Form module
---

The Contact Form module displays a basic contact form with the following
properties:

  * The form displays only **Name**, **Subject**, **Email**, **Phone**, and **Message** fields.  
The labels for these fields can be customized.

  * By default, the **Name** and **Email** fields are displayed, and the **Subject** and **Phone** fields are hidden.   
Any fields that are displayed are required.

  * There's an optional **Terms and Conditions** checkbox.  
You can add custom text above the checkbox and customize the checkbox label,
as in the following screenshot.  
If you enable the checkbox, it's mandatory that users select the checkbox to
submit the form successfully. If they don't, they receive the message "You
must accept the Terms and Conditions."  
One use for this checkbox is to meet GDPR requirements if you feel users must
explicitly accept terms and conditions.  
![](/img/contact-1.png)

  * You can style the button label (the default label is **Send** ), and style the button with the same settings that appear in the Button module.
  * You can [add a Google reCaptcha button](/beaver-builder/layouts/modules/contact-form/add-a-google-recaptcha-checkbox-to-a-form.md) to the form to deter spam.
  * The width of the form fills the width of the column.
  * You can choose whether the person who submits the form gets a confirmation message on screen, and if so, whether clicking the button sends that person to another URL or displays the confirmation message in place of the form.
  * Email notifications are automatically sent upon form submission. If the **Subject** field is displayed in the form, the email subject line displays the text that is entered into that field. If the **Subject** field is hidden in the form, you can add a custom email subject line. If you don't specify a custom subject, the default email subject line is **Contact Form Submission**.

:::note **Note**
Entries from this form are not stored in the database. If you need a
more permanent record of contacts than the email notifications, use a form
plugin.
:::
