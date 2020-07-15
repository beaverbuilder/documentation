---
id: subscribe-form
title: Subscribe Form
sidebar_label: Subscribe Form
---

Use the Subscribe Form module to enable visitors to subscribe to an email list
or to collect email addresses for your own use. See the list of supported
email subscription services at the end of this article.

The Subscribe Form module displays a simple form with five parts:

  * Name (can be displayed or hidden; if displayed it's a required field)
  * Email address
  * An optional **Terms & Conditions** checkbox, for which you can customize the terms and the checkbox label.
  * Subscribe button
  * An optional Google reCaptcha checkbox  
See [this article](/beaver-builder/layouts/modules/contact-form/add-a-google-recaptcha-checkbox-to-a-form.md) for more information on how to implement the reCaptcha.

Here's an example of the Subscribe Form module as used in the Sign Up content
template included with the Beaver Builder plugin. An example of the **Terms
and Conditions** checkbox has been added to the template. If you enable this
option, it's mandatory that users select the checkbox to submit the form
successfully. If they don't, they receive the message "You must accept the
Terms and Conditions."

![](/img/subscribe-module-1.png)

This template consists of a single row with two columns. In the left column
there's a Photo module for the envelope image, and in the right column there's
a Text Editor module for the text and then the Subscribe form beneath that. In
the template, the fields and button are stacked, but you can also display them
inline, which means the fields and button are laid out horizontally for a more
full-width presentation, for example in a ribbon top bar banner.

##  Notifications and confirmations

Email notifications depend on the service and your account settings there. For
example, if you connect a MailChimp account, once the subscriber clicks
Submit, MailChimp takes over and sends an email with the subject line what is
configured in MailChimp. The list owner doesn't get notified of the
subscription unless that notification is configured in the Mail Chimp account.

On the other hand, if you choose **Email Address** as the service, you have to
supply an email address that the subscription information will forward to. In
this case, you receive a notification with the subject line in the Subscribe
Form Signup field, but the subscriber doesn't get a notification by default.
That's something you'd have to configure in the email account that you're
forwarding to, such as setting up an autoresponder.

You can choose whether the person who submits the form gets a confirmation on
screen, and if so, whether clicking the button sends that person to another
URL or displays the confirmation message in place of the form. You can also
style the button label (the default label is **Send** ), add a button icon,
change the button color, and so on.

## Supported services

The Subscribe Form module supports a connection to the following services:

  * ActiveCampaign
  * AWeber
  * Campaign Monitor
  * Campayn
  * Constant Contact
  * ConvertKit
  * Drip
  * Email Address  
This choice sends the subscriber name and email to an email address of your
choosing. You must then handle it in that email account--for example, set up
an autoresponse to the subscriber, set up an email filter to channel the
subscribe emails into a special folder, add them to your contact list, and so
on.

  * Enormail
  * GetResponse
  * Godaddy Email Marketing
  * Hatchbuck
  * iContact
  * iContact Pro
  * Infusionsoft
  * Mad Mimi
  * MailChimp
  * MailerLite
  * MailPoet  
  :::note **Note**
  You must have the MailPoet plugin installed for MailPoet to appear in the list in the Subscribe Form module.
  :::
  * Mailrelay
  * Mautic
  * Ontraport
  * SendinBlue
  * Sendy
