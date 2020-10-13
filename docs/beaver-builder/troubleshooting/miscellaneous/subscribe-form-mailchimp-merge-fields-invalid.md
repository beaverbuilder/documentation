---
id: subscribe-form-mailchimp-merge-fields-invalid
title: Subscribe Form error MailChimp Merge Fields Invalid
sidebar_label: Subscribe Form error MailChimp Merge Fields
---

In the Subscribe Form module, you try to connect to a MailChimp account and see this error:

> There was an error subscribing to MailChimp. 400: Your merge fields were invalid.

This error is related to the merge fields in your MailChimp account's field settings for audience signups. 

In most cases, you can resolve the problem by making the **First name** and **Last name** fields optional, following these steps:

1. Log in to the MailChimp accoount.
2. Go to the **Audience** dashboard, then on the **Settings** tab, choose **Audience fields and \*|MERGE|\* tags**.
3. For the **First name** and **Last name** fields, inspect the checkboxes in the **Required** column and make sure they aren't selected, as shown in this screenshot.

![](/img/mailchimp-merge-error.png)
